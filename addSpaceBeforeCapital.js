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
//==============================================
let str = "MyNameIsChrisStewart";
let str1 = " ";
const isUpperCase = str => str !== str.toUpperCase();
for (let i=0; i<str.length;i++){
  if(i===0){
    str1+=str[i]
  }
  else if (str[i] === str[i].toUpperCase()){
    str1 += " " + str[i]
  }
  else{
    str1+=str[i]
  }
}
console.log(str1)
