import styles from "../../../styles/apiOutputGrid.module.css";
import OutputData from "./OutputData";
import { useCollections } from '@/app/context/CollectionsContext';

const OutputTable = () => {
  const { collections } = useCollections();

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
        {collections.map((collection) => (
          <OutputData key={collection.id} {...collection} />
        ))}
      </div>
    </div>
  );
};


export default OutputTable
