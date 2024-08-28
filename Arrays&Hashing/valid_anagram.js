/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * https://leetcode.com/problems/valid-anagram/
 */
var isAnagram = function(s, t) {
    // input: string s, t
    // output: return true if t is an anagram of s, return false
    // create a new variables that split, sort, and join t & s
    // compare t to s 
    // return true if anagram else false
    // edge out most cases by comparing length of t to s and if unequal return false

    if (t.length !== s.length) {
        return false;
    }

    // separates each individual letter, sorts by unicode value, then rejoins the string
    let sortS = s.split('').sort().join('');
    let sortT = t.split('').sort().join('');

    if (sortS === sortT) {
        return true;
    } else {
        return false;
    }
};

// Simpler Approach
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // input: string s, t
    // output: return true if t is an anagram of s, otherwise false
 
    sortedS = s.split("").sort().join("")
    sortedT = t.split("").sort().join("")
 
    return sortedS === sortedT
};

// Optimal Approach
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // input: string s, t
    // output: return true if t is an anagram of s, otherwise false
    //iterate through each string, count the occurance of each char, then compare them
 
     let map = {};
 
     if (s.length !== t.length) {
        return false;
    }
 
 // Count the frequency of each character in string s
   for (let i = 0; i < s.length; i++) {
     let letter = s[i];
 
     // If the character is not in the map, initialize it with a count of 1
     if (!map[letter]) {
         map[letter] = 1;
     } else {
         // If the character is already in the map, increment its count
         map[letter]++
     }
   }
 
 // Check the characters in string t against the map
   for (let i = 0; i < t.length; i++) {
     let letter = t[i];
 
 // If the character is not found in the map or its count is zero, return false
     if (map[letter] === undefined || map[letter] < 1) {
         return false;
     }
     map[letter]--;
   }
   return true;
 };