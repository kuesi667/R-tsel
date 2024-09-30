const wordEL = document.querySelector(".word");
const oldWordsEL = document.querySelector(".old-words");
let words = []
let currentWord = ""
let previousWords =[];

fetch("words.txt").then(function(response){
    return response.text()
}).then(function(text){
    
    words = text.split(",");
    console.log(words);
});


function onClick() {
    if (currentWord) {
        previousWords.push(currentWord);
        console.log(previousWords);
        oldWordsEL.innerHTML = previousWords.join(", ")
    }
    console.log("getRandomWord");
    currentWord = getRandomWord()
    wordEL.innerHTML = currentWord;
}
function getRandomNumber(maxNumber){
    return Math.floor(Math.random() * maxNumber);
}



function getRandomWord() {
    return words[getRandomNumber(words.length)];
}