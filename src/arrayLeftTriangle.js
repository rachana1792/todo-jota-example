//  step 1: initialize row as r
// step 2 : initialize a string.
// step 3 : loop the rows
// step 4: loop the coloumns in repect to rows.
// step 5: Concatinate the string value inside the inner loop like, string+="*"
// step 6: in the outer loop concatinate a new line to print the desired characters in next line.
// step 7: console the string. 

// code

let r=5
let string = "";
for (let i = 1; i <= r; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);