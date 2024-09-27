const students = [
  { id: 1, name: "Nguyen Manh Huy", age: 18 },
  { id: 2, name: "Nguyen Thanh An", age: 18 },
  { id: 3, name: "Phan Tuan Manh", age: 18 },
  { id: 4, name: "Nguyen Truong Giang", age: 15 },
  { id: 5, name: "Tran Ngoc Duy", age: 18 },
  { id: 6, name: "Hoang Thanh Huy", age: 18 },
  { id: 7, name: "Nguyen The Han", age: 18 },
  { id: 8, name: "Le Huu Trong", age: 17 },
  { id: 9, name: "Vu Quoc Dung", age: 18 },
  { id: 10, name: "Nguyen Hai Duong", age: 18 },
  { id: 11, name: "Nguyen Trung Hieu", age: 18 },
  { id: 12, name: "Tran Duy Dong", age: 18 },
  { id: 13, name: "Tran Minh Hoang", age: 18 },
  { id: 14, name: "Nguyen Minh Hoang", age: 18 },
  { id: 15, name: "Nhung", age: 18 },
  { id: 16, name: "Nguyễn Nhung", age: 18 },
];

students.sort((a, b) => {
  const nameA = a.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ");
  const nameB = b.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ");

  const lastNameA = nameA.pop();
  const lastNameB = nameB.pop();

  if (lastNameA !== lastNameB) {
    return lastNameA.localeCompare(lastNameB);
  }

  const middleAndFirstNameA = nameA.join(" ");
  const middleAndFirstNameB = nameB.join(" ");

  return middleAndFirstNameA.localeCompare(middleAndFirstNameB);
});

console.log(students);
