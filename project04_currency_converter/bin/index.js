#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
//rates
const USDtoPKR_rate = 287.87;
const PKRtoUSD_rate = 0.0035;
const SARtoPKR_rate = 76.74;
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
            // if user entered a string, return error
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
            { name: "Exit", value: 'Exit' }
        ],
    });
    if (convertTo === 'PKRtoUSD') {
        PKRtoUSD(amount);
    }
    if (convertTo === 'USDtoPKR') {
        USDtoPKR(amount);
    }
    if (convertTo === 'SARtoPKR') {
        SARtoPKR(amount);
    }
    if (convertTo === 'Exit') {
        console.log(chalk.yellow('Bye! Bye!'));
        return true;
    }
}
// Each function below relates to each choise 
async function PKRtoUSD(amount) {
    return console.log(chalk.green(`${amount} PKR in USD is: ${parseFloat(amount) * PKRtoUSD_rate}`));
}
function USDtoPKR(amount) {
    return console.log(chalk.green(`${amount} PKR in USD is: ${parseFloat(amount) * USDtoPKR_rate}`));
}
async function SARtoPKR(amount) {
    return console.log(chalk.green(`${amount} PKR in USD is: ${parseFloat(amount) * SARtoPKR_rate}`));
}
