import styles from "@/app/styles/queries.module.css";
import { useActiveQuery } from "@/app/context/ActiveQueryContext";

function SingleProduct({ isActive }) {
  const { updateActiveQuery } = useActiveQuery();

  const handleClick = () => {
    updateActiveQuery('SingleProduct');
  }

  const headerStyle = isActive ? styles.activeHeader : styles.inactiveHeader;

  return (
    <div className={styles.singleProduct}>
      <h4 className={headerStyle} onClick={handleClick}>Single Product</h4>
    </div>
  );
}

export default SingleProduct;
