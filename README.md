# ES 6 practice repository

## Local Development Environment
### What’s Required?
To develop ES6 applications locally, you need a transpiler (ES6 -> ES5), a
module loader (to load the different modules/ files) and a little server to
host your app (and to serve those module files).

### Compiler Examples
Babel: https://babeljs.io/
Traceur: https://github.com/google/traceur-compiler

### Module Loader / Packaging Examples
SystemJS: https://github.com/systemjs/systemjs
Webpack: https://github.com/webpack/webpack

### Servers
Live-server: https://www.npmjs.com/package/live-server
Lite-server: https://github.com/johnpapa/lite-server
Webpack-dev-server: https://webpack.github.io/docs/webpack-devserver.html

### A quick Way to get Started – JSPM
You could also use the JavaScript Package Manager (JSPM) to quickly set
up your own development environment with Compiler (Babel) and Module
Loader (SystemJS). You would need to install an extra server though
(google for jspm server for example).
Link: http://jspm.io/

### Complete Setups / Boilerplates
The one from the video: https://github.com/topheman/vanilla-es6-jspm
Alternative: https://github.com/thoughtram/es6-babel-browserifyboilerplate
To find more, simply google for “ES6 Boilerplate” or comparable search
terms!

## Syntax Changes

### Strict Mode
Using strict mode is the default in ES6 Modules, therefore specifying “use
strict” is not required.

### let & const
In ES6, you may declare your variables with var, let or const. Which one
should you choose?

const should be chosen if you’re not planning on changing the value of this
variable (which then becomes a constant). This should be your default
choice unless you absolutely need to re-assign it during runtime. Why
should it be the default? Because it keeps your code explicit and clear.
let should be your second choice – use it whenever you need to re-assign
variables. This will mostly be the case in mathematical alogrithms or loops.
var should probably never be chosen. When using it, you may have a
constant or a variable – but no one knows! Therefore, use const or let
instead.

### Function / Arrow Functions
There were two major additions regarding functions: (Fat) Arrow
Functions ( () => {} ) and default arguments ( doSmth(arg = 1) ).
Fat Arrow Functions allow you to use a shorter syntax to create functions:

`const fn = (arg1, arg2) => return arg1 + arg2`

You may leave out the parenthesis around the arguments if only one
argument is passed. If no argument is passed, empty parentheses are
required. The function body may be written inline and without curly braces
if you’re only writing a return statement (return then also may be left out).
Besides the shorter syntax, fat arrow functions also change the behavior of
the this keyword. Inside a fat arrow function, the this keyword will always
refer to the context of the function instead of the caller of the function.
Default parameters allow you specify default values for parameters passed
to functions.

`function fn(arg1 = ‘default string’, arg2 = 23) { return arg1 + arg2 }`

More info on Arrow Functions:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions

More info on Default Parameters:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Default_parameters

### Literal Notation Extensions
There are some improvements to Literal Notation syntax.
```
let width = 10;
let length = 50;
let lengthField = 'length';
rectangle = {
 width, // width is automatically assigned => takes above value
 [lengthField]: length, // Dynamic field name using variable
 "outputSize"() { // shorter syntax + possibility of string name
 console.log(this.width * this.length); // this refers to object
 }
};
```
More information may be found here: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Operators/Object_initializer

### Rest & Spread Operators (…)
ES6 added two important new operators: Rest and Spread. Technically
they look the same ( … => three dots) but they are used in different places.

###### Rest:

`function sumUp(start, ...toAdd) {}`

Transforms a list of arguments (1, 2, 3) into an array ([1, 2, 3]) which may be
used inside the function. This behavior is triggered when used inside of a
function argument list.

###### Spread:
```
let ids = [1, 2, 3, 4, 5, 6];
console.log(Math.max(...ids)); // prints 6
```

Transforms an array into a list of arguments. This behavior is triggered
when used outside of a function argument list.

More information on Rest:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters

More information on Spread:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator

### For-of Loop
A new loop was added: The for-of loop which allows you to loop through an
array of items.
```
let testResults = [5.30, 2.84, 9.11, 1.01, 3.99];
for (let testResult of testResults) {
 if (testResult > 5) {
 console.log(testResult); // prints 5.30, 9.11
 }
}
```

More information may be found here:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of

### Template Literals
Template literals allow you to easily write more complex text in strings (e.g.
including line breaks) as well as to output variables in a string.
```
let name = 'Scotty';
description = `
 This is a description, which may wrap across multiple lines.
Written by ${name}.
`;
```
Template literals are used by starting and ending the string with backticks
( `) instead of quotation marks.

More information can be found here:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals

### Destructuring
Destructuring is a cool new feature which allows you to easily extract
values from an object or an array.

###### Array:
```
let numbers = [1, 2, 3, 4, 5];
let [a, b] = numbers; // a => 1, b => 2
```

###### Object:
```
let person = {
 name: 'Scotty',
 age: 27
};
let {name, age} = person; // Notice the {} instead of []
```

More information may be found here:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

## Modules & Classes
### Modules - Strict Mode and Global Scope
There are two important Rules, which you need to understand if you're working with ES6 Modules:

Modules are always in Strict Mode (no need to define `"use strict"`)

Modules don't have a shared, global Scope. Instead each Module has its own Scope

### Modules
ES6 finally, officially, adds Modules to JavaScript. This means, that you
may split up your code over multiple files, which of course is a good
practice. This is common in ES6 already, however you always require a
module loader for that.

Once ES6 is broadly implemented into browsers, this will no longer be
necessary.

To split up your code, you basically export variables, functions, objects, … in one file and import it in another:
```
// export.js
export let myExportedVar = 42;
// import.js
import { myExportedVar } from ‘./export.js’;
```

More info on Modules (export):
https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export

More info on Modules (import):
https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import

More info on Class: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Classes

### Classes
Classes are now also available via the class keyword. You may of course
continue using other ways to create objects, but here’s the class-way:
```
class Person {
 greet() {
 this.name = ‘Scotty’; // this is how you set up properties!
 console.log('Hello!');
 }
}
let person = new Person();
person.greet(); // prints ‘Hello!’
```

You may also use inheritance with ES6 classes:
```
class Scotty extends Person {
 constructor(name) {
 this.name = name;
 }
}
Static methods are also possible:
class Helper {
 static log(message) {
 console.log(message);
 }
}
```

## Symbols
### What Symbols Are

Symbols are a new primitive type in ES6. Basically, a Symbol is a unique ID. However, you don’t see the ID (like 120) but you only got your symbol which represents the ID.

`let symbol = Symbol(‘only for debugging, this is not the ID!’);`

As a symbol represents a unique ID, each symbol is unique. This means, that the following comparison will resolve to false:

`let symbol1 = Symbol(‘only for debugging, this is not the ID!’);`
`let symbol2 = Symbol(‘only for debugging, this is not the ID!’);`
`if (symbol1 == symbol2) { … } // false`

The only exception make symbols created via Symbol.for():

`let ageSymbol = Symbol.for('age');`

These symbols are registered in a global symbol registry and therefore the following comparison will return true:

`let ageSymbol1 = Symbol.for('age');`
`let ageSymbol2 = Symbol.for('age');`
`if (ageSymbol1 == ageSymbol2) { … } // true`

### Where would you use Symbols?
As they are unique symbols are useful as object keys.
```
let obj = {
 [symbol]: 22,
 [symbol2]: 'symbol assigned'
};
console.log(obj[symbol]); // prints 22
```

You can be sure that this fieldname hasn’t been taken yet.

### Built-in Symbols

There are some built-in symbols you may utilize to overwrite default behaviors of JavaScript. This is also called meta-programming (i.e. changing parts of the language/ its behavior).

```
class Person {
}
let person = new Person();
Person.prototype[Symbol.toStringTag] = 'Person Class';
let person = new Person();
console.log(person); // prints [object Person Class]
```

More information may be found here:

https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol

## Iterators & Generators

### Iterators

Iterators probably sound more complex than they are. Basically an iterator
has a function – `next()` – which allows you to output values step by step.
```
let array = [1, 2, 3];
let iterator = array[Symbol.iterator]();
console.log(iterator.next()); // prints {done: false, value: 1}
```

Calling next prints the current state (done => false or true, depending on
the amount of values left) and the current value.
The cool thing about iterators is, that you can implement them in your own
objects.

```
let iterableObj = {
 [Symbol.iterator]() {
 let nextVal = 5;
 return {
 next() {
 return {
 value: nextVal++,
 done: false
 }
 }
 }
 }
};
let iterator = iterableObj[Symbol.iterator]();
console.log(iterator.next()); // {done: false, value: 5}
```

Note that the iterator specified here would run forever, since done is never
set to true.

More information can be found here:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols

### Generators

Generators are functions which don’t necessarily run to the end upon execution.

Instead, upon each call they yield a value. A generator is created by adding an asterisk in front of the function name.
```
function *select() {
 yield 'House Data';
 yield 'Person Data';
}
```

When executing a function they don’t return a value immediately, instead an iterator is returned. This iterator may then be used to access the returned values step by step.
```
let iterator = select();
console.log(iterator.next()); // prints House Data
console.log(iterator.next()); // prints Person Data
console.log(iterator.next()); // prints undefined
```
Of course you may also pass arguments to generators and use them in the function body.

More information on generators can be found here:
https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Statements/function*

## Promises

Promises are a great addition to handle asynchronous tasks/ callbacks. As the name implies, a Promise promises to return a certain value – even if the underlying task fails. In such a failure case, the promise would be rejected
but the caller would still be informed. Therefore, a promise is created with a resolve and reject function being
passed as arguments. Depending on the result, the appropriate function is executed and a possible return value is passed as an argument.
```
let promise = new Promise(function(resolve, reject) {
 setTimeout(function() { // setTimeout to simulate async task
 resolve('Done!');
 }, 1000);
});
```

The returned result may then be used in a callback specified in the then() method.
```
promise.then(function(value) {
 console.log(value); // prints Done!
});
```

You may also chain multiple then() calls which will be executed in the order specified and which might also again use promises.
```
let fnWaitASecond = function(secondsPassed) {
 return new Promise(function(resolve, reject) {
 setTimeout(function() {
 secondsPassed++;
 resolve(secondsPassed);
 }, 1000);
 });
};
fnWaitASecond(0)
 .then(fnWaitASecond) // Passes value automatically
 .then(function(seconds) {
 console.log('Promises: waited ' + seconds + ' seconds');
 });
 ```

Promises also offer some built-in methods you may use to control them.

With `race()` you may use multiple Promises at once and only use the value returned by the first Promise to resolve. You’ll get a value as soon as the first Promise is resolved.

With `all()` you may use multiple Promises at once and take all returned values into account. Therefore, you’ll only get a value once all Promises were resolved.

More information may be found here:
 https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Promise
