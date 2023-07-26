//  step1: initialize row as r
// step 2: initialize coloumn as c
// step 3 : initialize a string.
// step 4 : loop the rows
// step 5: loop the coloumns with value regarding row ie; coloumn-i. 
// step 6: Concatinate string with " " in j loop 
//step 7: for printing stars insert a loop outside j and inside i. in regards to the value of i
// step 8: inside k loop concatinate the string value inside the inner loop like, string+="*"
// step 9: in the outer loop concatinate a new line to print the desired characters in next line.
// step 10: console the string. 

// code

let r=5
let c=5
let string = ""
for(let i=1;i<=r;i++){
    for(let j=0;j<c-i;j++){
       
            string+=" "      
    }
    for (let k = 0; k < i; k++) {
        string += "*";
      }
      
    string+="\n"
}

console.log(string);