import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, updateProduct } from "./productsSlice";

const UpdateProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const [product, setProduct] = useState({ name: "", price: "" });

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    } else {
      const existingProduct = products.find((item) => item.id === parseInt(id));
      if (existingProduct) {
        setProduct(existingProduct);
      } else {
        navigate("/");
      }
    }
  }, [dispatch, id, products, navigate]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id, updatedProduct: product }));
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>update product</h2>
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
        <button type="submit" className="btn btn-primary">
          update sản phẩm
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
