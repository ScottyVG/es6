/* SECTION 10 */
/* Proxy API */


/* Traps in Action */
// let person = {
//   age: 27,
//   name: 'Scotty'
// };
//
// let handler = {
//   get: function(target, name) {
//     return name in target ? target[name] : 'Non existant';
//   }
// };
//
// var proxy = new Proxy(person, handler);
//
// console.log(proxy.age);
// console.log(proxy.name);


/* Proxies and Reflect */
// let person = {
//   age: 27,
//   name: 'Scotty'
// };
//
// let handler = {
//   get: function(target, name) {
//     return name in target ? target[name] : 'Non existant';
//   },
//   set: function(target, property, value) {
//     if (value.length >= 2) {
//       Reflect.set(target, property, value);
//     }
//   }
// };
//
// var proxy = new Proxy(person, handler);
//
// proxy.name = 'Scott';
//
// console.log(proxy.age);
// console.log(proxy.name);


/* Using Proxies as Prototypes */
// let person = {
//   age: 27,
//   name: 'Scotty'
// };
//
// let handler = {
//   get: function(target, name) {
//     return name in target ? target[name] : 'Non existant';
//   }
// };
//
// var proxy = new Proxy({}, handler);
//
// Reflect.setPrototypeOf(person, proxy);
//
// console.log(person.hobbies);

/* Proxies as Proxies */
// let person = {
//   age: 27,
//   name: 'Scotty'
// };
//
// let handler = {
//
// };
//
// let protoHandler = {
//   get: function(target, name) {
//     return name in target ? target[name] : 'Non existant';
//   }
// }
//
// let proxy = new Proxy({}, handler);
//
// let protoProxy = new Proxy(proxy, protoHandler);
//
// Reflect.setPrototypeOf(person,protoProxy);
//
// console.log(person.hobbies);


/* Wrapping Functions */
// function log(message) {
//   console.log('Log entry created, message: ' + message);
// }
//
// let handler = {
//   apply: function(target, thisArg, argumentsList) {
//     if (argumentsList.length == 1) {
//       return Reflect.apply(target, thisArg, argumentsList);
//     }
//   }
// };
//
// let proxy = new Proxy(log, handler);
//
// proxy('Hello', 10);


/* Revocable Proxies */
let person = {
  name: 'Scotty'
};

let handler = {
  get: function(target, property) {
    return Reflect.get(target, property);
  }
}

let { proxy, revoke } = Proxy.revocable(person, handler);

revoke();

console.log(proxy.name);
