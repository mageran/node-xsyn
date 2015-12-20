/*
 * Generated code for class xsyn.grammar.impl.lalr1.ExtendedProductionRuleElement
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

var ExtendedProductionRuleElement = function() {
};

ExtendedProductionRuleElement.prototype.__defineGetter__('productionRuleElement', function() {
  if (this.$productionRuleElement$ instanceof ExtendedProductionRuleElement) {
    return this.$productionRuleElement$.productionRuleElement;
  }
  return this.$productionRuleElement$;
});
ExtendedProductionRuleElement.prototype.__defineSetter__('productionRuleElement', function(productionRuleElement) {
  this.$productionRuleElement$ = productionRuleElement;
});

ExtendedProductionRuleElement.prototype.__defineGetter__('preItemSet', function() {
  return this.$preItemSet$;
});
ExtendedProductionRuleElement.prototype.__defineSetter__('preItemSet', function(preItemSet) {
  this.$preItemSet$ = preItemSet;
});

ExtendedProductionRuleElement.prototype.__defineGetter__('postItemSet', function() {
  return this.$postItemSet$;
});
ExtendedProductionRuleElement.prototype.__defineSetter__('postItemSet', function(postItemSet) {
  this.$postItemSet$ = postItemSet;
});

ExtendedProductionRuleElement.prototype.__defineGetter__('name', function() {
  return this.getName();
});
ExtendedProductionRuleElement.prototype.__defineSetter__('name', function(name) {
  this.$name$ = name;
});

/**
 * @method getName()
 * @returns java.lang.String
 */
ExtendedProductionRuleElement.prototype.getName = function() {
  var s = '';
  if (!!this.preItemSet) {
      s += '{' + this.preItemSet.name + '}';
  }
  s += this.productionRuleElement.name;
  if (!!this.postItemSet) {
      s += '{' + this.postItemSet.name + '}';
  }
  return s;
}

/**
 * @method getTokenDef()
 * @returns xsyn.grammar.ITokenDef
 */
ExtendedProductionRuleElement.prototype.getTokenDef = function() {
  if (this.productionRuleElement instanceof TokenDef) {
    return this.productionRuleElement;
  }
  return null;
}

/**
 * @method getNonterminal()
 * @returns xsyn.grammar.INonterminal
 */
ExtendedProductionRuleElement.prototype.getNonterminal = function() {
  if ((this.productionRuleElement instanceof Nonterminal) 
       || (this.productionRuleElement instanceof ExtendedNonterminal)) {
    return this.productionRuleElement;
  }
  return null;
}

/**
 * @method maybeReplaceWithExtendedNonterminal()
 * @returns xsyn.grammar.IProductionRuleElement
 */
ExtendedProductionRuleElement.prototype.maybeReplaceWithExtendedNonterminal = function() {
  var pelem = this.productionRuleElement;
  if ((pelem instanceof Nonterminal) || (pelem instanceof ExtendedNonterminal)) {
      var nt = pelem;
      var grammar = nt.grammar;
      return grammar.getExtendedNonterminalMatching(nt, this.preItemSet, this.postItemSet);
  }
  return this;
}


module.exports = ExtendedProductionRuleElement

