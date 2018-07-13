const inquirer = require('inquirer');

function Player(name, position, offense, defense) {
    this.name = name
    this.position = position
    this.offense = offense
    this.defense = defense
    this.goodGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense++
        }
        if (Math.floor(Math.random() * 2) === 1) {
            this.defense++
        }
    }
    this.badGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense--
        }
        if (Math.floor(Math.random() * 2) === 1) {
            this.defense--
        }
    }
    this.printStats = function () {
        console.log("Name " + this.name)
        console.log("Position " + this.position)
        console.log("Offense " + this.offense)
        console.log("Defense " + this.defense)
        console.log("-------------")
    }
};

let starters = [];
let sub = [];

inquirer.prompt([
    {
        name: "playerName",
        message: "What is the player's name?"
    },
    {
        name: "playPos",
        message: "What is the player's position?"
    },
    {
        name: "playPos",
        message: "What is the player's position?"
    },
    {
        type: 'list',
        name: "playDef",
        message: "What is the player's defensive amount?",
        choices: [0,1,2,3,4,5,6,7,8,9,10]
    },
    {
        type: 'list',
        name: "playOff",
        message: "What is the player's offensive amount?",
        choices: [0,1,2,3,4,5,6,7,8,9,10]
    }
]).then(function(answers){


    const newPlayer = new  
})
}