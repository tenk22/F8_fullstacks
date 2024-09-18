const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Hà Nội" },
  { name: "Nguyễn Văn B", age: 2, address: "Hải Phòng" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];
function createCustomers(customers) {
  let n = customers.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (customers[j].age > customers[j + 1].age) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  const result = [];
  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    const nameParts = customer.name.split(" ");
    const shortName = nameParts.slice(0, nameParts.length - 1).join(" ");
    const newCustomer = {
      name: customer.name,
      age: customer.age,
      address: customer.address,
      shortName: shortName,
    };
    result.push(newCustomer);
  }
  return result;
}
const result = createCustomers(customers);
console.log(result);
