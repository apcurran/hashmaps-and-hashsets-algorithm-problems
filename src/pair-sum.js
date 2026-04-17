/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {[number, number]}
 */
function pairSum(nums, target) {
    let numsHash = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complementNum = target - currentNum;

        if (numsHash.has(complementNum)) {
            const complementNumIndex = numsHash.get(complementNum);

            return [complementNumIndex, i];
        } else {
            numsHash.set(currentNum, i);
        }
    }

    return [-1, -1]; // default when indices are not found
}

console.log(pairSum([3, 2, 5, 4, 1], 8)); // [0, 2]
