import styles from "../../../styles/apiOutputGrid.module.css";
import OutputData from "./OutputData";
import { useCollections } from '@/app/context/CollectionsContext';
import { useActiveQuery } from "@/app/context/ActiveQueryContext";

const OutputTable = () => {
  const { collections } = useCollections();
  const { activeQuery } = useActiveQuery();

  return (
    <div className={styles.apiOutputGrid}>
      <div className={styles.apiOutputGridHeaders}>
        <p>handle</p>
        <p>id</p>
        <p>title</p>
        <p>products</p>
        <p></p>
      </div>
      <div className={styles.apiOutputGridData}>
        {activeQuery === 'AllCollections' && collections.map((collection) => (
          <OutputData key={collection.id} {...collection} />
        ))}
        {activeQuery === 'AllProducts' && <div>All products</div>}
        {activeQuery === 'SingleProduct' && <div>Single product</div>}
        {activeQuery === 'Shop' && <div>Shop</div>}
        {activeQuery === 'SingleCollection' && <div>Single Collection</div>}
      </div>
    </div>
  );
};

export default OutputTable;
