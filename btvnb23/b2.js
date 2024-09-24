const datas = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 0 },
  { name: "Carol", age: -1 },
  { name: "David", age: null },
  { name: "Eve", age: NaN },
  { name: "Frank", age: undefined },
  { name: "", age: 20 },
  { name: 123, age: 30 },
];
const validData = [];
const invalidData = [];
datas.forEach((user) => {
  if (
    user.name &&
    typeof user.name === "string" &&
    user.age > 0 &&
    typeof user.age === "number" &&
    !isNaN(user.age)
  ) {
    validData.push(user);
  } else {
    invalidData.push(user);
  }
});
console.log("Valid data:", validData);
console.log("Invalid data:", invalidData);
