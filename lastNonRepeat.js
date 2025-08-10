//find the last non-repeating character in a string
let str="chris stewart";
let lastNonRepeat = '';
let charCount = {};
for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = charCount[str[i]]?charCount[str[i]]+1:1

}
for (let i = str.length - 1; i >= 0; i--) {
    if (charCount[str[i]] === 1) {
        lastNonRepeat = str[i];
        break;
    }
}
console.log("Last Non-Repeating Character:", lastNonRepeat);

