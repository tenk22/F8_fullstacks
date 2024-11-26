import React, { useState } from "react";
import "./ProductList.css";

const ProductList = ({ products }) => {
  const [visibleProducts, setVisibleProducts] = useState(10);

  const handleSeeMore = () => {
    setVisibleProducts((prev) => prev + 10);
  };

  return (
    <div className="product-list">
      {products.slice(0, visibleProducts).map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.short_description}</p>
          <p>
            <strong>Price:</strong> {product.final_price}
          </p>
          <p>
            <strong>SKU:</strong> {product.sku}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
          <p>
            <strong>Materials:</strong> {product.materials}
          </p>
          <p>
            <strong>Instructions:</strong> {product.instruction}
          </p>
        </div>
      ))}
      {visibleProducts < products.length && (
        <button className="see-more-btn" onClick={handleSeeMore}>
          See more
        </button>
      )}
    </div>
  );
};

export default ProductList;
