const input = document.querySelector('.num-input')

const guessBtn = document.querySelector('.guess')

const life = document.querySelector('.life')

const result = document.querySelector('.result')

const replayBtn = document.querySelector('.replay')

const main = document.querySelector('main')

let randomNumber;

const doit = document.querySelector("#doit")

const randomNumberGenerator = () =>{
    return Math.trunc(Math.random()*100) + 1
}

randomNumber = randomNumberGenerator()


const checkInput = () => {
    if(life.innerText > 1){
      if(input.value > 100 || input.value < 1){
        result.innerText = 'Enter a number between 1 and 100'
      }else if(input.value == randomNumber){
            result.innerText = 'You won'

            life.innerText--
            
            main.style.backgroundColor = 'yellowgreen'

            guessBtn.removeEventListener('click', checkInput)
            
            replayBtn.classList.add('replay-active')

            input.value = ''
        }else if(input.value > randomNumber){

            result.innerText = "Guess lower"

            life.innerText--

            main.style.backgroundColor = 'crimson'

            input.value = ''

        }else if(input.value < randomNumber){

            result.innerText = 'Guess higher'

            life.innerText--

            main.style.backgroundColor = 'crimson'

            input.value = ''
        }
    }else{
        life.innerText--

        result.innerText = 'You lost'

        main.style.backgroundColor = 'black'

        guessBtn.removeEventListener('click', checkInput)

        replayBtn.classList.add('replay-active')

        input.value = ''
    }
} 
        

guessBtn.addEventListener('click', checkInput)


const replayEvent = () => {
    if(confirm('Want to play again ?')){

        main.style.backgroundColor = '#fafafa'

        guessBtn.addEventListener('click', checkInput)

        life.innerText = 5

        result.innerText = 'Give it a try'

        randomNumber = randomNumberGenerator()

        replayBtn.classList.remove('replay-active')

        input.value = ''
    }
}

replayBtn.addEventListener('click', replayEvent)

setInterval(() => doit.play() , 1)
