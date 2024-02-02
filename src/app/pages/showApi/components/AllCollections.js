import styles from "@/app/styles/queries.module.css";
import { useCollections } from '@/app/context/CollectionsContext';
import { useActiveQuery } from "@/app/context/ActiveQueryContext";

function AllCollections({ isActive }) {
  const { fetchCollections } = useCollections();
  const { updateActiveQuery } = useActiveQuery();

  const handleClick = () => {
    updateActiveQuery('AllCollections');
  }

  const handleFetchClick = () => {
    fetchCollections();
  }

  const headerStyle = isActive ? styles.activeHeader : styles.inactiveHeader;

  return (
    <div className={styles.allCollections}>
      <h4 className={headerStyle} onClick={handleClick}>All Collections</h4>
      <button className={styles.fetchButton} onClick={handleFetchClick}>Load Collections Info</button>
    </div>
  );
}

export default AllCollections;
