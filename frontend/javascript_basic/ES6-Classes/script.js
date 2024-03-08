class Person {
  constructor(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
  }

  introduce() {
    return `Hello, my name is ${this.name} }`;
  } //prototype에 자동으로 들어감

  static multipleNumbers(x, y) {
    return x * y;
  }
}
const john = new Person("John", "envkt@example.com", "7-10-99");
console.log(john);
//* static 메서드 사용 - 클래스 명으로 호출
console.log(Person.multipleNumbers(10, 2));
