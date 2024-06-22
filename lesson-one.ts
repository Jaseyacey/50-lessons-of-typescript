interface Person {
    firstName: string;
    lastName: string;
  }
  
  function introduce(person: Person): string {
    return `Hello, my name is ${person.firstName} ${person.lastName}.`;
  }
  
  let user = { firstName: "John", lastName: "Doe" };
  console.log(introduce(user)); 