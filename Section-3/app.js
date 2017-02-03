/* SECTION 3 */
/* Modules Setup */
// import * as imported from './external.js';
// console.log(imported.keyValue);
// imported.test();
// console.log(imported.keyValue);

/* Class Basics */
// function Person() {
//
// }
//
// var person = new Person();
// es 6 syntax
// class Person {
//   constructor() {
//     this.name = 'Scotty';
//   }
//   greet() {
//     console.log('Hello, my name is ' + this.name);
//   }
// }
//
// let person = new Person();
//
// person.greet();

/* Classes & Prototypes */
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log('Hello, my name is ' + this.name);
//   }
// }
//
// let person = new Person('Scotty');
//
// console.log(person.__proto__ === Person.prototype);

/* Inheritance */
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
//   }
// }
//
// class Scotty extends Person {
//   constructor(age) {
//     super('Scotty'); //super will call the parent constructor
//     this.age = age;
//   }
//
//   greet() {
//     console.log('Hello!');
//   }
//
//   greetTwice() {
//     super.greet();
//     super.greet();
//   }
// }
//
// let scotty = new Scotty(31);
//
// scotty.greetTwice();

/* Inheritance & Prototypes */
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
//   }
// }
//
// class Scotty extends Person {
//   constructor(age) {
//     super('Scotty'); //super will call the parent constructor
//     this.age = age;
//   }
//
//   greet() {
//     console.log('Hello!');
//   }
//
//   greetTwice() {
//     super.greet();
//     super.greet();
//   }
// }
//
// let scotty = new Scotty(31);
//
// console.log(scotty.__proto__ === Scotty.prototype); //true
// console.log(scotty.__proto__ === Person); //false

/* Static Methods */
// class Helper {
//   static logTwice(message) {
//     console.log(message);
//     console.log(message);
//   }
// }
//
// Helper.logTwice('Logged!');

/* Classes & Modules */
// export class Helper {
//   static logTwice(message) {
//     console.log(message);
//     console.log(message);
//   }
// }
//
// Helper.logTwice('Logged!');

/* Getters & Setters */
// class Person {
//   constructor(name) {
//     this._name = name;
//   }
//
//   get name() {
//     return this._name.toUpperCase();
//   }
//
//   set name(value) {
//     if (value.length > 2) {
//       this._name = value;
//     }
//     console.log('Rejected!');
//   }
// }
// let person = new Person('Scotty');
// console.log(person.name);
// person.name = 'Brightin';
// console.log(person.name);

/* Extending Built-in Objects */
// class ConvertableArray extends Array {
//   convert() {
//     let returnArray = [];
//     this.forEach(value => returnArray.push('Converted!' + value));
//     return returnArray;
//   }
// }
// let numberArray = new ConvertableArray();
// numberArray.push(1);
// numberArray.push(2);
// numberArray.push(3);
//
// console.log(numberArray.convert());

/* Extendable Built-in Objects */
// Which built-in Objects may be extended? Have a look at the ES6 Compatibility Chart and scroll down to "Subclassing": https://kangax.github.io/compat-table/es6/
//
// Array is subclassable
// RegExp is subclassable
// Function is subclassable
// Promise is subclassable
