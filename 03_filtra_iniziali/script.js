/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function initialFilter(stringArray, initial) {
  const filteredNames = [];
  for (let i = 0; i < names.length; i++) {
    const currentInitial = stringArray[i].toLowerCase();
    if (currentInitial[0] === initial.toLowerCase()) {
      filteredNames.push(stringArray[i]);
    }
  }
  return filteredNames;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(initialFilter(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]