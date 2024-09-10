/**
 A password string, pwd, consists of binary characters (Os and 1s). A cyber security expert is trying to determine the minimum number of changes required to make the password secure. 
 To do so, it must be divided into substrings of non-overlapping, even length substrings. Eact substring can only contain 1s or Os, not a mix. This helps to ensure that the password is strong and less vulnerable to hacking attacks. 
 Find the minimum number of characters that must be flipped in the password string, i.e. changed from 0 to 1 or 1 to 0 to allow the string to be divided as described. 

 * @param {string} pwd
 * @return {int}  minimum number of characters that must be flipped
*/

//  pwd = "1110011000"
var securePass = function(pwd) {
  // Determine the minimum number of changes to make a password secure
  // Divide the string into even-length non-overlapping substrings
  // Each substring can only contain 1s or 0s
  
  let changes = 0;
  
  for (let i = 0; i < pwd.length; i += 2) {
    if (i + 1 < pwd.length) {
      // If we have a pair and they're different, we need to change one
      if (pwd[i] !== pwd[i + 1]) {
        changes++;
      }
    } else {
      // If we have a single character at the end, we need to change it
      changes++;
    }
  }
  
  return changes;
}

console.log(securePass("110010101")); // Should return 3
console.log(securePass("1100")); // Should return 0
console.log(securePass("10")); // Should return 1
console.log(securePass("1111")); // Should return 0
console.log(securePass("01010101")); // Should return 4


  