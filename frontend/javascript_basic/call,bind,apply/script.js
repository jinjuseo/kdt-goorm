//* Call() method
// const fullName = function (city, country) {
//   console.log(this.firstName + " " + this.lastName, city, country);
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// fullName.call(person1, "Oslo", "Norway");

//* Apply() method

// const fullName = function (city, country) {
//   console.log(this.firstName + " " + this.lastName, city, country);
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// fullName.apply(person1, ["Oslo", "Norway"]);

//* Bind() method
function func(language) {
  if (language === "kor") {
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: "안녕",
  engGreeting: "Hello",
};

//bind는 연결만 시켜주고 실행X => 다른 변수에 할당해준 후 실행
const boudnFunc = func.bind(greeting);
boudnFunc("kor");
