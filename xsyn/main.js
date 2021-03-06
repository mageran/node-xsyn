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
	if ((typeof(gobj.codeBrackets) === 'object')
			&& (typeof(gobj.codeBrackets.start) === 'string')
			&& (typeof(gobj.codeBrackets.end) === 'string')
		) {
		gd.setCodeStartEndSymbols(gobj.codeBrackets.start,gobj.codeBrackets.end);
	}
	return gd;
};

// this loads the grammar language
xsyn.__defineGetter__('xgrammar',function() {
	if (true/*!xsyn.$xgrammarDef$*/) {
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
			outputDir : '.xsyn_gen',
			force : false
	};
	Utils.merge(options,opts);
	var mname = path.parse(grammarFile).name;
	var outmname = path.join(options.outputDir,mname);
	var outfile =  outmname + ".js";
	console.log(grammarFile + " -> " + outfile);
	if (options.force || Utils.compilationIsNeeded(grammarFile,outfile)) {
		console.log('compilation needed');
		xsyn.xgrammar.compileAsModule(grammarFile,options);
	} else {
		console.log(outfile + ' is up to date.');
	}
	if (!path.isAbsolute(outfile)) {
		outmname = './' + outmname;
	}
	return outmname;
};

xsyn.requireFromString = function(grammarInputString,moduleContext) {
	return xsyn.xgrammar.requireAsModule(grammarInputString,moduleContext);
};

/**
 * converts a grammar json (as returned by GrammarDef.toJson()) to a grammar module string
 */
xsyn.jsonToGrammarString = function(json) {
	var s = '';
	s += escape("% name : '" + json.name + "'\n\n");
	if (json.start) {
		s += escape("% start : '" + json.start + "'\n\n");
	}
	if (json.codeStart && json.codeEnd) {
		s += escape("% codeStart : '" + json.codeStart + "'\n\n");
		s += escape("% codeEnd : '" + json.codeEnd + "'\n\n");		
	}
	var ruleToString = function(rule,index) {
		var s0 = '';
		s0 += escape('\n    ');
		s0 += escape((index === 0) ? ': ' : '| '); 
		s0 += escape(rule.definition);
		if (!!rule.action) {
			s0 += escape('\n    {% ' + rule.action + ' %}');
		}
		return s0;
	};
	var ntToString = function(nt) {
		var s0 = escape(nt.name);
		for(var i = 0; i < nt.rules.length; i++) {
			s0 += ruleToString(nt.rules[i],i);
		}
		s0 += escape('\n    ;\n\n');
		return s0;
	};
	if (json.start) {
		// todo
	}
	for(var i = 0; i < json.nonterminals.length; i++) {
		s += ntToString(json.nonterminals[i]);
	}
	return unescape(s);
};

/**
 * 'requires' the grammar in the json format as returned by GrammarDef.toJson()
 */
xsyn.requireFromJson = function(grammarJson,moduleContext) {
	return xsyn.requireFromString(xsyn.jsonToGrammarString(grammarJson),moduleContext);
}



module.exports = xsyn;
