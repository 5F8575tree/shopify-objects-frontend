import styles from "@/app/styles/queries.module.css";
import { useActiveQuery } from "@/app/context/ActiveQueryContext";
import { useShop } from "@/app/context/ShopContext";

function Shop({ isActive }) {
  const { fetchShop } = useShop();
  const { updateActiveQuery } = useActiveQuery();

  const handleClick = () => {
    fetchShop();
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
