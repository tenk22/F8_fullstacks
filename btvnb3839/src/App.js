import React, { useState } from "react";
import { datas } from "./data";
import ProductList from "./components/ProductList";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showProducts, setShowProducts] = useState(true);

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleProductList = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <h1>Product Store</h1>
        <button onClick={handleChangeTheme}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <main>
        <button onClick={toggleProductList}>
          {showProducts ? "Hide Product List" : "Show Product List"}
        </button>
        {showProducts && <ProductList products={datas} />}
      </main>

      <footer>
        <p>© 2024 Product Store</p>
      </footer>
    </div>
  );
};

export default App;
