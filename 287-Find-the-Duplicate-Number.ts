function findDuplicate(nums: number[]): number {
    // Floyd’s Algorithm for Cycle Detection
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while ( slow !== fast);

    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};
