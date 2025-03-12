let a = "chris stewart";
let results='';
let results1 = '';
for(let i =0;i<a.length; i++){
    let isDuplicate = false;
    for(let j=0;j<results.length; j++){
        if(a[i]===results[j]){
         isDuplicate = true;
    }
    }
    if(!isDuplicate){
       results += a[i];
    }
    else{
          let isReplaced = false
        for(let k=0; k<results1.length; k++){
         
            if(results1[k] === a[i]){
                isReplaced = true;
            }
        }
        if(!isReplaced){
            results1 += a[i];
        }
    }
}
console.log(results);
console.log(results1);