import styles from "../../../styles/outputData.module.css";

const OutputAllCollectionsData = ({ id, name, shipsToCountries, description, paymentSettings}) => {
  const {
    acceptedCardBrands,
    currencyCode,
    supportedDigitalWallets,
  } = paymentSettings || {};

  return (
    <div className={styles.outputShopData}>
      <p className={styles.id}>{id}</p>
      <p className={styles.handle}>{name}</p>
      <p className={styles.title}>{shipsToCountries}</p>
      <p className={styles.products}>{description}</p>
      <p className={styles.payment}>{currencyCode}</p>
      <p className={styles.payment}>{acceptedCardBrands?.join(', ')}</p>
      <p className={styles.payment}>{supportedDigitalWallets?.join(', ')}</p>
    </div>
  )
}

export default OutputAllCollectionsData
