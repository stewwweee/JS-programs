let arr = [5,8,3,7,9,23,85,-24];
let min = arr[0];
let max = arr[0];
let secLarge = arr[0];
let secSmall = arr[0];

for (let i=0;i<arr.length;i++){
  
    if (arr[i] > max){
        secLarge = max; // Update second largest before changing max
        max = arr[i]
    }
    if (arr[i] < min){
        secSmall = min; // Update second smallest before changing min
        min = arr[i];
    }
}


console.log(secLarge);
console.log(secSmall);