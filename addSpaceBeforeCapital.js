let str = "MyNameIsChrisStewart";
let modifiedStr = "";
let len = str.length;
for (let i =0; i<len; i++){
  if(i===0){
    modifiedStr+=str[i];
  }
  else if (/[A-Z]/.test(str[i])){
    modifiedStr += " " + str[i];
  }  
  else{
    modifiedStr+=str[i];
  }
}
console.log(modifiedStr)


// output: My Name Is Chris Stewart
