import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import "./index.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleProductsPerPageChange = (value) => {
    setProductsPerPage(value);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="app">
      <h1>Product List</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="settings">
        <label>
          Products per page:
          <select
            onChange={(e) =>
              handleProductsPerPageChange(Number(e.target.value))
            }
            value={productsPerPage}
          >
            {[5, 10, 20].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
      </div>
      <ProductList products={currentProducts} />
      <Pagination
        totalProducts={filteredProducts.length}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
