sayHello(); // Outputs: "Hello!"

function sayHello() {
  console.log("Hello!");
}

console.log(name1); // Outputs: undefined
var name1 = "John";
console.log(name1); // Outputs: "John"

console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;