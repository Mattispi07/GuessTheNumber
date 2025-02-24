// crea un numero casuale da 1 a 100
var numeroCasuale = Math.floor(Math.random() * 100) + 1;
var input = document.getElementById("guessField");
var result = document.getElementById("result");
var tentativi = document.getElementById("tentativi");
var i = 0;
// prendi il numero in input dall'index.html
function checkGuess() {
    var guess = parseInt(input.value);
    if (isNaN(guess)) {
        result.innerHTML = "ERRORE!!! Inserisci un numero!";
        result.style.color = "red";
    } else if (guess < 1 || guess > 100) {
        result.innerHTML = "ERRORE!!! Il numero deve essere compreso tra 1 e 100!";
        result.style.color = "red";
    } else if (guess < numeroCasuale) {
        result.innerHTML = "Il numero è troppo piccolo!";
        result.style.color = "lightBlue";
        tentativi.innerHTML = "Tentativi: " + i++;
    } else if (guess > numeroCasuale) {
        result.innerHTML = "Il numero è troppo grande!";
        result.style.color = "lightBlue";
        tentativi.innerHTML = "Tentativi: " + i++;
    } else {
        result.innerHTML = "Hai indovinato!";
        result.style.color = "lightGreen";
        input.disabled = true;
    }
}

function resetGame() {
    input.value = "";
    result.innerHTML = "";
    input.disabled = false;
    numeroCasuale = Math.floor(Math.random() * 100) + 1;
}