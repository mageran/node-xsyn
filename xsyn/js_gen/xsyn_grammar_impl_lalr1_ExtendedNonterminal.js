/*
 * Generated code for class xsyn.grammar.impl.lalr1.ExtendedNonterminal
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

var ExtendedNonterminal = function(nonterminal) {
  this.nonterminal = nonterminal;
};

ExtendedNonterminal.prototype.__defineGetter__('nonterminal', function() {
  return this.$nonterminal$;
});
ExtendedNonterminal.prototype.__defineSetter__('nonterminal', function(nonterminal) {
  this.$nonterminal$ = nonterminal;
});

ExtendedNonterminal.prototype.__defineGetter__('preItemSet', function() {
  return this.$preItemSet$;
});
ExtendedNonterminal.prototype.__defineSetter__('preItemSet', function(preItemSet) {
  this.$preItemSet$ = preItemSet;
});

ExtendedNonterminal.prototype.__defineGetter__('postItemSet', function() {
  return this.$postItemSet$;
});
ExtendedNonterminal.prototype.__defineSetter__('postItemSet', function(postItemSet) {
  this.$postItemSet$ = postItemSet;
});

ExtendedNonterminal.prototype.__defineGetter__('name', function() {
  return this.getName();
});
ExtendedNonterminal.prototype.__defineSetter__('name', function(name) {
  this.$name$ = name;
});

/**
 * @method getName()
 * @returns java.lang.String
 */
ExtendedNonterminal.prototype.getName = function() {
  var s = '';
  s += this.nonterminal.name;
  if (!!this.preItemSet) {
      s += '_' + this.preItemSet.name;
  }
  if (!!this.postItemSet) {
      s += '_' + this.postItemSet.name;
  }
  return s;
}

/**
 * @method getName1()
 * @returns java.lang.String
 */
ExtendedNonterminal.prototype.getName1 = function() {
  var s = '';
  if (!!this.preItemSet) {
      s += '{' + this.preItemSet.name + '}';
  }
  s += this.nonterminal.name;
  if (!!this.postItemSet) {
      s += '{' + this.postItemSet.name + '}';
  }
  return s;
}

/**
 * @method getGrammar()
 * @returns xsyn.grammar.IGrammar
 */
ExtendedNonterminal.prototype.getGrammar = function() {
  return this.nonterminal.grammar;
}

/**
 * @method getProductionRules()
 * @returns java.util.List
 */
ExtendedNonterminal.prototype.getProductionRules = function() {
  return this.nonterminal.productionRules;
}

/**
 * @method isStartNonterminal()
 * @returns boolean
 */
ExtendedNonterminal.prototype.isStartNonterminal = function() {
  return this.nonterminal.isStartNonterminal();
}

/**
 * @method getEpsilonProductionRule()
 * @returns xsyn.grammar.IProductionRule
 */
ExtendedNonterminal.prototype.getEpsilonProductionRule = function() {
  var prules = this.productionRule;
  for(var i = 0; i < prules.length; i++) {
      var prule = prules[i];
      if (prule.elements.length === 0) {
  	return prule;
      }
  }
  return null;
}

/**
 * @method removeEpsilonProductionRule()
 * @returns xsyn.grammar.IProductionRule
 */
ExtendedNonterminal.prototype.removeEpsilonProductionRule = function() {
  var eprule = null;
  for(var i = 0; i < this.productionRules.length; i++) {
      var prule = this.productionRules[i];
      if (prule.elements.length === 0) {
  	eprule = prule;
  	break;
      }
  }
  if (eprule !== null) {
      this.productionRules.remove(eprule);
  }
  return eprule;
}

/**
 * @method hasOnlyEpsilonProduction()
 * @returns boolean
 */
ExtendedNonterminal.prototype.hasOnlyEpsilonProduction = function() {
  var prules = this.productionRules;
  for(var i = 0; i < prules.length; i++) {
  var prule = prules[i];
  if (prule.elements.length > 0) return false;
  }
  return true;
}

/**
 * @method getTokenDef()
 * @returns xsyn.grammar.ITokenDef
 */
ExtendedNonterminal.prototype.getTokenDef = function() {
  return null;
}


module.exports = ExtendedNonterminal

