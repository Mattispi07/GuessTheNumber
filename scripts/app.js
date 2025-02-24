// crea un numero casuale da 1 a 100
var numeroCasuale = Math.floor(Math.random() * 100) + 1;
var input = document.getElementById("guessField");
var result = document.getElementById("result");
var tentativi = document.getElementById("tentativi");
var bestRecord = document.getElementById("best-record");
var i = 1; // Inizializza a 1
var best = Infinity;
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
        console.log(i);
        i += 1;
        tentativi.innerHTML = "Attempts: " + i;
    } else if (guess > numeroCasuale) {
        result.innerHTML = "Il numero è troppo grande!";
        result.style.color = "lightBlue";
        i += 1;
        console.log(i);
        tentativi.innerHTML = "Attempts: " + i;
    } else {
        result.innerHTML = "Hai indovinato!";
        result.style.color = "lightGreen";
        input.disabled = true;
        if(i < best){
            best = i;
            bestRecord.innerHTML = "BestRecord: " + best;
        }
    }
}

function resetGame() {
    input.value = "";
    result.innerHTML = "";
    input.disabled = false;
    numeroCasuale = Math.floor(Math.random() * 100) + 1;
    i = 1; // Resetta il conteggio dei tentativi
    tentativi.innerHTML = "Tentativi: " + i;
}
