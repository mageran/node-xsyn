/*
 * Generated code for class xsyn.grammar.impl.GrammarDef
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

var GrammarDef = function() {
};

GrammarDef.__defineGetter__('START_SYMBOL_PREFIX', function() {
  if (typeof(this.$START_SYMBOL_PREFIX$) === 'undefined') {
    this.$START_SYMBOL_PREFIX$ = '__START';
  }
  return this.$START_SYMBOL_PREFIX$;
});
GrammarDef.__defineSetter__('START_SYMBOL_PREFIX', function(START_SYMBOL_PREFIX) {
  this.$START_SYMBOL_PREFIX$ = START_SYMBOL_PREFIX;
});

GrammarDef.__defineGetter__('OPTION_CODE_BRACKETS', function() {
  if (typeof(this.$OPTION_CODE_BRACKETS$) === 'undefined') {
    this.$OPTION_CODE_BRACKETS$ = 'codeBrackets';
  }
  return this.$OPTION_CODE_BRACKETS$;
});
GrammarDef.__defineSetter__('OPTION_CODE_BRACKETS', function(OPTION_CODE_BRACKETS) {
  this.$OPTION_CODE_BRACKETS$ = OPTION_CODE_BRACKETS;
});

GrammarDef.prototype.__defineGetter__('nonterminals', function() {
  if (typeof(this.$nonterminals$) === 'undefined') {
    this.$nonterminals$ = [];
  }
  return this.$nonterminals$;
});
GrammarDef.prototype.__defineSetter__('nonterminals', function(nonterminals) {
  this.$nonterminals$ = nonterminals;
});

GrammarDef.prototype.__defineGetter__('startNonterminal', function() {
  return this.$startNonterminal$;
});
GrammarDef.prototype.__defineSetter__('startNonterminal', function(startNonterminal) {
  this.$startNonterminal$ = startNonterminal;
});

GrammarDef.prototype.__defineGetter__('userDefinedStartNonterminal', function() {
  return this.$userDefinedStartNonterminal$;
});
GrammarDef.prototype.__defineSetter__('userDefinedStartNonterminal', function(userDefinedStartNonterminal) {
  this.$userDefinedStartNonterminal$ = userDefinedStartNonterminal;
});

GrammarDef.prototype.__defineGetter__('tokenStream', function() {
  return this.$tokenStream$;
});
GrammarDef.prototype.__defineSetter__('tokenStream', function(tokenStream) {
  this.$tokenStream$ = tokenStream;
});

GrammarDef.prototype.__defineGetter__('itemSets', function() {
  if (typeof(this.$itemSets$) === 'undefined') {
    this.$itemSets$ = [];
  }
  return this.$itemSets$;
});
GrammarDef.prototype.__defineSetter__('itemSets', function(itemSets) {
  this.$itemSets$ = itemSets;
});

GrammarDef.prototype.__defineGetter__('extendedProductionRules', function() {
  if (typeof(this.$extendedProductionRules$) === 'undefined') {
    this.$extendedProductionRules$ = [];
  }
  return this.$extendedProductionRules$;
});
GrammarDef.prototype.__defineSetter__('extendedProductionRules', function(extendedProductionRules) {
  this.$extendedProductionRules$ = extendedProductionRules;
});

GrammarDef.prototype.__defineGetter__('firstSets', function() {
  if (typeof(this.$firstSets$) === 'undefined') {
    this.$firstSets$ = new Map();
  }
  return this.$firstSets$;
});
GrammarDef.prototype.__defineSetter__('firstSets', function(firstSets) {
  this.$firstSets$ = firstSets;
});

GrammarDef.prototype.__defineGetter__('followSets', function() {
  if (typeof(this.$followSets$) === 'undefined') {
    this.$followSets$ = new Map();
  }
  return this.$followSets$;
});
GrammarDef.prototype.__defineSetter__('followSets', function(followSets) {
  this.$followSets$ = followSets;
});

GrammarDef.prototype.__defineGetter__('isParserGenerationAlreadyExecuted', function() {
  if (typeof(this.$isParserGenerationAlreadyExecuted$) === 'undefined') {
    this.$isParserGenerationAlreadyExecuted$ = false;
  }
  return this.$isParserGenerationAlreadyExecuted$;
});
GrammarDef.prototype.__defineSetter__('isParserGenerationAlreadyExecuted', function(isParserGenerationAlreadyExecuted) {
  this.$isParserGenerationAlreadyExecuted$ = isParserGenerationAlreadyExecuted;
});

GrammarDef.prototype.__defineGetter__('actionLanguage', function() {
  if (typeof(this.$actionLanguage$) === 'undefined') {
    this.$actionLanguage$ = new GrammarActionLanguageJavaScript();
  }
  return this.$actionLanguage$;
});
GrammarDef.prototype.__defineSetter__('actionLanguage', function(actionLanguage) {
  this.$actionLanguage$ = actionLanguage;
});

GrammarDef.prototype.__defineGetter__('name', function() {
  return this.$name$;
});
GrammarDef.prototype.__defineSetter__('name', function(name) {
  this.$name$ = name;
});

GrammarDef.prototype.__defineGetter__('codeStartEndSpec', function() {
  return this.$codeStartEndSpec$;
});
GrammarDef.prototype.__defineSetter__('codeStartEndSpec', function(codeStartEndSpec) {
  this.$codeStartEndSpec$ = codeStartEndSpec;
});

GrammarDef.prototype.__defineGetter__('finalItemSet', function() {
  return this.$finalItemSet$;
});
GrammarDef.prototype.__defineSetter__('finalItemSet', function(finalItemSet) {
  this.$finalItemSet$ = finalItemSet;
});

/**
 * @method toString()
 * @returns java.lang.String
 */
GrammarDef.prototype.toString = function() {
  this._renumberProductionRules();
  var s = '';
  for(var i = 0; i < this.nonterminals.length; i++) {
    var nt = this.nonterminals[i];
    s += nt.toString();
  }
  return s;
}

/**
 * @method parse(input)
 * @returns java.lang.String
 */
GrammarDef.prototype.parse = function(input) {
  this.generateLalr1Parser();
  GrammarUtils.debug('parsing \"' + input + '\":');
  var tstrm = this.tokenStream;
  tstrm.text = input;
  var pstate = new ParserState(this);
  this.doParse(pstate);
  return this.actionLanguage.evalParseOutput(pstate);
}

/**
 * @method getNonterminal(name,createIfNotExists)
 * @returns xsyn.grammar.INonterminal
 */
GrammarDef.prototype.getNonterminal = function(name,createIfNotExists) {
  for (var i = 0; i < this.nonterminals.length; i++) {
    var nt = this.nonterminals[i]
    if (nt.name === name) {
      return nt;
    }
  }
  if (!createIfNotExists) {
    return null;
  }
  var nt0 = new Nonterminal(name, this);
  this.addNonterminal(nt0);
  return nt0;
}

/**
 * @method addProductionRule(nonterminal,productionRuleRhs,actionCode)
 * @returns xsyn.grammar.IProductionRule
 */
GrammarDef.prototype.addProductionRule = function(nonterminal,productionRuleRhs,actionCode) {
  var nt = nonterminal;
  if (!(nonterminal instanceof Nonterminal)) {
    nt = this.getNonterminal(nonterminal, true);
  }
  var prule = new ProductionRule(nt,productionRuleRhs,actionCode);
  return prule;
}

/**
 * @method parseProductionRules()
 * @returns xsyn.grammar.ITokenStream
 */
GrammarDef.prototype.parseProductionRules = function() {
  var tstrm = new DefaultTokenStream();
  var nts = this.nonterminals;
  for (var i = 0; i < nts.length; i++) {
    var nt = nts[i];
    nt.parseProductionRules(tstrm);
  }
  return tstrm;
}

/**
 * @method getInitialState()
 * @returns xsyn.grammar.IParseState
 */
GrammarDef.prototype.getInitialState = function() {
  return this.getInitialItemSet();
}

/**
 * @method setCodeStartEndSymbols(startSymbol,endSymbol)
 * @returns void
 */
GrammarDef.prototype.setCodeStartEndSymbols = function(startSymbol,endSymbol) {
  this.codeStartEndSpec = new CodeStartEndSpec(startSymbol, endSymbol);
}

/**
 * @method getProductionRules()
 * @returns java.util.List
 */
GrammarDef.prototype.getProductionRules = function() {
  var prules = [];
  var nonterminals = this.nonterminals;
  for(var i = 0; i < nonterminals.length; i++) {
    var nt = nonterminals[i];
    prules = prules.concat(nt.productionRules);
  }
  return prules;
}

/**
 * @method generateActionCode()
 * @returns void
 */
GrammarDef.prototype.generateActionCode = function() {
  var prules = this.getProductionRules();
  for(var i = 0; i < prules.length; i++) {
    //console.error('MISSING: generating action code for production rule!');
    this.actionLanguage.generateActionCode(prules[i]);
  }
}

/**
 * @method showParseTable()
 * @returns void
 */
GrammarDef.prototype.showParseTable = function() {
  GrammarUtils.debug('ParseTable:');
  var keys = [];
  for(var i = 0; i < this.itemSets.length; i++) {
      var iset = this.itemSets[i];
      keys.addAllToSet(iset.parseTableRow.keys);
  }
  var keyList = [];
  for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key instanceof TokenDef) {
  	keyList.add(key);
      }
  }
  for(var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!(key instanceof TokenDef)) {
  	keyList.add(key);
      }
  }
  //keyList.sort(function(a,b){return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;});
  var s = '';
  s += '<head>' + '<link rel=\"stylesheet\" href=\"style.css\" type=\"text/css\" />' + '</head>';
  s += '<table border=\"1\" cellpadding=\"5\" cellspacing=\"5\">\n';
  s += '<tr><th>&nbsp;</th>';
  for(var i = 0; i < keyList.length; i++) {
      var key = keyList[i];
      s += '<th>' + key.name + '</th>\t';
  }
  s += '</tr>\n';
  for(var i = 0; i < this.itemSets.length; i++) {
      var iset = this.itemSets[i];
      s += '<tr><td>' + iset.name + '</td>';
      for(var r = 0; r < keyList.length; r++) {
  	var key = keyList[r];
  	var paction = iset.parseTableRow.get(key);
  	var css = '';//paction === null ? '' : (' class=\"' + paction.getClass().getSimpleName() + '\"');
  	s += '<td' + css + '>';
  	s += !paction ? '&nbsp;' : paction;
  	// s += ' (' + key.getClass() + ')';
  	s += '</td>\t';
      }
      s += '</tr>\n';
  }
  s += '</table>';
  GrammarUtils.debug(s);
}

/**
 * @method addNonterminal(nt)
 * @returns void
 */
GrammarDef.prototype.addNonterminal = function(nt) {
  var nts = this.nonterminals;
  nts.push(nt);
  if (nts.length === 1) {
    this.startNonterminal = nt;
  }
}

/**
 * @method setOption(option,values)
 * @returns void
 */
GrammarDef.prototype.setOption = function(option,values) {
  if (option == GrammarDef.OPTION_CODE_BRACKETS) {
    if (values.length != 2) {
      console.error('option ' + GrammarDef.OPTION_CODE_BRACKETS + ' needs exactly 2 values; option ignored');
      return;
    }
    var startString = GrammarUtils.removeQuotes(values[0]);
    var endString = GrammarUtils.removeQuotes(values[1]);
    GrammarUtils.debug('start: >>' + startString + '<<');
    GrammarUtils.debug('end: >>' + endString + '<<');
    this.setCodeStartEndSymbols(startString, endString);
  }
}

/**
 * @method getNewNonterminalWithPrefix(prefix)
 * @returns java.lang.String
 */
GrammarDef.prototype.getNewNonterminalWithPrefix = function(prefix) {
  var nt = this.getNonterminal(prefix);
  if (nt === null) {
    return prefix;
  }
  var cnt = 0;
  var name;
  while (this.getNonterminal(name = prefix + (cnt++)) !== null);
  return name;
}

/**
 * @method setStartNonterminal(name,dontCreateNew)
 * @returns xsyn.grammar.INonterminal
 */
GrammarDef.prototype.setStartNonterminal = function(name,dontCreateNew) {
  var nt = this.getNonterminal(name);
  if (nt === null) {
    throw '*** no such nonterminal: \'' + name + '\'';
  }
  if (dontCreateNew) {
    this.startNonterminal = nt;
    return nt;
  }
  var sntname = this.getNewNonterminalWithPrefix(GrammarDef.START_SYMBOL_PREFIX);
  try {
    var snt = this.getNonterminal(sntname, true);
    this.addProductionRule(snt, name);
    this.startNonterminal = snt;
    return snt;
  } catch (canNotOccur) {
  }
  return null;
}

/**
 * @method initTokenStream()
 * @returns xsyn.grammar.ITokenStream
 */
GrammarDef.prototype.initTokenStream = function() {
  if (!this.tokenStream) {
    this.tokenStream = this.parseProductionRules();
  }
  var cspec = this.codeStartEndSpec;
  if (!!cspec) {
    this.tokenStream.setCodeStartEndSymbols(cspec.startString, cspec.endString);
  }
  return this.tokenStream;
}

/**
 * @method generateLalr1Parser()
 * @returns void
 */
GrammarDef.prototype.generateLalr1Parser = function() {
  if (this.isParserGenerationAlreadyExecuted) return;
  try {
    this.maybeCreateNewStartNonterminal();
    this.initTokenStream();
    var snt = this.startNonterminal;
    if (snt === null) {
      throw new MissingStartNonterminal();
    }
    //this.maybeCreateNewStartNonterminal();
    this.eliminateUnusedNonterminalsRules();
    this.eliminateEpsilonProductions();
    // this.eliminateUnusedNonterminalsRules();
    //this.showGrammar();
    this.generateActionCode();
    this.calculateItemSets();
    //dbgRenameItemSetsForTestExample();
    //this.showItemSets();
    this.calculateExtendedGrammar();
    this.showExtendedGrammar();
    this.calculateFirstSets();
    //this.showFirstSets();
    this.calculateFollowSets();
    //this.showFollowSets();
    this.calculateParseTable();
    //this.showParseTable();
  } finally {
    this.isParserGenerationAlreadyExecuted = true;
  }
}

/**
 * @method showGrammar()
 * @returns void
 */
GrammarDef.prototype.showGrammar = function() {
  GrammarUtils.debug('Grammar:\n' + this.toString());
}

/**
 * @method maybeCreateNewStartNonterminal()
 * @returns void
 */
GrammarDef.prototype.maybeCreateNewStartNonterminal = function() {
  var snt = this.startNonterminal;
  if (snt === null) {
    throw new MissingStartNonterminal();
  }
  if (snt.name.indexOf(GrammarDef.START_SYMBOL_PREFIX) !== 0) {
    this.setStartNonterminal(snt.name);
  }
}

/**
 * @method eliminateUnusedNonterminalsRules()
 * @returns boolean
 */
GrammarDef.prototype.eliminateUnusedNonterminalsRules = function() {
  var snt = this.startNonterminal;
  var /*Set<INonterminal>*/ usedNonterminals = snt.getNonterminalsUsed();
  usedNonterminals.add(snt);
  GrammarUtils.debug('Used nonterminals in Grammar: ');
  for(var i = 0; i < usedNonterminals.length; i++) {
      var nt = usedNonterminals[i];
      GrammarUtils.debug('  ' + nt.name);
  }
  var /*Set<INonterminal>*/ unusedNonterminals = [];
  for(var i = 0; i < this.nonterminals.length; i++) {
      var nt = this.nonterminals[i];
      if (usedNonterminals.contains(nt)) {
  		continue;
      }
      GrammarUtils.debug('removing unused nonterminal \"' + nt.name + '\"');
      unusedNonterminals.addToSet(nt);
  }
  this.nonterminals.removeAll(unusedNonterminals);
  var removedSomething = unusedNonterminals.length > 0;
  if (removedSomething) {
      GrammarUtils.debug('modified grammar after removing unused nonterminals:');
      this.showGrammar();
  }
  return removedSomething;
}

/**
 * @method eliminateEpsilonProductions()
 * @returns void
 */
GrammarDef.prototype.eliminateEpsilonProductions = function() {
  for (var cnt = 0;;cnt++) {
      //console.log('NEW ITERATION ----------------------------------');
      var epsilonProductions = this.getEpsilonProductions();
      if (epsilonProductions.length === 0) {
  	break;
      }
      GrammarUtils.debug('found ' + epsilonProductions.size() + ' epsilon productions...');
      var newRules = [];
      var prules = this.getProductionRules();
      for(var q = 0; q < prules.length; q++) {
  		var prule = prules[q];
         if (typeof(prule.epsilonIndexes) === 'undefined') prule.epsilonIndexes = [];
  		var nrule = prule.elimintateEpsilonProductions(epsilonProductions);
  		if (!!nrule) {
  	    	//console.log('  new rule generated: ' + nrule);
  	    	newRules.push(nrule);
  		}
      }
  //console.log('found ' + newRules.length + ' new production rules.');
      if (newRules.length === 0)
  		break;
      var changed = false;
      for(var k = 0; k < newRules.length; k++) {
  		var prule = newRules[k];
         //console.log(' --> ' + prule);
  		var changed0 = prule.ensurePartOfNonterminal();
  		changed = changed || changed0;
      }
      if (!changed) {
  		break;
      }
      //console.log('no change detected.');
      // eliminateUnusedNonterminalsRules();
  
  }
  for(var i = 0; i < this.nonterminals.length; i++) {
      var nt = this.nonterminals[i];
      var prule = nt.removeEpsilonProductionRule();
      if (!!prule) {
  		try {
  	    	this.actionLanguage.generateActionCode(prule);
  		} catch (e) {
  	    	console.error(e);
  		}
      }
  }
  //console.log(this.toString());
}

/**
 * @method calculateItemSets()
 * @returns void
 */
GrammarDef.prototype.calculateItemSets = function() {
  var i0 = new ItemSet(this);
  i0.addProductionRulesForNonterminal(this.startNonterminal);
  this.itemSets.add(i0);
  for (var icnt = 0;; icnt++) {
      var newItemSets = [];
      if (this.isAllItemSetsCalculated()) {
  		GrammarUtils.debug('iteration #' + icnt + ': all item sets are calculated.');
  		break;
      }
      for(var i = 0; i < this.itemSets.length; i++) {
  		var iset = this.itemSets[i];
  		var nisets = iset.calculate();
  		newItemSets.addAll(nisets);
      }
      this.itemSets.addAll(newItemSets);
  }
}

/**
 * @method showItemSets()
 * @returns void
 */
GrammarDef.prototype.showItemSets = function() {
  for(var i = 0; i < this.itemSets.length; i++) {
      var iset = this.itemSets[i];
      GrammarUtils.debug(iset + '');
  }
}

/**
 * @method calculateExtendedGrammar()
 * @returns void
 */
GrammarDef.prototype.calculateExtendedGrammar = function() {
  this.addFinalItemSet();
  var prules = this.getProductionRules();
  for(var i = 0; i < prules.length; i++) {
      var prule = prules[i];
      var nt = prule.nonterminal;
      for(var j = 0; j < this.itemSets.length; j++) {
  		var iset = this.itemSets[j];
  		var iset1 = iset.getTransitionForInput(nt);
  		if (!iset1)	continue;
  		var /*ExtendedNonterminal*/ exnt = this.getExtendedNonterminalMatching(nt, iset, iset1);
  		var /*ExtendedProductionRule*/ eprule = ExtendedProductionRule.createFrom(prule);
  		if (!!exnt) {
  	    	eprule.setExtendedNonterminal(exnt);
  		} else {
  	    	eprule.setPreItemSet(iset);
  	    	eprule.setPostItemSet(iset1);
  		}
     	//console.log('iset: ' + iset);
  		eprule.insertItemSetsStartingFrom(iset);
  		this.extendedProductionRules.add(eprule);
      }
  }
  this.removeFinalItemSet();
  var eprules = this.extendedProductionRules;
  for(var i = 0; i < eprules.length; i++) {
      var eprule = eprules[i];
      eprule.replaceNonterminalsWithExtendedNonterminals();
  }
}

/**
 * @method showExtendedGrammar()
 * @returns void
 */
GrammarDef.prototype.showExtendedGrammar = function() {
  GrammarUtils.debug('\nExtended Grammar:\n-----------------');
  var cnt = 0;
  for(var i = 0; i < this.extendedProductionRules.length; i++) {
      var eprule = this.extendedProductionRules[i];
      GrammarUtils.debug((cnt++) + '. ' + eprule);
  }
}

/**
 * @method calculateFirstSets()
 * @returns void
 */
GrammarDef.prototype.calculateFirstSets = function() {
  GrammarUtils.debug('calculating first sets...');
  var prules = this.extendedProductionRules;
  for (;;) {
      var changed = false;
      for(var i = 0; i < prules.length; i++) {
  		var prule = prules[i];
  		var ent = prule.getExtendedNonterminal();
  		var fset = this.getFirstSetForNonterminal(ent);
  		var size0 = fset.size();
  		var fsetAfter = prule.getFirstSet(this);
  		var size1 = fsetAfter.size();
  		// fset.clear();
  		fset.addAllToSet(fsetAfter);
  		if (!changed)
  	    	changed = size1 > size0;
      }
      if (!changed)
  		break;
  }
}

/**
 * @method showFirstSets()
 * @returns void
 */
GrammarDef.prototype.showFirstSets = function() {
  GrammarUtils.debug('FirstSets:');
  var fkeys = this.firstSets.keys;
  for(var i = 0; i < fkeys.length; i++) {
      var nt = fkeys[i];
      var fset = this.firstSets.get(nt);
      GrammarUtils.debug('  ' + nt.name + ': ' + fset);
  }
}

/**
 * @method calculateFollowSets()
 * @returns void
 */
GrammarDef.prototype.calculateFollowSets = function() {
  var snt = this.getExtendedStartNonterminal();
  this.getFollowSet(snt).add(GrammarUtils.endToken);
  for (;;) {
      var changed = false;
      for(var i = 0; i < this.extendedProductionRules.length; i++) {
  	var prule = this.extendedProductionRules[i];
  	var changed0 = prule.calculateFollowSets(this);
  	changed = changed || changed0;
      }
      if (!changed)
  	break;
  }
}

/**
 * @method showFollowSets()
 * @returns void
 */
GrammarDef.prototype.showFollowSets = function() {
  GrammarUtils.debug('FollowSets:');
  var fkeys = this.followSets.keys;
  for(var i = 0; i < fkeys.length; i++) {
      var nt = fkeys[i];
      var fset = this.followSets.get(nt);
      GrammarUtils.debug('  ' + nt.name + ': ' + fset);
  }
}

/**
 * @method calculateParseTable()
 * @returns void
 */
GrammarDef.prototype.calculateParseTable = function() {
  for(var i = 0; i < this.itemSets.length; i++) {
      var iset = this.itemSets[i];
      iset.initParseTable();
  }
  for(var i = 0; i < this.extendedProductionRules.length; i++) {
      var prule = this.extendedProductionRules[i];
      prule.setRuleFollowSets(this);
  }
  //this.mergeExtendedProductionRules();
  for(var i = 0; i < this.extendedProductionRules.length; i++) {
      var prule = this.extendedProductionRules[i];
      var iset = prule.getFinalSet();
      if (!iset)
  	continue;
      iset.addReduceToParseTable(prule);
  }
}

/**
 * @method isAllItemSetsCalculated()
 * @returns boolean
 */
GrammarDef.prototype.isAllItemSetsCalculated = function() {
  for(var i = 0; i < this.itemSets.length; i++) {
    var iset = this.itemSets[i];
    if (iset.isCalculated) continue;
    return false;
  }
  return true;
}

/**
 * @method addFinalItemSet()
 * @returns void
 */
GrammarDef.prototype.addFinalItemSet = function() {
  var initialItemSet = this.getInitialItemSet();
  this.finalItemSet = new ItemSet(this);
  this.finalItemSet.name = '$';
  initialItemSet.transitions.put(this.startNonterminal,this.finalItemSet);
}

/**
 * @method getInitialItemSet()
 * @returns xsyn.grammar.impl.lalr1.ItemSet
 */
GrammarDef.prototype.getInitialItemSet = function() {
  return this.itemSets[0];
}

/**
 * @method removeFinalItemSet()
 * @returns void
 */
GrammarDef.prototype.removeFinalItemSet = function() {
  var initialItemSet = this.getInitialItemSet();
  initialItemSet.transitions.remove(this.startNonterminal);
  this.itemSets.remove(this.finalItemSet);
}

/**
 * @method getExtendedNonterminalMatching(nt,pre,post)
 * @returns xsyn.grammar.impl.lalr1.ExtendedNonterminal
 */
GrammarDef.prototype.getExtendedNonterminalMatching = function(nt,pre,post) {
  var eprules = this.extendedProductionRules;
  for(var i = 0; i < eprules.length; i++) {
      var prule = eprules[i];
      var ent = prule.getExtendedNonterminal();
      if (ent.nonterminal === nt && ent.preItemSet.equals(pre) && ent.postItemSet.equals(post)) {
  		return ent;
      }
  }
  return null;
}

/**
 * @method getExtendedNonterminals()
 * @returns java.util.Set
 */
GrammarDef.prototype.getExtendedNonterminals = function() {
  var ents = [];
  var eprules = this.extendedProductionRules;
  for(var i = 0; i < eprules.length; i++) {
      var prule = eprules[i];
      ents.addToSet(prule.getExtendedNonterminal());
  }
  return ents;
}

/**
 * @method getFirstSetForNonterminal(nt)
 * @returns java.util.Set
 */
GrammarDef.prototype.getFirstSetForNonterminal = function(nt) {
  var fset = this.firstSets.get(nt);
  if (!fset) {
    fset = [];
    this.firstSets.put(nt,fset);
  }
  return fset;
}

/**
 * @method getFirstSetForTokenDef(tk)
 * @returns java.util.Set
 */
GrammarDef.prototype.getFirstSetForTokenDef = function(tk) {
  var fset = [];
  fset.push(tk);
  return fset;
}

/**
 * @method getFirstSetForExtendedProductionRuleElement(e)
 * @returns java.util.Set
 */
GrammarDef.prototype.getFirstSetForExtendedProductionRuleElement = function(e) {
  return this.getFirstSetForTokenDef(e.getTokenDef());
}

/**
 * @method getFirstSetForProductionRuleElement(pelem)
 * @returns java.util.Set
 */
GrammarDef.prototype.getFirstSetForProductionRuleElement = function(pelem) {
  if (pelem instanceof ExtendedProductionRuleElement) {
      return this.getFirstSetForExtendedProductionRuleElement(pelem);
  }
  if (pelem instanceof TokenDef) {
      return this.getFirstSetForTokenDef(pelem);
  }
  if (pelem instanceof Nonterminal || pelem instanceof ExtendedNonterminal) {
      return this.getFirstSetForNonterminal(pelem);
  }
  return null;
}

/**
 * @method getFollowSet(nt)
 * @returns java.util.Set
 */
GrammarDef.prototype.getFollowSet = function(nt) {
  var fset = this.followSets.get(nt);
  if (!fset) {
      fset = []
      this.followSets.put(nt, fset);
  }
  return fset;
}

/**
 * @method getExtendedStartNonterminal()
 * @returns xsyn.grammar.impl.lalr1.ExtendedNonterminal
 */
GrammarDef.prototype.getExtendedStartNonterminal = function() {
  var xnts = this.getExtendedNonterminals();
  for(var i = 0; i < xnts.length; i++) {
      var ent = xnts[i];
      var nt = ent.nonterminal;
      if (this.startNonterminal === nt) {
  	return ent;
      }
  }
  return null;
}

/**
 * @method getEpsilonProductions()
 * @returns java.util.List
 */
GrammarDef.prototype.getEpsilonProductions = function() {
  var eprules = [];
  for(var i = 0; i < this.nonterminals.length; i++) {
      var nt = this.nonterminals[i];
      var eprule = nt.getEpsilonProductionRule();
      if (!!eprule) {
  	eprules.push(eprule);
      }
  }
  return eprules;
}

/**
 * @method getNonterminalsWithEpsilonProductions()
 * @returns java.util.Set
 */
GrammarDef.prototype.getNonterminalsWithEpsilonProductions = function() {
  var res = [];
  var eprods = this.getEpsilonProductions();
  for(var i = 0; i < eprods.length; i++) {
      var prule = eprods[i];
      res.addToSet(prule.nonterminal);
  }
  return res;
}

/**
 * @method mergeExtendedProductionRules()
 * @returns void
 */
GrammarDef.prototype.mergeExtendedProductionRules = function() {
  var mergedRules = [];
  for(var i = 0; i < this.extendedProductionRules.length; i++) {
      var prule = this.extendedProductionRules[i];
      if (prule.canBeMergedWithOneOf(mergedRules))
  	continue;
      mergedRules.add(prule);
  }
  this.extendedProductionRules = mergedRules;
  // showExtendedGrammar();
}

/**
 * @method doParse(pstate)
 * @returns void
 */
GrammarDef.prototype.doParse = function(pstate) {
  var token = pstate.currentToken();
  var state = pstate.currentParseState();
  var actions = state.getParseTableActionForToken(token);
  if (!actions) {
      GrammarUtils.debug('throwing syntax error (1)...');
      throw new SyntaxError(pstate);
  }
  for(var i = 0; i < actions.length; i++) {
      var action = actions[i];
      GrammarUtils.debug('state: ' + state.name + ', token: ' + token.getText() + '(' + token.getId() + ')' + ', action: ' + action);
      action.apply(pstate);
      if (action instanceof AcceptAction) {
  		return;
      }
      try {
  		this.doParse(pstate);
  		return;
      } catch (e) {
         GrammarUtils.debug('error: ' + e + '\n' + e.stack);
         pstate.maybeSetMaxTokenReached();
  		action.undo(pstate);
  		GrammarUtils.debug('backtracking...');
      }
  }
  GrammarUtils.debug('throwing syntax error (2)...');
  throw new SyntaxError(pstate);
}

/**
 * @method compile(input,options)
 * @returns void
 */
GrammarDef.prototype.compile = function(input,options) {
  var hasInput = typeof(input) === 'string';
  var opts0 = hasInput ? Utils.merge(options,{input:input}) : input;
  opts0 = !!opts0 ? opts0 : {};
  var opts = {
      mode : 'asFunction', // other possible values: 'asObject','asModule'
      standalone : true    // if mode is 'asFunction', standalone == true generates all functions needed to run the compiled expression
  };
  Utils.merge(opts,opts0);
  this.generateLalr1Parser();
  this.actionLanguage.addGetRulesCode(this);
  this.actionLanguage.addGetGrammarDefCode();
  var fs = require('fs');
  if (opts.input) {
     if (fs.existsSync(opts.input)) {
       opts.inputFile = opts.input;
       delete opts.input;
     } else {
       input = opts.input;
       hasInput = true;
     }
  }
  if (opts.inputFile) {
     input = fs.readFileSync(opts.inputFile,'utf8');
     hasInput = true;
  }
  var cexpr = 'null';
  if (hasInput) {
      GrammarUtils.debug('parsing \"' + input + '\":');
      var tstrm = this.tokenStream;
      tstrm.text = input;
      var pstate = new ParserState(this);
      this.doParse(pstate);
      cexpr = pstate.getConstructorString();
  }
  var headerCode = '';
  if (opts.mode === 'asModule') {
    headerCode += '/*\n';
    headerCode += ' * this is a generated file; modification won\'t survive!\n';
    headerCode += ' */\n';
    headerCode += '__defineGetter__(\'xsyn\',function() { try { return require(\'xsyn\'); } catch(e) { return require(\'./xsyn\'); }});\n';
  }
  var body = '';
  if (opts.mode !== 'asFunction' || opts.standalone) {
      body += this.actionLanguage.generateRuntimeFunctionCode();
  }
  var obody = '';
  if (opts.mode === 'asObject' || opts.mode === 'asModule' || opts.mode === 'asFunction') {
      var fnames = this.actionLanguage.getRuntimeFunctionNames();
      for(var i = 0; i < fnames.length; i++) {
  		var fname = fnames[i];
         var fnameParts = fname.split(/\s+/);
         var isGetter = fnameParts.length === 2 && fnameParts[0] === 'get';
         var isSetter = fnameParts.length === 2 && fnameParts[0] === 'set';
         if (isGetter || isSetter) {
           var gOrS = (isGetter?'G':'S');
           var dname = '__define' + gOrS + 'etter__';
           obody += 'this.' + dname + '(\'' + fnameParts[1] + '\', '
           obody += '$' + gOrS +'ET$' + fnameParts[1];
           obody += ');\n'
         } else {
  		  obody += 'this.' + fname + ' = ' + fname + ';\n';
         }
      }
      if (hasInput) {
  		obody += 'this.cexpr = unescape(\'' + escape(cexpr) + '\');\n';
      }
      obody += 'this.compile = function(input) {\n';
      obody += '   if (!this.grammarDef) throw \'*** grammar definition does not exists in field grammarDef.\';\n';
      obody += '   this.cexpr = this.grammarDef.compile(input,{standalone:false});\n';
      obody += '   return this.cexpr;\n';
      obody += '};\n';
      obody += 'this.compileFile = function(inputFile) {\n';
      obody += '   if (!this.grammarDef) throw \'*** grammar definition does not exists in field grammarDef.\';\n';
      obody += '   this.cexpr = this.grammarDef.compile({inputFile:inputFile,standalone:false});\n';
      obody += '   return this.cexpr;\n';
      obody += '};\n';
      obody += 'this.run = function() {\n';
      obody += '   if (!this.cexpr) throw \'*** compiled code is missing; you have to run compile() first.\';\n';
      obody += '   with(this) { return eval(this.cexpr); }\n';
      obody += '};\n';
      if (!!this.footerCode) {
         obody += this.footerCode;
      }
      if (opts.mode === 'asObject') {
  		body += obody;
  		return 'new function() {\n' + body + '}';
      }
      if (opts.mode === 'asFunction') {
         body += obody;
      }
      if (opts.mode === 'asModule') {
  		var mcode = '';
         mcode += headerCode;
  		if (typeof(this.headerCode) === 'string') {
  	    	mcode += this.headerCode;
  		}
  		var mname = opts.name ? opts.name : (opts.moduleName ? opts.moduleName : null)
  		var objname = '$OBJ$';
  		mcode += 'var ' + objname + ' = function(grammarDef) {\n';
  		mcode += '  this.grammarDef = grammarDef;\n';
  		mcode += body;
  		mcode += obody;
  		mcode += '};\n';
  		//if (typeof(this.footerCode) === 'string') {
  	    //	mcode += this.footerCode;
  		//}
  		mcode += 'module.exports = ' + objname + ';\n';
  		var fname = !!mname ? (mname + '.js') : null;
  		if (!!fname) {
  	    	var fs = require('fs');
  	    	fs.writeFileSync(fname,mcode);
  		} else {
  	    	console.log(mcode);
  		}
  		return fname;
      }
  }
  if (opts.mode === 'asFunction') {
      if (!opts.standalone) {
  		return cexpr;
      }
      body += 'return ' + cexpr;
      return '(function() {\n' + body + '}())';
  }
}

/**
 * @method getCalculatedProductionRules()
 * @returns void
 */
GrammarDef.prototype.getCalculatedProductionRules = function() {
  this.generateLalr1Parser();
  var ruleObjs = [];
  for(var i = 0; i < this.nonterminals.length; i++) {
     var nt = this.nonterminals[i];
     if (nt.hasEpsilonProduction) {
        ruleObjs.push({nonterminal:nt.name,rhs:''});
     }
  	var prules = nt.productionRules;
  	for(var j = 0; j < prules.length; j++) {
    		var prule = prules[j];
         if (typeof(prule.eliminatedEpsilonProductionIndex) === 'number') {
  			continue;
         }
    		var ntname = nt.name;
    		var rhsElements = prule.elements.map(function(elem) { return elem.name; });
    		var ruleObj = {
      		nonterminal : ntname,
      		rhs : prule.definitionString,
    		};
    		ruleObjs.push(ruleObj);
  	}
  }
  return ruleObjs;
}

/**
 * @method compileAsModule(moduleName,opts)
 * @returns void
 */
GrammarDef.prototype.compileAsModule = function(moduleName,opts) {
  var options = { mode : 'asModule' };
  if (typeof(moduleName) === 'string') {
    var fs = require('fs');
    if (fs.existsSync(moduleName)) {
       var fileName = moduleName;
       var path = require('path');
       var finfo = path.parse(fileName);
       moduleName = finfo.name;
       Utils.merge(options, { inputFile : fileName });
    }
    Utils.merge(options, { name : moduleName });
  }
  else if (typeof(moduleName) === 'object') {
    opts = moduleName;
  }
  Utils.merge(options,opts);
  if (!options.name) throw 'module name is missing.';
  if (!options.inputFile && !options.input) {
    throw 'one of input or inputFile must be specified.';
  }
  var infoMsg = 'compiling ';
  if (options.inputFile) infoMsg += '\'' + options.inputFile + '\' into ';
  infoMsg += 'module \'' + options.name + '\'...';
  console.log(infoMsg);
  return this.compile(options);
}

/**
 * @method createFromCalculatedRules(ruleObjs)
 * @returns void
 */
GrammarDef.createFromCalculatedRules = function(ruleObjs) {
  var gd = new GrammarDef();
  for(var i = 0; i < ruleObjs.length; i++) {
      var robj = ruleObjs[i];
      var prule = gd.addProductionRule(robj.nonterminal,robj.rhs);
  }
  return gd;
}

/**
 * @method showParserStateOutput(pstate)
 * @returns void
 */
GrammarDef.prototype.showParserStateOutput = function(pstate) {
  GrammarUtils.debug('Parse output:\n' + pstate.getConstructorString());
}

/**
 * @method _renumberProductionRules()
 * @returns void
 */
GrammarDef.prototype._renumberProductionRules = function() {
  var cnt = 0;
  for(var i = 0; i < this.nonterminals.length; i++) {
    var nt = this.nonterminals[i];
    for(var j = 0; j < nt.productionRules.length; j++) {
      var prule = nt.productionRules[j];
      prule.indexNumber = (++cnt);
    }
  }
}


module.exports = GrammarDef

