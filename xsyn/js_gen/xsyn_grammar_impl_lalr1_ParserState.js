/*
 * Generated code for class xsyn.grammar.impl.lalr1.ParserState
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

var ParserState = function(grammar) {
  this.grammar = grammar;
  this.parseStateStack = new Stack();
  this.parseStateStack.push(grammar.getInitialState());
  this.tokenStack = new Stack();
  this.outputRules = [];
  this.getTokenStream().nextToken()
};

ParserState.prototype.__defineGetter__('grammar', function() {
  return this.$grammar$;
});
ParserState.prototype.__defineSetter__('grammar', function(grammar) {
  this.$grammar$ = grammar;
});

ParserState.prototype.__defineGetter__('parseStateStack', function() {
  return this.$parseStateStack$;
});
ParserState.prototype.__defineSetter__('parseStateStack', function(parseStateStack) {
  this.$parseStateStack$ = parseStateStack;
});

ParserState.prototype.__defineGetter__('tokenStack', function() {
  return this.$tokenStack$;
});
ParserState.prototype.__defineSetter__('tokenStack', function(tokenStack) {
  this.$tokenStack$ = tokenStack;
});

ParserState.prototype.__defineGetter__('output', function() {
  if (typeof(this.$output$) === 'undefined') {
    this.$output$ = [];
  }
  return this.$output$;
});
ParserState.prototype.__defineSetter__('output', function(output) {
  this.$output$ = output;
});

ParserState.prototype.__defineGetter__('outputRules', function() {
  if (typeof(this.$outputRules$) === 'undefined') {
    this.$outputRules$ = [];
  }
  return this.$outputRules$;
});
ParserState.prototype.__defineSetter__('outputRules', function(outputRules) {
  this.$outputRules$ = outputRules;
});

ParserState.prototype.__defineGetter__('maxTokenReached', function() {
  return this.$maxTokenReached$;
});
ParserState.prototype.__defineSetter__('maxTokenReached', function(maxTokenReached) {
  this.$maxTokenReached$ = maxTokenReached;
});

/**
 * @method toString()
 * @returns java.lang.String
 */
ParserState.prototype.toString = function() {
  var s = '';
  s += 'TokenStack:';
  for(var i = 0; i < this.tokenStack.length; i++) {
    s += ' ' + this.tokenStack[i].name;
  }
  return s;
}

/**
 * @method getTokenStream()
 * @returns xsyn.grammar.ITokenStream
 */
ParserState.prototype.getTokenStream = function() {
  return this.grammar.tokenStream
}

/**
 * @method acceptedTokenNames()
 * @returns java.util.List
 */
ParserState.prototype.acceptedTokenNames = function() {
  return this.currentParseState().acceptedTokenNames();
}

/**
 * @method shiftToken()
 * @returns void
 */
ParserState.prototype.shiftToken = function() {
  this.getTokenStream().shiftToken();
}

/**
 * @method currentToken()
 * @returns xsyn.grammar.IToken
 */
ParserState.prototype.currentToken = function() {
  return this.getTokenStream().currentToken;
}

/**
 * @method addToOutput(prule)
 * @returns void
 */
ParserState.prototype.addToOutput = function(prule) {
  this.outputRules.push(prule);
}

/**
 * @method popParseState()
 * @returns xsyn.grammar.IParseState
 */
ParserState.prototype.popParseState = function() {
  return this.parseStateStack.pop();
}

/**
 * @method popTokenStack(pelem)
 * @returns xsyn.grammar.IBoundProductionRuleElement
 */
ParserState.prototype.popTokenStack = function(pelem) {
  return this.tokenStack.pop();
}

/**
 * @method pushTokenStack(pelem)
 * @returns void
 */
ParserState.prototype.pushTokenStack = function(pelem) {
  this.tokenStack.push(pelem);
  GrammarUtils.debug('pushed to token stack: ' + pelem);
}

/**
 * @method pushParseState(state)
 * @returns void
 */
ParserState.prototype.pushParseState = function(state) {
  this.parseStateStack.push(state);
}

/**
 * @method removeLastOutput()
 * @returns void
 */
ParserState.prototype.removeLastOutput = function() {
  var orules = this.outputRules;
  var rsize = orules.length;
  if (rsize > 0) {
    this.outputRules.splice(rsize - 1, 1);
  }
}

/**
 * @method currentParseState()
 * @returns xsyn.grammar.IParseState
 */
ParserState.prototype.currentParseState = function() {
  return this.parseStateStack.peek();
}

/**
 * @method maybeSetMaxTokenReached()
 * @returns void
 */
ParserState.prototype.maybeSetMaxTokenReached = function() {
  var tk = this.currentToken();
  if (this.maxTokenReached == null || tk.hasGreaterPosition(this.maxTokenReached)) {
     //console.log('maxTokenReached set to: ' + tk.name);
  	this.maxTokenReached = tk;
  }
}

/**
 * @method getConstructorString()
 * @returns java.lang.String
 */
ParserState.prototype.getConstructorString = function() {
  var orules = this.outputRules;
  for(var i = 0; i < orules.length; i++) {
    var prule = orules[i];
    if (prule.productionRule.nonterminal.isStartNonterminal()) {
      return prule.toConstructorString();
    }
  }
  return '';
}

/**
 * @method getTokenForErrorReporting()
 * @returns xsyn.grammar.IToken
 */
ParserState.prototype.getTokenForErrorReporting = function() {
  return (this.maxTokenReached != null) ? this.maxTokenReached : this.currentToken();
}

/**
 * @method pushCurrentToken()
 * @returns void
 */
ParserState.prototype.pushCurrentToken = function() {
  var tok = this.currentToken();
  this.pushTokenStack(this.currentToken());
}

/**
 * @method unshiftToken()
 * @returns void
 */
ParserState.prototype.unshiftToken = function() {
  this.getTokenStream().undoNextToken();
}

/**
 * @method showOutputRules()
 * @returns void
 */
ParserState.prototype.showOutputRules = function() {
  console.log('ParserState.showOutputRules() not implemented.');
}


module.exports = ParserState

