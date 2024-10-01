/**
 * destrcturing
 * - khai báo nhiều phần tử thuộc tính của array hoặc object
 */

// const arr = ["Nguyen", "huy", "long"];
// const [item1, item2] = arr;
// console.log(item1, item2);

// let myString = "Nguyen";
// let [a, b, c, ...rest] = myString;
// console.log(a, b, c);
// console.log(rest);

/**
 * enhanded object literal
 * - khai báo tắt thuộc tính
 * - khai báo tắt
 */

// let name = "Nguyen";
// let age = 20;
// const user = { name: name, age: age };

// // khai báo tắt thuộc tính

// const user2 = {
//   name,
//   age,
//   hello() {
//     console.log("hello");
//   },
// };
// consoleole.log(user2.hello());

const user3 = {
  name: "Nguyen",
  age: 20,
};
const myKey = "username";
const user4 = {
  [myKey]: "F8",
  age: 5,
};
console.log(user4);
