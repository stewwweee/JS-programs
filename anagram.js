let str1 = "silent";
let str2 = "listen";

if(str1.length !== str2.length){
  console.log("its not anagram")
} else{
 let sort1 = str1.split("").sort().join("")
 let sort2 = str1.split("").sort().join("")
  if (sort1 === sort2) {
    console.log("It is an anagram!");
  } else {
    console.log("Not an anagram.");
  }
}

