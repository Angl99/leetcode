/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var nums = [3,0,1,0];
var k = 1;
var topKFrequent = function(nums, k) {
    // input: int [nums], int k
    // ouput: return the k most freq elements

    // create a new hashmap that keeps track of the most freq elements
    // the elements as keys and the count of how often they occur as values
    // iterate through nums
    // if map has the current num then add 1 to the counter, if not continue
    // return only if there are k elements

    const count = new Map();

    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
        console.log(count);
    }
    console.log("/////////////////// \n");
    const sortedCount = Array.from(count.entries()).sort((a, b) => {
        if (a[1] === b[1]) { // If counts are equal, sort by element value (ascending)
            return a[0] - b[0]; // Smaller element comes first
          }
          return b[1] - a[1]; // Otherwise, sort by count (descending)
    });
    
    console.log("sorted: ", sortedCount);


    console.log("/////////////////// \n");
    const topK = sortedCount.slice(0, k).map(([element]) => element);

    return topK;
};

console.log(topKFrequent(nums, k));