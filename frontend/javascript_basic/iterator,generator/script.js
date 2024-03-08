// function makeIterator(numbers) {
//   let nextIndex = 0;
//   return {
//     next: function () {
//       return nextIndex < numbers.length
//         ? { value: numbers[nextIndex++], done: false }
//         : { value: undefined, done: true };
//     },
//   };
// }

// //* 숫자 배열 생성
// const numbersArray = [1, 2, 3];

//const numbersIterator = makeIterator(numbersArray);

// //* Symbol.iterator() : 기본 iterator를 반환하는 메소드
// const numbersIterator = numbersArray[Symbol.iterator]();

// console.log(numbersIterator.next()); //false
// console.log(numbersIterator.next()); //false
// console.log(numbersIterator.next()); //false
// console.log(numbersIterator.next()); //true

// const numbersIterable = [1, 2, 3];
// const numbersNotIterable = { a: 1, b: 2, c: 3 };

// //*numbersIterable[Symbol.iterator](); => 사용가능하면 Iterable
// console.log(typeof numbersIterable);
// console.log(typeof numbersNotIterable);

// //* for...of => 사용가능하면 Iterable
// for (const n of numbersNotIterable) {
//   console.log(n);
// }

// const set = new Set([1, 2, 3, 4]);
// console.log("set", set);

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);
// console.log("map", map);

// console.log(set[Symbol.iterator]().next()); //iterable O
// console.log(map[Symbol.iterator]().next()); //iterable O

//* generator
// function* sayNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// //* 제네레이터 함수의 반환이 제네레이터
// const number = sayNumbers();

// console.log(number.next()); //false
// console.log(number.next()); //false
// console.log(number.next()); //false
// console.log(number.next()); //true

// function* generatorFunction() {
//   yield 1;
// }

// const generator = generatorFunction();

//* console.log(generator === generator[Symbol.iterator]());

//* Lazy Evaluation
// function* createIds() {
//   let index = 1;

//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIds();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.return(10));

function* generatorFunction() {
  yield* [1, 2, 3];

  // yield 1;
  // yield 2;
  // yield 3;
}

const generator = generatorFunction();

for (const number of generator) {
  console.log(number);
}
