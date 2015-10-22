/*
 * Generated code for class xsyn.grammar.impl.lalr1.ReduceAction
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

var ReduceAction = function(token,productionRule) {
  xsyn.grammar.impl.lalr1.TokenParseAction.call(this, token,productionRule);
  //TokenParseAction.call(this,token);
  this.productionRule = productionRule;
};
util.inherits(ReduceAction,xsyn.grammar.impl.lalr1.TokenParseAction);

ReduceAction.prototype.__defineGetter__('productionRule', function() {
  return this.$productionRule$;
});
ReduceAction.prototype.__defineSetter__('productionRule', function(productionRule) {
  this.$productionRule$ = productionRule;
});

ReduceAction.prototype.__defineGetter__('undoParseStateInfo', function() {
  return this.$undoParseStateInfo$;
});
ReduceAction.prototype.__defineSetter__('undoParseStateInfo', function(undoParseStateInfo) {
  this.$undoParseStateInfo$ = undoParseStateInfo;
});

ReduceAction.prototype.__defineGetter__('undoTokenStateInfo', function() {
  return this.$undoTokenStateInfo$;
});
ReduceAction.prototype.__defineSetter__('undoTokenStateInfo', function(undoTokenStateInfo) {
  this.$undoTokenStateInfo$ = undoTokenStateInfo;
});

ReduceAction.prototype.__defineGetter__('nextAction', function() {
  return this.$nextAction$;
});
ReduceAction.prototype.__defineSetter__('nextAction', function(nextAction) {
  this.$nextAction$ = nextAction;
});

/**
 * @method toString()
 * @returns java.lang.String
 */
ReduceAction.prototype.toString = function() {
  return 'reduce(' + this.productionRule.toString() + ')';
}

/**
 * @method apply(state)
 * @returns void
 */
ReduceAction.prototype.apply = function(state) {
  this.applyBindings(state);
  var newState = state.currentParseState();
  var nt = this.productionRule.nonterminal;
  this.nextAction = newState.getParseTableAction(nt);
  GrammarUtils.debug('reduce.apply(): new state: ' + newState.name + ', nt: ' + nt.name + ', action: ' + this.nextAction);
  this.nextAction.apply(state);
}

/**
 * @method applyBindings(state)
 * @returns void
 */
ReduceAction.prototype.applyBindings = function(state) {
  var prule = new ProductionRuleBinding(this.productionRule);
  state.addToOutput(prule);
  var plen = this.productionRule.elements.length;
  this.undoParseStateInfo = new Array(plen);
  this.undoTokenStateInfo = new Array(plen);
  GrammarUtils.debug('do bindings...');
  for(var i = plen - 1; i >= 0; i--) {
      this.undoParseStateInfo[i] = state.popParseState();
      var elem = state.popTokenStack();
      prule.setBinding(i, elem);
      this.undoTokenStateInfo[i] = elem;
  }
  state.pushTokenStack(prule);
}

/**
 * @method undoApplyBindings(state)
 * @returns void
 */
ReduceAction.prototype.undoApplyBindings = function(state) {
  var plen = this.productionRule.elements.length;
  state.popTokenStack();
  for(var i = 0; i < plen; i++) {
      state.pushParseState(this.undoParseStateInfo[i]);
      state.pushTokenStack(this.undoTokenStateInfo[i]);
  }
  state.removeLastOutput();
}

/**
 * @method undo(state)
 * @returns void
 */
ReduceAction.prototype.undo = function(state) {
  this.nextAction.undo(state);
  this.undoApplyBindings(state);
}


module.exports = ReduceAction

