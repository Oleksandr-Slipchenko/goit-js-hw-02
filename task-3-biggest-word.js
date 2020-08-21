// УСЛОВИЕ //

// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром
// произвольную строку(в строке будут только слова и пробелы) и возвращает самое
// длинное слово в этой строке.

// РЕШЕНИЕ //

// ВАРИАНТ 1 //

// function findLongestWord(string = '') {
// Write code under this line
// let stringArray = string.split(' ');
// let longestWord = stringArray[0];

// for (const word of stringArray) {
//   const isLongest = word.length > longestWord.length;

//   if (isLongest) {
//     longestWord = word;
//   }
// }
// return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // ('jumped');

// console.log(findLongestWord('Google do a roll'));
// // 'Google'

// console.log(findLongestWord('May the force be with you'));
// // 'force'

// ВАРИАНТ 2 //

function findLongestWord(string = '') {
  // Write code under this line
  let stringArray = string.split(' ');
  let longestWord = stringArray[0];

  for (let i = 0; i < stringArray.length; i += 1) {
    const word = stringArray[i];

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// ('jumped');

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
