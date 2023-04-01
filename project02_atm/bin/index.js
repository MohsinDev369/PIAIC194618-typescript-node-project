#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
// Generate random user data
const userAmount = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
const recivedCash = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
// Define the prompt for user ID and PIN
const loginPrompt = [
    {
        type: 'input',
        name: 'userId',
        message: 'Enter your user ID:',
    },
    {
        type: 'password',
        name: 'userPin',
        message: 'Enter your PIN:',
        mask: '*',
    },
];
// functionality options
const choisePrompt = [
    {
        type: 'list',
        name: 'options',
        message: 'Enter your options:',
        choices: ['Check Balance', 'Send Money', 'Received Money', 'Quit']
    }
];
async function start() {
    // Prompt the user for login details
    const { userId, userPin } = await inquirer.prompt(loginPrompt);
    // Verify the login details
    if (userId && userPin) {
        //ATM functionalities 
        console.log(chalk.yellow('Welcome to the ATM!'));
        // ATM Menue
        async function atm_Menue() {
            const { options } = await inquirer.prompt(choisePrompt);
            if (options === 'Check Balance') {
                console.log('You have ' + chalk.cyanBright.bgGreen(userAmount));
                atm_Menue();
            }
            else if (options === 'Send Money') {
                console.log(chalk.cyanBright.bgRed('Money Sent'));
                atm_Menue();
            }
            else if (options === 'Received Money') {
                console.log('you recived ' + chalk.cyanBright.bgGreen(userAmount));
                atm_Menue();
            }
            else if (options === 'Quit') {
                console.log(chalk.bgCyan('Bye! Bye!'));
                return 1;
            }
        }
        // CAlling ATM MENUE
        atm_Menue();
    }
    else {
        console.log('Invalid user ID or PIN. Please try again.');
        start();
    }
}
start();
