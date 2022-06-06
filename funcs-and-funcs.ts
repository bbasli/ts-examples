export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

export type MutationFunction = (n: number) => number;

export function arrayMutate(arr: number[], mutate: MutationFunction): number[] {
  return arr.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (n) => n * 22));

const newMutateFunction: MutationFunction = (n: number) => n * 212;
console.log(arrayMutate([1, 2, 3], newMutateFunction));

export function createAdder(x: number): MutationFunction {
  return (n: number) => n + x;
}

const addOne = createAdder(1);
console.log(addOne(1000));

const addHundred = createAdder(100);
console.log(addHundred(1));
