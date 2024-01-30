import { useState } from 'react';
import { getShopifyCollectionDetails } from '../services/api';
import styles from '../styles/collections.module.css';

function StorefrontCollections({ collections }) {
  const [expandedCollectionId, setExpandedCollectionId] = useState(null);
  const [expandedDetailsId, setExpandedDetailsId] = useState(null);
  const [collectionDetails, setCollectionDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleProductDetails = async (collectionId) => {
    if (expandedCollectionId === collectionId) {
      setExpandedCollectionId(null);
    } else {
      if (!collectionDetails[collectionId]) {
        try {
          setLoading(true);
          const details = await getShopifyCollectionDetails(collectionId);
          setCollectionDetails({ ...collectionDetails, [collectionId]: details });
          setError(null);
        } finally {
          setLoading(false);
        }
      }
      setExpandedCollectionId(collectionId);
    }
  };

  const toggleChildData = (collectionId) => {
    setExpandedDetailsId(expandedDetailsId === collectionId ? null : collectionId);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy to clipboard', err);
    });
  };

  return (
    <div className={styles.collections}>
      {collections.map(collection => (
        <div className={styles.collection} key={collection.id}>
          <div className={styles.header}>
            <h3>{collection.handle}</h3>
            <button onClick={() => copyToClipboard(collection.handle)}>Copy</button>
          </div>
          <div className={styles.databox}>
            <button onClick={() => toggleProductDetails(collection.id)}>Collection Products</button>
            <button onClick={() => toggleChildData(collection.id)}>Child Data</button>
          </div>
          {expandedCollectionId === collection.id && (
            <div className={styles.collectionDetails}>
              {loading && <p>Loading...</p>}
              {error && <p>{error}</p>}
              {collectionDetails[collection.id] && (
                <div>
                  <h4>Products in this Collection:</h4>
                  {/* {collectionDetails[collection.id].products.map(product => (
                    <p key={product.id}>{product.title}</p>
                  ))} */}
                </div>
              )}
            </div>
          )}
          {expandedDetailsId === collection.id && (
            <div className={styles.collectionDetails}>
              <p>Title: <span>{collection.title}</span></p>
              <p>Handle: <span>{collection.handle}</span></p>
              <p>Id: <span>{collection.id}</span></p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StorefrontCollections;
