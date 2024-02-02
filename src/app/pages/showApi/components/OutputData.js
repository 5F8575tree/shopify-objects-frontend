import styles from "../../../styles/outputData.module.css";

const OutputData = ({ id, handle, title, description }) => {
  console.log({ id, handle, title, description });
  return (
    <div className={styles.outputData}>
      <p>{handle}</p>
      <p>{id}</p>
      <p>{title}</p>
      <p className={styles.smallFont}>{description}</p>
      <p className={styles.lastChild}>ICON</p>
    </div>
  )
}

export default OutputData
