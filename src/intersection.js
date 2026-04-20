/**
 * solution 1 -- brute force
 * time: O(n * m)
 * space: O(1) -- not including results array
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]} - elems common to both arrays
 */
function intersection(nums1, nums2) {
    let commonElems = [];

    for (let num of nums1) {
        if (nums2.includes(num)) {
            commonElems.push(num);
        }
    }

    return commonElems;
}

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // [2, 6]
