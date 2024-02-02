import styles from "@/app/styles/queries.module.css";
import { useActiveQuery } from "@/app/context/ActiveQueryContext";

function SingleCollection({ isActive }) {
  const { updateActiveQuery } = useActiveQuery();

  const handleClick = () => {
    updateActiveQuery('SingleCollection');
  }

  const headerStyle = isActive ? styles.activeHeader : styles.inactiveHeader;

  return (
    <div className={styles.singleCollection}>
      <h4 className={headerStyle} onClick={handleClick}>Single Collection</h4>
    </div>
  );
}

export default SingleCollection;
