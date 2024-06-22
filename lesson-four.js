function canVote(age) {
    return age >= 18;
}
console.log(canVote(20)); // Should print: true
console.log(canVote(17)); // Should print: false
