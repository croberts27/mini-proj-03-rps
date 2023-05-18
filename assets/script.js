//DATA =======================
var options = "RPS".split(""); // ["R", "P", "S"]


// HELPER FUNCTIONS ========================
function getUserChoice (){
    //prompt user to enter one fo the options (R, P, S)
    var userChoice = prompt("Please enter R, P, or S").toUpperCase();
    if (!options.includes(userChoice)) {
        return getUserChoice();
    }
    //return the choice
    return userChoice;
}

function getComputerChoice() {
    var randomSeed = Math.random();
    var scale = options.length;

    var randomIndex = randomSeed * scale;
    console.log(randomSeed)
    var choice = options[randomIndex];
    return choice;
}

// function tie (computerChoice) {
//     ties++
//     alert("Computer chose" + computerChoice + ".")
//     alert("It's a tie!")
// }
// function win
// function loss
// function checkWin

function playGame (){
    console.log("The game is starting...")
    // get the user's choice
    var userChoice = getUserChoice();
    console.log(userChoice);
    // computer makes a choice
    var computerChoice = getComputerChoice();
    console.log("Computer choice: ", computerChoice);
    // display scores
    // ask if they want to play again
}

// INITITALIZATIONS ========
playGame();