import styles from "@/app/styles/allCollections.module.css";
import { useCollections } from '@/app/context/CollectionsContext';

function AllCollections() {
  const { fetchCollections } = useCollections();

  return (
    <div className={styles.allCollections}>
      <h4 onClick={fetchCollections}>All Collections</h4>
    </div>
  );
}

export default AllCollections;
