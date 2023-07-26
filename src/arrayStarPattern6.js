//  step1: initialize row as r
// step 2: initialize coloumn as c
// step 3 : initialize a string.
// step 4 : loop the rows
// step 5: loop the coloumns with value regarding row ie; coloumn-i. 
// step 6: Concatinate string with " " in j loop 
//step 7: for printing stars insert a loop outside j and inside i. in regards to the value of i
// step 8: inside k loop check the condition(i === 1 || i === r||k === 0 || k === 2 * i - 2).
// step 9:  If condition satisfies concatinate the string value inside the inner loop like, string+="*"
// step 10:  Else concatinate the string value inside the inner loop with, string+=" "
// step 11: in the outer loop concatinate a new line to print the desired characters in next line.
// step 12: console the string. 

//code
let r = 5;
let c= 5
let string = "";

for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= c - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === r||k === 0 || k === 2 * i - 2) {
      string += "*";
    }
      else {
        string += " ";
      }
  }
  string += "\n";
}
console.log(string);