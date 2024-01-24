import { useState } from 'react';
import styles from '../app/styles/products.module.css';

function Products({ products }) {
  const [expandedProductId, setExpandedProductId] = useState([]);

  const toggleDetails = (productId) => {
    setExpandedProductId(expandedProductId === productId ? null : productId);
  }

  return (
    <div className={styles.products}>
      {products.map(product => (
        <div className={styles.product} key={product.id}>
          <h3>{product.handle}</h3>
          <div className={styles.databox}>
            <button onClick={() => toggleDetails(product.id)}>Direct Data</button>
            <button>Child Data</button>
          </div>
          {expandedProductId === product.id && (
            <div className={styles.productDetails}>
              <p>Title <span>{product.title}</span></p>
              <p>Handle <span>{product.handle}</span></p>
              <p>Id <span>{product.id}</span></p>
              <p>Type <span>{product.product_type}</span></p>
              <a href={product.image.src}>Image <span>{product.image.id}</span></a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Products;
