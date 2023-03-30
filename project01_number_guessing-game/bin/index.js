#! /usr/bin/env node
import inquirer from 'inquirer';
let score = 0;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function playGame(rounds) {
    console.log(`Starting game with ${rounds} rounds...`);
    for (let i = 1; i <= rounds; i++) {
        const numToGuess = getRandomInt(1, 11);
        console.log(`Round ${i}: Guess a number between 1 and 10:`);
        inquirer.prompt([
            {
                type: 'input',
                name: 'guess',
                message: 'Your guess:'
            }
        ]).then((answers) => {
            const guess = parseInt(answers.guess);
            if (guess === numToGuess) {
                console.log(`Congratulations! You guessed the number correctly.`);
                score++;
            }
            else {
                console.log(`Sorry, the number was ${numToGuess}. Better luck next time!`);
            }
            if (i === rounds) {
                console.log(`Game over. Your score is ${score}.`);
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'playAgain',
                        message: 'Would you like to play again?'
                    }
                ]).then((answers) => {
                    if (answers.playAgain) {
                        inquirer.prompt([
                            {
                                type: 'input',
                                name: 'rounds',
                                message: 'How many rounds would you like to play?',
                                validate: function (value) {
                                    const parsedValue = parseInt(value);
                                    if (Number.isInteger(parsedValue) && parsedValue > 0) {
                                        return true;
                                    }
                                    return 'Please enter a positive integer';
                                }
                            }
                        ]).then((answers) => {
                            playGame(parseInt(answers.rounds));
                        });
                    }
                    else {
                        console.log('Thanks for playing!');
                    }
                });
            }
            else {
                playGame(rounds);
            }
        });
    }
}
inquirer.prompt([
    {
        type: 'input',
        name: 'rounds',
        message: 'Welcome to the number guessing game! How many rounds would you like to play?',
        validate: function (value) {
            const parsedValue = parseInt(value);
            if (Number.isInteger(parsedValue) && parsedValue > 0) {
                return true;
            }
            return 'Please enter a positive integer';
        }
    }
]).then((answers) => {
    playGame(parseInt(answers.rounds));
});
