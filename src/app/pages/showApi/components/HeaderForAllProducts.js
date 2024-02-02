import styles from '@/app/styles/headerFor.module.css';

const HeaderForAllProducts = () => {
  return (
    <div className={styles.headersForAllProducts}>
      <p className={styles.singleHeader}>id</p>
      <p className={styles.singleHeader}>handle</p>
      <p className={styles.singleHeader}>title</p>
      <p className={styles.singleHeader}>description</p>
      <p className={styles.singleHeader}>image</p>
    </div>
  )
}

export default HeaderForAllProducts
