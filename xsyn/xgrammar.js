module.exports = {
	name : "grammar",
	start : "GrammarSpec",
	codeBrackets : 
	{
		start : '<grammar>',
		end : '</grammar>'
	},
	rules : {
		GrammarSpec : {
			rhs : "Options CodeBlock Rule Rules CodeBlock",
			action : function(options,hd,rule,rules,ft) {
				return {
					options : options,
					headerCode : hd,
					rules : [rule].concat(rules),
					footerCode : ft
				};
			}
		},
		
		Options : [{
			rhs : "",
			action : "$$ = [];"
		},{
			rhs : "Option Options",
			action : "$$ = [$1].concat($2);"
		}],
		
		Option : {
			rhs : "'%' ident ':' string",
			action : function(_,key,_,value) {
				//console.log("option: " + key + " -> '" + value + "'");
				return { key : key, value : value };
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
		},
		{
			rhs : "'token' '$' ident ':' string OptionalAction ';'",
			action : function(t,_,id,_,tdef,action) {
				return {
					token : id,
					regex : tdef,
					action : action
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
							if (nt) {
								//console.log("nt: " + nt);
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
							} else {
								var token = ruleObj.token;
								//console.log("token: " + token);
								if (token) {
									//console.log("found token definition '" + token + "'");
									gd.addCustomTokenDefinition(token,ruleObj.regex,ruleObj.action);
								}
							}
						}
					}
					if (!!grammarObj.options) {
						var opts = {};
						for(var i = 0; i < grammarObj.options.length; i++) {
							var option = grammarObj.options[i];
							//console.log('processing option ' + option.key + ' => ' + option.value);
							opts[option.key] = option.value;
							if (option.key === 'name') {
								gd.name = option.value ? option.value : gd.name;
							}
							else if (option.key === 'start' && option.value) {
								//console.log(gd.name + ': setting start nonterminal to "' + option.value + '" (from options)');
								gd.setStartNonterminal(option.value,true,true);
							}
						}
						if (!!opts.codeStart && !!opts.codeEnd) {
							//console.log('...setting codeBrackets to ' + opts.codeStart + " " + opts.codeEnd);
							gd.setCodeStartEndSymbols(opts.codeStart,opts.codeEnd);
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
