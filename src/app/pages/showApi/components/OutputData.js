import styles from "../../../styles/outputData.module.css";

const OutputData = ({ id, handle, title, products }) => {
  const productCount = Array.isArray(products) ? products.length : 0;
  console.log({ id, handle, title, products });
  return (
    <div className={styles.outputData}>
      <p className={styles.id}>{id}</p>
      <p className={styles.handle}>{handle}</p>
      <p className={styles.title}>{title}</p>
      <p className={styles.products}>{productCount}</p>
      <p className={styles.icon}></p>
    </div>
  )
}

export default OutputData
