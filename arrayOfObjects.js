const arr1 = [
  { name: 'Login test', status: 'Pass' },
  { name: 'signup test', status: 'fail' },
  { name: 'checkout test', status: 'Passed' },
  { name: 'search test', status: 'FAILED' },
  { name: 'cart test', status: 'PASS' }
];

let results =arr1.map((element)=> {
    const status = element.status.toUpperCase().includes('PASS')?'PASS':'FAIL'
    console.log(status)
    return { name: element.name, status}
})

const summary = [{
    pass: results.filter(count => count.status === 'PASS').length,
    fail: results.filter(count => count.status === 'FAIL').length
}]

console.log(summary)
console.log(results);