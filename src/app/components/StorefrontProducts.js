const StorefrontProducts = ({ products }) => {
  return (
    <div>
      <h2>Storefront Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default StorefrontProducts;
