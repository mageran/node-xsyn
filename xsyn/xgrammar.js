module.exports = {
	name : "grammar",
	start : "GrammarSpec",
	rules : {
		GrammarSpec : {
			rhs : "CodeBlock Rule Rules CodeBlock",
			action : function(hd,rule,rules,ft) {
				return {
					headerCode : hd,
					rules : [rule].concat(rules),
					footerCode : ft
				};
			}
		},

		CodeBlock : [ "longstring", "" ],
		Rules : [{
			rhs : "Rule Rules",
			action : "$$ = [$1].concat($2);"
		},
		{
			rhs : "",
			action : "$$ = [];"
		}],
		Rule : [{ 
			rhs : "ident ':' ProductionRuleList ';'",
			action : function(id,_,prules) {
				return {
					nonterminal : id,
					productionRules : prules
				};
			}
		}
		],
		ProductionRuleList :
			[{
				rhs : "ProductionRule",
				action : "$$ = [$1];"
			},{
				rhs : "ProductionRule '|' ProductionRuleList",
				action : "$$ = [$1].concat($3);"
			}],
			ProductionRule:[{
				rhs : "RuleRhs OptionalAction",
				action : "$$ = { rhs : $1, action : $2 };"
			}],
			RuleRhs : [{ 
				rhs : "",
				action : "$$ = '';"
			},
			{
				rhs : "RuleRhsElement RuleRhs",
				action : "$$ = $1 + ' ' + $2;"
			}
			],
			RuleRhsElement : [{ rhs : "ident" },
			                  { rhs : "string", action : function(str) {
			                	  return "'" + str + "'";
			                  }}
			],
			OptionalAction : [{
				rhs : "",
				action : '$$ = null;'
			},
			{
				rhs : "longstring",
				action : '$$ = $1'
			}]
	},
	header : "//...\n",
	members : {
		parser : {
			get : function() {
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
					//console.log(rules);
					if (typeof(rules) === 'object' && rules instanceof Array) {
						for(var i = 0; i < rules.length; i++) {
							var ruleObj = rules[i];
							var nt = ruleObj.nonterminal;
							ruleObj.productionRules = !!ruleObj.productionRules ? ruleObj.productionRules : [];
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
			}
		}
	}
}
