#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

class Student {
    name: string;
    id: number;
    courses: string[];
    balance: number;

    constructor(name: string, id: number, courses: string[], balance: number) {
        this.name = name;
        this.id = id;
        this.courses = courses;
        this.balance = balance;
    }

    enroll(course: string) {
        this.courses.push(course);
    }

    viewBalance() {
        console.log(`Balance: ${this.balance}`);
    }

    payTuition(amount: number) {
        this.balance -= amount;
        console.log(`Thank you for your payment of ${amount}. Your new balance is ${this.balance}.`);
    }

    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Courses: ${this.courses.join(', ')}`);
        console.log(`Balance: ${this.balance}`);
    }
}
const students: Student[] = [];

const main = async () => {
    const menuPrompt = [
        {
            type: 'list',
            name: 'menu',
            message: 'Which currency to convert to?',
            choices: [
                { name: `Add Student `, value: 'addStudent' },
                { name: `Enroll Student `, value: 'enrollStudent' },
                { name: `View Balance `, value: 'viewBalance' },
                { name: `Pay Tuition `, value: 'payTuition' },
                { name: `Show Status `, value: 'showStatus' },
                { name: "Exit", value: 'Exit' }
            ],
        },
    ];
    const { menu }:{menu:string} = await inquirer.prompt(menuPrompt);

    switch (menu) {
        case 'addStudent': {
            addStudent()
        }
    }
    console.log(menu);
};

console.log(chalk.blue('Welcome to mohsinDev student Management System'));
main();

async function addStudent() {
    const { fullName } = await inquirer.prompt({
        type: 'input',
        name: 'fullName',
        message: 'Enter student name:',
    });
    const { course } = await inquirer.prompt({
        type: 'list',
        name: 'course',
        message: 'Select course:',
        choices: [
            { name: `English `, value: 'English' },
            { name: `Math `, value: 'Math' },
            { name: `History `, value: 'History' },
        ],
    });
    const { balance } = await inquirer.prompt({
        type: 'input',
        name: 'balance',
        message: 'Enter Your Balance:',
    });
    const id = Math.floor(Math.random() * 90000) + 1000;
    students.push(new Student(fullName, id, course, balance))
    console.log(students);
    main()
}


