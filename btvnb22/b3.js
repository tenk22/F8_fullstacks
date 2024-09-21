function slugify(products) {
  const result = [];
  for (let product of products) {
    const slugName = product.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/'/g, "");
    const slug = `${slugName}-${product.id.toLowerCase()}`;
    result.push({ ...product, slug: slug });
  }
  return result;
}
const products = [
  { id: "1OT22W006", name: "Girls Windbreaker Jacket" },
  { id: "1OT22W009", name: "Boys T-shirt" },
  { id: "1OT22W032", name: "Boys Shirt" },
  { id: "1OT22W011", name: "Men's Super Warm Jacket" },
  { id: "1OT22W000", name: "Women's Party Dress" },
];
const result = slugify(products);
console.log(result);
