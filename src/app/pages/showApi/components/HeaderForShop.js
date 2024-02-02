import styles from '@/app/styles/headerFor.module.css';

const HeaderForShop = () => {
  return (
    <div className={styles.headersForShop}>
      <p className={styles.singleHeader}>id</p>
      <p className={styles.singleHeader}>name</p>
      <p className={styles.singleHeader}>ships</p>
      <p className={styles.singleHeader}>description</p>
      <p className={styles.singleHeader}>currency</p>
      <p className={styles.singleHeader}>cards accepted</p>
      <p className={styles.singleHeader}>digital wallets</p>
    </div>
  )
}

export default HeaderForShop
