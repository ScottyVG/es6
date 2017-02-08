/* SECTION 9 */
/* Reflect API */

/* Creating Objects with Reflect.construct() */
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// function TopObj() {
//   this.age = 27;
// }
//
// let person = Reflect.construct(Person, ['Scotty'], TopObj);
// console.log(person);
// console.log(person instanceof Person);
// console.log(person.__proto__ == Person.prototype);
// console.log(person.__proto__ == TopObj.prototype);

/* Calling Functions with Reflect.apply() */
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   greet(prefix) {
//     console.log(prefix + 'Hello, I am ' + this.name);
//   }
// }
//
// let person = Reflect.construct(Person, ['Scotty', 31]);
// Reflect.apply(person.greet, person, [])
// Reflect.apply(person.greet, { name: 'Brightin' }, ['...'])

/* Reflect and Prototypes */
// class Person {
//   constructor() {
//     this.name = 'Scotty';
//   }
// }
//
// let person = new Person();
// // console.log(Reflect.getPrototypeOf(person));
// // console.log(person.__proto__ == Person.prototype);
// // console.log(Reflect.getPrototypeOf(person) == Person.prototype);
// Person.prototype.age = 27;
//
// let proto = {
//   age: 30
// };
//
// Reflect.setPrototypeOf(person, proto);
//
// console.log(Reflect.getPrototypeOf(person));

/* Reflect.construct(), apply() and Prototypes Interaction */
// class Person {
//   constructor() {
//     this.name = 'Scotty';
//   }
// }
//
// let person = new Person();
//
// Person.prototype.age = 27;
//
// let proto = {
//   age: 30,
//   greet() {
//     console.log('Hello');
//   }
// };
//
// Reflect.setPrototypeOf(person, proto);
//
// Reflect.apply(person.greet, null, []);


/* Accessing Properties with Reflect */
// class Person {
//   constructor(name, age) {
//     this._name = name;
//     this.age = age;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   set name(value) {
//     this._name = value
//   }
// }
//
// let mum = {
//   _name: 'Mum'
// };
//
// let person = new Person('Scotty', 31);
//
// // Reflect.set(person, 'name', 'Brightin', mum);
// //
// // console.log(mum);
//
// // console.log(Reflect.get(person, 'name', mum));
// console.log(Reflect.has(person, 'name'));

/* Analyzing Objects with Reflect.ownKeys() */
// class Person {
//   constructor(name, age) {
//     this._name = name;
//     this.age = age;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   set name(value) {
//     this._name = value
//   }
// }
//
// let mum = {
//   _name: 'Mum'
// };
//
// let person = new Person('Scotty', 31);
//
// console.log(Reflect.ownKeys(person));

/* Creating & Deleting Properties with Reflect */
// class Person {
//   constructor(name, age) {
//     this._name = name;
//     this.age = age;
//   }
//
//   get name() {
//     return this._name;
//   }
//
//   set name(value) {
//     this._name = value
//   }
// }
//
// let mum = {
//   _name: 'Mum'
// };
//
// let person = new Person('Scotty', 31);
//
// Reflect.defineProperty(person, 'hobbies', {
//   writable: true,
//   value: ['Sports', 'Cooking'],
//
// })
//
// person.hobbies = ['Nothing'];
//
// // delete person.age
// Reflect.deleteProperty(person, 'age');
//
// console.log(person.age);

/* Preventing Object Extensions & Wrap Up */
class Person {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value
  }
}

let mum = {
  _name: 'Mum'
};

let person = new Person('Scotty', 31);

console.log(Reflect.isExtensible(person));

Reflect.preventExtensions(person);

console.log(Reflect.isExtensible(person));

Reflect.defineProperty(person, 'hobbies', {
  writable: true,
  value: ['Sports', 'Cooking'],
})

console.log(person.hobbies);
