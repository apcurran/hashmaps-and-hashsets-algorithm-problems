/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string|null} - char with highest frequency in string (keep earlier one if tied count)
 */
function mostFrequentChar(str) {
    if (str.length === 0) {
        return null;
    }

    let charCounts = new Map();
    let mostFreq = str[0];

    for (let char of str) {
        const charCountPrev = charCounts.get(char) || 0;
        charCounts.set(char, charCountPrev + 1);
    }

    for (let [char, charCount] of charCounts) {
        if (charCount > charCounts.get(mostFreq)) {
            mostFreq = char;
        }
    }

    return mostFreq;
}

console.log(mostFrequentChar("potato")); // "o"
