/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function hello(name) {
  const helloName = 'Ciao ' + name;
  return helloName;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(hello(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
