function productExceptSelf(nums: number[]): number[] {
    const n: number = nums.length;
    const answer: number[] = new Array(n).fill(1);  // [1,1,1,1 ...] length of n

    // Calculate prefix products
    let prefix: number = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix; // Set the prefix product for answer[i]
        prefix *= nums[i];  // Update the prefix product
    }

    // Calculate suffix products and combine with prefix products
    let suffix: number = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix; // Combine prefix and suffix products
        suffix *= nums[i];   // Update the suffix product
    }

    return answer;
}
