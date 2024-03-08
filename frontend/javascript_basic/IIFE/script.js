//* IIFE
// (function () {
//   var aName = "Barry";
// })();

// console.log(aName);
// aName is not defined
// IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가

// var result = (function () {
//   var name = "Barry";
//   return name;
// })();
//즉시 실행됨

// console.log(result);

//* 이름 없는 위해 사용
// (function (a, b) {

// })();

//* IIFE 심화 예제

// const score = () => {
//   let count = 0;
//   return {
//     current: () => {
//       return count;
//     },
//     increment: () => {
//       count++;
//     },
//     reset: () => {
//       count = 0;
//     },
//   };
// };

// console.log(typeof score);
// console.log(score);
// console.log(score().current());
// score().increment();
// console.log(score().current());

const score = (() => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
})();

console.log(typeof score);
console.log(score);
console.log(score.current());
score.increment();
console.log(score.current());
score.reset();
console.log(score.current());

//* ex2

// const increment = () => {
//   let counter = 0;
//   console.log(counter);
//   const number = (num) => console.log(`it is ${num} number`);
//   return () => {
//     counter++;
//     number(counter);
//   };
// };

// increment();
// increment();
//호출할때마다 counter=0

const increment = (() => {
  let counter = 0;
  console.log(counter);
  const number = (num) => console.log(`it is ${num} number`);
  return () => {
    counter++;
    number(counter);
  };
})();

console.log(increment);
increment();
increment();
