/*************************
*****Campo Minato semplice
*************************/


// BONUS:
// all'inizio il software richiede anche una difficoltà all'utente
//che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var level = parseInt( prompt('Scegli livello : \n 0 (Facile)\n 1 (Medio)\n 2 (Difficile)'));

numberBombs = 16;
numberMax = '';

switch (level) {
  case 0:
    numberBombs = 16;
    numberMin = 1;
    numberMax = 100;
    level = 'Facile';
    break;
  case 1:
    numberBombs = 16;
    numberMin = 1;
    numberMax = 80;
    level = 'Medio';
    break;
  case 2:
    numberBombs = 16;
    numberMin = 1;
    numberMax = 50;
    level = 'Difficile';
}


// Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
var randNumber = [];
var user = []; // per inserire dati utente
var size = 16;

// // Uso la funzione personalizzata
var numBomb = getRandom( numberMin, numberMax);

// I numeri non possono essere duplicati
while (randNumber.length < size) {
  var numBomb = getRandom( numberMin, numberMax);

  if (! randNumber.includes(numBomb)) {
    randNumber.push(numBomb);
  }
}
console.log(randNumber);

// possibilità utente
var userNumber = numberMax - numberBombs;


// In seguito deve chiedere all'utente (100 - 16) volte
// di inserire un numero alla volta, sempre compreso tra 1 e 100.

for (var i = 0; i < userNumber; i++) {
  var insertNumber = parseInt( prompt('inserisci un numero tra: ' + numberMin + ' e ' + numberMax));

  while (user.includes(insertNumber) || isNaN(insertNumber) || insertNumber < numberMin || insertNumber > numberMax ) {
      insertNumber = parseInt( prompt('inserisci un numero valido da tra: ' + numberMin + ' e ' + numberMax));
  }
  user.push(insertNumber);

  if (! randNumber.includes(insertNumber)) { //verifico che non c'è un numero bomba qui dentro
    console.log('numero valido, continua');
  }
  else {
    console.log('numero non valido');
    alert('Hai perso');
    document.getElementById('text').innerHTML = 'Hai perso';
    break;
  }
}

if (userNumber == user.length) {
  console.log('Hai vinto');
  alert('Hai vinto');
  document.getElementById('text').innerHTML = 'Hai vinto';
}

// Risultato finale:
document.getElementById('level').innerHTML = 'Livello di difficoltà scelto: ' + level;
document.getElementById('tentativi').innerHTML = 'Lista numeri inseriti: ' + user;
document.getElementById('numeri-bomba').innerHTML = 'Numeri bomba: '+ randNumber;


// Generatore numeri random con una funzione
function  getRandom(min, max) {
    return Math.floor( Math.random() * (max - min + 1 ) ) + min;
}