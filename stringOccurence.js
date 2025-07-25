const s = "hello world";
const obj = {};

for (const char of s) {
  // Skip spaces
  if (char === " ") {
    continue;
  }

  // Check if character already exists in object
  if (obj[char]) {
    obj[char] += 1;
  } else {
    obj[char] = 1;
  }
}

console.log(obj);
