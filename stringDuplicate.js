let str = "chris stewart";
let duplicate = '';
let duplicateCount = 0;
let duplicates = {};
// let set = new Set(str);
// console.log([...set].join(''));

for (let char of str) {
    if (char !== ' ' && !duplicate.includes(char)) {
        duplicate += char;
    }
    else {
        if (char !== ' ') {
            if (!duplicates[char]) {
                duplicates[char] = 1;

            }
            duplicates[char]++;
            duplicateCount++;
        }
    }
}
console.log(`duplicate string is ${duplicate}`);
console.log("duplicate char is ", duplicates);
console.log(`duplicate count is ${duplicateCount}`);