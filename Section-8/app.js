/* SECTION 8 */
/* Maps & Sets */

/* Maps - Creation & Adding Items */
// let cardAce = {
//   name: 'Ace of Spades'
// };
//
// let cardKing = {
//   name: 'King of Clubs'
// };
//
// let deck = new Map();
// deck.set('as', cardAce);
// deck.set('kc', cardKing);

/* Maps - Managing Items */
// let cardAce = {
//   name: 'Ace of Spades'
// };
//
// let cardKing = {
//   name: 'King of Clubs'
// };
//
// let deck = new Map();
// deck.set('as', cardAce);
// deck.set('kc', cardKing);
//
// console.log(deck);
// console.log(deck.size);
// console.log('as', cardAce);
// console.log(deck.size);
// deck.delete('as');
// console.log(deck.get('as '));

/* Maps - Looping through Maps */
// let cardAce = {
//   name: 'Ace of Spades'
// };
//
// let cardKing = {
//   name: 'King of Clubs'
// };
//
// let deck = new Map();
// deck.set('as', cardAce);
// deck.set('kc', cardKing);
//
// console.log(deck.keys());
//
// for (key of deck.keys()) {
//   console.log(key);
// }
// for (entry of deck.entries()) {
//   console.log(entry);
// }

/* The WeakMap */
// let cardAce = {
//   name: 'Ace of Spades'
// };
//
// let cardKing = {
//   name: 'King of Clubs'
// };
//
// let key1 = {a:1};
// let key2 = {b:2};
//
// let deck = new WeakMap();
// deck.set(key1, cardAce);
// deck.set(key2, cardKing);
//
// console.log(deck.get(key1));

/* Sets - Creation and Adding Items */
// let set = new Set([1, 1, 1]);
//
// set.add(2);
//
// for (element of set) {
//   console.log(element);
// }


/* Sets - Managing Items */
// let set = new Set([1, 1, 1]);
//
// set.add(2);
//
// // set.delete(1);
//
// // set.get(1);
//
// console.log(set.has(1));
//
// for (element of set) {
//   console.log(element);
// }

/* Sets - Looping through Sets */
// let set = new Set([1, 1, 1]);
//
// set.add(2);
//
// for (element of set.entries()) {
//   console.log(element);
// }
// for (element of set.keys()) {
//   console.log(element);
// }
// for (element of set.values()) {
//   console.log(element);
// }

/* The WeakSet */
let obj1 = {a:1};
let obj2 = {b:2};
let set = new WeakSet([obj1, obj2, obj2]);

console.log(set.has(obj2));
