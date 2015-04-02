/*
 * this is a generated file; modification won't survive!
 */
__defineGetter__('xsyn',function() { try { return require('xsyn'); } catch(e) { return require('./xsyn'); }});
// this is a test
// this is a second test
var $OBJ$ = function(grammarDef) {
  this.grammarDef = grammarDef;
var ident = function(x) {
return x;};
var symbol = function(x) {
return x;};
var number = function(x) {
return Number(x);};
var string = function(x) {
return String(x);};
var longstring = function(x) {
return String(unescape(x));};
var kw = function(x) {
return x;};
var CodeBlock$_epsilon = function() {
$$ = null
  return $$;
};
var Rules$_epsilon = function() {
$$ = [];
  return $$;
};
var OptionalAction$_epsilon = function() {
$$ = null;
  return $$;
};
var GrammarSpec = function($1,$2,$3,$4) {
var $fun = function (hd,rule,rules,ft) {
				return {
					headerCode : hd,
					rules : [rule].concat(rules),
					footerCode : ft
				};
			};
return $fun.call(this,$1,$2,$3,$4);
};
var GrammarSpec$1 = function($2,$3,$4) {
var $fun = function (hd,rule,rules,ft) {
				return {
					headerCode : hd,
					rules : [rule].concat(rules),
					footerCode : ft
				};
			};
return $fun.call(this,CodeBlock$_epsilon(),$2,$3,$4);
};
var GrammarSpec$2 = function($1,$2,$4) {
var $fun = function (hd,rule,rules,ft) {
				return {
					headerCode : hd,
					rules : [rule].concat(rules),
					footerCode : ft
				};
			};
return $fun.call(this,$1,$2,Rules$_epsilon(),$4);
};
var GrammarSpec$3 = function($2,$3) {
var $fun = function (hd,rule,rules,ft) {
				return {
					headerCode : hd,
					rules : [rule].concat(rules),
					footerCode : ft
				};
			};
return $fun.call(this,CodeBlock$_epsilon(),$2,Rules$_epsilon());
};
var GrammarSpec$4 = function($1,$2,$3) {
var $fun = function (hd,rule,rules,ft) {
				return {
					headerCode : hd,
					rules : [rule].concat(rules),
					footerCode : ft
				};
			};
return $fun.call(this,$1,$2,$3,CodeBlock$_epsilon());
};
var GrammarSpec$5 = function($2,$3) {
var $fun = function (hd,rule,rules,ft) {
				return {
					headerCode : hd,
					rules : [rule].concat(rules),
					footerCode : ft
				};
			};
return $fun.call(this,CodeBlock$_epsilon(),$2,$3,CodeBlock$_epsilon());
};
var GrammarSpec$6 = function($2) {
var $fun = function (hd,rule,rules,ft) {
				return {
					headerCode : hd,
					rules : [rule].concat(rules),
					footerCode : ft
				};
			};
return $fun.call(this,CodeBlock$_epsilon(),$2,Rules$_epsilon(),CodeBlock$_epsilon());
};
var GrammarSpec$7 = function($1,$2) {
var $fun = function (hd,rule,rules,ft) {
				return {
					headerCode : hd,
					rules : [rule].concat(rules),
					footerCode : ft
				};
			};
return $fun.call(this,$1,$2,Rules$_epsilon(),CodeBlock$_epsilon());
};
var CodeBlock = function($1) {
$$ = $1
  return $$;
};
var Rules = function($1,$2) {
$$ = [$1].concat($2);
  return $$;
};
var Rules$1 = function($1) {
var $2 = Rules$_epsilon();
$$ = [$1].concat($2);
  return $$;
};
var Rule = function($1,$2,$3,$4) {
var $fun = function (id,_,prules) {
				return {
					nonterminal : id,
					productionRules : prules
				};
			};
return $fun.call(this,$1,$2,$3,$4);
};
var ProductionRuleList = function($1) {
$$ = [$1];
  return $$;
};
var ProductionRuleList$1 = function($1,$2,$3) {
$$ = [$1].concat($3);
  return $$;
};
var ProductionRule = function($1,$2) {
$$ = { rhs : $1, action : $2 };
  return $$;
};
var ProductionRule$1 = function($1) {
var $2 = OptionalAction$_epsilon();
$$ = { rhs : $1, action : $2 };
  return $$;
};
var RuleRhs = function($1) {
$$ = $1;
  return $$;
};
var RuleRhs$1 = function($1,$2) {
$$ = $1 + ' ' + $2;
  return $$;
};
var RuleRhsElement = function($1) {
$$ = $1
  return $$;
};
var RuleRhsElement$1 = function($1) {
var $fun = function (str) {
			                	  return "'" + str + "'";
			                  };
return $fun.call(this,$1);
};
var OptionalAction = function($1) {
$$ = $1
  return $$;
};
var __START = function($1) {
$$ = $1
  return $$;
};
var $GET$rules = function() {
return JSON.parse(unescape('%5B%7B%22nonterminal%22%3A%22GrammarSpec%22%2C%22rhs%22%3A%22CodeBlock%20Rule%20Rules%20CodeBlock%22%7D%2C%7B%22nonterminal%22%3A%22CodeBlock%22%2C%22rhs%22%3A%22%22%7D%2C%7B%22nonterminal%22%3A%22CodeBlock%22%2C%22rhs%22%3A%22longstring%22%7D%2C%7B%22nonterminal%22%3A%22Rules%22%2C%22rhs%22%3A%22%22%7D%2C%7B%22nonterminal%22%3A%22Rules%22%2C%22rhs%22%3A%22Rule%20Rules%22%7D%2C%7B%22nonterminal%22%3A%22Rule%22%2C%22rhs%22%3A%22ident%20%27%3A%27%20ProductionRuleList%20%27%3B%27%22%7D%2C%7B%22nonterminal%22%3A%22ProductionRuleList%22%2C%22rhs%22%3A%22ProductionRule%22%7D%2C%7B%22nonterminal%22%3A%22ProductionRuleList%22%2C%22rhs%22%3A%22ProductionRule%20%27%7C%27%20ProductionRuleList%22%7D%2C%7B%22nonterminal%22%3A%22ProductionRule%22%2C%22rhs%22%3A%22RuleRhs%20OptionalAction%22%7D%2C%7B%22nonterminal%22%3A%22RuleRhs%22%2C%22rhs%22%3A%22RuleRhsElement%22%7D%2C%7B%22nonterminal%22%3A%22RuleRhs%22%2C%22rhs%22%3A%22RuleRhsElement%20RuleRhs%22%7D%2C%7B%22nonterminal%22%3A%22RuleRhsElement%22%2C%22rhs%22%3A%22ident%22%7D%2C%7B%22nonterminal%22%3A%22RuleRhsElement%22%2C%22rhs%22%3A%22string%22%7D%2C%7B%22nonterminal%22%3A%22OptionalAction%22%2C%22rhs%22%3A%22%22%7D%2C%7B%22nonterminal%22%3A%22OptionalAction%22%2C%22rhs%22%3A%22longstring%22%7D%2C%7B%22nonterminal%22%3A%22__START%22%2C%22rhs%22%3A%22GrammarSpec%22%7D%5D'));};
var $GET$grammarDef = function() {
if (typeof(this.$grammarDef$) === 'undefined') {
  this.$grammarDef$ = xsyn.GrammarDef.createFromCalculatedRules(this.rules);
}
return this.$grammarDef$;
};
var $SET$grammarDef = function(gd) {
this.$grammarDef$ = gd;};
this.ident = ident;
this.symbol = symbol;
this.number = number;
this.string = string;
this.longstring = longstring;
this.kw = kw;
this.CodeBlock$_epsilon = CodeBlock$_epsilon;
this.Rules$_epsilon = Rules$_epsilon;
this.OptionalAction$_epsilon = OptionalAction$_epsilon;
this.GrammarSpec = GrammarSpec;
this.GrammarSpec$1 = GrammarSpec$1;
this.GrammarSpec$2 = GrammarSpec$2;
this.GrammarSpec$3 = GrammarSpec$3;
this.GrammarSpec$4 = GrammarSpec$4;
this.GrammarSpec$5 = GrammarSpec$5;
this.GrammarSpec$6 = GrammarSpec$6;
this.GrammarSpec$7 = GrammarSpec$7;
this.CodeBlock = CodeBlock;
this.Rules = Rules;
this.Rules$1 = Rules$1;
this.Rule = Rule;
this.ProductionRuleList = ProductionRuleList;
this.ProductionRuleList$1 = ProductionRuleList$1;
this.ProductionRule = ProductionRule;
this.ProductionRule$1 = ProductionRule$1;
this.RuleRhs = RuleRhs;
this.RuleRhs$1 = RuleRhs$1;
this.RuleRhsElement = RuleRhsElement;
this.RuleRhsElement$1 = RuleRhsElement$1;
this.OptionalAction = OptionalAction;
this.__START = __START;
this.__defineGetter__('rules', $GET$rules);
this.__defineGetter__('grammarDef', $GET$grammarDef);
this.__defineSetter__('grammarDef', $SET$grammarDef);
this.inspectShow = inspectShow;
this.cexpr = unescape('__START%28GrammarSpec%28CodeBlock%28longstring%28%27%2520%250A//this%2520is%2520a%2520code%2520block%250A%250A%27%29%29%2CRule%28ident%28%27Start%27%29%2Ckw%28%27%3A%27%29%2CProductionRuleList%28ProductionRule%28RuleRhs%28RuleRhsElement%28ident%28%27Expr%27%29%29%29%2COptionalAction%28longstring%28%27%250Afunction%2528expr%2529%2520%257B%250A%2509console.log%2528%2527processing...%2527%2529%253B%250A%2509return%2520this.processExpr%2528expr%2529%253B%250A%257D%250A%27%29%29%29%29%2Ckw%28%27%3B%27%29%29%2CRules%28Rule%28ident%28%27Expr%27%29%2Ckw%28%27%3A%27%29%2CProductionRuleList%241%28ProductionRule%28RuleRhs%241%28RuleRhsElement%28ident%28%27Term%27%29%29%2CRuleRhs%241%28RuleRhsElement%28ident%28%27plusMinus%27%29%29%2CRuleRhs%28RuleRhsElement%28ident%28%27Expr%27%29%29%29%29%29%2COptionalAction%28longstring%28%27%2520%2524%2524%2520%253D%2520%257B%2520ops%2520%253A%2520%255B%25241%252C%25243%255D%252C%2520op%2520%253A%2520%25242%2520%257D%253B%2520%27%29%29%29%2Ckw%28%27%7C%27%29%2CProductionRuleList%28ProductionRule%241%28RuleRhs%28RuleRhsElement%28ident%28%27Term%27%29%29%29%29%29%29%2Ckw%28%27%3B%27%29%29%2CRules%28Rule%28ident%28%27Term%27%29%2Ckw%28%27%3A%27%29%2CProductionRuleList%241%28ProductionRule%28RuleRhs%241%28RuleRhsElement%28ident%28%27Factor%27%29%29%2CRuleRhs%241%28RuleRhsElement%28ident%28%27multDiv%27%29%29%2CRuleRhs%28RuleRhsElement%28ident%28%27Term%27%29%29%29%29%29%2COptionalAction%28longstring%28%27%2520%2524%2524%2520%253D%2520%257B%2520ops%2520%253A%2520%255B%25241%252C%25243%255D%252C%2520op%2520%253A%2520%25242%2520%257D%253B%2520%27%29%29%29%2Ckw%28%27%7C%27%29%2CProductionRuleList%28ProductionRule%241%28RuleRhs%28RuleRhsElement%28ident%28%27Factor%27%29%29%29%29%29%29%2Ckw%28%27%3B%27%29%29%2CRules%28Rule%28ident%28%27Factor%27%29%2Ckw%28%27%3A%27%29%2CProductionRuleList%241%28ProductionRule%241%28RuleRhs%28RuleRhsElement%28ident%28%27PrimExpr%27%29%29%29%29%2Ckw%28%27%7C%27%29%2CProductionRuleList%28ProductionRule%28RuleRhs%241%28RuleRhsElement%241%28string%28%27%28%27%29%29%2CRuleRhs%241%28RuleRhsElement%28ident%28%27Expr%27%29%29%2CRuleRhs%28RuleRhsElement%241%28string%28%27%29%27%29%29%29%29%29%2COptionalAction%28longstring%28%27%2520%2524%2524%2520%253D%2520%25242%253B%2520%27%29%29%29%29%29%2Ckw%28%27%3B%27%29%29%2CRules%28Rule%28ident%28%27PrimExpr%27%29%2Ckw%28%27%3A%27%29%2CProductionRuleList%28ProductionRule%241%28RuleRhs%28RuleRhsElement%28ident%28%27number%27%29%29%29%29%29%2Ckw%28%27%3B%27%29%29%2CRules%28Rule%28ident%28%27plusMinus%27%29%2Ckw%28%27%3A%27%29%2CProductionRuleList%241%28ProductionRule%241%28RuleRhs%28RuleRhsElement%241%28string%28%27+%27%29%29%29%29%2Ckw%28%27%7C%27%29%2CProductionRuleList%28ProductionRule%241%28RuleRhs%28RuleRhsElement%241%28string%28%27-%27%29%29%29%29%29%29%2Ckw%28%27%3B%27%29%29%2CRules%241%28Rule%28ident%28%27multDiv%27%29%2Ckw%28%27%3A%27%29%2CProductionRuleList%241%28ProductionRule%241%28RuleRhs%28RuleRhsElement%241%28string%28%27*%27%29%29%29%29%2Ckw%28%27%7C%27%29%2CProductionRuleList%28ProductionRule%241%28RuleRhs%28RuleRhsElement%241%28string%28%27/%27%29%29%29%29%29%29%2Ckw%28%27%3B%27%29%29%29%29%29%29%29%29%2CCodeBlock%28longstring%28%27%250A%250Athis.processExpr%2520%253D%2520function%2528obj%2529%2520%257B%250A%2509if%2520%2528typeof%2528obj%2529%2520%253D%253D%253D%2520%2527number%2527%2529%2520%257B%250A%2509%2509return%2520obj%253B%250A%2509%257D%250A%2509var%2520doOperation%2520%253D%2520function%2528op0%252Cop1%2529%2520%257B%250A%2509%2509switch%2528obj.op%2529%2520%257B%250A%2509%2509case%2520%2527+%2527%253A%2520return%2520op0%2520+%2520op1%253B%250A%2509%2509case%2520%2527-%2527%253A%2520return%2520op0%2520-%2520op1%253B%250A%2509%2509case%2520%2527*%2527%253A%2520return%2520op0%2520*%2520op1%253B%250A%2509%2509case%2520%2527/%2527%253A%2520return%2520op0%2520/%2520op1%253B%250A%2509%2509default%253A%2520throw%2520%2522unsupported%2520operator%253A%2520%2527%2522%2520+%2520obj.op%2520+%2520%2522%2527.%2522%253B%250A%2509%2509%257D%250A%2509%257D%253B%250A%2509var%2520operands%2520%253D%2520%255B%255D%253B%250A%2509if%2520%2528obj.ops%2520%2526%2526%2520obj.ops%2520instanceof%2520Array%2529%2520%257B%250A%2509%2520%2520%2520%2520for%2528var%2520i%2520%253D%25200%253B%2520i%2520%253C%2520obj.ops.length%253B%2520i++%2529%2520%257B%250A%2509%2509%2509operands.push%2528this.processExpr%2528obj.ops%255Bi%255D%2529%2529%253B%250A%2509%2509%257D%250A%2509%257D%250A%2509var%2520res%2520%253D%2520operands%255B0%255D%253B%250A%2509for%2528var%2520i%2520%253D%25201%253B%2520i%2520%253C%2520operands.length%253B%2520i++%2529%2520%257B%250A%2509%2509res%2520%253D%2520doOperation%2528res%252Coperands%255Bi%255D%2529%253B%250A%2509%257D%250A%2509return%2520res%253B%250A%257D%253B%250A%250A%27%29%29%29%29');
this.compile = function(input) {
   if (!this.grammarDef) throw '*** grammar definition does not exists in field grammarDef.';
   this.cexpr = this.grammarDef.compile(input,{standalone:false});
   return this.cexpr;
};
this.compileFile = function(inputFile) {
   if (!this.grammarDef) throw '*** grammar definition does not exists in field grammarDef.';
   this.cexpr = this.grammarDef.compile({inputFile:inputFile,standalone:false});
   return this.cexpr;
};
this.run = function() {
   if (!this.cexpr) throw '*** compiled code is missing; you have to run compile() first.';
   with(this) { return eval(this.cexpr); }
};
this.__defineGetter__("parser",function () {
				if (!this.$parser$) {
					var grammarObj = this.run();
					var gd = new xsyn.GrammarDef();
					if (!!grammarObj.headerCode) {
						gd.headerCode = grammarObj.headerCode;
					}
					if (!!grammarObj.footerCode) {
						//console.log("---------> has footer code!");
						gd.footerCode = grammarObj.footerCode;
					}
					var rules = grammarObj.rules;
					if (typeof(rules) === 'object' && rules instanceof Array) {
						for(var i = 0; i < rules.length; i++) {
							var ruleObj = rules[i];
							var nt = ruleObj.nonterminal;
							for(var j = 0; j < ruleObj.productionRules.length; j++) {
								var pruleObj = ruleObj.productionRules[j];
								var theAction = !!pruleObj.action ? pruleObj.action.trim() : null;
								if (!!theAction && theAction.indexOf('function') === 0) {
									theAction = eval('(' + theAction + ')');
								}
								gd.addProductionRule(nt,pruleObj.rhs,theAction);
								//console.log(nt + ' -> ' + pruleObj.rhs);
							}
						}
					}
					gd.run = function(input) {
						var res = this.compile(input);
						return eval(res);
					}
					this.$parser$ = gd;
				}
				return this.$parser$;
			});
};
module.exports = $OBJ$;
