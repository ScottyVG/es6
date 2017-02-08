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

 ## Object Extensions

 ### Object
 The Object object saw some additions with ES6. Most importantly, the setPrototypeOf() method was added. This method allows you to do what the name promises: Set the prototype of an object to a(nother) prototype of your choice.
 ```
 let person = {
  name: 'Max'
 };
 let boss = {
  name: 'Anna'
 };
 console.log(person.__proto__);
 Object.setPrototypeOf(person, boss);
 ```

 More information on the Object object can be found here:

 https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Object

 ### Array

 The Array object received quite a lot of new methods to help you withdevelopment. Probably the two most important ones are `Array.of()` and `Array.from()`. `Array.of()` allows you to create a new array with a list of values to be passed into upon creation. The biggest advantage compare to ES5, is, that
 the confusing Array() method (ES5) has an alternative. Array(5) used to create an empty array with a length of 5 (=> 5 empty “slots”).
 ```
 let array = Array.of(5);
 console.log(array.length); // 1 (content is [5])
 ```

 `Array.from()` makes it easy to create an array based on another array. You may perform a transformation on each of the values of the base array for the new array.
 ```
 let luckyNumbers = [7, 9, 22];
 let luckierNumbers = Array.from(luckyNumbers, val => val * 2);
 console.log(luckierNumbers); // prints [14, 18, 44]
 ```

 More information can be found here: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array

 ### Number

 Number saw some useful new methods to check the type of numbers. For example `isFinite()` checks if the passed value/ number is finite.
 ```
 unlimited = Number.Infinity;
 if (Number.isFinite(unlimited)) {
  console.log('Is finite!');
 } else {
  console.log('Is infinite');
 }
 ```

 More information can be found here: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Number

 ### Math

 The Math object also received many new methods, most of them being “very mathematical”. For example, you may now get the hyperbolic arcsine of a number by using Math.asinh(). Yeah, right.

 Definitely check out this link to learn all old and new Math methods:
 https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Math

 ### String

 The String object also has some new tricks in its pockets. You may, for example, check if a string `startsWith()` or `endsWith()` a certain value.
 ```
 let name = 'Maximilian';
 console.log(name.startsWith('Max'));
 console.log(name.startsWith('max'));
 ```
 Maybe it also `includes()` a certain substring?

 Find more information here: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/String


 ## Maps, Sets & Subclassing
 ## Map

 A Map is a key-value collection introduced in ES6. It kind of fills the gap between arrays (no key-value pairs) and objects (key-value pairs but much more complex than a simple collection).

 You can create a Map like this:
 ```
 let cardAce = {
  name: 'Ace of Spades'
 };
 let cardKing = {
  name: 'King of Clubs'
 };
 let deck = new Map();
 deck.set('as', cardAce);
 deck.set('kc', cardKing);
 ```

 You can get values from a map by using the get(key) method. Of course you also have methods to clear a map or delete single items.

 More information can be found here: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Map

 ### WeakMap
 A WeakMap basically also is a Map but it misses some features. It is not enumerable (you can’t loop through it) and it has no size property.

 Why would you use a WeakMap if you can use a “real” Map? As the name implies, WeakMaps hold weak references to the stored values. That means, if some values aren’t used anymore, they can get garbage-collected and will be released from the map. That’s also the reason why a WeakMap has
 no size property.

 More information can be found here: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

 ### Set
 A Set is a collection which only holds values. Sounds like an Array? Almost, but a Set will only old unique values. That means, no value can appear more often than once in a Set.
 You can loop through a set to retrieve the values (or use an Iterator). You can also `clear()` a set or delete individual values by using `delete()`.

 Remember, each value is unique, therefore you don’t need a key or index to delete a value!

 You can create a Set like this:
 ```
 let cardAce = {
  name: 'Ace of Spades'
 };
 let cardKing = {
  name: 'King of Clubs'
 };
 let deck = new Set();
 deck.add(cardAce);
 deck.add(cardKing);
 deck.add(cardKing); // Won’t be added, only added once!
 ```

 More information can be found here:
 https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Set

 ### WeakSet
 Like a WeakMap, a WeakSet is comparable to a “normal” Set but it only holds weak references.

 You may find more information here: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

 ### Subclassing
 Subclassing basically means, that you can now extend certain JavaScript base-objects. This allows you to add your own functionalities to those objects.

 For example, you may extend the Array object like this
 ```
 class ConvertableArray extends Array {
  convert() {
  let returnArray = [];
  this.forEach(value => returnArray.push('' + value));
  return returnArray;
  }
 }
 ```


 ## Reflect API
 ### Metaprogramming
 Metaprogramming means that you’re able to change (parts of) the
 behavior of the underyling language – JavaScript in this case. This of course is a powerful feature as it allows you to influence the way your code is executed. The Reflect API (like Symbols and Proxies) are important additions which help you with Metaprogramming – something that wasn’t
 really possible in JavaScript before.

 ### What is the Reflect API?
 The Reflect API could be described as a collection or “central place” which houses all kind of object and function related functions (for creation, property management etc.). Some of the functionalities added on the Reflect object where available before on the Object object. But the goal for the future is, to have on central place to store all those methods – the Reflect Object/ API. Therefore, the Reflect API provides useful methods to create, manipulate and query objects and functions in your JavaScript project.

 ### Object Construction
 You can easily create a new object using Reflect.construct().
 ```
 class Person {
 }
 let person = Reflect.construct(Person, []);
 ```

 The arguments passed are the constructor/ class used to create a new object, arguments passed to this constructor and, optionally as a third argument, another constructor which should be used.

 Learn more about constructing an object with Reflect here: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct

 ### Prototypes
 You may also use Reflect to set the prototype of an object. Simply do this by using the `setPrototype()` method.

 ```
 class Person {
 }
 let config = {
  greet() {
  console.log('Hello there!');
  }
 }
 let person = Reflect.construct(Person, []);
 Reflect.setPrototypeOf(person, config)
 ```

 ### Properties
 Reflect also offers methods to define properties on objects (defineProperty()), delete them (deleteProperty()), as well as get (get()) and set (set()) properties.

 ### Functions
 You may also use Reflect to execute functions:

 `Reflect.apply(person.greet, person, []);`

 The arguments passed are the function to be executed, what this should be referring to and possible function arguments.

 Learn More

 Find more information on the Reflect API here:
 https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect



 ## Proxy API

 ### Metaprogramming

 Metaprogramming means that you’re able to change (parts of) the
 behavior of the underyling language – JavaScript in this case. This of course is a powerful feature as it allows you to influence the way your code is executed. The Reflect API (like Symbols and Proxies) are important additions which help you with Metaprogramming – something that wasn’t really possible in JavaScript before.

 ### What it Does
 The Proxy API allows you to wrap objects, functions, whatever and trap/handle incoming property accessing, function calls etc. You may think ofProxies as filter or barrier which has to be passed and which may interrupt access on the wrapped element. For example you might wrap a Proxy around an object and set up a trap (that’s what these functions are called) to be triggered whenever something (the source code) tries to access a property of the wrapped object. The Proxy can then interrupt this access and maybe deny it, return another value, run some calculation – whatever you want.

 ### Wrapping Objects
 An object could be wrapped like this:
 ```
 class Person {
  constructor(name, age) {
  this.name = name;
  this.age = age;
  }
 }
 let person = new Person('Max', 27);
 let proxy = new Proxy(person, {
  // Setup traps here
  get: function(target, property, receiver) {
  return 'Something else';
  }
 });
 ```

 Notice that here, a get trap is set up – triggered whenever something tries to get the value of a property.
 The function triggered in this case passes the target of the access, the accessed property and the receiver of the value as an argument. Inside the trap you may do whatever you want to do.
 Wrapping Functions You may not only wrap objects. Functions can be wrapped too:
 ```
 function log(message) {
  console.log('Log entry created: ' + message);
 }
 let proxy = new Proxy(log, {
  apply: function(target, thisArg, argumentsList) {
  if (argumentsList[0].length < 20) {
  return Reflect.apply(target, thisArg, argumentsList);
  }
  return false;
  }
 });
 proxy('Hello!');
 proxy('Hello, this is a very long message!');
 ```

 In this example, the second function call would fail since the message is too long.

 ### Proxies as Prototypes
 You can also use Proxies as prototypes:
 ```
 let person = {
  name: 'Anna'
 };
 let proxy = new Proxy({}, { // notice the empty object!
  get: function (target, property, receiver) {
  return 'Property ' + property + ' not found!';
  }
 });
 Reflect.setPrototypeOf(person, proxy);
 console.log(person.name);
 console.log(person.age); // not found
 ```
 ### Revocable Proxies
 A special case are revocable proxies. Unlike “normal“ proxies, those proxies (created via Proxy.revocable(), without new keyword!) can be revoked. Not very surprising, considering the name.

 ### Available Traps
 More information on Proxies as well as a list of all traps can be found here:

 https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy
