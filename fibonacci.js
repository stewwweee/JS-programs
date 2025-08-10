//find the fibonacci number 
// let fibonacci = (n) => {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(10)); // Output: 55

//step2:
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}
console.log(fibonacci(10)); // Output: 55

 
//step3:

function fibonacciRecursive(n) {
  // Base cases:
  // The 0th Fibonacci number is 0
  if (n === 0) {
    return 0;
  }
  // The 1st Fibonacci number is 1
  if (n === 1) {
    return 1;
  }
  // Recursive case:
  // The nth Fibonacci number is the sum of the (n-1)th and (n-2)th Fibonacci numbers
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10));