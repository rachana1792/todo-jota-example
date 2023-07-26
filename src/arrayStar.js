//  step1: initialize row as r
// step 2: initialize coloumn as c
// step 3 : initialize a string.
// step 4 : loop the rows
// step 5: loop the coloumns
// step 6: concatinate the string value inside the inner loop like, string+="*"
// step 7: in the outer loop concatinate a new line to print the desired characters in next line.
// step 8: console the string. 

// code

let r=5
let c=5
let string = ""
for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
        string+="*"
    }
    string+="\n"
}

console.log(string);