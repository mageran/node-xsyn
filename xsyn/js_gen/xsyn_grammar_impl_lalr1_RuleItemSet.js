/*
 * Generated code for class xsyn.grammar.impl.lalr1.RuleItemSet
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

var RuleItemSet = function(itemSet) {
  this.itemSet = itemSet;
};

RuleItemSet.prototype.__defineGetter__('itemSet', function() {
  return this.$itemSet$;
});
RuleItemSet.prototype.__defineSetter__('itemSet', function(itemSet) {
  this.$itemSet$ = itemSet;
});

RuleItemSet.prototype.__defineGetter__('rules', function() {
  if (typeof(this.$rules$) === 'undefined') {
    this.$rules$ = [];
  }
  return this.$rules$;
});
RuleItemSet.prototype.__defineSetter__('rules', function(rules) {
  this.$rules$ = rules;
});

/**
 * @method equals(obj)
 * @returns boolean
 */
RuleItemSet.prototype.equals = function(obj) {
  if (obj instanceof RuleItemSet) {
      var rset = obj;
      if (this.initialRuleCount() !== rset.initialRuleCount()) return false;
      var rsetRules = [];
      rsetRules.addAll(rset.getInitialRules());
      var irules = this.getInitialRules();
      for(var i = 0; i < irules.length; i++) {
  		var prule = irules[i];
  		var deleteMeFromRsetRules = null;
  		for(var j = 0; j < rsetRules.length; j++) {
  	    	var rsetRule = rsetRules[j];
  	    	if (prule.equals(rsetRule)) {
  				deleteMeFromRsetRules = rsetRule;
  				break;
  	    	}
  		}
  		if (deleteMeFromRsetRules !== null) {
  	    	rsetRules.remove(deleteMeFromRsetRules);
  		}
      }
      return rsetRules.length === 0;
  }
  return false;
}

/**
 * @method toString()
 * @returns java.lang.String
 */
RuleItemSet.prototype.toString = function() {
  var s = '';
  s += '  RuleItemSet:\n';
  for(var i = 0; i < this.rules.length; i++) {
      var prule = this.rules[i];
      s += '    ' + prule + '\n';
  }
  return s;
}

/**
 * @method addProductionRulesForNonterminal(nt)
 * @returns void
 */
RuleItemSet.prototype.addProductionRulesForNonterminal = function(nt) {
  var prules = nt.productionRules;
  GrammarUtils.debug('    --> adding production ' + prules.length + ' rules from nonterminal ' + nt.name + '...');
  for(var i = 0; i < prules.length; i++) {
      var prule = prules[i];
      var mrule = ProductionRuleWithMarker.createFrom(prule);
      mrule.isInitial = this.itemSet.initialPhase;
      this.rules.add(mrule);
  }
}

/**
 * @method nonterminalAlreadyAdded(nt,toBeAddedList)
 * @returns boolean
 */
RuleItemSet.prototype.nonterminalAlreadyAdded = function(nt,toBeAddedList) {
  if (toBeAddedList && toBeAddedList.indexOf(nt) >= 0) {
    return true;
  }
  if (nt.hasOnlyEpsilonProduction()) return true;
  var rules = this.rules;
  for(var i = 0; i < rules.length; i++) {
      var prule = rules[i];
      if (prule.isInitial) continue;
      if (prule.nonterminal === nt) {
  	return true;
      }
  }
  return false;
}

/**
 * @method initialRuleCount()
 * @returns int
 */
RuleItemSet.prototype.initialRuleCount = function() {
  var cnt = 0;
  for(var i = 0; i < this.rules.length; i++) {
      var prule = this.rules[i];
      if (prule.isInitial) cnt++;
  }
  return cnt;
}

/**
 * @method getInitialRules()
 * @returns java.util.List
 */
RuleItemSet.prototype.getInitialRules = function() {
  var initialRules = [];
  for(var i = 0; i < this.rules.length; i++) {
      var prule = this.rules[i];
      if (!prule.isInitial) continue;
      initialRules.add(prule);
  }
  return initialRules;
}

/**
 * @method calculateClosure()
 * @returns void
 */
RuleItemSet.prototype.calculateClosure = function() {
  this.itemSet.initialPhase = false;
  for(;;) {
      var addThese = [];
      for(var i = 0; i < this.rules.length; i++) {
  		var prule = this.rules[i];
  		var nt = prule.getNonterminalAtMarkerPos();
  		if (!nt) continue;
  		if (this.nonterminalAlreadyAdded(nt,addThese)) continue;
         GrammarUtils.debug('  adding nonterminal: ' + nt.name);
  		addThese.push(nt);
      }
      if (addThese.length === 0) break;
      for(var k = 0; k < addThese.length; k++) {
  		var nt = addThese[k];
  		this.addProductionRulesForNonterminal(nt);
      }
  }
}

/**
 * @method getNextElements()
 * @returns java.util.Set
 */
RuleItemSet.prototype.getNextElements = function() {
  var res = [];
  for(var i = 0; i < this.rules.length; i++) {
      var prule = this.rules[i];
      var elem = prule.getElementAtMarkerPos();
      if (!elem) continue;
      GrammarUtils.debug('adding to next elements set: ' + elem.toString());
      var sizeBefore = res.length;
      res.addToSet(elem);
      var sizeAfter = res.length;
      if (sizeBefore === sizeAfter) GrammarUtils.debug('NOT added to set of next elements.');
  }
  return res;
}

/**
 * @method initNextItemSetForInput(elem,iset)
 * @returns void
 */
RuleItemSet.prototype.initNextItemSetForInput = function(elem,iset) {
  for(var i = 0; i < this.rules.length; i++) {
      var prule = this.rules[i];
      if (prule.getElementAtMarkerPos() === elem) {
  	   var mrule = iset.addProductionRule(prule);
  	   mrule.incrMarker();
      }
  }
}

/**
 * @method containsAcceptRule()
 * @returns boolean
 */
RuleItemSet.prototype.containsAcceptRule = function() {
  for(var i = 0; i < this.rules.length; i++) {
      var prule = this.rules[i];
      if (prule.isAcceptRule()) {
  	return true;
      }
  }
  return false;
}


module.exports = RuleItemSet

