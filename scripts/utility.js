function hideElementById(elemnt){
    document.getElementById(elemnt).classList.add('hidden');
   
}


function showElementById(elemnt){
    document.getElementById(elemnt).classList.remove('hidden');
}

function getRandomAlphabets(){
    const alphabetsString ="abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetsString.split('');
    const randomIndex = Math.round(Math.random() * 25)
    const alphabet = alphabets[randomIndex];

    
    return alphabet;
}