#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.green('Welcome to MohsinDev calculator'));
const questions = [
    {
        type: 'input',
        name: 'equation',
        message: "Enter your math problem",
    },
];
inquirer.prompt(questions).then((answers) => {
    let { equation } = answers;
    let equationInArray = equation.split('');
    let solution = 1;
    if (equationInArray[1] === '+') {
        solution = parseInt(equationInArray[0]) + parseInt(equationInArray[2]);
    }
    else if (equationInArray[1] === '-') {
        solution = parseInt(equationInArray[0]) - parseInt(equationInArray[2]);
    }
    console.log(solution);
});
