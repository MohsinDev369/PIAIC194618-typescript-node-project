#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let todos = [];
main();
async function main() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            { name: 'Create a new todo', value: 'create' },
            { name: 'Read all todos', value: 'readAll' },
            { name: 'Update a todo', value: 'update' },
            { name: 'Delete a todo', value: 'delete' },
            { name: 'Exit', value: 'exit' },
        ],
    });
    if (action === 'create') {
        createTodo();
    }
    if (action === 'readAll') {
        readAllTodos();
    }
    if (action === 'update') {
        updateTodo();
    }
    if (action === 'delete') {
        deleteTodo();
    }
    if (action === 'exit') {
        console.log(chalk.blue('Bye! Buy!'));
        return true;
    }
}
// CRUD Functions 
async function createTodo() {
    const { title } = await inquirer.prompt({
        type: 'input',
        name: 'title',
        message: 'Enter a title for your todo:',
    });
    todos.push(title);
    console.log(chalk.green('Todo created!'));
    main();
}
function readAllTodos() {
    console.log(chalk.yellow('All todos:'));
    todos.forEach((todo) => console.log(todo));
    main();
}
async function updateTodo() {
    const { index } = await inquirer.prompt({
        type: 'number',
        name: 'index',
        message: 'Enter the index of the todo you want to update:',
    });
    const { title } = await inquirer.prompt({
        type: 'input',
        name: 'title',
        message: 'Enter the new title for your todo:',
    });
    todos[index] = title;
    console.log(chalk.green('Todo updated!'));
    main();
}
async function deleteTodo() {
    const { index } = await inquirer.prompt({
        type: 'number',
        name: 'index',
        message: 'Enter the index of the todo you want to delete:',
    });
    todos.splice(index, 1);
    console.log(chalk.red('Todo deleted!'));
    main();
}
