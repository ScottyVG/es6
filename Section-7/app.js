/* SECTION 7 */
/* Object Extensions */

/* The Object */
// var obj1= {
//   a: 1
// }
//
// var obj2 = {
//   b: 2
// }
//
// var obj = Object.assign(obj1, obj2);
//
// console.log(obj);

// class Obj1 {
//   constructor() {
//     this.a = 1;
//   }
// }
// class Obj2 {
//   constructor() {
//     this.b = 2;
//   }
// }
// var obj1 = new Obj1();
// var obj2 = new Obj2();
//
// // var obj = Object.assign(obj1, obj2);
// // var obj = Object.assign(obj2, obj1);
// // first object that gets passed in will be the base object, and the other object will be merged into that first object
// // you can also pass in and empty object then pass in object 1 and 2
// var obj = Object.assign({}, obj1, obj2);
//
// console.log(obj);
// console.log(obj instanceof Obj1);
// console.log(obj instanceof Obj2);
// console.log(obj.__proto__ === Obj1.prototype);
// console.log(obj.__proto__ === Obj2.prototype);
// console.log(obj.__proto__ === Object.prototype);

// let person = {
//   name: 'Scotty'
// };
//
// let boss = {
//   name: 'Brightin'
// };
//
// console.log(person.__proto__ === Object.prototype);
//
// Object.setPrototypeOf(person, boss);
//
// console.log(person.__proto__ === Object.prototype);
// console.log(person.__proto__ === boss);
// console.log(person.name);

/* The Math Object */
// let number = 'a string';
//
// console.log(Math.sign(number));
// let number = -3.78;
//
// console.log(Math.trunc(number));
// console.log(Math.floor(number));

/* Strings */
// let name = 'Scotty';
// console.log(name.startsWith('Scott'));
// console.log(name.endsWith('y'));
// // it is case sensitive
// console.log(name.includes('Scott'));
// console.log(name.includes('cot'));

/* The Number Object */
// let number = 10.1;
// console.log(Number.isNaN(number));
// console.log(!Number.isFinite(number));
// console.log(Number.isInteger(number));

/* Arrays part 1 */
// let array = Array(5);
// console.log(array);
// let array = Array.of(5, 10, 11);
// console.log(array);
// let array = [10, 12, 16];
// console.log(array);
//
// let newArray = Array.from(array, val => val * 2);
// console.log(newArray);
// console.log(array);
// let array = [10, 12, 16];
// // array.fill(100);
// array.fill(100, 0, 2);
// console.log(array);
// let array = [10, 12, 16];
// console.log(array.find(val => val >= 12));
// var inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
// ];
//
// function findCherries(fruit) {
//     return fruit.name === 'cherries';
// }
//
// console.log(inventory.find(findCherries));

/* Arrays part 2 */
// let array = [1,2,3];
//
// console.log(array.copyWithin(1, 0, 2));
let array = [1,2,3];

let it = array.entries();

for (let element of it) {
  console.log(element);
}
