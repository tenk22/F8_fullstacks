const sortedStudents = [
  { id: 2, name: "Nguyen Thanh An", age: 18 },
  { id: 12, name: "Tran Duy Dong", age: 18 },
  { id: 9, name: "Vu Quoc Dung", age: 18 },
  { id: 10, name: "Nguyen Hai Duong", age: 18 },
  { id: 5, name: "Tran Ngoc Duy", age: 18 },
  { id: 4, name: "Nguyen Truong Giang", age: 15 },
  { id: 7, name: "Nguyen The Han", age: 18 },
  { id: 11, name: "Nguyen Trung Hieu", age: 18 },
  { id: 14, name: "Nguyen Minh Hoang", age: 18 },
  { id: 13, name: "Tran Minh Hoang", age: 18 },
  { id: 6, name: "Hoang Thanh Huy", age: 18 },
  { id: 1, name: "Nguyen Manh Huy", age: 18 },
  { id: 3, name: "Phan Tuan Manh", age: 18 },
  { id: 15, name: "Nhung", age: 18 },
  { id: 16, name: "Nguyễn Nhung", age: 18 },
  { id: 8, name: "Le Huu Trong", age: 17 },
];
const formattedStudents = sortedStudents.map((student) => {
  const upperCaseName = student.name.toUpperCase();
  const isUnderage = student.age < 18;
  return {
    id: student.id,
    name: upperCaseName,
    age: student.age,
    isUnderage,
  };
});
formattedStudents.forEach((student) => {
  const studentDiv = document.createElement("div");
  studentDiv.innerHTML = `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`;
  if (student.isUnderage) {
    const ageText = `<span style="color: red; font-weight: bold;">${student.age}</span>`;
    studentDiv.innerHTML = `ID: ${student.id}, Name: ${student.name}, Age: ${ageText}`;
  }
  document.body.appendChild(studentDiv);
});
