let game
const puzzleEl = document.querySelector('#puzzle')
const guesseEl = document.querySelector('#guesses')

 
window.addEventListener('keypress', (e)=>{
    game.makeGuess(e.key)
    render()
});

const render = () => {
    puzzleEl.innerHTML = ''
    guesseEl.textContent = game.statusMessage

    for( let letter of game.puzzle){
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    }

    game.setImage()
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 6)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()