//find duplicate characters in a string
let str = "chris stewart";
let result = '';
let duplicates = '';

for (let i = 0; i < str.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
        if (str[i] === result[j]) {
            isDuplicate = true;
        }
    }

    if (!isDuplicate) {
        result += str[i];
    } else if (!duplicates.includes(str[i])) {
        duplicates += str[i];
    }
}
console.log(result);
console.log(duplicates);
