//1. JS 함수를 사용
let val;

// Number to String
val = String(111);

//Boolean to String
val = String(false);

//Date to String
val = String(new Date());

//Array to String
val = String([1, 2, 3, 4, 5]);

//toString()
val = (5).toString();

//String to Number
val = Number("1");
val = Number(true);
val = Number(false);
val = Number(null);

//NaN = Not a Number
//val = Number([1, 2, 3]);

val = parseInt("111.40");
val = parseFloat("111.40");

console.log(val);
console.log(typeof val);
console.log(val.length);

//---------------------

//2. JS 자체에 의해 자동으로

const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;
//-> String+Number => String 으로 자동 변환

console.log(sum);
console.log(typeof sum);
