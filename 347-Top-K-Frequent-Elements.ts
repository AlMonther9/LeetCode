function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const buckets: number[][] = [];
    for (let i = 0; i <= nums.length; i++) {
        buckets.push([]);
    }

    for (const [num, count] of freqMap.entries()) {
        buckets[count].push(num);
    }

    const result: number[] = [];
    for (let i = buckets.length - 1; i >= 0; i--) {
        const bucket = buckets[i];
        if (bucket.length === 0) continue;
        for (const num of bucket) {
            result.push(num);
            if (result.length === k) {
                return result;
            }
        }
    }
    return result;
};
