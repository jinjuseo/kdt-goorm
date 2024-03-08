class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    return `Hello, my name is ${this.name} `;
  }
}
class Client extends Person {
  constructor(name, email, phone, address) {
    super(name, email);
    this.phone = phone;
    this.address = address;
  }
}
const john = new Client("John", "envkt@example.com", "123-456-77", "서울시");

console.log(john.introduce());
