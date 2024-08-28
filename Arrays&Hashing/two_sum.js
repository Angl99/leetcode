/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum/
 */
var twoSum = function(nums, target) {
    // input: nums[int], target
    // output: return indecies of the two numbers that add up to target
    // constraints: each input would have exactly one solution, cannot use the same element twice

    // create a hashmap to keep track of values 
    // iterate through nums
    // create a compliment variable that contains target - current value to check against the hashmap
    // if the compliment has been seen in the hashmap, return the indecies of the current value and the compliment
    // else add the current value to the hashmap

    const output = new Map();

    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if (output.has(compliment)){
            return [i, output.get(compliment)];
        }
        // make sure to get value: index in map
        output.set(nums[i], i);
    }
    return false;
}
