import styles from "../../../styles/outputData.module.css";

const OutputAllProductsData = ({ id, handle, title, description, image }) => {
  // const productCount = Array.isArray(products) ? products.length : 0;
  console.log({ id, handle, title, description, image });
  return (
    <div className={styles.outputDataForAllProducts}>
      <p className={styles.allProductsSingle}>{id}</p>
      <p className={styles.allProductsSingle}>{handle}</p>
      <p className={styles.allProductsSingle}>{title}</p>
      <p className={styles.allProductsSingle}>{description}</p>
      <p className={styles.allProductsSingle}>{image}</p>
    </div>
  )
}

export default OutputAllProductsData
