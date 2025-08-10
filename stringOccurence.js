const s = "chris stewart quality";
const obj = {};

for (const char of s) {
  // Skip spaces
  if (char === " ") {
    continue;
  }

if (obj[char]) {  
    obj[char] += 1;
  }
else {
    obj[char] = 1;
  }
}

console.log(obj);
