let str1 = "silent";
let str2 = "listen";

if(str1.length !== str2.length){
  console.log("its not anagram")
} else{
 let sort1 = str1.split("").sort().join("")
 let sort2 = str1.split("").sort().join("")
  if (sort1 === sort2) {
    console.log("It is an anagram!");
  } else {
    console.log("Not an anagram.");
  }
}

// without sort 
// let word1 = "silent";
// let word2 = "listen";
// let scorecard = {};
// let isAnagram = true;

// // 1. Add points for the first word
// for (let i = 0; i < word1.length; i++) {
//     let letter = word1[i];
//     // If the letter exists, add 1. Otherwise, treat it as 0 and add 1.
//     scorecard[letter] = (scorecard[letter] || 0) + 1;
// }

// // 2. Subtract points for the second word
// for (let i = 0; i < word2.length; i++) {
//     let letter = word2[i];
//     // If the letter exists, subtract 1. Otherwise, treat it as 0 and subtract 1.
//     scorecard[letter] = (scorecard[letter] || 0) - 1;
// }

// // 3. Check the final scores. If ANY letter does not equal 0, it's not an anagram.
// for (let key in scorecard) {
//     if (scorecard[key] !== 0) {
//         isAnagram = false;
//     }
// }

// console.log(isAnagram ? "It is an anagram!" : "Not an anagram.");

