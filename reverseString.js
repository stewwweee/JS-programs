let str = "hellow world";
let reversedStr = "";
let reversedStr1 = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

let strReverse = reversedStr;
for (let i=0;i<str.length;i++){
    reversedStr1 += str[i];
}
let strReverse1 = reversedStr1;
if(strReverse === strReverse1){
    console.log(str, "is a palindrome");
}else{
    console.log(str, "is not a palindrome");
}

