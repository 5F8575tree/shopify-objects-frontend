import { useState } from 'react';
import styles from '../styles/products.module.css';

function StorefrontProducts({ products }) {
  const [expandedProductId, setExpandedProductId] = useState([]);

  const toggleDetails = (productId) => {
    getIntrospection(productId);
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

  const copyLiquidTag = (attributeName) => {
    const liquidTag = `{{ product.id | where, "${attributeName}" }}`;
    navigator.clipboard.writeText(liquidTag)
      .then(() => console.log('Liquid tag copied to clipboard'))
      .catch(err => console.error('Failed to copy Liquid tag', err));
  };

  return (
    <div className={styles.products}>
      {products.map(product => (
        <div className={styles.product} key={product.id}>
          <div className={styles.header}>
            <h3>{product.handle}</h3>
            <button onClick={() => copyToClipboard(product.handle)}>Copy</button>
            <button onClick={() => copyLiquidTag(product.id)}>Copy Liquid</button>
          </div>
          <div className={styles.databox}>
            <button onClick={() => toggleDetails(product.id)}>Introspection Query</button>
          </div>
          {expandedProductId === product.id && (
            <div className={styles.productDetails}>
              <p>Title <span>{product.title}</span></p>
              <p>Handle <span>{product.handle}</span></p>
              <p>Id <span>{product.id}</span></p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StorefrontProducts;
