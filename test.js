
var xsyn = require("./xsyn");
var util = require('util')
var repl = require('repl');
var fs = require('fs');

var x = {};

Object.prototype.show = function() {
	console.log(this.toString());
}

x.createGrammar0 = function() {
	var gdef = new GrammarDef();
	gdef.addProductionRule("S", "N");
	gdef.addProductionRule("N", "V '=' E","$$ = { lhs: $1 , rhs : $3 }");
	gdef.addProductionRule("N", "E");
	gdef.addProductionRule("E", "V");
	gdef.addProductionRule("V", "ident");
	gdef.addProductionRule("V", "number");
	gdef.addProductionRule("V", "'*' E", "$$ =  { op : '*', operand : $2 }");
	return gdef;
}

function createGrammar1() {
	var gdef = new GrammarDef();
	gdef.addProductionRule("S", "'(' MT ')'", "{ $$ = $2; }");
	gdef.addProductionRule("MT", "MT ident", "{ $$ = $1.concat([$2]); }");
	gdef.addProductionRule("MT", "MT number", "{ $$ = $1.concat([$2]); }");
	gdef.addProductionRule("MT", "", "{ $$ = []; }");
	return gdef;
}

function createGrammar2() {
	var gd = new xsyn.GrammarDef();
	gd.addProductionRule("GrammarSpec","Header Rules","$$ = {header : $1, rules : $2};");
	gd.addProductionRule("Header","","$$ = '';");
	gd.addProductionRule("Header","longstring");
	gd.addProductionRule("Rules","Rules Rule","$$ = $1.concat([$2])");
	gd.addProductionRule("Rules","","$$ = [];");
	gd.addProductionRule("Rule","ident ':' RuleRhs OptionalAction ';'",
			function(id,_,rhs,action){
		return {
			nonterminal : id,
			rhs : rhs,
			action : action
		}
	});
	gd.addProductionRule("RuleRhs","RuleRhsElement");
	gd.addProductionRule("RuleRhs","RuleRhs RuleRhsElement","$$ = $1 + ' ' + $2;");
	gd.addProductionRule("RuleRhsElement","ident");
	gd.addProductionRule("RuleRhsElement","string");
	gd.addProductionRule("OptionalAction","","$$ = 'NOP';");
	gd.addProductionRule("OptionalAction","longstring");
	return gd;
}

function createGrammar3() {
	var gd = new xsyn.GrammarDef();
	gd.addProductionRule("X","S");
	gd.addProductionRule("S","'(' A '|' B '|' C ')'",
			function(_,a,_,b,_,c) {
		var s = "";
		s += a ? a : "";
		s += b ? b : "";
		s += c ? c : "";
		return s;
	});
	gd.addProductionRule("A","");
	gd.addProductionRule("A","'a'");
	gd.addProductionRule("B","");
	gd.addProductionRule("B","'b'");
	gd.addProductionRule("C","");
	gd.addProductionRule("C","'c'");
	return gd;
}

function createGrammar4() {
	var gd = new xsyn.GrammarDef();
	gd.addProductionRule("X","A B '.'");
	gd.addProductionRule("A","");	
	gd.addProductionRule("A","'a' B");
	gd.addProductionRule("B","");	
	gd.addProductionRule("B","'b'");
	
	return gd;
}

function createGrammar5() {
	var gd = new xsyn.GrammarDef();
	gd.addProductionRule("X","A B '.'");
	gd.addProductionRule("A","'a' ");
	gd.addProductionRule("A","");
	gd.addProductionRule("B","'b'");	
	return gd;
}

x.createGrammar6 = function() {
	var gd = new xsyn.GrammarDef();
	gd.addProductionRule("G","R Rs");
	gd.addProductionRule("Rs","R Rs");
	gd.addProductionRule("Rs","");
	gd.addProductionRule("R","ident ';'");
	return gd;
}

x.createGrammar7 = function() {
	var gd = new xsyn.GrammarDef();
	gd.addProductionRule("X","OptNum '.'  OptNum");
	gd.addProductionRule("OptNum","number");
	//gd.addProductionRule("OptNum","");
	return gd;
}

function cg() {
	var gd = xsyn.createGrammarFromJsFile('xsyn/xgrammar.js');
	return gd;
}
x.debugToConsole = function() {
	xsyn.grammar.utils.GrammarUtils.debug = console.log;
}

x.debugToStr = function(vname) {
	if (typeof(vname) === 'undefined') vname = 'STR';
	var fbody = '';
	fbody += 'if (typeof(' + vname + ') === "undefined") {\n';
	fbody += '  ' + vname + ' = "";\n';
	fbody += '}\n';
	fbody += vname + ' += s;\n';
	xsyn.grammar.utils.GrammarUtils.debug = new Function('s',fbody);
}
x.writeVarToFile = function(vname,fname) {
	if (arguments.length !== 2) {
		console.log("need 2 arguments: <var name>,<file name>");
		return;
	}
	var fs = require('fs');
	eval('fs.writeFileSync(fname,' + vname + ')');
}
//var gd = createGrammar2();
//gd.generateLalr1Parser();
//debugToConsole();
var gd = x.createGrammar7();
if (false) {
try {
gd.compileAsModule('mylang',{input : '{% %} X {% %}'});
var mylang = require('./mylang');
var mobj = new mylang;
} catch (e) {
	console.error(e);
}
}

function pt() {
	x.debugToStr('ptx');
	gd.showParseTable();
	x.writeVarToFile('ptx','pt.html');
}

function p(input0) {
	var input = input0 ? input0 : "3 a .";
	console.log('parsing: \n' + input);
	return gd.compile(input);
	//gd.compileAsModule('tomato',{inputFile:'tomato.gra'});
}

//xsyn.xgrammar.compileAsModule('examples/expr.gra');
//var Expr = require('./expr');
//var expr = new Expr();

//var XLan = require(xsyn.languageModule('test_examples/double_epsilon.gra'));
//var xlan = new XLan();
//xlan.parser.compileAsModule({input : '@ a b', name : 'xlan_xx', outputDir : '.xsyn_gen'});

//var MySql = require(xsyn.languageModule('test_examples/mbug.gra', {force : true}));
var MySql = require(xsyn.languageModule('examples/mysql.gra', {force : true}));
var m = new MySql();
function gp() {
	m.parser.generateLalr1Parser({verbose : true});
}
//xsyn.grammar.utils.GrammarUtils.debug = console.log
gp();
function myeval($$$$$x) {
    return eval($$$$$x);
}

repl.start({
    prompt : 'xsyn> ',
    eval : function eval(cmd, context, filename, callback) {
        callback(null,myeval(cmd))
    }
})
