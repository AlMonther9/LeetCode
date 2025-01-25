function majorityElement(nums: number[]): number {
    const countMap: { [key: number]: number } = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
        if (countMap[num] > majorityCount) {
            return num;
        }
    }
    return -1;
};
