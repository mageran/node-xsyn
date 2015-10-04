/*
 * Generated code for class xsyn.grammar.utils.GrammarUtils
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

var GrammarUtils = function() {
};

GrammarUtils.__defineGetter__('epsilonToken', function() {
  if (typeof(this.$epsilonToken$) === 'undefined') {
    this.$epsilonToken$ = new EpsilonTokenDef();
  }
  return this.$epsilonToken$;
});

GrammarUtils.__defineGetter__('endToken', function() {
  if (typeof(this.$endToken$) === 'undefined') {
    this.$endToken$ = new EndTokenDef();
  }
  return this.$endToken$;
});

/**
 * @method debug(msg)
 * @returns void
 */
GrammarUtils.debug = function(msg) {
  //console.log(msg);
}

/**
 * @method isIdentifier(s)
 * @returns boolean
 */
GrammarUtils.isIdentifier = function(s) {
  return GrammarUtils.isTokenWithId(s,DefaultTokenStream.TOKEN_IDENTIFIER);
}

/**
 * @method isSymbol(s)
 * @returns boolean
 */
GrammarUtils.isSymbol = function(s) {
  return GrammarUtils.isTokenWithId(s,DefaultTokenStream.TOKEN_SYMBOL);
}

/**
 * @method isBracket(kwOrSym)
 * @returns boolean
 */
GrammarUtils.isBracket = function(kwOrSym) {
  if (kwOrSym.length !== 1) return false;
  var c = kwOrSym.substr(0,1);
  return (GrammarUtils.isOneOf(c,DefaultTokenStream.OPEN_BRACKETS) ||
          GrammarUtils.isOneOf(c,DefaultTokenStream.CLOSE_BRACKETS));
}

/**
 * @method isEofToken(token)
 * @returns boolean
 */
GrammarUtils.isEofToken = function(token) {
  return token.getId() === DefaultTokenStream.TOKEN_EOF;
}

/**
 * @method isOneOf(c,s)
 * @returns boolean
 */
GrammarUtils.isOneOf = function(c,s) {
  var carray = s.split('');
  var fres = carray.filter(function(c0) { return c0 === c; });
  return fres.length > 0;
}

/**
 * @method isTokenWithId(s,tokenId)
 * @returns boolean
 */
GrammarUtils.isTokenWithId = function(s,tokenId) {
  var tstrm = new DefaultTokenStream(s,true);
  var tokens = tstrm.getAllTokens();
  if (tokens.length === 2) {
    var tk = tokens[0];
    return tk.getId() === tokenId && tk.getText() == s;
  }
  return false;
}

/**
 * @method generateUuid()
 * @returns java.lang.String
 */
GrammarUtils.generateUuid = function() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c=='x' ? r : (r&0x3|0x8)).toString(16);
  });
  return uuid;
}

/**
 * @method removeQuotes(s)
 * @returns java.lang.String
 */
GrammarUtils.removeQuotes = function(s) {
  var len1 = s.length - 1;
  var carray = s.split('');
  if ((carray[0] === '\'' && carray[len1] === '\'') ||
      (carray[0] === '"' && carray[len1] === '"')) {
      return s.substring(1,len1);
  }
  return s;
}

/**
 * @method getNonterminalOfProductionRules(prules)
 * @returns java.util.Set
 */
GrammarUtils.getNonterminalOfProductionRules = function(prules) {
  var res = [];
  for(var i = 0; i < prules.length; i++) {
    var prule = prules[i];
    var nt = prule.nonterminal;
    if (res.indexOf(prule) < 0) {
      res.push(prule.nonterminal);
    }
  }
  return res;
}

/**
 * @method tokenIdAsText(id)
 * @returns java.lang.String
 */
GrammarUtils.tokenIdAsText = function(id) {
  switch(id) {
  case DefaultTokenStream.TOKEN_IDENTIFIER:
  return "IDENTIFIER";
  case DefaultTokenStream.TOKEN_NUMBER:
  return 'NUMBER';
  case DefaultTokenStream.TOKEN_STRING:
  return 'STRING';
  case DefaultTokenStream.TOKEN_LONG_STRING:
  return 'LONG_STRING';
  case DefaultTokenStream.TOKEN_SYMBOL:
  return 'SYMBOL';
  case DefaultTokenStream.TOKEN_OPEN_BRACKET:
  return 'OPEN_BRACKET';
  case DefaultTokenStream.TOKEN_CLOSE_BRACKET:
  return 'CLOSE_BRACKET';
  case DefaultTokenStream.TOKEN_EOF:
  return 'EOF';
  default:
  return 'TOKEN_' + id;	
  }
}

/**
 * @method tokenConstructorString(token)
 * @returns java.lang.String
 */
GrammarUtils.tokenConstructorString = function(token) {
  var argstr = '(\'' + token.getText() + '\')';
  switch(token.getId()) {
  case DefaultTokenStream.TOKEN_IDENTIFIER:
  return 'ident' + argstr;
  case DefaultTokenStream.TOKEN_NUMBER:
  return 'number' + argstr;
  case DefaultTokenStream.TOKEN_STRING:
  return 'string(' + token.getText() + ')';
  case DefaultTokenStream.TOKEN_LONG_STRING:
  return 'longstring(' + token.getText() + ')';
  case DefaultTokenStream.TOKEN_SYMBOL:
  return 'symbol' + argstr;
  case DefaultTokenStream.TOKEN_OPEN_BRACKET:
  return 'open' + argstr;
  case DefaultTokenStream.TOKEN_CLOSE_BRACKET:
  return 'close + argstr';
  case DefaultTokenStream.TOKEN_EOF:
  return 'eof';
  default:
  return 'kw' + argstr;	
  }
}


module.exports = GrammarUtils

