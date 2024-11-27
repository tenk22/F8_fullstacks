import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.sku}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.short_description}</p>
          <p>Price: {product.final_price} VND</p>
          <p>Stock: {product.stock}</p>
          <p>Materials: {product.materials}</p>
          <p>Care Instruction: {product.instruction}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
