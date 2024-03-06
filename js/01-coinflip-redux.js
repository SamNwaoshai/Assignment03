//variables
let coinFlip 
let loopCount = parseInt(prompt("Enter the number of times you would like to play"));


//Number check and loop
if (!isNaN(loopCount)) {
    for (let i = 0; i < loopCount; i++) {
        console.log("Round " + (i + 1));
        let coinFlip = Math.floor(Math.random() * 2);
    
        if (coinFlip === 0) {
            console.log("Heads");
        }
        else {
            console.log("Tails");
        }
    }
}
else {
    console.log("Invalid input. Please enter a number.");
}
