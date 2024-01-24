import styles from '../app/styles/collections.module.css';

function Collections({ collectionProducts }) {
  return (
    <div className={styles.collections}>
      {collectionProducts.map(collection => (
        <div className={styles.collection} key={collection.id}>
          <h3>{collection.handle} Products</h3>
          <div className={styles.databox}>
            <button>Direct Data</button>
            <button>Child Data</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collections;
