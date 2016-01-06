/*
 * Generated code for class xsyn.grammar.impl.DefaultTokenStream
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

var DefaultTokenStream = function(text, plainMode) {
  this.text = text;
  this.plainMode = plainMode;
};

DefaultTokenStream.__defineGetter__('TOKEN_IDENTIFIER', function() {
  if (typeof(this.$TOKEN_IDENTIFIER$) === 'undefined') {
    this.$TOKEN_IDENTIFIER$ = 0;
  }
  return this.$TOKEN_IDENTIFIER$;
});
DefaultTokenStream.__defineSetter__('TOKEN_IDENTIFIER', function(TOKEN_IDENTIFIER) {
  this.$TOKEN_IDENTIFIER$ = TOKEN_IDENTIFIER;
});

DefaultTokenStream.__defineGetter__('TOKEN_NUMBER', function() {
  if (typeof(this.$TOKEN_NUMBER$) === 'undefined') {
    this.$TOKEN_NUMBER$ = 1;
  }
  return this.$TOKEN_NUMBER$;
});
DefaultTokenStream.__defineSetter__('TOKEN_NUMBER', function(TOKEN_NUMBER) {
  this.$TOKEN_NUMBER$ = TOKEN_NUMBER;
});

DefaultTokenStream.__defineGetter__('TOKEN_OPEN_BRACKET', function() {
  if (typeof(this.$TOKEN_OPEN_BRACKET$) === 'undefined') {
    this.$TOKEN_OPEN_BRACKET$ = 2;
  }
  return this.$TOKEN_OPEN_BRACKET$;
});
DefaultTokenStream.__defineSetter__('TOKEN_OPEN_BRACKET', function(TOKEN_OPEN_BRACKET) {
  this.$TOKEN_OPEN_BRACKET$ = TOKEN_OPEN_BRACKET;
});

DefaultTokenStream.__defineGetter__('TOKEN_CLOSE_BRACKET', function() {
  if (typeof(this.$TOKEN_CLOSE_BRACKET$) === 'undefined') {
    this.$TOKEN_CLOSE_BRACKET$ = 3;
  }
  return this.$TOKEN_CLOSE_BRACKET$;
});
DefaultTokenStream.__defineSetter__('TOKEN_CLOSE_BRACKET', function(TOKEN_CLOSE_BRACKET) {
  this.$TOKEN_CLOSE_BRACKET$ = TOKEN_CLOSE_BRACKET;
});

DefaultTokenStream.__defineGetter__('TOKEN_STRING', function() {
  if (typeof(this.$TOKEN_STRING$) === 'undefined') {
    this.$TOKEN_STRING$ = 4;
  }
  return this.$TOKEN_STRING$;
});
DefaultTokenStream.__defineSetter__('TOKEN_STRING', function(TOKEN_STRING) {
  this.$TOKEN_STRING$ = TOKEN_STRING;
});

DefaultTokenStream.__defineGetter__('TOKEN_LONG_STRING', function() {
  if (typeof(this.$TOKEN_LONG_STRING$) === 'undefined') {
    this.$TOKEN_LONG_STRING$ = 5;
  }
  return this.$TOKEN_LONG_STRING$;
});
DefaultTokenStream.__defineSetter__('TOKEN_LONG_STRING', function(TOKEN_LONG_STRING) {
  this.$TOKEN_LONG_STRING$ = TOKEN_LONG_STRING;
});

DefaultTokenStream.__defineGetter__('TOKEN_SYMBOL', function() {
  if (typeof(this.$TOKEN_SYMBOL$) === 'undefined') {
    this.$TOKEN_SYMBOL$ = 6;
  }
  return this.$TOKEN_SYMBOL$;
});
DefaultTokenStream.__defineSetter__('TOKEN_SYMBOL', function(TOKEN_SYMBOL) {
  this.$TOKEN_SYMBOL$ = TOKEN_SYMBOL;
});

DefaultTokenStream.__defineGetter__('TOKEN_EPSILON', function() {
  if (typeof(this.$TOKEN_EPSILON$) === 'undefined') {
    this.$TOKEN_EPSILON$ = 7;
  }
  return this.$TOKEN_EPSILON$;
});
DefaultTokenStream.__defineSetter__('TOKEN_EPSILON', function(TOKEN_EPSILON) {
  this.$TOKEN_EPSILON$ = TOKEN_EPSILON;
});

DefaultTokenStream.__defineGetter__('TOKEN_EOF', function() {
  if (typeof(this.$TOKEN_EOF$) === 'undefined') {
    this.$TOKEN_EOF$ = 8;
  }
  return this.$TOKEN_EOF$;
});
DefaultTokenStream.__defineSetter__('TOKEN_EOF', function(TOKEN_EOF) {
  this.$TOKEN_EOF$ = TOKEN_EOF;
});

DefaultTokenStream.__defineGetter__('TOKEN_REGEXP', function() {
  if (typeof(this.$TOKEN_REGEXP$) === 'undefined') {
    this.$TOKEN_REGEXP$ = 9;
  }
  return this.$TOKEN_REGEXP$;
});
DefaultTokenStream.__defineSetter__('TOKEN_REGEXP', function(TOKEN_REGEXP) {
  this.$TOKEN_REGEXP$ = TOKEN_REGEXP;
});

DefaultTokenStream.__defineGetter__('LAST_BUILTIN_TOKENID', function() {
  if (typeof(this.$LAST_BUILTIN_TOKENID$) === 'undefined') {
    this.$LAST_BUILTIN_TOKENID$ = DefaultTokenStream.TOKEN_REGEXP;
  }
  return this.$LAST_BUILTIN_TOKENID$;
});
DefaultTokenStream.__defineSetter__('LAST_BUILTIN_TOKENID', function(LAST_BUILTIN_TOKENID) {
  this.$LAST_BUILTIN_TOKENID$ = LAST_BUILTIN_TOKENID;
});

DefaultTokenStream.__defineGetter__('OPEN_BRACKETS', function() {
  if (typeof(this.$OPEN_BRACKETS$) === 'undefined') {
    this.$OPEN_BRACKETS$ = '([{';
  }
  return this.$OPEN_BRACKETS$;
});
DefaultTokenStream.__defineSetter__('OPEN_BRACKETS', function(OPEN_BRACKETS) {
  this.$OPEN_BRACKETS$ = OPEN_BRACKETS;
});

DefaultTokenStream.__defineGetter__('CLOSE_BRACKETS', function() {
  if (typeof(this.$CLOSE_BRACKETS$) === 'undefined') {
    this.$CLOSE_BRACKETS$ = '}])';
  }
  return this.$CLOSE_BRACKETS$;
});
DefaultTokenStream.__defineSetter__('CLOSE_BRACKETS', function(CLOSE_BRACKETS) {
  this.$CLOSE_BRACKETS$ = CLOSE_BRACKETS;
});

DefaultTokenStream.__defineGetter__('SYMBOLS', function() {
  if (typeof(this.$SYMBOLS$) === 'undefined') {
    this.$SYMBOLS$ = '~`!@#$%^&*_-+=|\\:;<>,.?/';
  }
  return this.$SYMBOLS$;
});
DefaultTokenStream.__defineSetter__('SYMBOLS', function(SYMBOLS) {
  this.$SYMBOLS$ = SYMBOLS;
});

DefaultTokenStream.__defineGetter__('EOF_CHAR', function() {
  if (typeof(this.$EOF_CHAR$) === 'undefined') {
    this.$EOF_CHAR$ = '\0';
  }
  return this.$EOF_CHAR$;
});
DefaultTokenStream.__defineSetter__('EOF_CHAR', function(EOF_CHAR) {
  this.$EOF_CHAR$ = EOF_CHAR;
});

DefaultTokenStream.__defineGetter__('debugRegExp', function() {
  if (typeof(this.$debugRegExp$) === 'undefined') {
    this.$debugRegExp$ = false;
  }
  return this.$debugRegExp$;
});
DefaultTokenStream.__defineSetter__('debugRegExp', function(debugRegExp) {
  this.$debugRegExp$ = debugRegExp;
});

DefaultTokenStream.prototype.__defineGetter__('text', function() {
  return this.$text$;
});
DefaultTokenStream.prototype.__defineSetter__('text', function(text) {
  var text0 = Utils.preprocessInput(text);
  this.$text$ = this.codeStartEnd != null ? this.codeStartEnd.filterText(text0) : text0;
  this.charp = 0;
  this.line = 1;
  this.col = 1;
  //this.tokens = null;
  //this.chars = null;
  //this.tokenIds = null;
  this.tokens = [];
  this.tokenIds = [];
  this.chars = this.$text$ ? this.$text$.split('') : [];
  this.nextTokenIndex = 0;
});

DefaultTokenStream.prototype.__defineGetter__('tokens', function() {
  if (typeof(this.$tokens$) === 'undefined') {
    this.$tokens$ = [];
  }
  return this.$tokens$;
});
DefaultTokenStream.prototype.__defineSetter__('tokens', function(tokens) {
  this.$tokens$ = tokens;
});

DefaultTokenStream.prototype.__defineGetter__('chars', function() {
  if (typeof(this.$chars$) === 'undefined') {
    this.$chars$ = (this.charp = 0, this.line = 1, this.col = 1, this.text.split(''));
  }
  return this.$chars$;
});
DefaultTokenStream.prototype.__defineSetter__('chars', function(chars) {
  this.$chars$ = chars;
});

DefaultTokenStream.prototype.__defineGetter__('charp', function() {
  if (typeof(this.$charp$) === 'undefined') {
    this.$charp$ = 0;
  }
  return this.$charp$;
});
DefaultTokenStream.prototype.__defineSetter__('charp', function(charp) {
  this.$charp$ = charp;
});

DefaultTokenStream.prototype.__defineGetter__('line', function() {
  if (typeof(this.$line$) === 'undefined') {
    this.$line$ = 1;
  }
  return this.$line$;
});
DefaultTokenStream.prototype.__defineSetter__('line', function(line) {
  this.$line$ = line;
});

DefaultTokenStream.prototype.__defineGetter__('col', function() {
  if (typeof(this.$col$) === 'undefined') {
    this.$col$ = 1;
  }
  return this.$col$;
});
DefaultTokenStream.prototype.__defineSetter__('col', function(col) {
  this.$col$ = col;
});

DefaultTokenStream.prototype.__defineGetter__('nextTokenIndex', function() {
  if (typeof(this.$nextTokenIndex$) === 'undefined') {
    this.$nextTokenIndex$ = 0;
  }
  return this.$nextTokenIndex$;
});
DefaultTokenStream.prototype.__defineSetter__('nextTokenIndex', function(nextTokenIndex) {
  this.$nextTokenIndex$ = nextTokenIndex;
});

DefaultTokenStream.prototype.__defineGetter__('plainMode', function() {
  if (typeof(this.$plainMode$) === 'undefined') {
    this.$plainMode$ = false;
  }
  return this.$plainMode$;
});
DefaultTokenStream.prototype.__defineSetter__('plainMode', function(plainMode) {
  this.$plainMode$ = plainMode;
});

DefaultTokenStream.prototype.__defineGetter__('currentStartLine', function() {
  return this.$currentStartLine$;
});
DefaultTokenStream.prototype.__defineSetter__('currentStartLine', function(currentStartLine) {
  this.$currentStartLine$ = currentStartLine;
});

DefaultTokenStream.prototype.__defineGetter__('currentStartColumn', function() {
  return this.$currentStartColumn$;
});
DefaultTokenStream.prototype.__defineSetter__('currentStartColumn', function(currentStartColumn) {
  this.$currentStartColumn$ = currentStartColumn;
});

DefaultTokenStream.prototype.__defineGetter__('nextCustomTokenId', function() {
  if (typeof(this.$nextCustomTokenId$) === 'undefined') {
    this.$nextCustomTokenId$ = DefaultTokenStream.LAST_BUILTIN_TOKENID + 1;
  }
  return this.$nextCustomTokenId$;
});
DefaultTokenStream.prototype.__defineSetter__('nextCustomTokenId', function(nextCustomTokenId) {
  this.$nextCustomTokenId$ = nextCustomTokenId;
});

DefaultTokenStream.prototype.__defineGetter__('customKeywordsOrSymbolsTokenIds', function() {
  if (typeof(this.$customKeywordsOrSymbolsTokenIds$) === 'undefined') {
    this.$customKeywordsOrSymbolsTokenIds$ = new Map();
  }
  return this.$customKeywordsOrSymbolsTokenIds$;
});
DefaultTokenStream.prototype.__defineSetter__('customKeywordsOrSymbolsTokenIds', function(customKeywordsOrSymbolsTokenIds) {
  this.$customKeywordsOrSymbolsTokenIds$ = customKeywordsOrSymbolsTokenIds;
});

DefaultTokenStream.prototype.__defineGetter__('tokenIds', function() {
  if (typeof(this.$tokenIds$) === 'undefined') {
    this.$tokenIds$ = [];
  }
  return this.$tokenIds$;
});
DefaultTokenStream.prototype.__defineSetter__('tokenIds', function(tokenIds) {
  this.$tokenIds$ = tokenIds;
});

DefaultTokenStream.prototype.__defineGetter__('currentToken', function() {
  return this.$currentToken$;
});
DefaultTokenStream.prototype.__defineSetter__('currentToken', function(currentToken) {
  this.$currentToken$ = currentToken;
});

DefaultTokenStream.prototype.__defineGetter__('codeStartEnd', function() {
  return this.$codeStartEnd$;
});
DefaultTokenStream.prototype.__defineSetter__('codeStartEnd', function(codeStartEnd) {
  this.$codeStartEnd$ = codeStartEnd;
});

DefaultTokenStream.prototype.__defineGetter__('returnedTokens', function() {
  if (typeof(this.$returnedTokens$) === 'undefined') {
    this.$returnedTokens$ = new Stack();
  }
  return this.$returnedTokens$;
});
DefaultTokenStream.prototype.__defineSetter__('returnedTokens', function(returnedTokens) {
  this.$returnedTokens$ = returnedTokens;
});

DefaultTokenStream.prototype.__defineGetter__('commentLinePrefix', function() {
  if (typeof(this.$commentLinePrefix$) === 'undefined') {
    this.$commentLinePrefix$ = '//';
  }
  return this.$commentLinePrefix$;
});
DefaultTokenStream.prototype.__defineSetter__('commentLinePrefix', function(commentLinePrefix) {
  this.$commentLinePrefix$ = commentLinePrefix;
});

/**
 * @method toString()
 * @returns java.lang.String
 */
DefaultTokenStream.prototype.toString = function() {
  return 'DefaultTokenStream.toString() not implemented.';
}

/**
 * @method nextToken()
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.nextToken = function() {
  var ntoken;
  var tlastIndex = this.tokens.length - 1;
  if (tlastIndex < this.nextTokenIndex) {
    ntoken = this.nextNewToken();
  } else {
    ntoken = this.tokens[this.nextTokenIndex++];
  }
  this.currentToken = ntoken;
  return ntoken;
}

/**
 * @method isWhitespace(c)
 * @returns boolean
 */
DefaultTokenStream.prototype.isWhitespace = function(c) {
  return c === ' ' || c === '\r' || c === '\t' || c === '\u000C' || c === '\n';
}

/**
 * @method getTokenId(kw)
 * @returns int
 */
DefaultTokenStream.prototype.getTokenId = function(kw) {
  return this.customKeywordsOrSymbolsTokenIds.get(kw);
}

/**
 * @method shiftToken()
 * @returns void
 */
DefaultTokenStream.prototype.shiftToken = function() {
  this.nextToken();
}

/**
 * @method registerKeywordOrSymbol(kwOrSym)
 * @returns int
 */
DefaultTokenStream.prototype.registerKeywordOrSymbol = function(kwOrSym) {
  var isIdentifier = GrammarUtils.isIdentifier(kwOrSym);
  if (!isIdentifier) {
      if (!GrammarUtils.isSymbol(kwOrSym)) {
  	if (!GrammarUtils.isBracket(kwOrSym)) {
  	    throw new IllegalKeywordOrSymbol(kwOrSym);
  	}
      }
  }
  var kwmap = this.customKeywordsOrSymbolsTokenIds;
  if (!kwmap.containsKey(kwOrSym)) {
      var customId = this.nextCustomTokenId++;
      kwmap.put(kwOrSym,customId);
      //GrammarUtils.debug('-> custom keyword/symbol "' + kwOrSym + '" registered with id ' + customId);
  }
  return kwmap.get(kwOrSym);
}

/**
 * @method getAllTokens(text)
 * @returns java.util.List
 */
DefaultTokenStream.prototype.getAllTokens = function(text) {
  if (text) {
    this.text = text;
  }
  while(!this.isEofToken(this.nextToken()));
  return this.tokens;
}

/**
 * @method hasToken(kwOrSym)
 * @returns boolean
 */
DefaultTokenStream.prototype.hasToken = function(kwOrSym) {
  return this.customKeywordsOrSymbolsTokenIds.containsKey(kw);
}

/**
 * @method undoNextToken()
 * @returns void
 */
DefaultTokenStream.prototype.undoNextToken = function() {
  this.nextTokenIndex--;
  if (this.nextTokenIndex === 0) {
    this.currentToken = null;
    return;
  }
  this.currentToken = this.tokens[this.nextTokenIndex - 1];
}

/**
 * @method setCodeStartEndSymbols(startString,endString)
 * @returns void
 */
DefaultTokenStream.prototype.setCodeStartEndSymbols = function(startString,endString) {
  var spec = new CodeStartEndSpec(startString,endString);
  this.codeStartEnd = spec;
}

/**
 * @method registerCustomToken(tokenName,regexp)
 * @returns int
 */
DefaultTokenStream.prototype.registerCustomToken = function(tokenName,regexp) {
  if (typeof this.customTokens === 'undefined') { this.customTokens = {}; }
  var customTokenDef = this.customTokens[tokenName];
  if (customTokenDef) { return customTokenDef.tokenId; }
  var nextId = this.nextCustomTokenId++;
  this.customTokens[tokenName] = { tokenId : nextId, regexp : regexp };
  return nextId;
}

/**
 * @method getCharAt(index)
 * @returns char
 */
DefaultTokenStream.prototype.getCharAt = function(index) {
  if (index >= this.chars.length) return DefaultTokenStream.EOF_CHAR;
  return this.chars[index];
}

/**
 * @method moveForward(count)
 * @returns void
 */
DefaultTokenStream.prototype.moveForward = function(count) {
  var cnt = (typeof count === 'number') ? count : 1;
  for(var i = 0; i < cnt; i++) {
      this.charp++;
      if (this.getCharAt(this.charp) === '\n') {
        this.line++;
        this.col = 0;
      } else {
        this.col++;
      }
  }
}

/**
 * @method moveForwardUntilEndOfLine()
 * @returns void
 */
DefaultTokenStream.prototype.moveForwardUntilEndOfLine = function() {
  for(;;) {
    this.charp++;
    var c = this.getCharAt(this.charp);
    if (c === DefaultTokenStream.EOF_CHAR) return;
    if (c === '\n') {
      this.line++;
      this.col = 0;
      return;
    } else {
      this.col++;
    }
  }
}

/**
 * @method moveBackward()
 * @returns void
 */
DefaultTokenStream.prototype.moveBackward = function() {
  if (this.getCharAt(this.charp) === '\n') {
    this.line--;
  } else {
    this.col--;
  }
  this.charp--;
}

/**
 * @method createToken(t,tokenCode)
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.createToken = function(t,tokenCode) {
  return new Token(t,tokenCode,this.currentStartLine,this.currentStartColumn);
}

/**
 * @method skipOverCommentLine()
 * @returns boolean
 */
DefaultTokenStream.prototype.skipOverCommentLine = function() {
  var index = 0;
  var clp = this.commentLinePrefix;
  if (typeof clp !== 'string') return false;
  if (clp.length === 0) return false;
  for(var i = 0; i < clp.length; i++) {
    if (this.getCharAt(this.charp+i) === clp[i]) continue;
    return false;
  }
  this.moveForwardUntilEndOfLine();
  return true;
}

/**
 * @method skipOverWhitespace()
 * @returns boolean
 */
DefaultTokenStream.prototype.skipOverWhitespace = function() {
  if (this.isWhitespace(this.getCharAt(this.charp))) {
    this.moveForward();
    return true;
  }
  return false;
}

/**
 * @method skipOverWhitespacesAndCommentLines()
 * @returns void
 */
DefaultTokenStream.prototype.skipOverWhitespacesAndCommentLines = function() {
  while(this.skipOverWhitespace() || this.skipOverCommentLine());
}

/**
 * @method nextNewToken()
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.nextNewToken = function() {
  var tokens = this.tokens;
  var token = null;
  //while (this.isWhitespace(this.getCharAt(this.charp))) this.moveForward();
  this.skipOverWhitespacesAndCommentLines();
  this.currentStartLine = this.line;
  this.currentStartColumn = this.col;
  var token = null;
  if (!token) token = this.scanCustomTokens();
  if (!token) token = this.scanIdentifier();
  if (!token) token = this.scanNumber();
  if (!token) token = this.scanLongString();
  if (!token) token = this.scanOpenBracket();
  if (!token) token = this.scanCloseBracket();
  if (!token) token = this.scanString();
  if (!token) token = this.scanSymbol();
  if (!!token) {
      //GrammarUtils.debug(token);
  } else {
      //console.log('creating EOF token...');
      token = this.createToken('$',DefaultTokenStream.TOKEN_EOF);
  }
  this.tokens.push(token);
  this.currentToken = token;
  this.nextTokenIndex = this.tokens.length;
  return token;
}

/**
 * @method scanIdentifier()
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.scanIdentifier = function() {
  var reStart = new RegExp('^[_A-Za-z]$');
  var rePart = new RegExp('^[A-Za-z0-9_]$')
  var t = '';
  var found = false;
  var c = this.getCharAt(this.charp);
  if (c.match(reStart) && (c !== DefaultTokenStream.EOF_CHAR)) {
    t += c;
    this.moveForward();
    found = true;
  } else {
    return null;
  }
  for(;;) {
    var c = this.getCharAt(this.charp);
    if (c.match(rePart) && (c !== DefaultTokenStream.EOF_CHAR)) {
      t += c;
      this.moveForward();
      continue;
    }
    break;
  }
  if (found) {
    return this.createIdentifierOrSymbolToken(t, DefaultTokenStream.TOKEN_IDENTIFIER);
  }
  return null;
}

/**
 * @method scanNumber()
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.scanNumber = function() {
  var digitsAndDecimalPoint = '0123456789.';
  var onlyDigits = '0123456789';
  var allowed = digitsAndDecimalPoint;
  var t = '';
  var c;
  var found = false;
  while(GrammarUtils.isOneOf(c = this.getCharAt(this.charp), allowed)) {
      t += c;
      this.moveForward();
      found = true;
      if (c == '.') allowed = onlyDigits;
  }
  if (found) {
      if (t[t.length-1] === '.') {
  	this.moveBackward();
  	t = t.substring(0, t.length-1);
  	if (t.length == 0) {
  	    return null;
  	}
      }
      return this.createToken(t,DefaultTokenStream.TOKEN_NUMBER);
  }
  return null;
}

/**
 * @method scanOpenBracket()
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.scanOpenBracket = function() {
  var c = this.getCharAt(this.charp);
  if (GrammarUtils.isOneOf(c,DefaultTokenStream.OPEN_BRACKETS)) {
    this.moveForward();
    return this.createIdentifierOrSymbolToken(c,DefaultTokenStream.TOKEN_OPEN_BRACKET);
  }
  return null;
}

/**
 * @method scanCloseBracket()
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.scanCloseBracket = function() {
  var c = this.getCharAt(this.charp);
  if (GrammarUtils.isOneOf(c,DefaultTokenStream.CLOSE_BRACKETS)) {
    this.moveForward();
    return this.createIdentifierOrSymbolToken(c,DefaultTokenStream.TOKEN_CLOSE_BRACKET);
  }
  return null;
}

/**
 * @method scanString()
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.scanString = function() {
  var stringQuote;
  var t = '';
  var c = this.getCharAt(this.charp);
  if (c === '\'' || c === '"') {
      stringQuote = c;
      this.moveForward();
      t += c;
      for(;;) {
  	   c = this.getCharAt(this.charp);
  	   if (c === stringQuote) {
  	     this.moveForward();
  	     t += c;
  	     return this.createToken(t, DefaultTokenStream.TOKEN_STRING);
  	   }
  	   if (c === '\\') {
  	     t += c;
  	     this.moveForward();
  	     c = this.getCharAt(this.charp);
  	     if (c != DefaultTokenStream.EOF_CHAR) {
  		 t += c;
  		 this.moveForward();
  	     }
  	   }
  	   else if (c === DefaultTokenStream.EOF_CHAR) {
  	      // this should be an error (eof reached within string)
  	      // but we ignore it and just add the missing quote
  	      t += stringQuote;
  	      return this.createToken(t,DefaultTokenStream.TOKEN_STRING);
  	   }
  	   else {
  	     this.moveForward();
  	     t += c;
  	   }
      }
  }
  return null;
}

/**
 * @method scanSymbol()
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.scanSymbol = function() {
  var t = '';
  var c;
  var found = false;
  while(GrammarUtils.isOneOf(c = this.getCharAt(this.charp), DefaultTokenStream.SYMBOLS)) {
      t += c;
      this.moveForward();
      found = true;
  }
  if (found) {
      return this.createIdentifierOrSymbolToken(t, DefaultTokenStream.TOKEN_SYMBOL);
  }
  return null;
}

/**
 * @method isEofToken(token)
 * @returns boolean
 */
DefaultTokenStream.prototype.isEofToken = function(token) {
  return token.getId() === DefaultTokenStream.TOKEN_EOF;
}

/**
 * @method createIdentifierOrSymbolToken(t,tokenId)
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.createIdentifierOrSymbolToken = function(t,tokenId) {
  var tid = tokenId;
  if (!this.plainMode) {
    var kwmap = this.customKeywordsOrSymbolsTokenIds;
    if (kwmap.containsKey(t)) {
      tid = kwmap.get(t);
    }
  }
  return this.createToken(t,tid);
}

/**
 * @method scanLongString()
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.scanLongString = function() {
  if ((this.getCharAt(this.charp) === '{') && (this.getCharAt(this.charp+1) === '%')) {
      this.moveForward();
      this.moveForward();
      var INSIDE_STRING = 0;
      var PERCENT_FOUND = 1;
      var OPEN_CBRACKET_FOUND = 2;
      var t = '';
      var thisObj = this;
      var _createToken = function() {
         var q = unescape('%27');
         return thisObj.createToken(q + escape(t) + q,DefaultTokenStream.TOKEN_LONG_STRING);
      };
      var state = INSIDE_STRING;
      var level = 1;
      for(;;) {
         var c = this.getCharAt(this.charp);
         if (c === DefaultTokenStream.EOF_CHAR) {
             return _createToken();
         }
         switch(state) {
         case INSIDE_STRING:
             switch(c) {
             case '%':
                state = PERCENT_FOUND;
                this.moveForward();
                 break;
  	   case '{':
  	       state = OPEN_CBRACKET_FOUND;
  	       // fall through
             default:
                t += c;
                this.moveForward();
                break;
             }
             break;
         case PERCENT_FOUND:
             switch(c) {
             case '%':
                t += '%';
                this.moveForward();
                break;
             case '}':
                this.moveForward();
                if (--level === 0) {
                    return _createToken();
                } else {
                    t += '%' + c;
                }
                 break;
  	   case '{':
  	       state = OPEN_CBRACKET_FOUND;
  	       t += '%' + c;
  	       this.moveForward();
  	       break;
             default:
                t += '%' + c;
                state = INSIDE_STRING;
                this.moveForward();
                break;
             }
             break;
         case OPEN_CBRACKET_FOUND:
  	   switch(c) {
  	   case '{':
  	       t += c;
  	       this.moveForward();
  	       break;
  	   case '%':
  	       level++;
  	       // fall through
  	   default:
  	       state = INSIDE_STRING;
  	       t += c;
  	       this.moveForward();
  	       break;
  	   }
  	   break;
         }
      }
  } else {
      return null;
  }
}

/**
 * @method scanCustomTokens()
 * @returns xsyn.grammar.IToken
 */
DefaultTokenStream.prototype.scanCustomTokens = function() {
  if (!this.text) return null;
  if (!this.hasCustomTokens()) return null;
  var t = this.text.substr(this.charp);
  //DefaultTokenStream.debugRegExp && console.log('looking for custom tokens in \'' + t + '\'...');
  
  for(var tname in this.customTokens) {
      if (!this.customTokens.hasOwnProperty(tname)) continue;
      var tdef = this.customTokens[tname];
      DefaultTokenStream.debugRegExp && console.log('trying ' + tdef.regexp + '...');
      var tid = tdef.tokenId;
      var re = tdef.regexp;
      var m = t.match(re);
      if (m && m.index === 0 && m[0].length > 0) {
         DefaultTokenStream.debugRegExp && console.log('match found for custom token with id ' + tid) && console.log(m);
         var tokenText = m[0];
         var len = tokenText.length;
         this.moveForward(len);
         return this.createIdentifierOrSymbolToken(m, tid);
      }
  }
  return null;
}

/**
 * @method hasCustomTokens()
 * @returns boolean
 */
DefaultTokenStream.prototype.hasCustomTokens = function() {
  for(var p in this.customTokens) {
    if (this.customTokens.hasOwnProperty(p)) {
        return true;
    }
  }
  return false;
}


module.exports = DefaultTokenStream

