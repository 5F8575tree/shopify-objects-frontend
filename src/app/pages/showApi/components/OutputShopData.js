import styles from "../../../styles/outputData.module.css";

const OutputAllCollectionsData = ({ id, name, shipsToCountries, description}) => {
  console.log(id, name, shipsToCountries, description);
  return (
    <div className={styles.outputData}>
      <p className={styles.id}>{id}</p>
      <p className={styles.handle}>{name}</p>
      <p className={styles.title}>{shipsToCountries}</p>
      <p className={styles.products}>{description}</p>
      <p className={styles.icon}></p>
    </div>
  )
}

export default OutputAllCollectionsData
