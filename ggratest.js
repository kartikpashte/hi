let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
let num3 = parseInt(prompt("Enter third number: "));

if(num1 >= num2 && num1 >= num3) {
    alert(`largest number is ${num1}`)
}

else if (num2 >= num1 && num2 >= num3) {
    alert(`largest number is ${num2}`)

}

else {
    alert(`largest number is ${num3}`);
}
