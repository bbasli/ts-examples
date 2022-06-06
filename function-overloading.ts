interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: String): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = { x: 0, y: 0 };

  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseFloat(value);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = { x: arg1 as number, y: arg2 as number };
  }

  return coord;
}

console.log(parseCoordinate(12, 235));
console.log(parseCoordinate({ x: 53, y: 93 }));
console.log(parseCoordinate("x:63,y:77"));
