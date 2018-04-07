EvalBuilder
===============================

Eval string builder for javascript. To be used with libraries such as :

[node-webworker-threads](https://github.com/audreyt/node-webworker-threads)

or any other usecase that requires you to input the code as a string.


[![Build Status](https://travis-ci.org/jodevsa/eval-builder.svg?branch=master)](https://travis-ci.org/jodevsa/eval-builder)
[![bitHound Dependencies](https://www.bithound.io/github/jodevsa/eval-builder/badges/dependencies.svg)](https://www.bithound.io/github/jodevsa/eval-builder/master/dependencies/npm)
![bitHound Overall Score](https://www.bithound.io/github/jodevsa/eval-builder/badges/score.svg)
![issues](https://img.shields.io/github/issues/jodevsa/eval-builder.svg)
![stars](https://img.shields.io/github/stars/jodevsa/eval-builder.svg)
![license](https://img.shields.io/github/license/jodevsa/eval-builder.svg)

Installation
-----

`npm install evalbuilder --save`


Usage:

```javascript
const evalbuilder = require("evalbuilder")

console.log(evalbuilder.max(1,2)); // 'max(1,2)'
console.log(evalbuilder.sum([1,2,3])); // 'max([1,2,3])'
console.log(evalbuilder.sort({id:1,str:'hey'},{id:2,str:'hi'})) // 'sort({"id":1,"str":"hey"},{"id":2,"str":"hi"})'
console.log(evalbuilder.anyfunctioname('hello!')) //anyfunctioname("hello")


```
Implementation
----------------------
Utilises javascript es6 Proxy.
