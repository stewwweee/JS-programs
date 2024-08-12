let a = "devaid".toLowerCase();
let b = a.replace(/[^a-zA-Z0-0]/g,"").split("").reverse().join("");
console.log(b);
if (a===b){
    console.log(a, "is a palindrome");
}else {
    console.log(a , "is not a a palindrome");
}