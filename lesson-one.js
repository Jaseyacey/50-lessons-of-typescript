function introduce(person) {
  return "Hello, my name is "
    .concat(person.firstName, " ")
    .concat(person.lastName, ".");
}
var user = { firstName: "John", lastName: "Doe" };
console.log(introduce(user));
