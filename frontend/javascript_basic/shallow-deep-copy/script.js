//* shallow copy
const aArray = [1, 2, 3];

//* shallow copy with spread operator
const bArray = [...aArray, 4];

//* shallow copy with Object.assign()
const cArray = Object.assign([], bArray);
console.log(cArray);

console.log(bArray === cArray);
//false : 값은 같지만 참조하는 위치가 다르기때문

cArray.push([5, 6, 7]);
console.log(cArray);

const dArray = [...cArray, 10];
console.log(dArray);
dArray[4].push(8);
//cArray 에도 값이 추가됨-> 얕은복사를 했기때문
console.log("cArray", cArray);
console.log("dArray", dArray);

//* 얕은 동결
const aObject = {
  a: "a",
  b: "b",
  cObject: { a: 1, b: 2 },
};

Object.freeze(aObject);
aObject.a = "c";
console.log("aObject", aObject);
//변경안됨 -> 얕은 동결했기 때문

aObject.cObject.a = 3;
console.log("aObject", aObject);
//변경됨 -> 뎁스가 2라 cObject안에있는 값까지는 동결X(얕은 동결)

const qObject = {
  a: "a",
  b: "b",
  cObject: { a: 1, b: 2 },
};

//* deep copy with json.pares(json.stringify())
const newAObject = JSON.parse(JSON.stringify(qObject));

console.log("qObject", qObject);
console.log("newAObject", newAObject);
qObject.cObject.a = 3;
console.log("qObject", qObject);
console.log("newAObject", newAObject);
//newAObject의 a값은 바뀌지 X

//* deep copy with nested spread operator
const newBObject = { ...qObject, cObject: { ...qObject.cObject } };
console.log("newBObject", newBObject);
qObject.cObject.a = 7;
console.log("qObject", qObject);
console.log("newBObject", newBObject);
//newBObject의 a값은 바뀌지 X

//* deep copy with lodash
