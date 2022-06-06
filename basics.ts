let userName: string = "John";
let hasLoggedIn: boolean = true;

userName += " Doe";

console.log(userName);

let myNumbe: number = 10;

let myRegex: RegExp = /\d+/;

const names: string[] = userName.split(" ");

console.log(names);

const myValues: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "John",
  last: "Doe",
};

const ids: Record<number, string> = {
  10: "John",
  20: "Jane",
};

ids[30] = "Jim";

if (ids[30] === "D") {
}

for (let i = 0; i < myValues.length; i++) {
  console.log(myValues[i]);
}

[1, 2, 3].forEach((value) => console.log(value));
const out: number[] = [1, 2, 3].map((value) => value * 12);

console.log(out);
