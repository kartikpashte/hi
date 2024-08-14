let number = parseInt(prompt("Enter a positive integer:"));

if (number < 0) {
    alert("Fibonacci for negative number does not exist.");
}
else if (number === 0) {
    alert(`The Fibonacci of 0 is 1.`);
}

else {
    let fact = 0;
    for (i = 1; i <= number; i++) {
        fact += i;
    }
    alert(`The Fibonacci of ${number} is ${fact}.`);
}