{
    name : "grammar",
    start : "GrammarSpec",
    rules : {
	GrammarSpec : {
	    rhs : "CodeBlock ident CodeBlock1",
	    action : function(hd,rule,rules,ft) {
	    	return {
	    		rules : [rule].concat(rules)
	    	};
	    }
	},
	
	CodeBlock : [ "longstring" ],
	CodeBlock1 : [ "longstring" ]
    }
}
