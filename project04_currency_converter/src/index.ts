#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

//rates
const USDtoPKR_rate:number = 287.87;
const one_PKRtoUSD_rate: number = 0.0035;
const one_SARtoPKR_rate: number = 76.74;

main();

async function main() {
    // ask user for number
    const { amount }: { amount: string } = await inquirer.prompt({
        type: 'input',
        name: 'amount',
        message: 'Enter amount:',
        validate: async (input: string) => {
            if (input === '') {
                return `${chalk.red('Enter a number')}`
            }
            // if user entered a string, return error
            if (isNaN(parseInt(input))) {
                return `${chalk.red('No String!')}`;
            }
            return true;
        }
    })
    // ask user. which currency to convert to
    const { convertTo }:{convertTo:string} = await inquirer.prompt({
        type: 'list',
        name: 'convertTo',
        message: 'Which currency to convert to?',
        choices: [
            { name: `Convert ${chalk.yellow('PKR')} to ${chalk.yellow('USD')} `, value: 'PKRtoUSD' },
            { name: `Convert ${chalk.yellow('USD')} to ${chalk.yellow('PKR')} `, value: 'USDtoPKR' },
            { name: `Convert ${chalk.yellow('SAR')} to ${chalk.yellow('PKR')} `, value: 'SARtoPKR' }
        ],
    });

    if (convertTo === 'PKRtoUSD') {
        PKRtoUSD()
    }
    if (convertTo === 'USDtoPKR') {
        USDtoPKR(amount)
    }
    if (convertTo === 'SARtoPKR') {
        SARtoPKR()
    }
}

// Each function below relates to each choise 

async function PKRtoUSD() {
   
    main();
}

function USDtoPKR(amount:string) {
    return console.log(chalk.green(`${amount} PKR in USD is: ${parseFloat(amount) * USDtoPKR_rate}`));
}

async function SARtoPKR() {
    
    main()
}














