/* SECTION 4 */
/* Symbols Basics */

// let symbol = Symbol('debug');
// // console.log(typeof symbol);
// let anotherSymbol = Symbol('debug');
// // console.log(symbol == anotherSymbol);
//
// let obj = {
//   name: 'Scotty',
//   [symbol]: 22
// }
// console.log(obj);

/* Shared Symbols */
// let symbol = Symbol('age');
//
// let person = {
//   name: 'Scotty'
// }
//
// function makeAge(person) {
//   let ageSymbol = Symbol.for('age');
//   person[ageSymbol] = 27;
// }
//
// makeAge(person);
// console.log(person[symbol]);

/* Advantages of (unique) IDs / Symbols */
// let symbol = Symbol.for('age');
//
// let person = {
//   name: 'Scotty',
//   age: 31
// }
//
// function makeAge(person) {
//   let ageSymbol = Symbol.for('age');
//   person[ageSymbol] = 27;
// }
//
// makeAge(person);
//
// console.log(person[symbol]);
// console.log(person["age"]);

/* Well Known Symbols */
// class Person {
//
// }
//
// Person.prototype[Symbol.toStringTag] = 'Person';
//
// let person = new Person();
//
// console.log(person);

let numbers = [1,2,3];

numbers[Symbol.toPrimitive] = function() {
  return 999;
}

console.log(numbers + 1);
