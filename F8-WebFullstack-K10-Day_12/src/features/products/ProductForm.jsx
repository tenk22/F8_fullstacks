import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./productsSlice";

const ProductForm = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct({ name: "", price: "" });
  };

  return (
    <div className="container mt-4">
      <h2>thêm product</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          thêm product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
