function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (["+", "-", "*", "/"].includes(token)) {
            const b = stack.pop()!;
            const a = stack.pop()!;
            let result: number;

            switch(token) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    result = Math.trunc(a / b);
                    break;
                default:
                    throw new Error("Invalid Operator");
            }

            stack.push(result);
        } else {
            stack.push(parseInt(token));
        } 
    }

    return stack.pop();
};
