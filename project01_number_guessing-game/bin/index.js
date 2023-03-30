#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
function generateRandomNumber() {
    return Math.floor(Math.random() * 9);
}
async function playGame() {
    const answer = await inquirer.prompt({
        type: 'number',
        name: 'rounds',
        message: 'How many rounds do you want to play?'
    });
    const rounds = answer.rounds;
    let score = 0;
    for (let i = 1; i <= rounds; i++) {
        const randomNumber = generateRandomNumber();
        const guessAnswer = await inquirer.prompt({
            type: 'number',
            name: 'guess',
            message: `Round ${i}: Guess a number between 1 and 9`
        });
        const guess = guessAnswer.guess;
        if (isNaN(guess) || guess < 1 || guess > 9) {
            console.log(chalk.red('Invalid guess. Please enter a number between 1 and 9.'));
        }
        else if (guess === randomNumber) {
            score++;
            console.log(chalk.green('Correct!'));
        }
        else {
            console.log(chalk.red(`Wrong! The number was ${randomNumber}.`));
        }
    }
    console.log(chalk.yellow(`Your score is ${score}/${rounds}.`));
}
playGame();
