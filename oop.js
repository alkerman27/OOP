'use strict';

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const Mark = new Person('Mark', 1992);
const Anel = new Person('Mark', 1991);

console.log(Mark);
console.log(Anel);
console.log(Person.prototype);

Mark.calcAge();
Anel.calcAge();
console.log(Mark.hasOwnProperty('firstName'))

console.log(Person.prototype.constructor);