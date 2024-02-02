import styles from "@/app/styles/queries.module.css";
import { useProducts } from '@/app/context/ProductsContext';
import { useActiveQuery } from "@/app/context/ActiveQueryContext";

function AllProducts({ isActive }) {
  const { fetchProducts } = useProducts();
  const { updateActiveQuery } = useActiveQuery();

  const handleClick = () => {
    updateActiveQuery('AllProducts');
  }

  const handleFetchClick = () => {
    fetchProducts();
  }

  const headerStyle = isActive ? styles.activeHeader : styles.inactiveHeader;

  return (
    <div className={styles.allProducts}>
      <h4 className={headerStyle} onClick={handleClick}>All Products</h4>
      <button className={styles.fetchButton} onClick={handleFetchClick}>Load Products Info</button>
    </div>
  );
}

export default AllProducts;
