import styles from "@/app/styles/queries.module.css";
import { useActiveQuery } from "@/app/context/ActiveQueryContext";

function Shop({ isActive }) {
  const { updateActiveQuery } = useActiveQuery();

  const handleClick = () => {
    updateActiveQuery('Shop');
  }

  const headerStyle = isActive ? styles.activeHeader : styles.inactiveHeader;

  return (
    <div className={styles.shop}>
      <h4 className={headerStyle} onClick={handleClick}>Shop</h4>
    </div>
  );
}

export default Shop;
