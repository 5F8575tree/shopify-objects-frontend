import styles from "../../../styles/apiOutputGrid.module.css";
import OutputData from "./OutputData";
import { useCollections } from '@/app/context/CollectionsContext';
import { useActiveQuery } from "@/app/context/ActiveQueryContext";
import HeaderForAllCollections from "./HeaderForAllCollections";
import HeaderForAllProducts from "./HeaderForAllProducts";
import HeaderForShop from "./HeaderForShop";
import HeaderForSingleCollection from "./HeaderForSingleCollection";
import HeaderForSingleProduct from "./HeaderForSingleProduct";

const OutputTable = () => {
  const { collections } = useCollections();
  const { activeQuery } = useActiveQuery();

  return (
    <div className={styles.apiOutputGrid}>
      <div className={styles.apiOutputGridHeaders}>
        {activeQuery === 'AllCollections' && <HeaderForAllCollections />}
        {activeQuery === 'AllProducts' && <HeaderForAllProducts />}
        {activeQuery === 'SingleProduct' && <HeaderForSingleProduct />}
        {activeQuery === 'SingleCollection' && <HeaderForSingleCollection />}
        {activeQuery === 'Shop' && <HeaderForShop />}
      </div>
      <div className={styles.apiOutputGridData}>
        {activeQuery === 'AllCollections' && collections.map((collection) => (
          <OutputData key={collection.id} {...collection} />
        ))}
        {activeQuery === 'AllProducts' && <div>All products</div>}
        {activeQuery === 'SingleProduct' && <div>Single product</div>}
        {activeQuery === 'Shop' && <div>Shop</div>}
        {activeQuery === 'SingleCollection' && <div>Single Collection</div>}
      </div>
    </div>
  );
};

export default OutputTable;
