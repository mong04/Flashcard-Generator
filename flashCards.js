const BasicCard = require('./BasicCard');
const ClozeCard = require('./ClozeCard');

const inquirer = require('inquirer');

var input = process.argv;

inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Make a Basic Flashcard', 'Make a Cloze-Deleted Flashcard'],
        name: 'userChoice'
    }
]).then(function(choice){
    switch(choice.userChoice){
        case 'Make a Basic Flashcard':
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter the text for the front of the card.',
                    name: 'front'
                },
                {
                    type: 'input',
                    message: 'Enter answer for the back of the card.',
                    name: 'back'
                }
            ]).then(function(cardInfo){
                var newBasic = new BasicCard(cardInfo.front, cardInfo.back);
                console.log(newBasic);
            })
            break;
        case 'Make a Cloze-Deleted Flashcard':
            inquirer.prompt([
                {
                    type: 'input',
                    message: 'Enter the text for the card.',
                    name: 'text'
                },
                {
                    type: 'input',
                    message: 'Enter answer to be removed for the Cloze-Deletion.',
                    name: 'cloze'
                }
            ]).then(function(cardInfo){
                var newCloze = new ClozeCard(cardInfo.text, cardInfo.cloze);
                console.log(newCloze);
            })
            break;
    }
})