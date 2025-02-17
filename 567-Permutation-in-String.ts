function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    const charCountS1 = new Array(26).fill(0);
    const charCountS2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        charCountS1[s1.charCodeAt(i) - 97]++;
        charCountS2[s2.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s2.length - s1.length; i++) {
        if (arraysEqual(charCountS1, charCountS2)) {
            return true;
        }
        charCountS2[s2.charCodeAt(i + s1.length) - 97]++;
        charCountS2[s2.charCodeAt(i) - 97]--;
    }

    return arraysEqual(charCountS1, charCountS2);
}

function arraysEqual(arr1: number[], arr2: number[]): boolean {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
