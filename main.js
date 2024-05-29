// Import From Inquirer
import inquirer from "inquirer";
console.log(" Welcome to Ayesha Nasir's Number Guessing Game");
// Using Functions
const randomnumber = Math.floor(Math.random() * 10 + 1);
//Taking Prompt from Users
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Enter your guess number (Guess from 1 to 10):",
    },
]);
// Condional Statement
if (answer.UserGuessedNumber === randomnumber) {
    console.log("Congratulations! You guess a correct number.");
}
else {
    console.log("Opps Sorry! You guess a wrong number.\n Try Again!");
}
