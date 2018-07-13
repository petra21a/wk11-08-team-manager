

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
}