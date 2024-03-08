function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer funciton: ` + outerVariable);
    console.log(`Inner funciton: ` + innerVariable);
  };
}

const newFunction = outerFunction("outside");
//outerFunction은 이미 끝났지만 외부함수의 변수 및 범위에 액세스가능
// => 클로저
newFunction("inside");

let a = "a";
function functionA() {
  let b = "b";
  function functionB() {
    let c = "c";
    console.log(a, b, c);
  }
  functionB();
  console.log(a, b);
}

functionA();
