/*
 * Generated code for class xsyn.grammar.impl.ProductionRule
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

var ProductionRule = function(nonterminal,definitionString,actionCode) {
  if (nonterminal) {
    this.nonterminal = nonterminal;
    nonterminal.productionRules.push(this);
  }
  this.definitionString = definitionString
  this.actionCode = actionCode
  if (typeof(Object.productionRuleCounter) === 'undefined') {Object.productionRuleCounter = 0;}
  this.indexNumber = Object.productionRuleCounter++;
};

ProductionRule.prototype.__defineGetter__('nonterminal', function() {
  return this.$nonterminal$;
});
ProductionRule.prototype.__defineSetter__('nonterminal', function(nonterminal) {
  this.$nonterminal$ = nonterminal;
});

ProductionRule.prototype.__defineGetter__('elements', function() {
  if (typeof(this.$elements$) === 'undefined') {
    this.$elements$ = [];
  }
  return this.$elements$;
});
ProductionRule.prototype.__defineSetter__('elements', function(elements) {
  this.$elements$ = elements;
});

ProductionRule.prototype.__defineGetter__('definitionString', function() {
  return this.$definitionString$;
});
ProductionRule.prototype.__defineSetter__('definitionString', function(definitionString) {
  this.$definitionString$ = definitionString;
});

ProductionRule.prototype.__defineGetter__('actionCode', function() {
  return this.$actionCode$;
});
ProductionRule.prototype.__defineSetter__('actionCode', function(actionCode) {
  this.$actionCode$ = actionCode;
});

ProductionRule.prototype.__defineGetter__('tokenStream', function() {
  if (typeof(this.$tokenStream$) === 'undefined') {
    this.$tokenStream$ = new GrammarDefTokenStream();
  }
  return this.$tokenStream$;
});
ProductionRule.prototype.__defineSetter__('tokenStream', function(tokenStream) {
  this.$tokenStream$ = tokenStream;
});

ProductionRule.prototype.__defineGetter__('followSet', function() {
  if (typeof(this.$followSet$) === 'undefined') {
    this.$followSet$ = [];
  }
  return this.$followSet$;
});
ProductionRule.prototype.__defineSetter__('followSet', function(followSet) {
  this.$followSet$ = followSet;
});

ProductionRule.prototype.__defineGetter__('indexNumber', function() {
  return this.$indexNumber$;
});
ProductionRule.prototype.__defineSetter__('indexNumber', function(indexNumber) {
  this.$indexNumber$ = indexNumber;
});

ProductionRule.prototype.__defineGetter__('createdFromDuringEpsilonElimination', function() {
  return this.$createdFromDuringEpsilonElimination$;
});
ProductionRule.prototype.__defineSetter__('createdFromDuringEpsilonElimination', function(createdFromDuringEpsilonElimination) {
  this.$createdFromDuringEpsilonElimination$ = createdFromDuringEpsilonElimination;
});

ProductionRule.prototype.__defineGetter__('eliminatedEpsilonProduction', function() {
  return this.$eliminatedEpsilonProduction$;
});
ProductionRule.prototype.__defineSetter__('eliminatedEpsilonProduction', function(eliminatedEpsilonProduction) {
  this.$eliminatedEpsilonProduction$ = eliminatedEpsilonProduction;
});

ProductionRule.prototype.__defineGetter__('eliminatedEpsilonProductionIndex', function() {
  return this.$eliminatedEpsilonProductionIndex$;
});
ProductionRule.prototype.__defineSetter__('eliminatedEpsilonProductionIndex', function(eliminatedEpsilonProductionIndex) {
  this.$eliminatedEpsilonProductionIndex$ = eliminatedEpsilonProductionIndex;
});

/**
 * @method toString()
 * @returns java.lang.String
 */
ProductionRule.prototype.toString = function() {
  var s = '';
  s += '(' + this.indexNumber + ') ';
  s += this.toStringWithMarkerPos(-1);
  var orule = this.createdFromDuringEpsilonElimination;
  var thisRule = this;
  var isDerived = false;
  while (!!orule) {
    isDerived = true;
    s += ' => (' + orule.indexNumber + ')@' + thisRule.eliminatedEpsilonProductionIndex;
    thisRule = orule;
    orule = orule.createdFromDuringEpsilonElimination;
  }
  if (isDerived) {
    s += ' epsilonIndexes: ' + this.getEpsilonIndexesRelativeToOriginalRule().map(function(obj) { return obj.index + ' ' + obj.constructorName; }).join(',');
  }
  return s;
}

/**
 * @method addElement(e)
 * @returns void
 */
ProductionRule.prototype.addElement = function(e) {
  this.elements.push(e)
}

/**
 * @method parse(tstrm)
 * @returns void
 */
ProductionRule.prototype.parse = function(tstrm) {
  var tokens = this.tokenStream.getAllTokens(this.definitionString);
  var g = this.getGrammar();
  for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var tokenId = token.getId();
      if (tokenId === DefaultTokenStream.TOKEN_EOF) continue;
      var tokenText = token.getText();
      switch (tokenId) {
      case DefaultTokenStream.TOKEN_IDENTIFIER:
         var ntname = token.getText();
         var nt = g.getNonterminal(ntname);
         if (nt === null) {
             throw new IllegalProductionRuleLhs(this.definitionString, 'no such nonterminal: "' + ntname + '"');
         }
         this.addElement(nt);
         break;
      case DefaultTokenStream.TOKEN_STRING:
         var kwOrSym = GrammarUtils.removeQuotes(tokenText);
         var tid = tstrm.registerKeywordOrSymbol(kwOrSym);
         this.addTokenElement(tokenText, tid, tstrm);
         break;
      default:
         if (tokenId == this.tokenStream.getTokenId(GrammarDefTokenStream.IDENT_KEYWORD)) {
             this.addTokenElement(tokenText, DefaultTokenStream.TOKEN_IDENTIFIER, tstrm);
         } else if (tokenId == this.tokenStream.getTokenId(GrammarDefTokenStream.NUMBER_KEYWORD)) {
             this.addTokenElement(tokenText, DefaultTokenStream.TOKEN_NUMBER, tstrm);
         } else if (tokenId == this.tokenStream.getTokenId(GrammarDefTokenStream.STRING_KEYWORD)) {
             this.addTokenElement(tokenText, DefaultTokenStream.TOKEN_STRING, tstrm);
         } else if (tokenId == this.tokenStream.getTokenId(GrammarDefTokenStream.LONGSTRING_KEYWORD)) {
             this.addTokenElement(tokenText, DefaultTokenStream.TOKEN_LONG_STRING, tstrm);
         } else {
             throw new IllegalProductionRuleLhs(this.definitionString, 'unrecognized element: "' + tokenText + '"');
         }
      }
  }
  /*
  if (getElements().size() == 0) {
      // getElements().add(GrammarUtils.epsilonToken);
  }
  */
}

/**
 * @method getGrammar()
 * @returns xsyn.grammar.IGrammar
 */
ProductionRule.prototype.getGrammar = function() {
  return this.nonterminal.grammar;
}

/**
 * @method getConstructorName()
 * @returns java.lang.String
 */
ProductionRule.prototype.getConstructorName = function() {
  if (!this.constructorName) {
    var nt = this.nonterminal;
    if (this.elements.length === 0) {
      this.constructorName = nt.name + '$_epsilon';
    } else {
      var index = nt.productionRules.indexOf(this);
        var indexStr = (index === 0) ? '' : ('$' + (index + ''));
        this.constructorName = nt.name + indexStr;
    }
  }
  return this.constructorName;
}

/**
 * @method getNonterminalsUsed(nts)
 * @returns void
 */
ProductionRule.prototype.getNonterminalsUsed = function(nts) {
  var elements = this.elements;
  for(var i = 0; i < elements.length; i++) {
      var elem = elements[i];
      if (elem instanceof Nonterminal) {
        var nt = elem;
        if (nts.addToSet(nt)) {
          var prules = nt.productionRules;
          for(var j = 0; j < prules.length; j++) {
            var prule = prules[j];
            prule.getNonterminalsUsed(nts);
  	     }
  	   }
      }
  }
}

/**
 * @method elimintateEpsilonProductions(epsilonProductions)
 * @returns xsyn.grammar.impl.ProductionRule
 */
ProductionRule.prototype.elimintateEpsilonProductions = function(epsilonProductions) {
  var newElements = [];
  var nonterminalsWithEpsilonProduction = GrammarUtils.getNonterminalOfProductionRules(epsilonProductions);
  GrammarUtils.debug('nonterminals with epsilon production:')
  nonterminalsWithEpsilonProduction.map(function(nt) { GrammarUtils.debug('  => ' + nt.name); });
  var epsilonNonterminalFound = false;
  var indexOfEplisonNT = 0;
  var epsilonProductionRule = null;
  for(var i = 0; i < this.elements.length; i++) {
      var elem = this.elements[i];
      if (epsilonProductionRule == null) {
         if ((elem instanceof Nonterminal) || (elem instanceof ExtendedNonterminal)) {
             var nt = elem;
             if (nonterminalsWithEpsilonProduction.contains(nt) && (this.epsilonIndexes.indexOf(indexOfEplisonNT) < 0)) {
                //console.log('  -> found epsilon NT \'' + nt.name + '\' in rule ' + this + ' at position ' + indexOfEplisonNT);
                epsilonNonterminalFound = true;
                epsilonProductionRule = nt.getEpsilonProductionRule();
                this.epsilonIndexes.push(indexOfEplisonNT);
                continue;
             }
         }
         indexOfEplisonNT++;
      }
      newElements.push(elem);
  }
  //console.log('      new elements: ' + newElements.map(function(x) { return x.name; }));
  GrammarUtils.debug('epsilon nonterminal found in prule ' + this + ': ' + epsilonNonterminalFound);
  if (epsilonNonterminalFound) {
      var nprule = new ProductionRule();
      nprule.definitionString = this.definitionString;
      nprule.nonterminal = this.nonterminal;
      nprule.elements = newElements;
      nprule.actionCode = this.actionCode;
      nprule.eliminatedEpsilonProduction = epsilonProductionRule;
      nprule.eliminatedEpsilonProductionIndex = indexOfEplisonNT;
      nprule.createdFromDuringEpsilonElimination = this;
  //console.log('     nprule: ' + nprule);
      return nprule;
  }
  return null;
}

/**
 * @method ensurePartOfNonterminal()
 * @returns boolean
 */
ProductionRule.prototype.ensurePartOfNonterminal = function() {
  var nt = this.nonterminal;
  //console.log('ensurePartOfNonterminal: ' + this + ' ');
  if (!nt.hasProductionRuleWithElements(this.elements)) {
    nt.productionRules.push(this);
    //console.log('-> needed to add it. [' + this.getConstructorName() + '] ' + this.eliminatedEpsilonProduction);
    return true;
  }
    //console.log('-> was already part of nonterminal.');
  return false;
}

/**
 * @method addTokenElement(name,tid,tstrm)
 * @returns void
 */
ProductionRule.prototype.addTokenElement = function(name,tid,tstrm) {
  var tdef = new TokenDef(name,tid);
  this.addElement(tdef);
  tstrm.tokenIds.push(tid);
}

/**
 * @method toStringWithMarkerPos(mpos)
 * @returns java.lang.String
 */
ProductionRule.prototype.toStringWithMarkerPos = function(mpos) {
  var markerPos = (mpos === null) ? -1 : mpos;
  var s = '';
  s += this.nonterminal.name + ' -> ';
  if (typeof(this.$elements$) === 'undefined') {
      s += this.definitionString;
  } else {
      var cnt = 0;
      var sep = '';
      for (var i = 0; i < this.elements.length; i++) {
  		var elem = this.elements[i];
  		var marker = cnt === markerPos ? '@ ' : '';
  		s += sep + marker + elem.name;
  		sep = ' ';
  		cnt++;
      }
      if (markerPos >= this.elements.length) {
         s += ' @';
      }
  }
  return s;
}

/**
 * @method getEpsilonIndexesRelativeToOriginalRule()
 * @returns java.util.List
 */
ProductionRule.prototype.getEpsilonIndexesRelativeToOriginalRule = function() {
  var indexes = [];
  var orule = this.createdFromDuringEpsilonElimination;
  var thisRule = this;
  var lastIndex = -1;
  while (!!orule) {
    var thisIndex = thisRule.eliminatedEpsilonProductionIndex;
    indexes.push(thisIndex);
    if (lastIndex >=0 && lastIndex >= thisIndex) {
      for(var i = 0; i < indexes.length - 1; i++) {
        indexes[i] = indexes[i] + 1;
      }
    }
    lastIndex = thisIndex;
    thisRule = orule;
    orule = orule.createdFromDuringEpsilonElimination;
  }
  var res = [];
  indexes.sort();
  orule = this.getOriginalRule();
  for(var i = 0; i < indexes.length; i++) {
    var index = indexes[i];
    var nt = orule.elements[index];
    if (nt instanceof Nonterminal) {
       var eprule = nt.getEpsilonProductionRule();
       var cname;
       try {
          cname = eprule.getConstructorName();
       } catch(e) {
          cname = '<no eprule found for ' + nt.name + '>';
       }
       res.push( { index : index, constructorName : cname } );
    }
  }
  return res;
}

/**
 * @method getOriginalRule()
 * @returns xsyn.grammar.impl.ProductionRule
 */
ProductionRule.prototype.getOriginalRule = function() {
  var thisRule = this;
  while (!!thisRule.createdFromDuringEpsilonElimination) {
    thisRule = thisRule.createdFromDuringEpsilonElimination;
  }
  return thisRule;
}


module.exports = ProductionRule

