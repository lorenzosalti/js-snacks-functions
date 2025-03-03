/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

const vowels = ['a', 'e', 'i', 'o', 'u'];

// Dichiara la funzione qui.

function vowelsNum(word) {
  let result = 0;
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    let isVowel = false;
    for (let index = 0; index < vowels.length; index++) {
      if (word[i] === vowels[index]) isVowel = true;
    }
    if (isVowel) result++;
  }
  return result;
}

// versione arrow function
// const vowelsNum = (word) => {
//   let result = 0;
//   word = word.toLowerCase();
//   for (let i = 0; i < word.length; i++) {
//     let isVowel = false;
//     for (let index = 0; index < vowels.length; index++) {
//       if (word[i] === vowels[index]) isVowel = true;
//     }
//     if (isVowel) result++;
//   }
//   return result;
// }

// Invoca la funzione qui e stampa il risultato in console

console.log(vowelsNum(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)