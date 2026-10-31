let str = "chris stewart quality";
let char = {};
let result = '';

for(let i=0;i<str.length;i++){
  let currentLetter = str[i];

char[currentLetter] = (char[currentLetter] || 0) + 1  

  if(char[currentLetter] === 2){
    result += currentLetter
    break;
  }
}

console.log(result)
