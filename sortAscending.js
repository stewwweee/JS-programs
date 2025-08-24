let a = [12, 34, 56, 25, 87, 35, 76]; 
let temp;

// Ascending order sorting (Bubble Sort)
for(let i = 0; i < a.length - 1; i++) {
    for(let j = i + 1; j < a.length; j++) {
        if(a[i] > a[j]) { // Swap if the current element is greater
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}

console.log("Ascending Order:", a); // [ 12, 25, 34, 35, 56, 76, 87 ]

// Descending order sorting (reverse the sorted array)
for(let i = 0; i < a.length - 1; i++) {
    for(let j = i + 1; j < a.length; j++) {
        if(a[i] < a[j]) { // Swap if the current element is smaller
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}

console.log("Descending Order:", a); // [ 87, 76, 56, 35, 34, 25, 12 ]


// // You can also use built-in sort method for simplicity
// let b = [12, 34, 56, 25, 87, 35, 76];
// b.sort((x, y) => x - y); // Ascending order
// console.log("Ascending Order using sort():", b); // [ 12, 25, 34, 35, 56, 76, 87 ]
// b.sort((x, y) => y - x); // Descending order
// console.log("Descending Order using sort():", b); // [ 87, 76, 56, 35, 34, 25, 12 ]
