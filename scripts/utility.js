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

function setBackground(element) {
   const backGround = document.getElementById(element);
   backGround.classList.add('bg-orange-400');

}
function removeBackground(element) {
    const backGround = document.getElementById(element);
    backGround.classList.remove('bg-orange-400');
 
 }

 
function counter(id){
    const count = document.getElementById(id).innerText;
        const countNumber = parseInt(count);
        return countNumber;
}
 function setCounter(id, count){
    const value = document.getElementById(id);
    value.innerText = count;
 }
