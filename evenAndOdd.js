// let result = [];
// let even = [];
// let odd = [];
// for(let i = 0; i < 100; i++){
//     if(i % 2 === 0){
//         even.push(i);
//     } else {
//         odd.push(i);
//     }
// }
// result.push(even);
// result.push(odd);
// console.log(result);

//only with + and - operators and without using any other operators
//find even and odd numbers from 0 to 100
let even = [];
let odd = [];

let i = 0;
while (i <= 100) {
    even.push(i);
    i = i + 2;
}

i = 1;
while (i <= 100) {
    odd.push(i);
    i = i + 2;
}

console.log("Even numbers:", even);
console.log("Odd numbers:", odd);

    
