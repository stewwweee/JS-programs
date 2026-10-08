let numb = [2, 3, 4, 46, 456, 47, 456, 7, 46, 8];
let prime = [];

for (let num of numb) {
  if (num < 2) continue; // 0 and 1 are not prime

  let isPrime = true;

  // Use <= for comparison (or i * i <= num for optimization)
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    prime.push(num);
  }
}

console.log(prime); // Output: [2, 3, 47, 7]
