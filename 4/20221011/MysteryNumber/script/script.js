let number;
let mysteryNumber = Math.round(Math.random() * 10);
console.log(mysteryNumber);
while (number != mysteryNumber){
number = prompt("Input a number")
if (number < mysteryNumber){
    alert("The Mystery number is greater!");
} else if(number > mysteryNumber){
    (alert("No! The Mystery number is less!"))}
    else {
        alert("You found the Mystery number!");
    }
}