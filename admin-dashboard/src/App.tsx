import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <header className="bg-blue-600 text-white py-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-3xl font-bold">Product Management</h1>
            <nav>
              <a
                href="/"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                Home
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p className="text-sm">© 2024 Khó lói quá</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
