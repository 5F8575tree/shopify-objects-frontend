import styles from '@/app/styles/headerFor.module.css';

const HeaderForAllCollections = () => {
  return (
    <div className={styles.headersFor}>
      <p className={styles.singleHeader}>handle</p>
      <p className={styles.singleHeader}>id</p>
      <p className={styles.singleHeader}>title</p>
      <p className={styles.singleHeader}>products</p>
      <p className={styles.singleHeader}></p>
    </div>
  )
}

export default HeaderForAllCollections
