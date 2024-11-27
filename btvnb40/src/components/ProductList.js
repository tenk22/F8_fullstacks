import React from "react";

const ProductList = ({ products }) => {
  const [visibleProducts, setVisibleProducts] = useState(10);

  const handleSeeMore = () => {
    setVisibleProducts((prev) => prev + 10);
  };

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
      {visibleProducts < products.length && (
        <button className="see-more-btn" onClick={handleSeeMore}>
          See more
        </button>
      )}
    </div>
  );
};

export default ProductList;
