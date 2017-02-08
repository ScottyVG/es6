/* SECTION 5 */
/* Iterators & Generators */

/* Iterator Basics */
// let array = [1,2,3];
//
// let it = array[Symbol.iterator]();
//
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

/* Iterator in Action */
// let array = [1,2,3];
//
// array[Symbol.iterator] = function() {
//   return {
//     next: function() {
//       return {
//         done: false,
//         value: 10
//       };
//     }
//   };
// }
//
// let it = array[Symbol.iterator]();
//
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// let array = [1,2,3];
//
// array[Symbol.iterator] = function() {
//   let nextValue = 10
//   return {
//     next: function() {
//       nextValue++;
//       return {
//         done: nextValue > 15 ? true : false,
//         value: nextValue
//       };
//     }
//   };
// }
//
// for (let element of array) {
//   console.log(element);
// }

/* Creating a Custom, Iterateable Object */
// let person = {
//   name: 'Scotty',
//   hobbies: ['Sports', 'Cooking'],
//   [Symbol.iterator]: function() {
//     let i = 0;
//     let hobbies = this.hobbies;
//     return {
//       next: function() {
//         let value = hobbies[i];
//         i++;
//         return {
//           done: i > hobbies.length ? true : false,
//           value: value
//         }
//       }
//     }
//   }
// }
//
// for (let hobby of person) {
//   console.log(hobby);
// }

/* Generators Basics */
// function *select() {
//   yield 'House';
//   yield 'Garage';
// }
//
// let it = select();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

/* Generators in Practice */
// let obj = {
//   [Symbol.iterator]: gen
// }
//
// function *gen() {
//   yield 1;
//   yield 2;
// }
//
// for (let element of obj) {
//   console.log(element);
// }
function *gen(end) {
  for (let i = 0; i < end; i++) {
    try {
      yield i;
    } catch (e) {
      console.log(e);
    }
  }
}

let it = gen(2);

console.log(it.next());
// console.log(it.throw('An error ocurred'));
console.log(it.return('An error ocurred'));
console.log(it.next());
console.log(it.next());
