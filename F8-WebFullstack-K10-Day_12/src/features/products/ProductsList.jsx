import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "./productsSlice";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className="text-center mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Products</h2>
        <div>
          <button
            className={`btn btn-outline-primary me-2 ${
              viewMode === "grid" && "active"
            }`}
            onClick={() => setViewMode("grid")}
          >
            bảng
          </button>
          <button
            className={`btn btn-outline-primary ${
              viewMode === "table" && "active"
            }`}
            onClick={() => setViewMode("table")}
          >
            lưới
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-3" key={product.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <Link
                    to={`/update-product/${product.id}`}
                    className="btn btn-primary me-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => dispatch(deleteProduct(product.id))}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <Link
                    to={`/update-product/${product.id}`}
                    className="btn btn-primary btn-sm me-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => dispatch(deleteProduct(product.id))}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductsList;
