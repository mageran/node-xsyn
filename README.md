# node-xsyn
## Extensible syntax for node
(or: A DSL package for node)

This project provides the possibility to define new languages (DSLs) by means of context-free grammars. Node-xsyn works similarly as some well-known tools lex/yacc/bison by allowing to attach processing rules to each of the grammar production rules. Node-xsyn uses the LALR(1) method to generate a parser and is fully integrated into the node module system; language parsers can be compiled into node modules and re-used as needed.

### Hello (World) Example

In order to illustrate how the package works, let first look at a HelloWorld "Language". Assume, we have the following grammar definition in a file called "hello.gra":

```
Greeting : Greeting_en
           {% $$ = 'Hello, how are you?'; %}
         | Greeting_de
           {% $$ = 'Hallo, wie geht es Dir?'; %}
         ;
         
Greeting_en : 'Hello';
Greeting_de : 'Hallo';
```
The "language" defined by the above grammar consists of three nonterminal symbols (Greeting, Greeting\_en, and Greeting\_de) with corresponding production rules. The code in {% ... %} represents the associated action for the respective production rule. Those familiar with lex and yacc will immediately recognize the dollar syntax in the associated production rule; '$$' stands for the result of the action, while $1, $2, ... refer to the corresponding elements of the production rule's right-hand-side (starting with index 1; not used in this example). The only possible input strings that this language accepts are "Hello" or "Hallo"; the parsing/processing "responds" to the input with the English or the German answer sentence depending on the input.

This hello language can now be compiled into a node module, which can be "require-d" in your node application as follows:
```javascript
var xsyn = require('node-xsyn'); // load the node-xsyn package

var HelloLang = require(xsyn.languageModule('hello.gra')); // load the 'Hello' language
```

The last line in the above listing triggers the generation of the parser into a node module and loads the generated javascript file as a node module. (Without any option the generated file will reside in the directory ".xsyn_gen/"; the parser generation is only triggered if the grammar files has changed since the last use.)

Your language can now be used in the following way inside your node application:
```javascript
...
var hello = new HelloLang();
console.log(hello.parser.run('Hello')); // prints 'Hello, how are you?'
console.log(hello.parser.run('Hallo')); // prints 'Hallo, wie geht es Dir?'

```


Alternatively, instead of supplying the input in form of a string, you could write it into a file and process that instead. Let's assume the file 'foo.hello' would contain just one line consisting of 'Hello' or 'Hallo'; the function call would then look slightly different:

```javascript
...
console.log(hello.parser.run( { inputFile : 'foo.hello' } ));
...
```

_to be continued_
