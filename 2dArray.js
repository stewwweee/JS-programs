//make a 2d array into an object
let animals = [["animal", "cat"],["vehicle", "car"],["fruit", "apple"],["sports", "football"]];
let obj = {};
for (let i = 0; i < animals.length; i++) {
    let key = animals[i][0];
    let value = animals[i][1];
    obj[key] = value;
}
console.log(obj);
Object.fromEntries(animals); // Alternative way to convert 2D array to object
for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}
for(let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
