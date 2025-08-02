let primes = [];
let numbers = [2,4,64,23,65,23,16,45,89,76,13];
for (let num of numbers) {
    let isPrime = true;
    for (let j = 2; j <= num/2; j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(num);
    }
}

console.log(primes);
