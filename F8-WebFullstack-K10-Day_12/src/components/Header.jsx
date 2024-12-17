import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3">quản lý product</h1>
        <nav>
          <Link to="/" className="btn btn-outline-light me-2">
            home
          </Link>
          <Link to="/add-product" className="btn btn-outline-light">
            add product
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
