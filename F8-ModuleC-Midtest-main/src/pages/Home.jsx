import React, { useState, useEffect } from "react";
import { getProducts, getCategories } from "../services/api";
import { BsGrid, BsList } from "react-icons/bs";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [productsData, categoriesData] = await Promise.all([
        getProducts(),
        getCategories(),
      ]);
      setProducts(productsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === parseInt(categoryId));
    return category ? category.name : "Unknown Category";
  };

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "all" ||
        product.categoryId === parseInt(selectedCategory)
    )
    .filter((product) =>
      product?.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsGridView(true)}
            className={`p-2 ${isGridView ? "text-blue-600" : "text-gray-600"}`}
          >
            <BsGrid size={20} />
          </button>
          <button
            onClick={() => setIsGridView(false)}
            className={`p-2 ${!isGridView ? "text-blue-600" : "text-gray-600"}`}
          >
            <BsList size={20} />
          </button>
        </div>

        <div className="flex gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded border-gray-300"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded border-gray-300"
          />
        </div>
      </div>

      <div
        className={
          isGridView ? "grid grid-cols-1 md:grid-cols-3 gap-6" : "space-y-4"
        }
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-lg shadow ${
              isGridView ? "p-4" : "p-4 flex items-center gap-4"
            }`}
          >
            {product.thumbnail ? (
              <>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className={`rounded ${
                    isGridView
                      ? "w-full h-48 object-cover mb-4"
                      : "w-24 h-24 object-cover"
                  }`}
                />
                <div className={isGridView ? "" : "flex-1"}>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  <p className="text-gray-500">
                    {getCategoryName(product.categoryId)}
                  </p>
                  <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </>
            ) : (
              <div className="w-full">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  View Details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
