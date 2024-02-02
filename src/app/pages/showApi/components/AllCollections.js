import styles from "@/app/styles/queries.module.css";
import { useCollections } from '@/app/context/CollectionsContext';
import { useActiveQuery } from "@/app/context/ActiveQueryContext";

function AllCollections({ isActive }) {
  const { fetchCollections } = useCollections();
  const { updateActiveQuery } = useActiveQuery();

  const handleClick = () => {
    fetchCollections();
    updateActiveQuery('AllCollections');
  }

  const headerStyle = isActive ? styles.activeHeader : styles.inactiveHeader;

  return (
    <div className={styles.allCollections}>
      <h4 className={headerStyle} onClick={handleClick}>All Collections</h4>
    </div>
  );
}

export default AllCollections;
