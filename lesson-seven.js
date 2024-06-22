function printLength(input) {
    typeof input === 'string' ? console.log("Length of '".concat(input, "' is ").concat(input.length))
        : console.log("Input is null or undefined");
}
printLength("Hello"); // Should print: "Length of 'Hello' is 5"
printLength(null); // Should print: "Input is null or undefined"
printLength(undefined); // Should print: "Input is null or undefined"
