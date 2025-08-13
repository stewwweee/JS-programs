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

//step:2 
// let char = myName.split(" ")

// let results = char.map((element)=>{
//    return element.charAt(0).toUpperCase() + element.slice(1)
// }).join(" ");
// console.log(results)