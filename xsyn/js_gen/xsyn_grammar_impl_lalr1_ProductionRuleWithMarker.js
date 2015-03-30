/*
 * Generated code for class xsyn.grammar.impl.lalr1.ProductionRuleWithMarker
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

var ProductionRuleWithMarker = function(/*no constructor found*/) {
};
util.inherits(ProductionRuleWithMarker,xsyn.grammar.impl.ProductionRule);

ProductionRuleWithMarker.prototype.__defineGetter__('markerPos', function() {
  if (typeof(this.$markerPos$) === 'undefined') {
    this.$markerPos$ = 0;
  }
  return this.$markerPos$;
});
ProductionRuleWithMarker.prototype.__defineSetter__('markerPos', function(markerPos) {
  this.$markerPos$ = markerPos;
});

ProductionRuleWithMarker.prototype.__defineGetter__('isInitial', function() {
  if (typeof(this.$isInitial$) === 'undefined') {
    this.$isInitial$ = false;
  }
  return this.$isInitial$;
});
ProductionRuleWithMarker.prototype.__defineSetter__('isInitial', function(isInitial) {
  this.$isInitial$ = isInitial;
});

/**
 * @method equals(obj)
 * @returns boolean
 */
ProductionRuleWithMarker.prototype.equals = function(obj) {
  if (obj instanceof ProductionRuleWithMarker) {
      var prule = obj;
      if (this.markerPos !== prule.markerPos) return false;
      if (this.nonterminal !== prule.nonterminal) return false;
      if (this.elements.length !== prule.elements.length) return false;
      for(var i = 0; i < this.elements.length;i++) {
  		if (this.elements[i] !== prule.elements[i]) return false;
      }
      return true;
  }
  return false;
}

/**
 * @method toString()
 * @returns java.lang.String
 */
ProductionRuleWithMarker.prototype.toString = function() {
  var s = this.nonterminal.name + ' -> ' + this.toStringWithMarkerPos(this.markerPos);
  if (this.isInitial) {
    s += '\t (initial)';
  }
  return s;
}

/**
 * @method createFrom(prule)
 * @returns xsyn.grammar.impl.lalr1.ProductionRuleWithMarker
 */
ProductionRuleWithMarker.createFrom = function(prule) {
  var mrule = new ProductionRuleWithMarker();
  mrule.definitionString = prule.definitionString;
  mrule.nonterminal = prule.nonterminal;
  mrule.actionCode = prule.actionCode;
  mrule.elements.addAll(prule.elements);
  if (prule instanceof ProductionRuleWithMarker) {
      mrule.markerPos = prule.markerPos;
  }
  return mrule;
}

/**
 * @method incrMarker()
 * @returns boolean
 */
ProductionRuleWithMarker.prototype.incrMarker = function() {
  if (this.isMarkerAtEnd()) {
    return false;
  }
  this.markerPos++;
  return true;
}

/**
 * @method isMarkerAtEnd()
 * @returns boolean
 */
ProductionRuleWithMarker.prototype.isMarkerAtEnd = function() {
  return this.markerPos > this.elements.length;
}

/**
 * @method getElementAtMarkerPos()
 * @returns xsyn.grammar.IProductionRuleElement
 */
ProductionRuleWithMarker.prototype.getElementAtMarkerPos = function() {
  if (this.isMarkerAtEnd()) {
    return null;
  }
  return this.elements[this.markerPos];
}

/**
 * @method getNonterminalAtMarkerPos()
 * @returns xsyn.grammar.INonterminal
 */
ProductionRuleWithMarker.prototype.getNonterminalAtMarkerPos = function() {
  var elem = this.getElementAtMarkerPos();
  if (elem instanceof Nonterminal) {
    return elem;
  }
  return null;
}

/**
 * @method isAcceptRule()
 * @returns boolean
 */
ProductionRuleWithMarker.prototype.isAcceptRule = function() {
  var snt = this.nonterminal.grammar.startNonterminal;
  if (snt !== this.nonterminal) {
    return false;
  }
  return this.markerPos >= this.elements.length;
}


module.exports = ProductionRuleWithMarker

