const myForEach = <T>(items: T[], forEachFunc: (v: T) => void): void => {
  items.reduce((_, val) => {
    forEachFunc(val);
    return undefined;
  }, undefined);
};

myForEach(["joe", "doe", "zoe"], (v) => console.log(`forEach: ${v}`));

const myFilter = <T>(items: T[], filterFunc: (v: T) => boolean): T[] => {
  return items.reduce((a: T[], v) => (filterFunc(v) ? [...a, v] : a), []);
};

const poss = myFilter([-1, 12, -24, 1], (v) => v > 0);
console.log(poss);

const myMap = <T, K>(items: T[], mapFunc: (v: T) => K): K[] => {
  return items.reduce((acc, val) => [...acc, mapFunc(val)], [] as K[]);
};

const doubled = myMap([1, 2, 3], (v) => v * 2);
console.log(doubled);
