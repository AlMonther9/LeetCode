const twoSum = (nums: number[], target: number): number[] => {
    const hash: { [key: number]: number } = {};
    let n: number = nums.length;
    for (let i = 0; i < n; i++) {
        const complement: number = target - nums[i];
        if (complement in hash) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
    return [];
};
