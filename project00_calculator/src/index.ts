#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.red('Welcome to '+ chalk.green('MohsinDev')+' calculator'));

const questions = [
    {
    type: 'input',
    name: 'equation',
    message: "Enter your math problem",
    
  },
]

inquirer.prompt(questions).then((answers) => {
  let solution = 1
  // extract equation 
  let { equation } = answers
  // ['number','operation','number'] in equationInArray
  let equationInArray = equation.split('')
  // check for the opration  
  if (equationInArray[1] === '+') {
    solution = parseInt(equationInArray[0]) + parseInt(equationInArray[2])
  } else if (equationInArray[1] === '-') {
    solution = parseInt(equationInArray[0]) - parseInt(equationInArray[2])
  } else if (equationInArray[1] === '/') {
    solution = parseInt(equationInArray[0]) / parseInt(equationInArray[2])
  } else if (equationInArray[1] === '%') {
    solution = parseInt(equationInArray[0]) % parseInt(equationInArray[2])
  }
  console.log(`Answer: ${solution}`);
});