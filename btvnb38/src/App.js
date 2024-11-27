import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { datas } from "./data";
import ProductList from "./components/ProductList";

const App = () => {
  const [showProducts, setShowProducts] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);

  const toggleProductList = () => setShowProducts(!showProducts);
  const handleSeeMore = () => setVisibleCount((prevCount) => prevCount + 10);

  return (
    <div className="app">
      <Header />
      <button onClick={toggleProductList}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>
      {showProducts && (
        <>
          <ProductList products={datas.slice(0, visibleCount)} />
          {visibleCount < datas.length && (
            <button onClick={handleSeeMore}>See more</button>
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

const Header = () => {
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.className = theme === "light" ? "dark-mode" : "light-mode";
  };

  return (
    <header>
      <h1>danh sách sản phẩm</h1>
      <button onClick={handleChangeTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </header>
  );
};

const Footer = () => (
  <footer>
    <p>© 2024 danh sách sản phẩm</p>
  </footer>
);

export default App;
