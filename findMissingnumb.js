const numbers = [8, 3, 10, 2, 1, 6, 9, 4, 5,50]; // unsorted

// Step 1: Find min and max manually
let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

// Step 2: Find missing numbers manually
let missing = [];
for (let i = min; i <= max; i++) {
    let found = false;
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] === i) {
            found = true;
            break;
        }
    }
    if (!found) {
        missing.push(i);
    }
}

for(let i = 0; i < numbers.length - 1; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
        if(numbers[i] > numbers[j]) { // Swap if the current element is greater
            temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log("Sorted array:", numbers);
console.log("Missing numbers:", missing);


//with inbuilt functions
// for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
//   if (!numbers.includes(i)) missing.push(i);
// }