class Hangman{
    constructor(word, remainingGuesses){
        this.word = (word.toLowerCase()).split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
    }
    
    calculateStatus(){
        const finished = this.word.every((letter)=> this.guessedLetters.includes(letter) || letter === ' ')
    
        if (this.remainingGuesses === 0 ){
            this.status = 'failed'
        }else if(finished){
            this.status = 'finished'
        }else{
            this.status = 'playing'
        } 
    }

    get statusMessage(){
        if (this.status === 'playing'){
            return `Guess left: ${this.remainingGuesses}`
        } else if (this.status === 'failed'){
            return `Nice  try! The word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the word.'
        }
    }

    get puzzle(){
        let puzzle = ""
    
        this.word.forEach(letter => {
            if(this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            }else{
                puzzle += '*'
            }
        });
        return puzzle
    }

    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        
        if (this.status !== 'playing'){
            return
        }
    
        if(isUnique){
            this.guessedLetters.push(guess)
        }
        if(isUnique && isBadGuess){
            this.remainingGuesses -= 1
        }
        this.calculateStatus()
    }

    setImage(){
        if(this.status === 'finished'){
            document.querySelector('#image').src = 'images/win.png'
        }else{
            document.querySelector('#image').src = `images/start${6 - this.remainingGuesses}.png`
        }
        document.querySelector('#image').alt = "Hangman"
    }

} 
