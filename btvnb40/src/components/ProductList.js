import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <span>Price: ${product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
