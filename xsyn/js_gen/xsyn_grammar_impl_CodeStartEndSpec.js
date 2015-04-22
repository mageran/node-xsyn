/*
 * Generated code for class xsyn.grammar.impl.CodeStartEndSpec
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

var CodeStartEndSpec = function(startString, endString) {
  this.startString = startString
  this.endString = endString;
  this.startStringLength = startString.length;
  this.endStringLength = endString.length;
};

CodeStartEndSpec.prototype.__defineGetter__('startString', function() {
  return this.$startString$;
});
CodeStartEndSpec.prototype.__defineSetter__('startString', function(startString) {
  this.$startString$ = startString;
});

CodeStartEndSpec.prototype.__defineGetter__('endString', function() {
  return this.$endString$;
});
CodeStartEndSpec.prototype.__defineSetter__('endString', function(endString) {
  this.$endString$ = endString;
});

CodeStartEndSpec.prototype.__defineGetter__('startStringLength', function() {
  return this.$startStringLength$;
});
CodeStartEndSpec.prototype.__defineSetter__('startStringLength', function(startStringLength) {
  this.$startStringLength$ = startStringLength;
});

CodeStartEndSpec.prototype.__defineGetter__('endStringLength', function() {
  return this.$endStringLength$;
});
CodeStartEndSpec.prototype.__defineSetter__('endStringLength', function(endStringLength) {
  this.$endStringLength$ = endStringLength;
});

/**
 * @method filterText(text0)
 * @returns java.lang.String
 */
CodeStartEndSpec.prototype.filterText = function(text0) {
  var text = text0;
  var ftext = "";
  var insideCode = false;
  var index;
  for(;;) {
    if (insideCode) {
      index = text.indexOf(this.endString);
      if (index < 0) {
        ftext += text;
        break;
      } else {
        ftext += text.substring(0,index);
        text = text.substring(index + this.endStringLength);
        insideCode = false;
      }
    } else {
      index = text.indexOf(this.startString);
      if (index < 0) {
        break;
      }
      insideCode = true;
      text = text.substring(index + this.startStringLength);
    }
  }
  if (ftext.length === 0) {
    ftext = text;
  }
  return ftext;
}


module.exports = CodeStartEndSpec

