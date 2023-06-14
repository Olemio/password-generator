const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let passwordLength = 15

let customLengthEl = document.getElementById("custom-length-el")

function buttonPressed() {
    password1El.textContent = generatePasswords()
    password2El.textContent = generatePasswords()
}

function generatePasswords() {
    let passwordArray = ""
    if (customLengthEl.value) {
        passwordLength = customLengthEl.value
    }
    for (i = 0; i < passwordLength; i++){
        let randomIndex = Math.floor( Math.random() * characters.length)
        passwordArray += (characters[randomIndex])
    }
    return passwordArray
}