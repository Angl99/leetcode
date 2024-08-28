// problem: https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // input: int[] flowerbed, int n
    // output: return boolean if we can enter n amount of flowers into the flowerbed, false if we cannot or adj flowers
    // steps:
    // iterate through the array
    // create a count var to keep track of how many flowers we plant = n
    // check each position: if current = 0, prev = 0, next = 0

    let count = 0;
    //iterate
    for (let i = 0; i < flowerbed.length; i++) {
        //check if current is 0
        if (flowerbed[i] === 0) {
            // create prev and next variables
            let previous = flowerbed[i - 1] === 0 || i === 0;
            let next = flowerbed[i + 1] === 0 || i === flowerbed.length - 1;

            // check if previous and next elements are 0
            if (previous && next) {
                flowerbed[i] = 1;
                count++;
            }
        }
    } 
    // if count equals n or planted n flowers, return true
    return count >= n;
};