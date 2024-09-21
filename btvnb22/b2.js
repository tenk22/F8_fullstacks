function groupByHomeTown(employees) {
  const grouped = {};
  for (let employee of employees) {
    const homeTown = employee.homeTown;
    if (!grouped[homeTown]) {
      grouped[homeTown] = [];
    }
    grouped[homeTown].push(employee);
  }
  return grouped;
}
const employees = [
  { id: 1, name: "Hoang", homeTown: "Hanoi" },
  { id: 2, name: "An", homeTown: "Thaibinh" },
  { id: 3, name: "Huy", homeTown: "Langson" },
  { id: 4, name: "Dinh", homeTown: "Saigon" },
  { id: 5, name: "Dong", homeTown: "Saigon" },
  { id: 6, name: "Nhinh", homeTown: "Langson" },
];
const result = groupByHomeTown(employees);
console.log(result);
