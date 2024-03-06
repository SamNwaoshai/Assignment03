//variables
let coinFlip; 

do {
    let coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip === 1) {
        console.log("Tails");
        break;
    }
    console.log("Heads");
} while (true) 