// let x = 0;
// const numberUp = () => (x += 1);
// console.log(numberUp());
// console.log(x);
//*함수 밖의 변수의 값을 변경시킴 -> impure 함수

// let x = 0;
// const pureNumberUp = (num) => (num += 1);
// console.log(pureNumberUp(x));
// console.log(x);
//*x 값이 바뀌지 않았음 (no side effect)

const alphabetArray = ["a", "b"];
// const addItemToArray = (originalArray, newItem) => {
//   originalArray.push(newItem);
//   return originalArray;
// };
// console.log(addItemToArray(alphabetArray, "c"));
// console.log(alphabetArray);
//* 함수 외부의 값이 바뀜

const pureAddItemToArray = (originalArray, newItem) => {
  return [...originalArray, newItem];
};

console.log(pureAddItemToArray(alphabetArray, "c"));
console.log(alphabetArray);
//* no side effect
