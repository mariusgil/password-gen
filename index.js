const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let button = document.getElementById("genpass")
let passwordLength = 15
let passwordOneEl = document.getElementById("passwordOne-el")
let passwordTwoEl = document.getElementById("passwordTwo-el")

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}

function generateRandomPasswordOne() {
    let randomPasswordOne = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne+= getRandomCharacter()
    }
    return passwordOneEl.textContent = randomPasswordOne
} 

function generateRandomPasswordTwo() {
    let randomPasswordTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo+= getRandomCharacter()
    }
    return passwordTwoEl.textContent = randomPasswordTwo
} 
function copyToClipboard(){
    let copiedText = document.getElementById("passwordOne-el")
    copiedText = passwordOneEl.textContent
    navigator.clipboard.writeText(copiedText)
    alert("Copied Text: " + copiedText)
}

function copyToClipboard2(){
    let copiedText2 = document.getElementById("passwordTwo-el")
    copiedText2 = passwordTwoEl.textContent
    navigator.clipboard.writeText(copiedText2)
    alert("Copied Text: " + copiedText2)
}

button.addEventListener("click", generateRandomPasswordOne)
button.addEventListener("click", generateRandomPasswordTwo)
passwordOneEl.addEventListener("click", copyToClipboard)
passwordTwoEl.addEventListener("click", copyToClipboard2)


