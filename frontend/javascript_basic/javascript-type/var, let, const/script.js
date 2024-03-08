let foo = 42;
foo = "bar";
foo = true;

console.log(typeof foo);

//원시 타입
//1. String
const name = "han";
//2. Number
const age = 30;
//3. Boolean
const hasJob = true;
//4. null
const car = null;
//5. undefined
const anything = undefined;
//6. Symbol
const sym = Symbol();

//참조 타입
//1. Array
const hobbies = ["walking", "books"];
//2. Object
const address = {
  province: "경기도",
  city: "성남시",
};

console.log(typeof hobbies); //배열 - object 한 종류
console.log(Array.isArray(hobbies)); //배열 체크
console.log(Array.isArray(address)); //배열 체크
