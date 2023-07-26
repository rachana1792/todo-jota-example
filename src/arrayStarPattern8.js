//  step1: initialize row as r
// step 2: initialize coloumn as c
// step 3 : initialize a string.
// step 4 : loop the rows
// step 5: loop the coloumns with value regarding row ie; j>i and initialize it as the c value.
// step 6: Concatinate string with " " in j loop 
//step 7: for printing stars insert a loop outside j and inside i. in regards to the value of i as  k < (i * 2) - 1
// step 8: check condition as (k === 0 || k === i * 2 - 2)
// step 9: if condition satisfies concatinate the string value inside the inner loop like, string+="*"
// step 10: else  concatinate the string value inside the inner loop like, string+=" "

// step 11: in the outer loop concatinate a new line to print the desired characters in next line.
// step 12: for printing second pyramid, loop the rows, for j comparison initialize i as 1
// step 13: loop the coloumns with value regarding row ie; j>i
// step 14: Concatinate string with " " in j loop 
//step 15: for printing stars insert a loop outside j and inside i. in regards to the value of i as   k < 2 * (r-i) - 1
// step 16: check condition as (k === 0 || k === 2 * (r-i) - 2)
// step 17: if condition satisfies concatinate the string value inside the inner loop like, string+="*"
// step 18: else  concatinate the string value inside the inner loop like, string+=" "
// step 19: inside k loop concatinate the string value inside the inner loop like, string+="*"
// step 20: in the outer loop concatinate a new line to print the desired characters in next line.
// step 21: console the string. 

//code
let r = 5;
let c=5;
let string = "";
for (let i = 1; i <= r; i++) {
  for (let j = c; j > i; j--) {
    string += " ";
  }
  for (let k = 0; k < (i * 2) - 1; k++) {
    if (k === 0 || k === i * 2 - 2) {
        string += "*";
      }
      else {
        string += " ";
      }
  }
  string += "\n";
}
for (let i = 1; i <= r - 1; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * (r-i) - 1; k++){
    if (k === 0 || k === 2 * (r-i) - 2) {
        string += "*";
      }
      else {
        string += " ";
      }
  }
  string += "\n";
}
console.log(string);