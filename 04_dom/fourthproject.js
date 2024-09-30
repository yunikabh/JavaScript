let randomnumber = parseInt(Math.random()*100 + 1);

const Submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessfield');
const guessslot = document.querySelector('.prevguess');
const remaining =document.querySelector('.remguess');
const messagebox = document.querySelector('.messagebox');
const startover = document.querySelector('.result');

const p= document.createElement('p');

let prevGuess=[];
let numguess=0;

let playGame =true;// allows to play game .

if(playGame){
    Submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);


    })
}

function validateGuess(guess){
       
    if(isNaN(guess)){
        alert("please enter a valid number");
        
    } 
   else  if(guess< 1){
            alert("please enter a valid number");
            
        }
        if(guess >100){
            alert("please enter a valid number");
            
        }
        else{
           prevGuess.push(guess);
           if(numguess === 10){
            displayGuess(guess);
            displayMessage(`Game over.Random number was ${randomnumber}`)
            endgame();
           }
           else{
            displayGuess(guess);
            checkGuess(guess);

           }
            
        }

}

function checkGuess(guess){
    if(guess === randomnumber){
        displayMessage(`You guessed it right`)
        endgame();

    }
    else if(guess < randomnumber){
        displayMessage(`Number is too low`)

    }
    else if(guess > randomnumber){
        displayMessage(`Number is too high`)

    }
}

function displayGuess(guess){ // cleanup method 
        userInput.value= ''
        guessslot.innerHTML +=`${guess} `;
        numguess ++;
        remaining.innerHTML= `${10- numguess}`

}

function displayMessage(message){
        messagebox.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame"> Start new game</h2>`;
    startover.appendChild(p);
        playGame(false);
    newgame();
}
function newgame(){
        const newgamebutton = document.querySelector('#newGame');
       
        newgamebutton.addEventListener('click',function(e){
            
            randomnumber = parseInt(Math.random()*100 + 1);
            prevGuess=[]
            numguess=0;
            // guessslot.innerHTML=''
            remaining.innerHTML=`${10- numguess}`
            userInput.removeAttribute('disabled');
            startover.removeChild(p);
            playGame(true);
        })
    
}   



