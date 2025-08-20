let str = "silent"
let str1 = "listen";
let arr1=[];
let arr2=[];
// This code checks if two strings are anagrams of each other
for(let i=0;i<str.length;i++){
    arr1.push(str[i])
}
// Convert the strings into arrays of characters
for(let j=0;j<str1.length;j++){
   arr2.push(str1[j]);
}
// Sort the arrays
for(let k =0;k<arr1.length;k++){
for(let l=0;l<arr1.length;l++){
    if(arr1[k]>arr1[l]){
        let temp =arr1[k];
        arr1[k]=arr1[l];
        arr1[l]=temp;
    }
}    
}
// Sort the second array
for(let k =0;k<arr2.length;k++){
for(let l=0;l<arr2.length;l++){
    if(arr2[k]>arr2[l]){
        let temp =arr2[k];
        arr2[k]=arr2[l];
        arr2[l]=temp;
    }
}    
}

// Initialize a flag to check if they are anagrams
let anagram = true;
// Compare the sorted arrays
if(arr1.length !== arr2.length){
    anagram = false
}
// If lengths are not equal, they cannot be anagrams
else{
    for(let i=0; i<arr1.length;i++){
        if(arr1[i] !==arr2[i]){
            anagram =false;
            break;
        }
    }
}
// If any character does not match, they are not anagrams
if(anagram){
    console.log("anagram")
}else{
    console.log("not an anagram")
}



