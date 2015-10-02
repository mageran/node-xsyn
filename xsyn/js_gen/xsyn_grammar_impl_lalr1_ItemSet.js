/*
 * Generated code for class xsyn.grammar.impl.lalr1.ItemSet
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

var ItemSet = function(grammar) {
  this.grammar = grammar;
  this.ruleItemSets = [];
  if (typeof(Object.itemsetidcnt) === 'undefined') {Object.itemsetidcnt = 0;}
  this.name = 'I' + (Object.itemsetidcnt++);
  global[this.name] = this;
  this.initialPhase = true;
};

ItemSet.__defineGetter__('idcnt', function() {
  if (typeof(this.$idcnt$) === 'undefined') {
    this.$idcnt$ = 0;
  }
  return this.$idcnt$;
});
ItemSet.__defineSetter__('idcnt', function(idcnt) {
  this.$idcnt$ = idcnt;
});

ItemSet.prototype.__defineGetter__('name', function() {
  return this.$name$;
});
ItemSet.prototype.__defineSetter__('name', function(name) {
  this.$name$ = name;
});

ItemSet.prototype.__defineGetter__('isCalculated', function() {
  if (typeof(this.$isCalculated$) === 'undefined') {
    this.$isCalculated$ = false;
  }
  return this.$isCalculated$;
});
ItemSet.prototype.__defineSetter__('isCalculated', function(isCalculated) {
  this.$isCalculated$ = isCalculated;
});

ItemSet.prototype.__defineGetter__('initialPhase', function() {
  return this.$initialPhase$;
});
ItemSet.prototype.__defineSetter__('initialPhase', function(initialPhase) {
  this.$initialPhase$ = initialPhase;
});

ItemSet.prototype.__defineGetter__('grammar', function() {
  return this.$grammar$;
});
ItemSet.prototype.__defineSetter__('grammar', function(grammar) {
  this.$grammar$ = grammar;
});

ItemSet.prototype.__defineGetter__('transitions', function() {
  if (typeof(this.$transitions$) === 'undefined') {
    this.$transitions$ = new Map();
  }
  return this.$transitions$;
});
ItemSet.prototype.__defineSetter__('transitions', function(transitions) {
  this.$transitions$ = transitions;
});

ItemSet.prototype.__defineGetter__('ruleItemSets', function() {
  if (typeof(this.$ruleItemSets$) === 'undefined') {
    this.$ruleItemSets$ = [];
  }
  return this.$ruleItemSets$;
});
ItemSet.prototype.__defineSetter__('ruleItemSets', function(ruleItemSets) {
  this.$ruleItemSets$ = ruleItemSets;
});

ItemSet.prototype.__defineGetter__('parseTableRow', function() {
  if (typeof(this.$parseTableRow$) === 'undefined') {
    this.$parseTableRow$ = new Map();
  }
  return this.$parseTableRow$;
});
ItemSet.prototype.__defineSetter__('parseTableRow', function(parseTableRow) {
  this.$parseTableRow$ = parseTableRow;
});

/**
 * @method equals(obj)
 * @returns boolean
 */
ItemSet.prototype.equals = function(obj) {
  var isequals = this._equals(obj);
  return isequals;
}

/**
 * @method toString()
 * @returns java.lang.String
 */
ItemSet.prototype.toString = function() {
  var s = '';
  s += 'ItemSet ' + this.name + ':\n';
  var rsets = this.ruleItemSets;
  for(var i = 0; i < rsets.length; i++) {
      var rset = rsets[i];
      s += rset;
  }
  if (this.transitions.length > 0) {
      s += '  Transitions:\n';
      var tkeys = this.transitions.keys;
      for(var i = 0; i < tkeys.length; i++) {
  		var elem = tkeys[i];
  		s += '    ' + this.name + ' -- ' + elem.name + ' --> ' + this.transitions.get(elem).name + '\n';
      }
  }
  return s;
}

/**
 * @method addProductionRule(prule)
 * @returns xsyn.grammar.impl.lalr1.ProductionRuleWithMarker
 */
ItemSet.prototype.addProductionRule = function(prule) {
  var mrule = ProductionRuleWithMarker.createFrom(prule);
  mrule.isInitial = this.initialPhase;
  var rset = new RuleItemSet(this);
  rset.rules.push(mrule);
  this.ruleItemSets.push(rset);
  return mrule;
}

/**
 * @method getParseTableActionForToken(token)
 * @returns java.util.List
 */
ItemSet.prototype.getParseTableActionForToken = function(token) {
  var actions = [];
  var ptrkeys = this.parseTableRow.keys;
  for(var i = 0; i < ptrkeys.length; i++) {
      var elem = ptrkeys[i];
      if (elem instanceof TokenDef) {
  	var tdef = elem;
  	if (token.getId() == tdef.getTokenId()) {
  	    actions.push(this.parseTableRow.get(tdef));
  	}
      }
  }
  if (actions.length === 0) {
      return null;
  }
  //if (actions.length > 1) {
  //  console.error('WARNING: multiple actions found for token "' + token.name + '" in state ' + this.name);
  //}
  return actions;
}

/**
 * @method acceptedTokenNames()
 * @returns java.util.List
 */
ItemSet.prototype.acceptedTokenNames = function() {
  var res = [];
  var pkeys = this.parseTableRow.keys;
  for(var i = 0; i < pkeys.length; i++) {
      var elem = pkeys[i];
      if (elem instanceof TokenDef) {
  		var tdef = elem;
  		if (this.parseTableRow.get(tdef) !== null) {
  	    	res.push(tdef.name);
  		}
      }
  }
  return res;
}

/**
 * @method getParseTableAction(elem)
 * @returns xsyn.grammar.impl.lalr1.IParseAction
 */
ItemSet.prototype.getParseTableAction = function(elem) {
  return this.parseTableRow.get(elem);
}

/**
 * @method acceptedTokens()
 * @returns java.util.List
 */
ItemSet.prototype.acceptedTokens = function() {
  var res = [];
  var pkeys = this.parseTableRow.keys;
  for(var i = 0; i < pkeys.length; i++) {
      var elem = pkeys[i];
      if (elem instanceof TokenDef) {
  	var tdef = elem;
  	if (this.parseTableRow.get(tdef) !== null) {
  	    res.push(tdef);
  	}
      }
  }
  return res;
}

/**
 * @method addProductionRulesForNonterminal(nt)
 * @returns void
 */
ItemSet.prototype.addProductionRulesForNonterminal = function(nt) {
  var rset = new RuleItemSet(this);
  rset.addProductionRulesForNonterminal(nt);
  this.ruleItemSets.push(rset);
}

/**
 * @method calculate()
 * @returns java.util.List
 */
ItemSet.prototype.calculate = function() {
  GrammarUtils.debug('calculating ItemSet ' + this + '...');
  var nextElements = [];
  for(var i = 0; i < this.ruleItemSets.length; i++) {
      var rset = this.ruleItemSets[i];
      rset.calculateClosure();
      nextElements.addAllToSet(rset.getNextElements());
  }
  GrammarUtils.debug('#nextElements: ' + nextElements.size());
  this.isCalculated = true;
  var newItemSets = [];
  var existingItemSets = [];
  existingItemSets.addAll(this.grammar.itemSets);
  for(var i = 0; i < nextElements.length; i++) {
      var elem = nextElements[i];
      GrammarUtils.debug('   next element: ' + elem.name);
      var iset = new ItemSet(this.grammar);
      //console.log('--> item set created: ' + iset.name);
      for(var j = 0; j < this.ruleItemSets.length; j++) {
  		var rset = this.ruleItemSets[j];
  		rset.initNextItemSetForInput(elem, iset);
      }
      var itemSetAlreadyExists = false;
      for(var j = 0; j < existingItemSets.length; j++) {
  		var exIset = existingItemSets[j];
  		if (iset.equals(exIset)) {
  	    	itemSetAlreadyExists = true;
             Object.itemsetidcnt--;
  	    	ItemSet.idcnt--;
  	    	iset = exIset;
  	    	break;
  		}
      }
      if (!itemSetAlreadyExists) {
  		newItemSets.add(iset);
  		existingItemSets.add(iset);
      }
      this.transitions.put(elem, iset);
  }
  // check equality with existing item sets
  // ...
  return newItemSets;
}

/**
 * @method getTransitionForInputForName(name)
 * @returns xsyn.grammar.impl.lalr1.ItemSet
 */
ItemSet.prototype.getTransitionForInputForName = function(name) {
  for(var i = 0; i < this.transitions.keys.length; i++) {
      var elem = this.transitions.keys[i];
      if (elem.name === name) {
  	return this.transitions.get(elem);
      }
  }
  return null;
}

/**
 * @method getTransitionForInput(elem)
 * @returns xsyn.grammar.impl.lalr1.ItemSet
 */
ItemSet.prototype.getTransitionForInput = function(elem) {
  return this.transitions.get(elem);
}

/**
 * @method initParseTable()
 * @returns void
 */
ItemSet.prototype.initParseTable = function() {
  var ptable = this.parseTableRow;
  if (this.isAcceptItemSet()) {
      ptable.put(GrammarUtils.endToken, new AcceptAction(GrammarUtils.endToken));
  }
  var tkeys = this.transitions.keys;
  for(var i = 0; i < tkeys.length; i++) {
      var pelem = tkeys[i];
      if (pelem instanceof TokenDef) {
  		var token = pelem;
  		var iset = this.transitions.get(pelem);
  		ptable.put(token, new ShiftAction(token, iset));
      }
      else if ((pelem instanceof Nonterminal) || (pelem instanceof ExtendedNonterminal)) {
  		var nt = pelem;
  		var iset = this.transitions.get(pelem);
  		ptable.put(nt, new GotoAction(iset));
      }
  }
}

/**
 * @method addReduceToParseTable(prule)
 * @returns void
 */
ItemSet.prototype.addReduceToParseTable = function(prule) {
  if (prule.getFinalSet() !== this) return;
  var ptable = this.parseTableRow;
  var followSet = prule.followSet;
  var oprule = prule.originalProductionRule;
  for(var i = 0; i < followSet.length; i++) {
      var token = followSet[i];
      if (ptable.get(token) instanceof AcceptAction) {
  		var action = ptable.get(token);
  		action.productionRule = oprule;
  		continue;
      }
      ptable.put(token, new ReduceAction(token, oprule));
  }
}

/**
 * @method _equals(obj)
 * @returns boolean
 */
ItemSet.prototype._equals = function(obj) {
  if (obj instanceof ItemSet) {
      var iset = obj;
      if (this.ruleItemSets.length !== iset.ruleItemSets.length) return false;
      var otherRsets = [];
      otherRsets.addAll(iset.ruleItemSets);
      for(var i = 0; i < this.ruleItemSets.length; i++) {
  		var rset = this.ruleItemSets[i];
  		var deleteMeFromOthers = null;
  		for(var j = 0; j < otherRsets.length; j++) {
  	    	var otherRset = otherRsets[j];
  	    	if (rset.equals(otherRset)) {
  				deleteMeFromOthers = otherRset;
  				break;
  	    	}
  		}
  		if (deleteMeFromOthers !== null) {
  	    	otherRsets.remove(deleteMeFromOthers);
  		}
      }
      return otherRsets.length === 0;
  }
  return false;
}

/**
 * @method isAcceptItemSet()
 * @returns boolean
 */
ItemSet.prototype.isAcceptItemSet = function() {
  for(var i = 0; i < this.ruleItemSets.length; i++) {
      var rule = this.ruleItemSets[i];
      if (rule.containsAcceptRule()) {
  	return true;
      }
  }
  return false;
}


module.exports = ItemSet

