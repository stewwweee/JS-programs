//merge array into one array and should not have duplicates without any inbuilt functions
let a =[1,2,3,4]
let b =[2,3,4,5]
let mergedArray = [];
//  mergedArray = [...a, ...b];
//  console.log(mergedArray); // Output: [1, 2, 3, 4, 2, 3, 4, 5]

//  let dup = mergedArray.filter((element , value,array )=>{
//     return array.indexOf(element) === value;
//  })
//  console.log(dup); // Output: [1, 2, 3, 4, 5]

for (let i = 0; i < a.length; i++) {
    mergedArray.push(a[i]);
   // Output: [1, 2, 3, 4]
}
for (let j = 0; j < b.length; j++) {
    let isDuplicate = false;
    for (let k = 0; k < mergedArray.length; k++) {
        if (b[j] === mergedArray[k]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        mergedArray.push(b[j]);
    }
}
console.log(mergedArray); // Output: [1, 2, 3, 4, 5]


