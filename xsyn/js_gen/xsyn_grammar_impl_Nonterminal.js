/*
 * Generated code for class xsyn.grammar.impl.Nonterminal
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

var Nonterminal = function(name,grammar) {
  this.name = name;
  if (!GrammarUtils.isIdentifier(name)) {
    throw new IllegalNonterminalName(name);
  }
  this.grammar = grammar;
};

Nonterminal.prototype.__defineGetter__('name', function() {
  return this.$name$;
});
Nonterminal.prototype.__defineSetter__('name', function(name) {
  this.$name$ = name;
});

Nonterminal.prototype.__defineGetter__('grammar', function() {
  return this.$grammar$;
});
Nonterminal.prototype.__defineSetter__('grammar', function(grammar) {
  this.$grammar$ = grammar;
});

Nonterminal.prototype.__defineGetter__('tokenDef', function() {
  if (typeof(this.$tokenDef$) === 'undefined') {
    this.$tokenDef$ = null;
  }
  return this.$tokenDef$;
});
Nonterminal.prototype.__defineSetter__('tokenDef', function(tokenDef) {
  this.$tokenDef$ = tokenDef;
});

Nonterminal.prototype.__defineGetter__('nonterminal', function() {
  if (typeof(this.$nonterminal$) === 'undefined') {
    this.$nonterminal$ = this;
  }
  return this.$nonterminal$;
});
Nonterminal.prototype.__defineSetter__('nonterminal', function(nonterminal) {
  this.$nonterminal$ = nonterminal;
});

Nonterminal.prototype.__defineGetter__('productionRules', function() {
  if (typeof(this.$productionRules$) === 'undefined') {
    this.$productionRules$ = [];
  }
  return this.$productionRules$;
});
Nonterminal.prototype.__defineSetter__('productionRules', function(productionRules) {
  this.$productionRules$ = productionRules;
});

Nonterminal.prototype.__defineGetter__('removedEpsilonProductionRule', function() {
  return this.$removedEpsilonProductionRule$;
});
Nonterminal.prototype.__defineSetter__('removedEpsilonProductionRule', function(removedEpsilonProductionRule) {
  this.$removedEpsilonProductionRule$ = removedEpsilonProductionRule;
});

/**
 * @method toString()
 * @returns java.lang.String
 */
Nonterminal.prototype.toString = function() {
  var s = '';
  var prules = this.productionRules;
  for(var i = 0; i < prules.length; i++) {
      var prule = prules[i];
      s += prule.toString() + '\n';
  }
  return s;
}

/**
 * @method getNonterminalsUsed()
 * @returns java.util.Set
 */
Nonterminal.prototype.getNonterminalsUsed = function() {
  var nts = [];
  var prules = this.productionRules;
  for(var i = 0; i < prules.length; i++) {
      var prule = prules[i];
      prule.getNonterminalsUsed(nts);
  }
  return nts;
}

/**
 * @method hasProductionRuleWithElements(elems)
 * @returns boolean
 */
Nonterminal.prototype.hasProductionRuleWithElements = function(elems) {
  var prules = this.productionRules;
  for(var i = 0; i < prules.length; i++) {
      var prule = prules[i];
      if (elems.length !== prule.elements.length) {
          continue;
      }
      var found = true;
      for(var j = 0; j < elems.length; j++) {
          if (elems[j] !== prule.elements[j]) {
              found = false;
              break;
          }
      }
      if (found) {
          return true;
      }
  }
  return false;
}

/**
 * @method parseProductionRules(tstrm)
 * @returns void
 */
Nonterminal.prototype.parseProductionRules = function(tstrm) {
  var prules = this.productionRules;
  for(var i = 0; i < prules.length; i++) {
      var prule = prules[i];
      prule.parse(tstrm);
  }
}

/**
 * @method isStartNonterminal()
 * @returns boolean
 */
Nonterminal.prototype.isStartNonterminal = function() {
  return this.grammar.startNonterminal === this;
}

/**
 * @method getEpsilonProductionRule()
 * @returns xsyn.grammar.IProductionRule
 */
Nonterminal.prototype.getEpsilonProductionRule = function() {
  if (!!this.removedEpsilonProductionRule) {
  	return this.removedEpsilonProductionRule;
  }
  var prules = this.productionRules;
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
Nonterminal.prototype.removeEpsilonProductionRule = function() {
  var eprule = null;
  var prules = this.productionRules;
  for(var i = 0; i < prules.length; i++) {
      var prule = prules[i];
      if (prule.elements.length === 0) {
  		eprule = prule;
  		break;
      }
  }
  if (!!eprule) {
      this.productionRules.remove(eprule);
      this.hasEpsilonProduction = true;
      this.removedEpsilonProductionRule = eprule;
  }
  return eprule;
}

/**
 * @method hasOnlyEpsilonProduction()
 * @returns boolean
 */
Nonterminal.prototype.hasOnlyEpsilonProduction = function() {
  var prules = this.productionRules;
  for(var i = 0; i < prules.length; i++) {
  var prule = prules[i];
  if (prule.elements.length > 0) return false;
  }
  return true;
}


module.exports = Nonterminal

