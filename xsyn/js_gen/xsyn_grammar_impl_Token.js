/*
 * Generated code for class xsyn.grammar.impl.Token
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

var Token = function(name,tokenCode,currentStartLine,currentStartColumn) {
  this.name = name;
  this.tokenCode = tokenCode;
  this.currentStartLine = currentStartLine;
  this.currentStartColumn = currentStartColumn;
};

Token.prototype.__defineGetter__('name', function() {
  return this.$name$;
});
Token.prototype.__defineSetter__('name', function(name) {
  this.$name$ = name;
});

Token.prototype.__defineGetter__('tokenCode', function() {
  return this.$tokenCode$;
});
Token.prototype.__defineSetter__('tokenCode', function(tokenCode) {
  this.$tokenCode$ = tokenCode;
});

Token.prototype.__defineGetter__('currentStartLine', function() {
  return this.$currentStartLine$;
});
Token.prototype.__defineSetter__('currentStartLine', function(currentStartLine) {
  this.$currentStartLine$ = currentStartLine;
});

Token.prototype.__defineGetter__('currentStartColumn', function() {
  return this.$currentStartColumn$;
});
Token.prototype.__defineSetter__('currentStartColumn', function(currentStartColumn) {
  this.$currentStartColumn$ = currentStartColumn;
});

/**
 * @method toString()
 * @returns java.lang.String
 */
Token.prototype.toString = function() {
  var s = '';
  s += GrammarUtils.tokenIdAsText(this.getId());
  s += '\t: ';
  s += this.getText();
  s += '\t '
  s += this.getStartPosition();
  return s;
}

/**
 * @method getName()
 * @returns java.lang.String
 */
Token.prototype.getName = function() {
  return this.getText();
}

/**
 * @method getId()
 * @returns int
 */
Token.prototype.getId = function() {
  return this.tokenCode;
}

/**
 * @method copy()
 * @returns xsyn.grammar.impl.Token
 */
Token.prototype.copy = function() {
  var t = new Token(this.name, this.tokenCode, this.currentStartLine, this.currentStartColumn);
  return t;
}

/**
 * @method getText()
 * @returns java.lang.String
 */
Token.prototype.getText = function() {
  return this.name;
}

/**
 * @method getStartPosition()
 * @returns xsyn.grammar.IPosition
 */
Token.prototype.getStartPosition = function() {
  return new Position(this.currentStartLine, this.currentStartColumn);
}

/**
 * @method hasGreaterPosition(tk)
 * @returns boolean
 */
Token.prototype.hasGreaterPosition = function(tk) {
  return this.getStartPosition().isGreaterThan(tk.getStartPosition());
}

/**
 * @method toConstructorString()
 * @returns java.lang.String
 */
Token.prototype.toConstructorString = function() {
  return GrammarUtils.tokenConstructorString(this);
}


module.exports = Token

