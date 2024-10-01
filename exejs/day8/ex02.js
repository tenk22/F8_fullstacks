/**
 * spread operator (toán tử spread)
 * - dùng để nối , gộp mảng object
 * - dùng để copy mảng, object
 */
// const student1 = ["Nguyen", "huy", "long"];
// const student2 = ["hai", "duong"];
// const student3 = student1.concat(student2);
// console.log(student3);
// const student4 = [...student1, ...student2];
// console.log(student4);
// /**
//  * copy mảng(shadow copy)
//  */
// const students1Copy = [...student1];
// student1.push("thang");
// console.log(student1);
// console.log(students1Copy);

// gộp hoặc nối 2 object

const myAccount = {
  email: "huy@gmail.com",
  password: "123456",
};

const myInfor = {
  friendList: [],
  skills: [],
  address: "hn",
  linkCV: "https://www.abv.com",
};

// gộp 2 object
const myInfor2 = {
  ...myAccount,
  ...myInfor,
};
console.log(myInfor2);
