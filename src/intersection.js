// /**
//  * solution 1 -- brute force
//  * time: O(n * m)
//  * space: O(min(n, m)) -- including results array
//  *
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @returns {number[]} - elems common to both arrays
//  */
// function intersection(nums1, nums2) {
//     let commonElems = [];

//     for (let num of nums1) {
//         if (nums2.includes(num)) {
//             commonElems.push(num);
//         }
//     }

//     return commonElems;
// }

/**
 * solution 2 -- hash set
 * time: O(n + m)
 * space: O(n) -- including results array
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]} - elems common to both arrays
 */
function intersection(nums1, nums2) {
    let nums1Hash = new Set(nums1);
    let results = [];

    for (let num of nums2) {
        if (nums1Hash.has(num)) {
            results.push(num);
        }
    }

    return results;
}

console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])); // [2, 6]
