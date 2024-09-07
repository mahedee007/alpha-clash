
function continueGame(){
   getRandomAlphabets ();
}



function playStart(){
    hideElementById('first-page');
    showElementById('second-page');
    continueGame();
}