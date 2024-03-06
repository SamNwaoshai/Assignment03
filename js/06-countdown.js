//Number prompt
let userInput = parseInt(prompt("Enter the number that you want to start the countdown:"))

//Number check, then countdown loop
if (!isNaN(userInput) && userInput >= 0 && userInput <= 100) {
    for (let i = userInput; i >= 0; i--) {
        console.log(i);
    }

}
else {
    console.log("Invalid input. Please enter a number between 0 and 100.");
}
