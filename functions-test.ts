import addNumbers, {
  addStrings,
  format,
  printFormat,
  fetchData,
  introduce,
  getName,
} from "./functions";

console.log(addNumbers(1, 2));
console.log(addStrings("Hello", "World"));
console.log(addStrings("Hello"));
console.log(format("Title", "John Doe"));
printFormat("Joe", 1234);
const data = fetchData("https://www.google.com");
console.log(data);
console.log(introduce("Hello", "John", "Doe", "Smith"));
console.log(getName());
console.log(getName({ first: "John", last: "Doe" }));
