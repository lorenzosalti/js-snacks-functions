/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const userName = 'Mario';

const systemDate = new Date();
const time = systemDate.getHours();

// Dichiara la funzione qui.

function helloTime(name) {
  let helloName = '';
  if (time >= 13 && time < 17) {
    helloName = 'Buon pomeriggio ' + name;
  } else if (time < 13) {
    helloName = 'Buongiorno ' + name;
  } else {
    helloName = 'Buonasera ' + name;
  }
  return helloName;
}



// Invoca la funzione qui e stampa il risultato in console

console.log(helloTime(userName));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.