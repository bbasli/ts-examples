interface Cat {
  name: string;
  breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
  return { name, breed };
}

const usul = makeCat("Usul", "Tabby");

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(11, 22, 33);

const reallyConst = [1, 2, 3] as const;
