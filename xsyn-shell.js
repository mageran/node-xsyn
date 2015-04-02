
var xsyn = require('./xsyn');
var repl = require('repl');

var Shell = function() {
}

Shell.prototype.run = function(argv) {
	if (arguments.length === 0) {
		var that = this;
		console.log('entering interactive shell; type "help" for help.');
		repl.start({
		    prompt : 'xsyn> ',
		    eval : function eval(cmd, context, filename, callback) {
		        callback(null,that.runCommand(cmd))
		    }
		});
	} else {
		this.runCommand.apply(this,arguments);
	}
};

Shell.prototype.runCommand = function() {
	//var cmdlineParts = cmdline.split(/\s+/);
	cmdline = [].slice.apply(arguments);
	//console.log(cmdline);
	var cmd = cmdline.shift();
	if (typeof(this[cmd]) !== 'function') {
		var msg = "unknown command: " + cmd;
		this.error(msg);
		return;
	}
	return this[cmd].apply(this,cmdline);
};

Shell.prototype._processArgs = function() {
	var options = {};
	var plain = [];
	for(var i = 0; i < arguments.length; i++) {
		var arg = arguments[i];
		var m = arg.match(/^(.*)=(.*)$/);
		if (!m) {
			plain.push(arg);
			continue;
		}
		options[m[1]] = m[2];
	}
	return {
		plain : plain,
		options : options
	}
}

Shell.prototype.compile = function() {
	var argInfo = this._processArgs.apply(this,arguments);
	if (argInfo.plain.length === 0) {
		this.error('grammar file name missing.')
		return;
	}
	var filename = argInfo.plain[0];
	console.log(xsyn.compileLanguage(filename,argInfo.options));
}

Shell.prototype.help = function() {
	var s = '';
	if (arguments.length === 0) {
		s += 'Commands:\n';
		for(var cmdname in this.command_help) {
			if (!this.command_help.hasOwnProperty(cmdname)) continue;
			s += '  ' + cmdname + ': ' + this.command_help[cmdname].short + '\n';
		}
		s += '\nFor more detailed information use "help <command>".'
	} else {
		var cmdname = arguments[0];
		if (typeof(this.command_help[cmdname]) === 'undefined') {
			s += 'no help available for "' + cmdname + '".';
		} else {
			s += 'Usage:\n  ';
			s += cmdname + ' ' + this.command_help[cmdname].options + '\n';
			var textLines = this.command_help[cmdname].description.split(/\n/);
			s += 'Description:\n';
			for(var i = 0; i < textLines.length; i++) {
				var line = textLines[i];
				s += '  ' + line + '\n';
			}
		}
	}
	console.log(s);
};

Shell.prototype.command_help = {
		compile : {
			short : 'compiles a grammar file into a node module.',
			options : '<grammar-file> [name=<module-name>] [outputDir=<directory>]',
			description: 'compile the grammar file into a node module. If no name option is specified,\n'
				+ 'the base name of the file is used as module name. The output directory is the current\n'
				+ 'directory or the specified outputDir.'
		}
};

Shell.prototype.error = function(msg) {
	console.error('*** ' + msg);
}

// -----------------------------------

function main() {
	shell = new Shell();
	var argv = process.argv.splice(2);
	shell.run.apply(shell,argv);
}

require.main.filename === __filename && main();