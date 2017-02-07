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
let cardAce = {
  name: 'Ace of Spades'
};

let cardKing = {
  name: 'King of Clubs'
};

let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log(deck);
console.log(deck.size);
console.log('as', cardAce);
console.log(deck.size);
deck.delete('as');
console.log(deck.get('as'));

/* Maps - Looping through Maps */
/* The WeakMap */
/* Sets - Creation and Adding Items */
/* Sets - Managing Items */
/* Sets - Looping through Sets */
/* The WeakSet */
