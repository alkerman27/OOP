'use strict';

const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;


}

const Mark = new Person('Mark', 1992);

console.log(Mark);
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}
Mark.calcAge();