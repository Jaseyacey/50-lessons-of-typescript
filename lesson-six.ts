function greetPerson(firstName: string, lastName: string): string {
    return `Hello, ${firstName} ${lastName}!`;
  }
  
  console.log(greetPerson("John", "Doe")); // Should print: "Hello, John Doe!"
  console.log(greetPerson("Jane", "Smith")); // Should print: "Hello, Jane Smith!"
  