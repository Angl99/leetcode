// problem: https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // input: string s, ex: s = "hello"
    // output: return the string with only the vowels reversed, ex: "holle"
    // split s to array, 
    // create vowels var to check against, 
    // iterate to check if start and end is a vowel, 
    // if so reverse it by changing their indecies,
    // join the array at the end into a string

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let arr = s.split("");
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        // Move start pointer to the right until a vowel is found
        while (start < end && !vowels.includes(arr[start])) {
            start++;
        }
        // Move end pointer to the left until a vowel is found
        while (start < end && !vowels.includes(arr[end])) {
            end--;
        }

        // Swap the vowels
        if (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    return arr.join("");
};