//merge two objects into one object and should not have duplicates without any inbuilt functions
let mergedObject = {};
let a = { a: 1, b: "2", c: 3 };
let b = { b: 2, c: "3", d: 4 };
// mergedObject = { ...a, ...b };
// console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

Object.assign(mergedObject, a, b);

// for (let key in b) {
//     let isDuplicate = false;
//     for (let k in mergedObject) {
//         if (key === k) {
//             isDuplicate = true;
//             break;
//         }
//     }
//     if (!isDuplicate) {
//         mergedObject[key] = b[key];
//     }
// }
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }    
