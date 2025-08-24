let str = "programming";
let result = ''

for(let i=0;i<str.length;i++){
  if(i===4|| i ===6 || i ===10){
   continue;
  }
  result += str[i]
}
console.log(result)

//output: progamin