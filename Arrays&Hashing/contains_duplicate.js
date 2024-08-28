/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/problems/contains-duplicate/
 */
var containsDuplicate = function(nums) {
    // input: int[] nums
    // output: return true if any value appears at least twice, return false if distinct

    let dupes = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (dupes.has(nums[i])) {
            return true;
        }
        dupes.add(nums[i])
    }
    return false;
};