import styles from "@/app/styles/queries.module.css";
import { useActiveQuery } from "@/app/context/ActiveQueryContext";

function AllProducts({ isActive }) {
  const { updateActiveQuery } = useActiveQuery();

  const handleClick = () => {
    updateActiveQuery('AllProducts');
  }

  const headerStyle = isActive ? styles.activeHeader : styles.inactiveHeader;

  return (
    <div className={styles.allProducts}>
      <h4 className={headerStyle} onClick={handleClick}>All Products</h4>
    </div>
  );
}

export default AllProducts;
