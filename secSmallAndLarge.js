let arr = [5,8,3,7,9,23,85,-24];
let min = arr[0];
let max = arr[0];
let secLarge = arr[0];
let secSmall = arr[0];

for (let i=0;i<arr.length;i++){
  
    if (arr[i] > max){
        max = arr[i]
    }
    if (arr[i] < min){
        min = arr[i];
    }
}
for (let i=0;i<arr.length;i++){
      if (arr[i] < max && arr[i] > secLarge){
          secLarge = arr[i];
      }
      if (arr[i] > min && arr[i] < secSmall){
          secSmall = arr[i];
      }
}

console.log(secLarge);
console.log(secSmall);