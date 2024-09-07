
function handleKeyboardEvent(){
    
    const alphabet = document.getElementById('show-alphabet').innerText;

   
    const userInput = event.key.toLowerCase();

    if (userInput === 'escape'){
        gameOver();
    }
    


    if(userInput === alphabet  ){
        continueGame();
        removeBackground(alphabet);
        const count = counter('score-count');
        const total = count + 1;
       setCounter('score-count', total);
    }else{
        const life = counter('life-score');
        const newLife = life - 1;
        setCounter('life-score', newLife);
        
        if(newLife === 0){
            gameOver();
        }
    }
    
}

document.addEventListener('keyup', handleKeyboardEvent)



function gameOver() {
    showElementById('third-page');
    hideElementById('second-page');

     const score = document.getElementById('total-score');
     score.innerText = counter('score-count');

     setCounter('score-count', 0);
     setCounter('life-score', 5);
     const alphabet = document.getElementById('show-alphabet').innerText;
     removeBackground(alphabet);
   
}

function continueGame(){
   const alphabet = getRandomAlphabets();
   const newAlphabet = document.getElementById('show-alphabet');
   newAlphabet.innerText = alphabet;
   setBackground(alphabet);
   
}



function playStart(){
    hideElementById('first-page');
    showElementById('second-page');
    hideElementById('third-page');
    continueGame();
}