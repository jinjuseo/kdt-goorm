// const sym1 = Symbol();
// const sym2 = Symbol();
// const sym3 = Symbol("hi"); //hi : description

// console.log(sym1 === sym2);

// console.log(sym3.description);

// const idSym = Symbol("id");
// let carA = {
//   id: 1,
//   name: "morning",
//   brand: "kia",
//   price: 1000,
//   [idSym]: 300,
// };

//carA[idSym] = 300;

//carA.id = 300; //override

//* symbol은 프로퍼티로 보이지 X
// console.log(Object.getOwnPropertyNames(carA));
// for (const key in carA) {
//   console.log(key);
// }

//* symbol 프로퍼티 가져옴
//console.log(Object.getOwnPropertySymbols(carA));

//console.log(carA);

// const sym1 = Symbol("sym1");
// const sym2 = Symbol("sym1");
// console.log(sym1 === sym2); //false

// //* Symbol.for : 전역 심볼 만듦
// const sym3 = Symbol.for("sym3333");
// const sym4 = Symbol.for("sym3333");
// console.log(sym3 === sym4); //true

// //* Symbol.keyFor : 전역심볼 description
// console.log(Symbol.keyFor(sym3)); //sym3333

// * 심볼 사용예시 1
// const RED = Symbol("red");
// const ORANGE = Symbol("orange");
// const YELLOW = Symbol("yellow");
// const BLUE = Symbol("blue");
// const dog = "blue";

// function getImortantLevel(color) {
//   switch (color) {
//     case RED:
//       return "very Important";
//     case ORANGE:
//       return "important";
//     case YELLOW:
//       return "little important";
//     case BLUE:
//       return "not Important";
//     default:
//       console.log(`${color} not included`);
//   }
// }

// console.log(getImortantLevel(dog));

//* 심볼 사용예시2

const length = Symbol("length");
class Car {
  constructor() {
    //this.length = 0 -> this[length]
    this[length] = 0;
  }
  add(brand, name) {
    this[brand] = name;
    this[length]++;
  }
}

let myCars = new Car();
myCars.add("kia", "morning");
myCars.add("hyundai", "tucson");
myCars.add("genesis", "gv80");
for (const car in myCars) {
  console.log(car, myCars[car]);
}
