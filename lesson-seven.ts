function printLength(input: string | null | undefined): void {
    typeof input === 'string' ? console.log(`Length of '${input}' is ${input.length}`) 
    :console.log("Input is null or undefined");
  }
  
  printLength("Hello"); // Should print: "Length of 'Hello' is 5"
  printLength(null); // Should print: "Input is null or undefined"
  printLength(undefined); // Should print: "Input is null or undefined"
  