type Args = any[];
type MemoizedFn<T> = (...args: Args) => T;

function memoize<T>(fn: MemoizedFn<T>): MemoizedFn<T> {
  const cache = new Map<string, T>();
  return function (...args: Args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }
}

// Sum function
const sum = (a, b) => (a + b);
// Fibonacci function
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
// Factorial function
const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);
