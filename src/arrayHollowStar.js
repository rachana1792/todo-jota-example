//  step1: initialize row as r
// step 2: initialize coloumn as c
// step 3 : initialize a string.
// step 4 : loop the rows
// step 5: loop the coloumns
//step 6: give a condition to check for 1st and last element like (i==0 || i==n-1) & (j==0 || j==n-1)
// step 7: if condition satisfies concatinate the string value inside the inner loop like, string+="*"
// step 8: else concatinate the string with "".
// step 9: in the outer loop concatinate a new line to print the desired characters in next line.
// step 10: console the string. 

// code

let r=5
let c=5
let string = ""
for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
        if(i===0 || i===r-1||j===0 || j===c-1){
            string+="*"
        } 
        else{
                string+=" "
            }
        
      
    }
    string+="\n"
}

console.log(string);