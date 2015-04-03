/*
 * xsyn main module file
 */

var xsyn = require('./js_gen/xsyn');
var fs = require('fs');
var util = require('util');
var Utils = require('./libjs/Utils');
var path = require('path');


xsyn.GrammarDef = xsyn.grammar.impl.GrammarDef;

xsyn.createGrammarFromJsFile = function(filename) {
	var jsString = fs.readFileSync(filename,'utf8');
	console.log(jsString);
	eval("var gobj = " + jsString);
	return xsyn.createGrammarFromObject(gobj);
};

xsyn.createGrammarFromObject = function(gobj) {
	//var gobj = JSON.parse(jsonString);
	if (typeof(gobj) !== 'object') {
		throw "grammar object must be a plain javascript object";
	}
	if (typeof(gobj.start) !== 'string') {
		throw "grammar object doesn't have a 'start' entry";
	}
	if (typeof(gobj.rules) !== 'object') {
		throw "grammar object doesn't have a 'rules' entry";
	}
	var gd = new xsyn.GrammarDef();
	//console.log('var gd = new xsyn.GrammarDef();');
	if (typeof(gobj.name) === 'string') {
		gd.name = gobj.name;
	}
	var processNonterminal = function(nt,rulesSpec) {
		var rules = (rulesSpec instanceof Array) ? rulesSpec : [rulesSpec];
		for(var i = 0; i < rules.length; i++) {
			var rspec = rules[i];
			if (typeof(rspec) === 'string') {
				rspec = { rhs : rspec };
			}
			if (typeof(rspec.rhs) !== 'string') {
				throw "illegal format of rhs for nonterminal '" + nt + "': " + util.inspect(rspec.rhs);
			}
			//console.log('gd.addProductionRule("' + nt + '","' + rspec.rhs + '");');
			gd.addProductionRule(nt,rspec.rhs,rspec.action);
		}
	};
	var processRules = function(rulesObj) {
		for(var nt in rulesObj) {
			if (typeof(rulesObj[nt]) === 'function') continue;
			//console.log('found nonterminal "' + nt + "'...");
			processNonterminal(nt,rulesObj[nt])
		}
	};
	gd.headerCode = gobj.header;
	gd.footerCode = gobj.footer;
	processRules(gobj.rules);
	if (typeof(gobj.start) === 'string') {
		gd.setStartNonterminal(gobj.start,true);
	}
	if (typeof(gobj.members) === 'object') {
		var footerCode = '';
		for(var m in gobj.members) {
			if (!gobj.members.hasOwnProperty(m)) continue;
			var val = gobj.members[m];
			switch(typeof(val)) {
			case 'function':
				footerCode += 'this.' + m + ' = ' + val.toString() + ';\n';
				break;
			case 'object':
				// expect an object with properties 'get' and/or 'set'
				if (typeof(val.get) === 'function') {
					footerCode += 'this.__defineGetter__("' + m + '",' + val.get.toString() + ');\n';
				}
				if (typeof(val.set) === 'function') {
					footerCode += 'this.__defineSetter__("' + m + '",' + val.get.toString() + ');\n';
				}
				break;
			}
		}
		//console.log(footerCode);
		gd.footerCode = footerCode;
	} 
	return gd;
};

// this loads the grammar language
xsyn.__defineGetter__('xgrammar',function() {
	if (!xsyn.$xgrammarDef$) {
		var xgrammarObj = require('./xgrammar');
		var gd = xsyn.createGrammarFromObject(xgrammarObj);
		gd.generateLalr1Parser();
		xsyn.$xgrammarDef$ = gd;
	}
	return xsyn.$xgrammarDef$;
});

xsyn.compileLanguage = function() {
	return xsyn.xgrammar.compileAsModule.apply(xsyn.xgrammar,arguments);
};

xsyn.languageModule = function(grammarFile,opts) {
	opts = opts ? opts : {};
	var options = {
			outputDir : '.xsyn_gen'
	};
	Utils.merge(options,opts);
	var mname = path.parse(grammarFile).name;
	var outmname = path.join(options.outputDir,mname);
	var outfile =  outmname + ".js";
	console.log(grammarFile + " -> " + outfile);
	if (Utils.compilationIsNeeded(grammarFile,outfile)) {
		console.log('compilation needed');
		xsyn.xgrammar.compileAsModule(grammarFile,options);
	} else {
		console.log(outfile + ' is up to date.');
	}
	if (!path.isAbsolute(outfile)) {
		outmname = './' + outmname;
	}
	return outmname;
}



module.exports = xsyn;
