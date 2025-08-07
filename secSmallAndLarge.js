let arr = [5, 8, 3, 7, 9, 23, 85, -24, 16, 94, 93, -25];

let min = arr[0];
let max = arr[0];
let secLarge = arr[0];
let secSmall = arr[0];

for (let i = 0; i < arr.length; i++) {
    // Update max and second largest
    if (arr[i] > max) {
        secLarge = max;
        max = arr[i];
    } else if (arr[i] > secLarge && arr[i] !== max) {
        secLarge = arr[i];
    } 

    // Update min and second smallest
    if (arr[i] < min) {
        secSmall = min;
        min = arr[i];
    } else if (arr[i] < secSmall && arr[i] !== min) {
        secSmall = arr[i];
    }
}
console.log("Largest:", max);
console.log("Smallest:", min);
console.log("Second Largest:", secLarge);
console.log("Second Smallest:", secSmall);


