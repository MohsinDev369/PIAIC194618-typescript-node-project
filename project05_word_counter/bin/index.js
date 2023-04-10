#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const countWordsAndChars = (paragraph) => {
    const words = paragraph.split(' ').filter(word => word !== '').length;
    const characters = paragraph.split(' ').join('').length;
    return { words, characters };
};
const promptParagraph = async () => {
    console.log(chalk.blue('Welcome to mohsinDev word Counter'));
    const questions = [
        {
            type: 'input',
            name: 'paragraph',
            message: 'Enter a paragraph:',
        },
    ];
    const { paragraph } = await inquirer.prompt(questions);
    const { words, characters } = countWordsAndChars(paragraph);
    console.log((chalk.green(`Words (excluding whitespaces): ${words}`)));
    console.log(chalk.green(`Characters (excluding whitespaces): ${characters}`));
};
promptParagraph();
