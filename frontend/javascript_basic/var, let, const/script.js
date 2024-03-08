//var a = 1;
//console.log(a);

// var - 중복선언 O, 재할당O
// 자율성 O, 소스코드가 복잡한 경우 파악힘듦
var greeting = "hello";
console.log(greeting);

var greeting = "hi";
console.log(greeting);

greeting = "how are you?";
console.log(greeting);

//let - 중복선언X, 재할당O
let greeting2 = "hello";
console.log(greeting);

greeting2 = "hi";

//const - 중복선언X, 재할당X
const greeting3 = "hello";
// greeting3 = "hi"; ->에러

// 스코프 -----------------------------
//var 함수레벨 스코프
function func() {
  if (true) {
    var a = "a";
    console.log(a);
  }
  console.log(a);
}
func();

//let,const => 블록레벨 스코프
function func2() {
  if (true) {
    let a = "a";
    console.log(a);
  }
  //console.log(a); //a is not defined
}
func2();

// 호이스팅 -----------------------------
console.log(greet);
var greet = "greet";

//console.log(greet2);
let greet2 = "greet2";

funcTest(); //호이스팅 돼서 끌어 올려져서 실행됨
function funcTest() {
  console.log("hoisting test");
}
