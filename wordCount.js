//find the no. of words count in a string
let word ="chris stewart";
let wordCount = 0;
for(let i = 0; i < word.length; i++){
   
    if(word[i] === " "){
        continue;
    }
    console.log(word[i]);
    wordCount++;
}
 // Output: 2
console.log(wordCount); // Output: 12
