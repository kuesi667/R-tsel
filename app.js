const wordEL = document.querySelector(".word");
const oldWords = document.querySelector("old-words");
let words[]
let currentWord = ""
let previousWords =[];

fetch("words.txt").then(function(response){
    return response.text()
}).then(function(text){
    
    words = text.split(",");
    console.log(words);
});


function onClick() {
    currentWord = getRandomWord()
    console.log("getRandomWord");
if(currentWord){

previousWords.push(currentWord);
console.log(previousWords);
oldWordsEL.innerHTML =previousWords.join(", ")
}
function getRandomNumber(maxNumber){
    return Math.floor(Math.random() * maxNumber);
    wordEL.innerHTML = currentWord;
}



function getRandomWord() {
    return words[getRandomNumber(words.length)];
}