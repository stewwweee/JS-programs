let str = "chris stewart";
let charCounts = {};
let duplicates = [];
let nonDuplicates = [];
let dupIndex = 0; // Manual tracker to avoid using the inbuilt .push() method

// 1. Loop through the string to build the tally sheet
for (let i = 0; i < str.length; i++) {
  let char = str[i];

  // Ignore spaces so we only count actual letters
  if (char === ' ') {
    continue; 
  }

  // If the letter is already on the tally sheet, increase its score
  if (charCounts[char]) {
    charCounts[char] += 1;
  } else {
    // If it's not on the sheet yet, add it with a score of 1
    charCounts[char] = 1;
  }
}

// 2. Loop through the finished tally sheet to find the duplicates
for (let key in charCounts) {
  
  // If a letter appeared more than once, it's a duplicate
  if (charCounts[key] > 1) {
    duplicates.push(key) // Assign manually without .push()
    dupIndex += 1;                 // Move our manual index forward
  }
  else{
    nonDuplicates.push(key)
  }
}


console.log(duplicates); // Output: [ 'r', 's', 't' ]
console.log(nonDuplicates)
