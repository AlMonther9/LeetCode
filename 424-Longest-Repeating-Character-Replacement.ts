function characterReplacement(s: string, k: number): number {
    let left = 0;
    let maxLength = 0;
    let maxCount = 0;
    let charCount = new Array(26).fill(0);

    for (let right = 0; right < s.length; right++) {
        const index = s.charCodeAt(right) - 'A'.charCodeAt(0);
        charCount[index]++;
        maxCount = Math.max(maxCount, charCount[index]);

        if (right - left + 1 - maxCount > k) {
            const leftIndex = s.charCodeAt(left) - 'A'.charCodeAt(0);
            charCount[leftIndex]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
