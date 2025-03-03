/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function initials(namesArray) {
  const initials = [];
  for (let i = 0; i < names.length; i++) {
    initials.push((namesArray[i])[0]);
  }
  return initials;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(initials(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]