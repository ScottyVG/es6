/* SECTION 6 */
/* Promises */

/* Creating & Resolving Promises */
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('Done!');
//   }, 1500);
// });
//
// promise.then(function(value) {
//   console.log(value);
// });

/* Rejecting Promises */
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     reject('Failed!!');
//   }, 1500);
// });
//
// promise.then(function(value) {
//   console.log(value);
// }, function(error) {
//   console.log(error);
// });

/* Chaining Promises */
// function waitASecond(seconds) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       seconds++;
//       resolve(seconds);
//     }, 1000)
//   })
// }
//
// waitASecond(0)
//   .then(waitASecond)
//   .then(function(seconds) {
//     console.log(seconds);
//   })

/* Catching Errors */
// function waitASecond(seconds) {
//   return new Promise(function(resolve, reject) {
//     if (seconds > 2) {
//       reject('Rejected!');
//     } else {
//       setTimeout(function() {
//         seconds++;
//         resolve(seconds);
//       }, 1000);
//     }
//   })
// }
//
// waitASecond(3)
//   .then(waitASecond)
//   .then(function(seconds) {
//     console.log(seconds);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
//

/* Built-in Methods - All and Race */
// let promise1 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('Resolved!');
//   }, 1000);
// });
//
// let promise2 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('Resolved!!');
//   }, 2000);
// });
//
// Promise.all([promise1, promise2])
//   .then(function(success) {
//     console.log(success);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// let promise1 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('Resolved!');
//   }, 1000);
// });
//
// let promise2 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     reject('Rejected!!');
//   }, 2000);
// });
//
// Promise.all([promise1, promise2])
//   .then(function(success) {
//     console.log(success);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
let promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Resolved!');
  }, 1000);
});

let promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject('Rejected!!');
  }, 2000);
});

Promise.race([promise1, promise2])
  .then(function(success) {
    console.log(success);
  })
  .catch(function(error) {
    console.log(error);
  });
