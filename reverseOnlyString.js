let str = "Deloitte 2026";
let reversedLetters = '';
let normalNumbers = '';

for (let i = 0; i < str.length; i++) {
  if (isNaN(str[i])) {
    // It's a letter. By putting str[i] FIRST, it naturally reverses the word!
    // 'D' -> 'e' + 'D' -> 'l' + 'eD' -> 'o' + 'leD'
    reversedLetters = str[i] + reversedLetters; 
  } else {
    // It's a number. Add it to the end normally.
    normalNumbers += str[i];
  }
}

let result = reversedLetters + normalNumbers;
console.log(result); // Output: ettioleD2026
