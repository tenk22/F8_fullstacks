import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductsList from "./features/products/ProductsList";
import ProductForm from "./features/products/ProductForm";
import UpdateProduct from "./features/products/UpdateProduct";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
