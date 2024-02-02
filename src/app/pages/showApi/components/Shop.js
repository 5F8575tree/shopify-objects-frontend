import styles from "@/app/styles/queries.module.css";
import { useActiveQuery } from "@/app/context/ActiveQueryContext";
import { useShop } from "@/app/context/ShopContext";

function Shop({ isActive }) {
  const { fetchShop } = useShop();
  const { updateActiveQuery } = useActiveQuery();

  const handleClick = () => {
    updateActiveQuery('Shop');
  }

  const handleFetchClick = () => {
    fetchShop();
  }

  const headerStyle = isActive ? styles.activeHeader : styles.inactiveHeader;

  return (
    <div className={styles.shop}>
      <h4 className={headerStyle} onClick={handleClick}>Shop</h4>
      <button className={styles.fetchButton} onClick={handleFetchClick}>Load Shop Info</button>
    </div>
  );
}

export default Shop;
