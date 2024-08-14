const number = parseInt(prompt("Enter a positive integer:"));

if (number < 0) {
    alert("Factorial for negative number does not exist");
}

else if (number === 0) {
    alert(`The factorial of ${number} is 1.`);
}

else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    alert(`The factorial of ${number} is ${fact}.`);
}