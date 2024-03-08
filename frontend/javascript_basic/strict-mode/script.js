// function sum(a, b) {
//   //  "use strict";
//   return a + b;
// }

// class Cat {}

// let greeting = "Hello";
//greating = "hi";
// console.log(greeting);
// /console.log(greating, window.greating);

// undefined = 9;
// NaN = 10;

// console.log(undefined);
// console.log(NaN);
//* script.js:16 Uncaught TypeError: Cannot assign to read only property 'undefined' of object '#<Window>'

// const obj = {};
// Object.defineProperty(obj, "readOnly", {
//   writable: false,
//   value: 7,
// });
// console.log(obj);
// obj.readOnly = 10;
// console.log(obj);
//*script.js:26 Uncaught TypeError: Cannot assign to read only property 'readOnly' of object '#<Object>'

// "use strict";
// const obj = {
//   get readOnly() {
//     return 7;
//   },
// };

// console.log(obj.readOnly);
// obj.readOnly = 10;
// console.log(obj.readOnly);
//*script.js:38 Uncaught TypeError: Cannot set property readOnly of #<Object> which has only a getter

// function add(a, a, c) {
//   return a + a + c;
// }

// console.log(add(1, 2, 3));

// "string".prop = 7;

// console.log("string".prop);
//*script.js:49 Uncaught TypeError: Cannot create property 'prop' on string 'string'

"use strict";
function sum(a, b) {
  console.log(this);
  return a + b;
}
console.log(this);
sum.bind(this)(1, 2);
