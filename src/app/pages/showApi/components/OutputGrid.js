import styles from "../../../styles/apiOutputGrid.module.css";
import OutputData from "./OutputData";

const OutputTable = () => {
  return (
    <div className={styles.apiOutputGrid}>
      <div className={styles.apiOutputGridHeaders}>
        <p>handle</p>
        <p>id</p>
        <p>title</p>
        <p>description</p>
        <p>copy</p>
      </div>
      <div className={styles.apiOutputGridData}>
        <OutputData />
        <OutputData />
        <OutputData />
        <OutputData />
        <OutputData />
        <OutputData />
        <OutputData />
      </div>
    </div>
  )
}

export default OutputTable
