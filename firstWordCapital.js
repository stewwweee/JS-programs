//output: "Chris Stewart Is My Name" without inbuilt functions

let myName = "chris stewart is my name";
let result = "";
for (let i = 0; i < myName.length; i++) {
    if (i === 0 || myName[i -1] === ' ') {
        result += myName[i].toUpperCase();
    } else {
        result += myName[i];
    }
}
console.log(result);

