/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} targetProduct
 * @returns {[number, number]} - tuple of matching indices
 */
function pairProduct(nums, targetProduct) {
    let numsHash = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complementNum = targetProduct / currentNum;

        if (numsHash.has(complementNum)) {
            const complementNumIndex = numsHash.get(complementNum);

            return [complementNumIndex, i];
        }

        numsHash.set(currentNum, i);
    }

    return [-1, -1];
}

console.log(pairProduct([4, 7, 9, 2, 5, 1], 35)); // [1, 4]
