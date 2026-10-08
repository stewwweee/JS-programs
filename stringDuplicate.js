let str = "chris stewart";
let charCounts = {};
let duplicates = [];
let nonDuplicates = [];



// 1. Loop through the string to build the tally sheet
for(let i=0;i<str.length;i++){
  if(str[i] === " "){
    continue;
  }
  if(charCounts[str[i]]){
    charCounts[str[i]] += 1
  }else{
    charCounts[str[i]] =1;
  }
}
for(let key in charCounts){
  if(charCounts[key] > 1){
    duplicates.push(key)
  }
}
console.log(duplicates)
