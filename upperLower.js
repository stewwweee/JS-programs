// covert uppercase to lowercase and vice versa
let str = "Hello World!";
let upperLower = str.split('').map((char) => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join('');
console.log(upperLower); // Outputs: "hELLO wORLD!"