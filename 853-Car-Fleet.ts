function carFleet(target: number, position: number[], speed: number[]): number {
    const cars: { position: number, time: number}[] = [];

    for (let i = 0; i < position.length; i++) {
        const time = (target - position[i]) / speed[i];
        cars.push({position: position[i], time});
    }

    cars.sort((a, b) => b.position - a.position);

    const stack: number[] = [];

    for (const car of cars) {
        if (stack.length === 0 || car.time > stack[stack.length - 1]) {
            stack.push(car.time);
        }
    }

    return stack.length;
};
