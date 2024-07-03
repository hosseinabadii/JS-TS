function createGame() {
    let score = 0

    function increaseScore(points) {
        score += points
        console.log(`+${points} pts`)
    }

    function decreaseScore(points) {
        score -= points
        console.log(`-${points} pts`)
    }

    function getScore() {
        return score
    }

    return {increaseScore, decreaseScore, getScore}
}

game = createGame()
game.increaseScore(100)
game.decreaseScore(20)
game.increaseScore(50)
console.log(`Your score is: ${game.getScore()}`)
