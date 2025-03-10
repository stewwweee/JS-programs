let a = "chris StEwart";
let vowels = "aeiou";

for (let i = 0; i < a.length; i++) {  // Fixed "lenght" to "length"
    let char = a[i].toLowerCase();   // Convert to lowercase for case-insensitive comparison
    for (let j = 0; j < vowels.length; j++) {
        if (char === vowels[j]) {   // Fixed assignment to comparison
            console.log(`Vowel found: ${char}`);
        }
    }
}
