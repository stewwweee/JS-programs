//make a 2d array into an object
let animals = [["animal", "cat"],["vehicle", "car"],["fruit", "apple"],["sports", "football"]];
let obj = {};
obj = Object.fromEntries(animals);
console.log(obj);