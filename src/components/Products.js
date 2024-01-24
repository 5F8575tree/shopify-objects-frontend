import styles from '../app/styles/products.module.css';

function Products({ products }) {
  return (
    <div className={styles.products}>
      {products.map(product => (
        <div className={styles.product} key={product.id}>
          <h3>{product.handle}</h3>
          <div className={styles.databox}>
            <button>Direct Data</button>
            <button>Child Data</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
