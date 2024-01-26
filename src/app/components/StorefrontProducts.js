import { useState } from 'react';
import styles from '../styles/products.module.css';

function StorefrontProducts({ storefrontProducts }) {
  const [expandedProductId, setExpandedProductId] = useState(null);

  const toggleDetails = (productId) => {
    setExpandedProductId(expandedProductId === productId ? null : productId);
  };

  // Assuming you have a similar way to copy data to the clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => console.log('Text copied to clipboard'))
      .catch(err => console.error('Failed to copy to clipboard', err));
  };

  return (
    <div className={styles.products}>
      {storefrontProducts.map(product => (
        <div className={styles.product} key={product.id}>
          <div className={styles.header}>
            <h3>{product.title}</h3> {/* Using title instead of handle */}
            <button onClick={() => copyToClipboard(product.title)}>Copy</button>
          </div>
          <div className={styles.databox}>
            {/* Adjust buttons based on what's relevant for Storefront API */}
            <button onClick={() => toggleDetails(product.id)}>View Details</button>
          </div>
          {expandedProductId === product.id && (
            <div className={styles.productDetails}>
              {/* Render product details as per the data available from Storefront API */}
              <p>Title <span>{product.title}</span></p>
              <p>ID <span>{product.id}</span></p>
              {/* Add more fields as needed */}
              {product.images && product.images.edges.length > 0 && (
                <img src={product.images.edges[0].node.src} alt={product.title} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StorefrontProducts;
