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
let subs = [];

let getPlayers = function () {
    if (starters.length + subs.length < 3) {
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
                type: 'list',
                name: "playDef",
                message: "What is the player's defensive amount?",
                choices: ['0','1','2','3','4','5','6','7','8','9','10']
            },
            {
                type: 'list',
                name: "playOff",
                message: "What is the player's offensive amount?",
                choices: ['0','1','2','3','4','5','6','7','8','9','10']
            
            }
        ]).then(function (answers) {

            let newPlayer = new Player(answers.playerName, answers.playPos, answers.playOff, answers.playDef);
            if (starters.length < 2) {
                starters.push(newPlayer);

            } else {
                subs.push(newPlayer);
            }
            getPlayers();
        });
    } else{
        for (const n of starters){
            n.printStats();
        }
        for (const n of subs){
            n.printStats();
        }
    };
    
}


function playGame(){
    const num1 =  Math.floor(Math.random()*20)
    const num2 =  Math.floor(Math.random()*20)
    let score = 0;
    if (num1<(players[0].offense+players[1].offense)){
        score++
    }
    if (num1<(players[0].defense+players[1].defense)){
        score--
    }
    console.log(score);
    inquirer.prompt([
        {
            type: 'list',
            name: "useSub",
            message: "Who would you like to sub?",
            choices: [`${players[0].name}`, `${players[0].name}`, "Don't use a sub"]
        }
    ]).then(function(answer){
        if (answer.useSub === "Don't use a sub"){

        } 
    })
}



getPlayers();


