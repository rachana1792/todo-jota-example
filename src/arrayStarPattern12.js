//  step1: initialize row as r and c
// step 2 : initialize a string.
// step 3 : loop the rows as (let i = r / 2; i < r; i += 2)
// step 4: loop the coloumns with 4 iterations for the top of heart. for both sides 2 j loops for space and star. 
// step 5: 1st j loop  (let j = 1; j < c - i; j += 2) 
// step 6: 2nd j loop  (let j = 1; j < i + 1; j++)
// step 7: 3rd j loop (let j = 1; j < c - i + 1; j++)
// step 8: 4th j loop (let j = 1; j < i + 1; j++)
// step 9: in the outer loop concatinate a new line to print the desired characters in next line.
// step 10 : for second part of heart loop the rows
// step 11: loop the coloumns with value regarding row ie; coloumn-i. 
// step 12: Concatinate string with " " in j loop 
//step 13: for printing stars insert a loop outside j and inside i. in regards to the value of i
// step 14: inside k loop check the condition as k < 2 * (r-i) - 1 concatinate the string value inside the inner loop like, string+="*" 
// step 15: in the outer loop concatinate a new line to print the desired characters in next line.
// step 16: console the string. 

//code
 
let c = 6;
let r = 6;

let string = "";

for (let i = r / 2; i < r; i += 2) {
  for (let j = 1; j < c - i; j += 2) {
    string += " ";
  }
  for (let j = 1; j < i + 1; j++) {
    string += "*";
  }
  for (let j = 1; j < c - i + 1; j++) {
    string += " ";
  }
  for (let j = 1; j < i + 1; j++) {
    string += "*";
  }
  string += "\n";
}
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