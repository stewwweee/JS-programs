let str = "chris stewart quality";
let charCount = {};
let result = '';
for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = charCount[str[i]] ? charCount[str[i]] + 1 : 1;
    if(charCount[str[i]] === 2) {
        result += str[i] + ' = ' + charCount[str[i]] + '\n';
        
    }
}
console.log("Second Occurrence of a Character:", result);
