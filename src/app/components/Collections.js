import { useState } from 'react';
import styles from '../styles/collections.module.css';

function Collections({ collections, onFetchDetails }) {
  const [expandedCollectionId, setExpandedCollectionId] = useState([]);

  const toggleDetails = (collectionId) => {
    setExpandedCollectionId(expandedCollectionId === collectionId ? null : collectionId);
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
    <div className={styles.collections}>
      {collections.map(collection => (
        <div className={styles.collection} key={collection.id}>
          <div className={styles.header}>
            <h3>{collection.handle}</h3>
            <button onClick={() => copyToClipboard(collection.handle)}>Copy</button>
          </div>
          <div className={styles.databox}>
            <button onClick={() => toggleDetails(collection.id)}>Child Objects</button>
            <button onClick={() => onFetchDetails(collection.id)}>Collection Data</button>
          </div>
          {expandedCollectionId === collection.id && (
            <div className={styles.collectionDetails}>
              <p>Title <span>{collection.title}</span></p>
              <p>Handle <span>{collection.handle}</span></p>
              <p>Id <span>{collection.id}</span></p>
              <a href={collection.image.src}>Image <span>link</span></a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collections;
