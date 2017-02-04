## Object Extensions

### Object
The Object object saw some additions with ES6. Most importantly, the setPrototypeOf() method was added. This method allows you to do what the name promises: Set the prototype of an object to a(nother) prototype of your choice.
```
let person = {
 name: 'Max'
};
let boss = {
 name: 'Anna'
};
console.log(person.__proto__);
Object.setPrototypeOf(person, boss);
```

More information on the Object object can be found here:

https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Object

### Array

The Array object received quite a lot of new methods to help you withdevelopment. Probably the two most important ones are `Array.of()` and `Array.from()`. `Array.of()` allows you to create a new array with a list of values to be passed into upon creation. The biggest advantage compare to ES5, is, that
the confusing Array() method (ES5) has an alternative. Array(5) used to create an empty array with a length of 5 (=> 5 empty “slots”).
```
let array = Array.of(5);
console.log(array.length); // 1 (content is [5])
```

`Array.from()` makes it easy to create an array based on another array. You may perform a transformation on each of the values of the base array for the new array.
```
let luckyNumbers = [7, 9, 22];
let luckierNumbers = Array.from(luckyNumbers, val => val * 2);
console.log(luckierNumbers); // prints [14, 18, 44]
```

More information can be found here: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array

### Number

Number saw some useful new methods to check the type of numbers. For example `isFinite()` checks if the passed value/ number is finite.
```
unlimited = Number.Infinity;
if (Number.isFinite(unlimited)) {
 console.log('Is finite!');
} else {
 console.log('Is infinite');
}
```

More information can be found here: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Number

### Math

The Math object also received many new methods, most of them being “very mathematical”. For example, you may now get the hyperbolic arcsine of a number by using Math.asinh(). Yeah, right.

Definitely check out this link to learn all old and new Math methods:
https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Math

### String

The String object also has some new tricks in its pockets. You may, for example, check if a string `startsWith()` or `endsWith()` a certain value.
```
let name = 'Maximilian';
console.log(name.startsWith('Max'));
console.log(name.startsWith('max'));
```
Maybe it also `includes()` a certain substring?

Find more information here: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/String
