/*
 * Generated code for class xsyn.grammar.impl.lalr1.ExtendedProductionRule
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

var ExtendedProductionRule = function() {
  xsyn.grammar.impl.ProductionRule.call(this);
};
util.inherits(ExtendedProductionRule,xsyn.grammar.impl.ProductionRule);

ExtendedProductionRule.prototype.__defineGetter__('originalProductionRule', function() {
  return this.$originalProductionRule$;
});
ExtendedProductionRule.prototype.__defineSetter__('originalProductionRule', function(originalProductionRule) {
  this.$originalProductionRule$ = originalProductionRule;
});

/**
 * @method toString()
 * @returns java.lang.String
 */
ExtendedProductionRule.prototype.toString = function() {
  var s = '';
  s += this.nonterminal.getName();
  s += ' -> ' + ProductionRule.prototype.toString.call(this);
  return s;
}

/**
 * @method canBeMergedWith(prule)
 * @returns boolean
 */
ExtendedProductionRule.prototype.canBeMergedWith = function(prule) {
  if (this.originalProductionRule === prule.originalProductionRule) {
      var finalSet0 = this.getFinalSet();
      var finalSet1 = prule.getFinalSet();
      return finalSet0 === finalSet1;
  }
  return false;
}

/**
 * @method calculateFollowSets(g)
 * @returns boolean
 */
ExtendedProductionRule.prototype.calculateFollowSets = function(g) {
  var len = this.elements.length;
  var changed = false;
  for(var i = 0; i < len; i++) {
      var pelem = this.elements[i];
      if (!(pelem instanceof Nonterminal) && !(pelem instanceof ExtendedNonterminal)) continue;
      var nt = pelem;
      var fset = g.getFollowSet(nt);
      var size0 = fset.length;
      var firstSetContainsEpsilon = true;
      var j = i + 1;
      while(firstSetContainsEpsilon && j < len) {
         var nextElementInProductionRule = this.elements[j];
  		var nextFirstSet = g.getFirstSetForProductionRuleElement(nextElementInProductionRule);
  		fset.addAllToSet(nextFirstSet);
  		firstSetContainsEpsilon = fset.remove(GrammarUtils.epsilonToken);
  		j++;
      }
      if (firstSetContainsEpsilon) {
  		fset.addAllToSet(g.getFollowSet(this.getExtendedNonterminal()));
      }
      var size1 = fset.length;
      changed = changed || size1 > size0;
  }
  return changed;
}

/**
 * @method createFrom(prule)
 * @returns xsyn.grammar.impl.lalr1.ExtendedProductionRule
 */
ExtendedProductionRule.createFrom = function(prule) {
  var mrule = new ExtendedProductionRule();
  mrule.definitionString = prule.definitionString;
  mrule.actionCode = prule.actionCode;
  mrule.nonterminal = new ExtendedNonterminal(prule.nonterminal);
  mrule.originalProductionRule = prule;
  if (prule.elements.length === 0) {
      //mrule.elements.add(GrammarUtils.epsilonToken);
  } else {
      for(var i = 0; i < prule.elements.length; i++) {
  		var elem = prule.elements[i];
  		var exelem = new ExtendedProductionRuleElement();
  		exelem.productionRuleElement = elem;
  		mrule.elements.add(exelem);
      }
  }
  return mrule;
}

/**
 * @method setExtendedNonterminal(nt)
 * @returns void
 */
ExtendedProductionRule.prototype.setExtendedNonterminal = function(nt) {
  this.nonterminal = nt;
}

/**
 * @method setPreItemSet(preItemSet)
 * @returns void
 */
ExtendedProductionRule.prototype.setPreItemSet = function(preItemSet) {
  this.getExtendedNonterminal().preItemSet = preItemSet;
}

/**
 * @method setPostItemSet(postItemSet)
 * @returns void
 */
ExtendedProductionRule.prototype.setPostItemSet = function(postItemSet) {
  this.getExtendedNonterminal().postItemSet = postItemSet;
}

/**
 * @method insertItemSetsStartingFrom(iset0)
 * @returns void
 */
ExtendedProductionRule.prototype.insertItemSetsStartingFrom = function(iset0) {
  var iset = iset0;
  for(var i = 0; i < this.elements.length; i++) {
      GrammarUtils.debug('iset is null: ' + (!iset));
      var xelem = this.elements[i];
      xelem.preItemSet = iset;
      iset = iset.getTransitionForInput(xelem.productionRuleElement);
      xelem.postItemSet = iset;
  }
}

/**
 * @method replaceNonterminalsWithExtendedNonterminals()
 * @returns void
 */
ExtendedProductionRule.prototype.replaceNonterminalsWithExtendedNonterminals = function() {
  var newElements = [];
  for(var i = 0; i < this.elements.length; i++) {
      var xelem = this.elements[i];
      var pelem = xelem.maybeReplaceWithExtendedNonterminal();
      newElements.add(pelem);
  }
  this.elements = newElements;
}

/**
 * @method getExtendedNonterminal()
 * @returns xsyn.grammar.impl.lalr1.ExtendedNonterminal
 */
ExtendedProductionRule.prototype.getExtendedNonterminal = function() {
  return this.nonterminal;
}

/**
 * @method getPreItemSet()
 * @returns xsyn.grammar.impl.lalr1.ItemSet
 */
ExtendedProductionRule.prototype.getPreItemSet = function() {
  return this.getExtendedNonterminal().preItemSet;
}

/**
 * @method getPostItemSet()
 * @returns xsyn.grammar.impl.lalr1.ItemSet
 */
ExtendedProductionRule.prototype.getPostItemSet = function() {
  return this.getExtendedNonterminal().postItemSet;
}

/**
 * @method getFirstSet(g)
 * @returns java.util.Set
 */
ExtendedProductionRule.prototype.getFirstSet = function(g) {
  var fset = [];
  fset.add(GrammarUtils.epsilonToken);
  for(var i = 0; i < this.elements.length; i++) {
      var elem = this.elements[i];
      fset.remove(GrammarUtils.epsilonToken);
      if (elem.getTokenDef() !== null) {
  	fset.add(elem.getTokenDef());
  	break;
      }
      if ((elem instanceof Nonterminal) || (elem instanceof ExtendedNonterminal)) {
  	var nt = elem;
  	var fset0 = g.getFirstSetForNonterminal(nt);
  	fset.addAllToSet(fset0);
      }
      if (!fset.contains(GrammarUtils.epsilonToken)) {
  	break;
      }
  }
  return fset;
}

/**
 * @method canBeMergedWithOneOf(prules)
 * @returns boolean
 */
ExtendedProductionRule.prototype.canBeMergedWithOneOf = function(prules) {
  for(var i = 0; i < prules.length; i++) {
      var prule = prules[i];
      if (this.canBeMergedWith(prule)) return true;
  }
  return false;
}

/**
 * @method setRuleFollowSets(g)
 * @returns void
 */
ExtendedProductionRule.prototype.setRuleFollowSets = function(g) {
  var fset = g.getFollowSet(this.getExtendedNonterminal());
  this.followSet = fset;
  this.originalProductionRule.followSet = fset;
}

/**
 * @method getFinalSet()
 * @returns xsyn.grammar.impl.lalr1.ItemSet
 */
ExtendedProductionRule.prototype.getFinalSet = function() {
  var size = this.elements.length;
  return size > 0 ?
      (this.elements[size-1]).postItemSet : getExtendedNonterminal().postItemSet;
}


module.exports = ExtendedProductionRule

