/*
 * Generated code for class xsyn.grammar.action.GrammarActionLanguageJavaScript
 *
 * ***** DO NOT MODIFY *****
 *
 */

var util = require('util');
var Map = require('../libjs/Map');
var Stack = require('../libjs/Stack');
var Utils = require('../libjs/Utils');

var xsyn = require('./xsyn');

/* imports */
__defineGetter__('GrammarActionLanguageJavaScript',function() { return xsyn.grammar.action.GrammarActionLanguageJavaScript; });
__defineGetter__('IllegalKeywordOrSymbol',function() { return xsyn.grammar.exception.IllegalKeywordOrSymbol; });
__defineGetter__('IllegalNonterminalName',function() { return xsyn.grammar.exception.IllegalNonterminalName; });
__defineGetter__('IllegalProductionRuleLhs',function() { return xsyn.grammar.exception.IllegalProductionRuleLhs; });
__defineGetter__('MissingStartNonterminal',function() { return xsyn.grammar.exception.MissingStartNonterminal; });
__defineGetter__('NoSuchNonterminal',function() { return xsyn.grammar.exception.NoSuchNonterminal; });
__defineGetter__('SyntaxError',function() { return xsyn.grammar.exception.SyntaxError; });
__defineGetter__('CodeStartEndSpec',function() { return xsyn.grammar.impl.CodeStartEndSpec; });
__defineGetter__('DefaultTokenStream',function() { return xsyn.grammar.impl.DefaultTokenStream; });
__defineGetter__('GrammarDef$1',function() { return xsyn.grammar.impl.GrammarDef$1; });
__defineGetter__('GrammarDef',function() { return xsyn.grammar.impl.GrammarDef; });
__defineGetter__('GrammarDefTokenStream',function() { return xsyn.grammar.impl.GrammarDefTokenStream; });
__defineGetter__('Nonterminal',function() { return xsyn.grammar.impl.Nonterminal; });
__defineGetter__('Position',function() { return xsyn.grammar.impl.Position; });
__defineGetter__('ProductionRule',function() { return xsyn.grammar.impl.ProductionRule; });
__defineGetter__('ProductionRuleBinding',function() { return xsyn.grammar.impl.ProductionRuleBinding; });
__defineGetter__('Token',function() { return xsyn.grammar.impl.Token; });
__defineGetter__('TokenDef',function() { return xsyn.grammar.impl.TokenDef; });
__defineGetter__('AcceptAction',function() { return xsyn.grammar.impl.lalr1.AcceptAction; });
__defineGetter__('ExtendedNonterminal',function() { return xsyn.grammar.impl.lalr1.ExtendedNonterminal; });
__defineGetter__('ExtendedProductionRule',function() { return xsyn.grammar.impl.lalr1.ExtendedProductionRule; });
__defineGetter__('ExtendedProductionRuleElement',function() { return xsyn.grammar.impl.lalr1.ExtendedProductionRuleElement; });
__defineGetter__('GotoAction',function() { return xsyn.grammar.impl.lalr1.GotoAction; });
__defineGetter__('ItemSet',function() { return xsyn.grammar.impl.lalr1.ItemSet; });
__defineGetter__('ParserState',function() { return xsyn.grammar.impl.lalr1.ParserState; });
__defineGetter__('ProductionRuleWithMarker',function() { return xsyn.grammar.impl.lalr1.ProductionRuleWithMarker; });
__defineGetter__('ReduceAction',function() { return xsyn.grammar.impl.lalr1.ReduceAction; });
__defineGetter__('RuleItemSet',function() { return xsyn.grammar.impl.lalr1.RuleItemSet; });
__defineGetter__('ShiftAction',function() { return xsyn.grammar.impl.lalr1.ShiftAction; });
__defineGetter__('TokenParseAction',function() { return xsyn.grammar.impl.lalr1.TokenParseAction; });
__defineGetter__('EndTokenDef',function() { return xsyn.grammar.utils.EndTokenDef; });
__defineGetter__('EpsilonTokenDef',function() { return xsyn.grammar.utils.EpsilonTokenDef; });
__defineGetter__('GrammarUtils',function() { return xsyn.grammar.utils.GrammarUtils; });

var GrammarActionLanguageJavaScript = function() {
  this.initLibCode();
};

GrammarActionLanguageJavaScript.prototype.__defineGetter__('parserFunctions', function() {
  if (typeof(this.$parserFunctions$) === 'undefined') {
    this.$parserFunctions$ = {};
  }
  return this.$parserFunctions$;
});

/**
 * @method initJsEngine()
 * @returns void
 */
GrammarActionLanguageJavaScript.prototype.initJsEngine = function() {
  this.getLibCode();
}

/**
 * @method getLibCode()
 * @returns java.lang.String
 */
GrammarActionLanguageJavaScript.prototype.getLibCode = function() {
  this.addParserFunction('ident',['x'],'return x;');
  this.addParserFunction('symbol',['x'],'return x;');
  this.addParserFunction('number',['x'],'return Number(x);');
  this.addParserFunction('string',['x'],'return String(x);');
  this.addParserFunction('regexp',['x'],'return x;');
  this.addParserFunction('kw',['x'],'return x;');
}

/**
 * @method getDefaultActionCode(productionRule)
 * @returns java.lang.String
 */
GrammarActionLanguageJavaScript.prototype.getDefaultActionCode = function(productionRule) {
  if (productionRule && productionRule.elements && productionRule.elements.length > 0) {
      return '$$ = $1';
  }
  return '$$ = null';
}

/**
 * @method generateActionCode(productionRule)
 * @returns java.lang.Object
 */
GrammarActionLanguageJavaScript.prototype.generateActionCode = function(productionRule) {
  if (!!productionRule.eliminatedEpsilonProduction) {
    return this.generateActionCodeForProductionRuleResultingFromEpsilonProductionRemoval(productionRule);
  }
  var fname = productionRule.getConstructorName();
  var actionCode = productionRule.actionCode;
  if (!actionCode) {
      actionCode = this.getDefaultActionCode(productionRule);
  }
  var parameters = [];
  for(var i = 0; i < productionRule.elements.length; i++) {
   	parameters.push('$' + (i+1));
  }
  if (typeof(actionCode) === 'function') {
  	//this.parserFunctions[fname] = actionCode;
     var body = '';
     body += 'var $fun = ' + actionCode.toString() + ';\n'
     body += 'return $fun.call(this,' + parameters.join(',') + ');\n'
     this.addParserFunction(fname,parameters,body);
  } else {
  	var returnCode = '  return $$;\n';
  	var code = '';
  	code += 'function ' + fname + '(';
  	code += parameters.join(',');
  	code += ') {\n';
  	//code += setDollarArgsCode;
  	var body = '';
  	body += actionCode + '\n';
  	body += returnCode;
  	code += body;
  	code += '}\n';
  	GrammarUtils.debug(code);
  	this.addParserFunction(fname,parameters,body);
  }
  //return eval(code);
}

/**
 * @method generateActionCodeForProductionRuleResultingFromEpsilonProductionRemoval(productionRule)
 * @returns java.lang.Object
 */
GrammarActionLanguageJavaScript.prototype.generateActionCodeForProductionRuleResultingFromEpsilonProductionRemoval = function(productionRule) {
  GrammarUtils.debug('generateActionCodeForProductionRuleResultingFromEpsilonProductionRemoval: ' + productionRule);
  var fname = productionRule.getConstructorName();
  var eindex = productionRule.eliminatedEpsilonProductionIndex;
  var ecname = productionRule.eliminatedEpsilonProduction.getConstructorName();
  var parameters = [];
  var applyArgs = []; // needed if actionCode is a function
  var numElements = productionRule.getOriginalRule().elements.length;
  for(var i = 0; i <= numElements; i++) {
      var vname = '$' + (i + 1);
      parameters.push(vname);
      applyArgs.push(vname);
  }
  var ecInfo = productionRule.getEpsilonIndexesRelativeToOriginalRule();
  var dcode = '';
  dcode += '//parameters: ' + parameters.join(',') + '\n'
  for(var i = 0; i < ecInfo.length; i++) {
    var eindex = ecInfo[i].index;
    var eccall = ecInfo[i].constructorName + '()';
    var evarname = parameters.splice(eindex,1,'_')[0];
    dcode += '//parameters: ' + parameters.join(',') + '\n'
    dcode += '/*eindex:' + eindex + '*/' + 'var ' + evarname + ' = ' + eccall + ';\n';
  }
  parameters = parameters.filter(function(elem) { return elem !== '_'; });
  var actionCode = productionRule.actionCode;
  if (!actionCode) {
      actionCode = this.getDefaultActionCode();
  }
  if (typeof(actionCode) === 'function') {
     for(var i = 0; i < ecInfo.length; i++) {
       var eindex = ecInfo[i].index;
       var eccall = ecInfo[i].constructorName + '()';
  	  applyArgs.splice(eindex,1,eccall);
     }
     applyArgs = ['this'].concat(applyArgs);
     var body = '';
     body += '/* production rule: ' + productionRule.toString() + '*/\n'
     body += 'var $fun = ' + actionCode.toString() + ';\n'
     body += 'return $fun.call(' + applyArgs.join(',') + ');\n'
     this.addParserFunction(fname,parameters,body);
  } else {
  	var returnCode = '  return $$;\n';
  	var code = '';
  	code += 'function ' + fname + '(';
  	code += parameters.join(',');
  	code += ') {\n';
  	var body = ''
     body += '/* production rule: ' + productionRule.toString() + '*/\n'
  	body += dcode;
  	body += actionCode + '\n';
  	body += returnCode;
  	code += body;
  	code += '}\n';
  	GrammarUtils.debug(code);
  	this.addParserFunction(fname,parameters,body);
  }
}

/**
 * @method evalParseOutput(pstate)
 * @returns java.lang.String
 */
GrammarActionLanguageJavaScript.prototype.evalParseOutput = function(pstate) {
  return pstate.getConstructorString();
}

/**
 * @method addParserFunction(fname,parameters,body)
 * @returns void
 */
GrammarActionLanguageJavaScript.prototype.addParserFunction = function(fname,parameters,body) {
  this.parserFunctions[fname] = {
     name : fname,
     parameters : parameters,
     body : body
  };
}

/**
 * @method initLibCode()
 * @returns void
 */
GrammarActionLanguageJavaScript.prototype.initLibCode = function() {
  this.addParserFunction('ident',['x'],'return x;');
  this.addParserFunction('symbol',['x'],'return x;');
  this.addParserFunction('number',['x'],'return Number(x);');
  this.addParserFunction('string',['x'],'return String(x);');
  this.addParserFunction('longstring',['x'],'return String(unescape(x));');
  this.addParserFunction('regexp',['x'],'return x;');
  this.addParserFunction('kw',['x'],'return x;');
}

/**
 * @method generateRuntimeFunctionCode(opts)
 * @returns void
 */
GrammarActionLanguageJavaScript.prototype.generateRuntimeFunctionCode = function(opts) {
  var s = '';
  for(var fname in this.parserFunctions) {
    if (!this.parserFunctions.hasOwnProperty(fname)) continue;
    var fnameParts = fname.split(/\s+/);
    var isGetter = fnameParts.length == 2 && fnameParts[0] === 'get';
    var isSetter = fnameParts.length == 2 && fnameParts[0] === 'set';
    var fdef = this.parserFunctions[fname];
    if (isGetter) {
      fname = '$GET$' + fnameParts[1];
    }
    else if (isSetter) {
      fname = '$SET$' + fnameParts[1];
    }
    s += 'var ' + fname + ' = ';
    if (typeof(fdef) === 'function') {
      s += fdef.toString() + ';\n';
    } else {
      s += 'function(';
      s += fdef.parameters.join(',') + ') {\n';
      s += fdef.body
      s += '};\n';
    }
  }
  return s;
}

/**
 * @method getRuntimeFunctionNames()
 * @returns void
 */
GrammarActionLanguageJavaScript.prototype.getRuntimeFunctionNames = function() {
  var res = [];
  for(var fname in this.parserFunctions) {
    if (!this.parserFunctions.hasOwnProperty(fname)) continue;
    res.push(fname);
  }
  return res;
}

/**
 * @method addGetRulesCode(g)
 * @returns void
 */
GrammarActionLanguageJavaScript.prototype.addGetRulesCode = function(g) {
  var ruleObjs = g.getCalculatedProductionRules();
  var fname = 'get rules';
  var body = 'return JSON.parse(unescape(\'' + escape(JSON.stringify(ruleObjs)) + '\'));';
  this.addParserFunction(fname,[],body);
}

/**
 * @method addGetGrammarDefCode()
 * @returns void
 */
GrammarActionLanguageJavaScript.prototype.addGetGrammarDefCode = function() {
  var fname = 'get grammarDef';
  var body = '';
  body += 'if (typeof(this.$grammarDef$) === \'undefined\') {\n';
  body += '  this.$grammarDef$ = xsyn.GrammarDef.createFromCalculatedRules(this.rules);\n';
  body += '}\n';
  body += 'return this.$grammarDef$;\n';
  this.addParserFunction(fname,[],body);
  this.addParserFunction('set grammarDef',['gd'],'this.$grammarDef$ = gd;');
}


module.exports = GrammarActionLanguageJavaScript

