/* SECTION 2 */
/* Let & Block Scope */

// var name = 'Scotty';
// console.log(name);
// let name = 'Scotty';
// console.log(name);
// if (true) {
//   let name = 'Scotty';
// }
// console.log(name);
// let age = 30;
// if (true) {
//   let age = 31;
//   console.log(age);
// }
// console.log(age);

/* Constants with "const" */
// const AGE = 30;
// AGE = 29;
// console.log(age);
// const AGES = [27, 29, 31];
// console.log(AGES);
// AGES.push(25);
// console.log(AGES);
// const OBJ = {
//   age: 27
// };
// console.log(OBJ);
// OBJ.age = 30;
// console.log(OBJ);

/* Hoisting in ES6 */
// age = 27;
// console.log(age);
// let age;
// function doSmth() {
//   age = 27;
// }
// let age;
// doSmth();
// console.log(age);

/* (Fat) Arrow Functions */
// var fn = () => {
//   console.log('Hello!');
// };
// fn();
// var fn = () => console.log('Hello!');
// fn();
// var fn = () => {
//   let a = 2;
//   let b = 3;
//   return a + b;
// };
// console.log(fn());
// var fn = (a, b) => {
//   return a + b;
// };
// console.log(fn(8, 3));
// var fn = (a, b) => a + b;
// console.log(fn(8, 3));
// if you pass only one arguement in fat arrows you can leave out the ()
// var fn = a => a + 5;
// console.log(fn(3));
// setTimeout(() => console.log('Hello'), 1000);

/* (Fat) Arrow Functions and the "this" Keyword */
// function fn() {
//   console.log(this);
// }
// fn();
// var fn2 = () => console.log(this);
// fn2();
//
// var button = document.querySelector('button');
//
// //this keeps the same context in which it is called when using fat arrow notation
// //no need to use bind or apply like was used in es5
// var fn2 = () => console.log(this);
//
// function fn() {
//   console.log(this);
// }
//
// button.addEventListener('click', fn2);

/* Functions and Default Parameters */
// function isEqualTo(number, compare = 0) {
//   return number == compare;
// }
//
// console.log(isEqualTo(10, 10));
// function isEqualTo(number = 10, compare) {
//   console.log(number);
//   console.log(compare);
//   return number == compare;
// }
//
// console.log(isEqualTo(11));
// function isEqualTo(number, compare = number) {
//   console.log(number);
//   console.log(compare);
//   return number == compare;
// }
//
// console.log(isEqualTo(11, 20));
// function isEqualTo(number = compare, compare = 10) {
//   console.log(number);
//   console.log(compare);
//   return number == compare;
// }
//
// console.log(isEqualTo());

/* Object Literal Extensions */
// let obj = {
//   name: 'Scotty',
//   age: 31
// };
//
// console.log(obj);
// let name = 'Anna';
// let age = 25;
//
// let obj = {
//   name,
//   age
// };
//
// console.log(obj);
// let name = 'Anna';
// let age = 25;
//
// let obj = {
//   name: 'Scotty',
//   age,
//   greet() {
//     console.log(this.name + ', ' + this.age);
//   }
// };
//
// obj.greet();
// let name = 'Anna';
// let age = 25;
//
// let ageField = "age";
//
// let obj = {
//   "name": 'Scotty',
//   [ageField]: 28,
//   "greet me"() {
//     console.log(this.name + ', ' + this.age);
//   }
// };
// console.log(obj);
// obj["greet me"]();

/* The Rest Operator */
// let numbers = [1,2,3,4,5];
//
// function sumUp(toAdd) {
//   let result = 0;
//   for (let i = 0; i < toAdd.length; i++) {
//     result += toAdd[i];
//   }
//   return result;
// }
// console.log(sumUp(numbers));
// function sumUp(...toAdd) {
//   console.log(toAdd);
//   let result = 0;
//   for (let i = 0; i < toAdd.length; i++) {
//     result += toAdd[i];
//   }
//   return result;
// }
// console.log(sumUp(100 , 10, 20));

/* The Spread Operator */
// let numbers = [1,2,3,4,5];
// console.log(...numbers);
// console.log(Math.max(...numbers));

/* The for-of Loop */
// let testResults = [1.23, 1.10, 4.1];
// for (let testResult of testResults) {
//   console.log(testResult);
// }

/* Template Literals */
// let name = 'Scotty';
// let description = `
//   Like this!
// `;
// console.log(description);
// let name = 'Scotty';
// let description = `
//   Hello, I'm ${name + ' !!!'}
// `;
// console.log(description);
// let name = 'Scotty';
// let description = `
//   Hello, I'm \${name + ' !!!'}
// `;
// console.log(description);

/* Destructuring - Arrays */
// let numbers = [1,2,3];
// let [a, b] = numbers;
// console.log(a);
// console.log(b);
// console.log(numbers);
// let numbers = [1,2,3];
// let [a = 'Default', b, c, d = 1] = numbers;
// console.log(a);
// let a = 5;
// let b = 10;
// [b, a] = [a, b];
// console.log(b);
// console.log(a);
// let numbers = [1,2,3];
// let [a, , c] = numbers;
// console.log(a, c);
// let [a, b] = [1,2,3];
// console.log(a, b);

/* Destructuring - Objects */
// let obj = {
//   name: 'Scotty',
//   age: 31,
//   greet: function() {
//     console.log('Jello there!');
//   }
// };
//
// let {name, greet} = obj;
// greet()
// let obj = {
//   name: 'Scotty',
//   age: 31,
//   greet: function() {
//     console.log('Jello there!');
//   }
// };
//
// let {name, greet: hello} = obj;
// hello()

/* Destructuring - Summary */
// For object destructuring you pull out elements by their property name
// For array destructuring you pull out elements by their position
