let numbers = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 9, 0, 0];
let result = [];
let duplicates = [];
for (let i = 0; i < numbers.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
        if (numbers[i] === result[j]) {
            isDuplicate = true;
        }
    }

    if (!isDuplicate) {
        result.push(numbers[i]);
    } else if (!duplicates.includes(numbers[i])) {
        duplicates.push(numbers[i]);
    }
}
console.log("Unique Numbers:", result);
console.log("Duplicate Numbers:", duplicates);