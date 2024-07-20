strs = [];
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // input: strs
        // output: encoded string
        // take list of strings and combine entire string using some sort of "encoding"

        if (strs === null || strs.length === 0){
            return []
        }
        else {
            return strs.join(",");
        }
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === null || str.length === 0) {
            return [];
        } else {
            return str.split(","); 
        }
    }
}


const solution = new Solution();
// Encode the array of strings
const encodedStrs = solution.encode(strs);
console.log("Encoded:", encodedStrs);

// Decode the encoded string back to an array of strings
const decodedStrs = solution.decode(encodedStrs);
console.log("Decoded:", decodedStrs);