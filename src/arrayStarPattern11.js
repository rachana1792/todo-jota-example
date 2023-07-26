//  step1: initialize row as r and c
// step 2 : initialize a string.
// step 3 : loop the rows
// step 4: loop the coloumns with value regarding row ie; c-i. 
// step 5: Concatinate string with " " in j loop 
//step 6: for printing stars insert a loop outside j and inside i as k. in regards to the value of i
// step 7: inside k loop  concatinate the string value inside the inner loop like, string+="*" 
// step 8: in the outer loop concatinate a new line to print the desired characters in next line.
// step 3 : for second half, loop the rows and comaprison statement as i<=r-1
// step 4: loop the coloumns with value regarding row  
// step 5: Concatinate string with " " in j loop 
//step 6: for printing stars insert a loop outside j and inside i. in regards to the value of k < r - i
// step 7: inside k loop concatinate the string value inside the inner loop like, string+="*" 
// step 8: in the outer loop concatinate a new line to print the desired characters in next line.
// step 9: console the string. 

//code
 
let r = 5;
let c = 5;

let string = "";
for (let i = 1; i <= r; i++) {
    for (let j = 0; j < c - i; j++) {
      string += " ";
    }
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  for (let i = 1; i <= r - 1; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    for (let k = 0; k < r - i; k++) {
      string += "*";
    }
    string += "\n";
  }
console.log(string);