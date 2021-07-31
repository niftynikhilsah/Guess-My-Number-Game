'use strict';

const secretNumber = Math.trunc(Math.random()*20)+1;
// console.log(number);
let score=20;

document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);

    // When no Input
    if(!guess){
        document.querySelector('.message').textContent = "No Number"
    }
    
    // When player wins the game..
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = "Correct Number!"

        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor="#60b347";

        document.querySelector('.number').style.width="30rem"
    
    }
    
    // When guess is too high 

    else if(guess > secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = "Too High!"
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = "You lost the game!!"
            document.querySelector('.score').textContent = 0;
        }
        

    }
    
    // When guess is too low
    
    else if(guess < secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = "Too Low!"
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent = "You lost the game!!"
            document.querySelector('.score').textContent = 0;
        }
        
    }
})