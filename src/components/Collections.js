import styles from '../app/styles/collections.module.css'; // Create and import corresponding CSS module for Collections

function Collections({ collections }) {
  return (
    <div className={styles.collections}>
      {collections.map(collection => (
        <div className={styles.collection} key={collection.id}>
          <h3>{collection.handle}</h3>
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
