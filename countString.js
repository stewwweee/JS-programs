let a = "chris stewart";
let count = {};

for (let i = 0; i < a.length; i++) {
    if (a[i] !== " ") { // Ignore spaces
        if (count[a[i]]) {
            count[a[i]]++; // Increase count if character exists
        } else {
            count[a[i]] = 1; // Initialize count if character is new
        }
    }
}

// Print results
for (let key in count) {
    console.log(key + " : " + count[key]);
}
