/**
 * solution 1
 * n = s1 length
 * m = s2 length
 * time: O(n + m)
 * space: O(n + m)
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function anagrams(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    const s1CharCountMap = createStrCountMap(s1);
    const s2CharCountMap = createStrCountMap(s2);

    for (let [s1Char, s1CharCount] of s1CharCountMap) {
        // determine if char and charcount both exist in s2
        const s2CharCount = s2CharCountMap.get(s1Char);

        if (s2CharCount === undefined || s2CharCount !== s1CharCount) {
            return false;
        }
    }

    return true;
}

console.log(anagrams("elbow", "below")); // true
console.log(anagrams("cats", "tocs")); // false

/**
 * @param {string} str
 * @returns {Map}
 */
function createStrCountMap(str) {
    let map = new Map();

    for (let char of str) {
        const charPrevCount = map.get(char) || 0;
        map.set(char, charPrevCount + 1);
    }

    return map;
}
