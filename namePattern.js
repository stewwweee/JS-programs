//c*h**r***i****s****** 
//c*h$$r***i$$$$s******
let nam = "chris";
let result = ""; // Start with //
for(let i=0;i< nam.length;i++){
    result += nam[i]; // add character
    for(let j=0;j<i;j++){ // add i stars after each character
        if(i % 2 === 0) {
            result += "*"; // add * for even index
        }   
        else {
            result += "$"; // add $ for odd index
        }
    }
}
console.log(result);
