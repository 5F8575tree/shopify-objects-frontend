import { useState } from 'react';
import styles from '../app/styles/products.module.css';

function Products({ products }) {
  const [expandedProductId, setExpandedProductId] = useState([]);

  const toggleDetails = (productId) => {
    setExpandedProductId(expandedProductId === productId ? null : productId);
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy to clipboard', err);
      })
  }

  return (
    <div className={styles.products}>
      {products.map(product => (
        <div className={styles.product} key={product.id}>
          <div className={styles.header}>
            <h3>{product.handle}</h3>
            <button onClick={() => copyToClipboard(product.handle)}>Copy</button>
          </div>
          <div className={styles.databox}>
            <button onClick={() => toggleDetails(product.id)}>Child Objects</button>
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
