//  step1: initialize row as r
// step 2 : initialize a string.
// step 3 : loop the rows
// step 4: loop the coloumns with value regarding row ie; coloumn-i. 
// step 5: Concatinate string with " " in j loop 
//step 6: for printing stars insert a loop outside j and inside i. in regards to the value of i
// step 7: inside k loop check the condition as k < 2 * (r-i) - 1 concatinate the string value inside the inner loop like, string+="*" 
// step 8: in the outer loop concatinate a new line to print the desired characters in next line.
// step 9: console the string. 

//code
let r = 5;
let string = "";
for (let i = 0; i < r; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * (r-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);