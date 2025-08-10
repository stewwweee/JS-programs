const arr1 = [
  { id: 1, name: 'john' },
  { id: 2, name: 'jane' },
  { id: 3, name: 'john' }
];

let uniqueByName = arr1.filter((element, index) => 
arr1.findIndex(obj => obj.name === element.name) === index

);


console.log(uniqueByName);
