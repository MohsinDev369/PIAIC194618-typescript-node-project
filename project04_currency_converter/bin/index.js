#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
main();
async function main() {
    // ask user for number
    const { amount } = await inquirer.prompt({
        type: 'input',
        name: 'amount',
        message: 'Enter amount:',
        validate: async (input) => {
            if (input === '') {
                return `${chalk.red('Enter a number')}`;
            }
            if (isNaN(parseInt(input))) {
                return `${chalk.red('No String!')}`;
            }
            return true;
        }
    });
    // ask user. which currency to convert to
    const { convertTo } = await inquirer.prompt({
        type: 'list',
        name: 'convertTo',
        message: 'Which currency to convert to?',
        choices: [
            { name: `Convert ${chalk.yellow('PKR')} to ${chalk.yellow('USD')} `, value: 'PKRtoUSD' },
            { name: `Convert ${chalk.yellow('USD')} to ${chalk.yellow('PKR')} `, value: 'USDtoPKR' },
            { name: `Convert ${chalk.yellow('SAR')} to ${chalk.yellow('PKR')} `, value: 'SARtoPKR' },
            { name: 'Exit', value: 'exit' },
        ],
    });
    if (convertTo === 'create') {
        createTodo();
    }
    if (convertTo === 'readAll') {
        readAllTodos();
    }
    if (convertTo === 'update') {
        updateTodo();
    }
    if (convertTo === 'delete') {
        deleteTodo();
    }
    if (convertTo === 'exit') {
        console.log(chalk.blue('Bye! Buy!'));
        return true;
    }
    console.log(amount, convertTo);
}
// CRUD Functions 
async function createTodo() {
    main();
}
function readAllTodos() {
}
async function updateTodo() {
    main();
}
async function deleteTodo() {
    main();
}
