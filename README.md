# node-xsyn
Extensible syntax for nodejs

This project provides the possibility to define new languages (DSLs) by means of context-free grammars. Node-xsyn works similarly as some well-known tools lex/yacc/bison by allowing to attach processing rules to each of the grammar production rules. Node-xsyn is fully integrated into the node module system; language definitions can be compiled into node modules and re-used as needed.

Hello (World) Example

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
The "language" defined by the above grammar consists of three nonterminal symbols (Greeting, Greeting\_en, and Greeting\_de) with corresponding production rules. The code in {% ... %} represents the associated action for the respective production rule. For those familiar with lex and yacc will immediately recognize the dollar syntax in the associated production rule; '$$' stands for the result of the action, while $1, $2, ... refer to the corresponding elements of the production rule's right-hand-side (starting with index 1; not used in this example). The only possible input that this language accepts are "Hello" and "Hallo"; the parsing/processing "responds" to the input with the English or the German sentence depending on the input.

This hello language can now be compiled into a node module. For that we can use the command line interface implemented in xsyn-shell.js (which should be in the toplevel directory of the node-xsyn module). In order to compile the above file we issue the following command inside a terminal:

```
node xsyn-shell.js compile hello.gra
```
Without any further options, this will generate a file "hello.js" in the current directory, which can be used in the following way inside your node application:
```javascript
...
var HelloLang = require('./hello');
...
var hello = new HelloLang();

```

_to be continued_
