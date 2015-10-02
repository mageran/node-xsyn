/*
 * Generated code for class xsyn.grammar.impl.ProductionRuleBinding
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

var ProductionRuleBinding = function(productionRule) {
  this.productionRule = productionRule;
  this.elementLength = productionRule.elements.length;
  this.binding = new Array(this.elementLength);
  this.name = ProductionRuleBinding.generateUniqueName(productionRule.nonterminal.name);
};

ProductionRuleBinding.__defineGetter__('idcntMap', function() {
  if (typeof(this.$idcntMap$) === 'undefined') {
    this.$idcntMap$ = {};
  }
  return this.$idcntMap$;
});
ProductionRuleBinding.__defineSetter__('idcntMap', function(idcntMap) {
  this.$idcntMap$ = idcntMap;
});

ProductionRuleBinding.prototype.__defineGetter__('productionRule', function() {
  return this.$productionRule$;
});
ProductionRuleBinding.prototype.__defineSetter__('productionRule', function(productionRule) {
  this.$productionRule$ = productionRule;
});

ProductionRuleBinding.prototype.__defineGetter__('elementLength', function() {
  return this.$elementLength$;
});
ProductionRuleBinding.prototype.__defineSetter__('elementLength', function(elementLength) {
  this.$elementLength$ = elementLength;
});

ProductionRuleBinding.prototype.__defineGetter__('binding', function() {
  if (typeof(this.$binding$) === 'undefined') {
    this.$binding$ = [];
  }
  return this.$binding$;
});
ProductionRuleBinding.prototype.__defineSetter__('binding', function(binding) {
  this.$binding$ = binding;
});

ProductionRuleBinding.prototype.__defineGetter__('name', function() {
  return this.$name$;
});
ProductionRuleBinding.prototype.__defineSetter__('name', function(name) {
  this.$name$ = name;
});

/**
 * @method toString()
 * @returns java.lang.String
 */
ProductionRuleBinding.prototype.toString = function() {
  var s = '';
  s += this.name + ' ->';
  for(var i = 0; i < this.binding.length; i++) {
    var elem = this.binding[i];
    s += elem.name;
  }
  return s;
}

/**
 * @method generateUniqueName(pruleName)
 * @returns java.lang.String
 */
ProductionRuleBinding.generateUniqueName = function(pruleName) {
  var idcnt;
  var m = ProductionRuleBinding.idcntMap;
  if (typeof(m[pruleName]) === 'number') {
    idcnt = m[pruleName];
  } else {
    idcnt = 0;
  }
  var name = pruleName + idcnt;
  ProductionRuleBinding.idcntMap[pruleName] = idcnt + 1;
  return name;
}

/**
 * @method setBinding(index,pelem)
 * @returns void
 */
ProductionRuleBinding.prototype.setBinding = function(index,pelem) {
  this.binding[index] = pelem;
  GrammarUtils.debug('  ' + index + ' => ' + pelem);
}

/**
 * @method toStringWithProductionRule()
 * @returns java.lang.String
 */
ProductionRuleBinding.prototype.toStringWithProductionRule = function() {
  var s = '';
  s += this.productionRule + '\n';
  s += '  as ' + this.name + ' ->';
  for(var i = 0; i < this.binding.length; i++) {
    var elem = this.binding[i];
    s += elem.name;
  }
  return s;
}

/**
 * @method toConstructorString()
 * @returns java.lang.String
 */
ProductionRuleBinding.prototype.toConstructorString = function() {
  var s = '';
  s += this.productionRule.getConstructorName() + '(';
  var sep = '';
  for(var i = 0; i < this.binding.length; i++) {
    var elem = this.binding[i];
    var cstr = elem.toConstructorString();
    s += sep + cstr
    sep = ',';
  }
  s += ')'
  return s;
}


module.exports = ProductionRuleBinding

