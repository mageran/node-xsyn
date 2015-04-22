### Basic usage

This directory contains a very simple language for arithmetic expressions.
The usage is as following (inside a nodejs application):

```javascript
var xsyn = require('node-xsyn'); // load the node-xsyn package
...
var ExprLang = require(xsyn.languageModule('expr.gra'));
...
var expr = new ExprLang();
console.log(expr.parser.run('(5 + 1) * 4')); // outputs 24

```

### Using 'code brackets'

The language in file expr_wcb.gra illustrates the use of so-called <em>code-brackets</em>. This concept allows for integrating documentation and source code in a seamless fashion; check out <a href="input.html">input.html</a> as an example that serves both as an input for the parser and as documentation file.
The usage of this file for the parser is only slightly different from the 'plain' version:
```javascript
var xsyn = require('node-xsyn'); // load the node-xsyn package
...
var ExprLang = require(xsyn.languageModule('expr.gra'));
...
var expr = new ExprLang();
console.log(expr.parser.run({inputFile : 'input.html'}));
```
