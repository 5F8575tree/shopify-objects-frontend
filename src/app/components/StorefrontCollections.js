import { useState } from 'react';
import styles from '../styles/collections.module.css';

function StorefrontCollections({ storefrontCollections }) {
  const [expandedCollectionId, setExpandedCollectionId] = useState(null);
  const [collectionProducts, setCollectionProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleCollectionDetails = async (collectionId) => {
    if (expandedCollectionId === collectionId) {
      setExpandedCollectionId(null);
    } else {
      if (!collectionProducts[collectionId]) {
        try {
          setLoading(true);
          // Assume getStorefrontCollectionProducts is an API call function to fetch products from a collection
          const products = await getStorefrontCollectionProducts(collectionId);
          setCollectionProducts({ ...collectionProducts, [collectionId]: products });
          setError(null);
        } catch (error) {
          console.error('Error fetching products:', error);
          setError('Failed to fetch products.');
        } finally {
          setLoading(false);
        }
      }
      setExpandedCollectionId(collectionId);
    }
  };

  return (
    <div className={styles.collections}>
      {storefrontCollections.map(collection => (
        <div className={styles.collection} key={collection.id}>
          <div className={styles.header}>
            <h3>{collection.title}</h3>
            {/* Other buttons and functionalities as needed */}
          </div>
          <div className={styles.databox}>
            <button onClick={() => toggleCollectionDetails(collection.id)}>View Products</button>
          </div>
          {expandedCollectionId === collection.id && (
            <div className={styles.collectionDetails}>
              {loading && <p>Loading...</p>}
              {error && <p>{error}</p>}
              <div>
                {collectionProducts[collection.id] && collectionProducts[collection.id].map(product => (
                  <p key={product.id}>{product.title}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StorefrontCollections;
