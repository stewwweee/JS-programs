let str = "racecar1";
// Clean the string to handle case-insensitivity and ignore spaces if needed
let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

// 1. Manually build a frequency map using a loop
let charCounts = {};
for (let i = 0; i < cleanStr.length; i++) {
  let char = cleanStr[i];
  if (charCounts[char]) {
    charCounts[char]++;
  } else {
    charCounts[char] = 1;
  }
}

// 2. Count how many characters have an odd frequency
let oddCount = 0;
for (let char in charCounts) {
  if (charCounts[char] % 2 !== 0) {
    oddCount++;
  }
}

// 3. Conditional check similar to your if-else block
if (oddCount <= 1) {
  console.log(`"${str}" is a permutation of a palindrome.`);
} else {
  console.log(`"${str}" cannot form a palindrome.`);
}
