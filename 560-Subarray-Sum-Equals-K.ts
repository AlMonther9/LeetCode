function subarraySum(nums: number[], k: number): number {
    const sumCount = new Map<number, number>();
    sumCount.set(0, 1);
    let currentSum = 0;
    let result = 0;

    for (const num of nums) {
        currentSum += num;
        const target = currentSum - k;

        if (sumCount.has(target)) {
            result += sumCount.get(target)!;
        }

        sumCount.set(currentSum, (sumCount.get(currentSum) || 0) + 1);
    }

    return result;
};
