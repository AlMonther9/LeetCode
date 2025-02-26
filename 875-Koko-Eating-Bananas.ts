function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canFinish(piles, h, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

function canFinish(piles: number[], h: number, k: number): boolean {
    let hours = 0;
    for (const pile of piles) {
        hours += Math.ceil(pile / k);
    }
    return hours <= h;
}
