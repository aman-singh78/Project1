let randomnum=parseInt(Math.random()*100 + 1)

const submit=document.querySelector('#subt')

const userInput=document.querySelector('#guessField')

const guessSlot=document.querySelector('.guesses')

const remaining=document.querySelector('.lastResult')

const lowOrHi=document.querySelector('.lowOrHi')

const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess =[]

let numGuess=1

let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess=parseInt(userInput.value)
       validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess < 1){
        alert('please enter a valid number')

    }
    else if(guess > 100){
        alert('please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomnum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === randomnum){
        displayMessage(`you guessed it right`)
        endGame()
    }
    else if(guess < randomnum){
        displayMessage('number is too low')
    }
    else if(guess > randomnum){
        displayMessage('number is too high')
    }

}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`

}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=` ${guess} `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`

}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomnum=parseInt(Math.random()*100 + 1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

        
        playGame=true;
    })

}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')

    p.classList.add('button')
    p.innerHTML=`<h1 id="newGame">Start new game</h1>`

    startOver.appendChild(p)
    playGame=false
    newGame()

}




