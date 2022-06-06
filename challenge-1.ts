import houses from "./houses.json";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

type HouseFilter = (house: House) => boolean;

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: HouseFilter): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: HouseFilter): HouseWithID[];

function findHouses(arg1: string | House[], arg2?: HouseFilter): HouseWithID[] {
  let houses: House[] = typeof arg1 === "string" ? JSON.parse(arg1) : arg1;

  return (arg2 ? houses.filter(arg2) : houses).map((house) => ({
    ...house,
    id: houses.indexOf(house),
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);
console.log(findHouses(houses, ({ name }) => name === "Bugra"));
