/*
 * Generated code for class xsyn.grammar.impl.GrammarDefTokenStream
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

var GrammarDefTokenStream = function(text) {
  xsyn.grammar.impl.DefaultTokenStream.call(this, text);
  DefaultTokenStream.call(this,text);
  this.init();
};
util.inherits(GrammarDefTokenStream,xsyn.grammar.impl.DefaultTokenStream);

GrammarDefTokenStream.__defineGetter__('IDENT_KEYWORD', function() {
  if (typeof(this.$IDENT_KEYWORD$) === 'undefined') {
    this.$IDENT_KEYWORD$ = 'ident';
  }
  return this.$IDENT_KEYWORD$;
});
GrammarDefTokenStream.__defineSetter__('IDENT_KEYWORD', function(IDENT_KEYWORD) {
  this.$IDENT_KEYWORD$ = IDENT_KEYWORD;
});

GrammarDefTokenStream.__defineGetter__('NUMBER_KEYWORD', function() {
  if (typeof(this.$NUMBER_KEYWORD$) === 'undefined') {
    this.$NUMBER_KEYWORD$ = 'number';
  }
  return this.$NUMBER_KEYWORD$;
});
GrammarDefTokenStream.__defineSetter__('NUMBER_KEYWORD', function(NUMBER_KEYWORD) {
  this.$NUMBER_KEYWORD$ = NUMBER_KEYWORD;
});

GrammarDefTokenStream.__defineGetter__('STRING_KEYWORD', function() {
  if (typeof(this.$STRING_KEYWORD$) === 'undefined') {
    this.$STRING_KEYWORD$ = 'string';
  }
  return this.$STRING_KEYWORD$;
});
GrammarDefTokenStream.__defineSetter__('STRING_KEYWORD', function(STRING_KEYWORD) {
  this.$STRING_KEYWORD$ = STRING_KEYWORD;
});

GrammarDefTokenStream.__defineGetter__('LONGSTRING_KEYWORD', function() {
  if (typeof(this.$LONGSTRING_KEYWORD$) === 'undefined') {
    this.$LONGSTRING_KEYWORD$ = 'longstring';
  }
  return this.$LONGSTRING_KEYWORD$;
});
GrammarDefTokenStream.__defineSetter__('LONGSTRING_KEYWORD', function(LONGSTRING_KEYWORD) {
  this.$LONGSTRING_KEYWORD$ = LONGSTRING_KEYWORD;
});

GrammarDefTokenStream.__defineGetter__('SYMBOL_KEYWORD', function() {
  if (typeof(this.$SYMBOL_KEYWORD$) === 'undefined') {
    this.$SYMBOL_KEYWORD$ = 'symbol';
  }
  return this.$SYMBOL_KEYWORD$;
});
GrammarDefTokenStream.__defineSetter__('SYMBOL_KEYWORD', function(SYMBOL_KEYWORD) {
  this.$SYMBOL_KEYWORD$ = SYMBOL_KEYWORD;
});

GrammarDefTokenStream.__defineGetter__('KeywordsAndSymbols', function() {
  if (typeof(this.$KeywordsAndSymbols$) === 'undefined') {
    this.$KeywordsAndSymbols$ = [GrammarDefTokenStream.IDENT_KEYWORD,GrammarDefTokenStream.NUMBER_KEYWORD,GrammarDefTokenStream.STRING_KEYWORD,GrammarDefTokenStream.LONGSTRING_KEYWORD,GrammarDefTokenStream.SYMBOL_KEYWORD];
  }
  return this.$KeywordsAndSymbols$;
});
GrammarDefTokenStream.__defineSetter__('KeywordsAndSymbols', function(KeywordsAndSymbols) {
  this.$KeywordsAndSymbols$ = KeywordsAndSymbols;
});

/**
 * @method init()
 * @returns void
 */
GrammarDefTokenStream.prototype.init = function() {
  for(var i = 0; i < GrammarDefTokenStream.KeywordsAndSymbols.length; i++) {
    var kw = GrammarDefTokenStream.KeywordsAndSymbols[i];
  GrammarUtils.debug('--> registering keyword: ' + kw);
    try {
      this.registerKeywordOrSymbol(kw);
    } catch(e) {
      console.error(e);
    }
  }
}


module.exports = GrammarDefTokenStream

