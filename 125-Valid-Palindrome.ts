function isPalindrome(s: string): boolean {
    const cleaned: string = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversed: string = cleaned.split('').reverse().join('');
    return cleaned === reversed;
};
