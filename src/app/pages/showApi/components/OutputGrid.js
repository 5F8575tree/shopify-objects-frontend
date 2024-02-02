import styles from "../../../styles/apiOutputGrid.module.css";
import OutputAllCollectionsData from "./OutputAllCollectionsData";
import OutputAllProductsData from "./OutputAllProductsData";
import OutputShopData from "./OutputShopData";
import { useShop } from '@/app/context/ShopContext';
import { useCollections } from "@/app/context/CollectionsContext";
import { useActiveQuery } from "@/app/context/ActiveQueryContext";
import HeaderForAllCollections from "./HeaderForAllCollections";
import HeaderForAllProducts from "./HeaderForAllProducts";
import HeaderForShop from "./HeaderForShop";
import HeaderForSingleCollection from "./HeaderForSingleCollection";
import HeaderForSingleProduct from "./HeaderForSingleProduct";
import { useProducts } from "@/app/context/ProductsContext";

const OutputTable = () => {
  const { collections } = useCollections();
  const { products } = useProducts();
  const { activeQuery } = useActiveQuery();
  const { shop } = useShop();

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
          <OutputAllCollectionsData key={collection.id} {...collection} />
        ))}
        {activeQuery === 'AllProducts' && products.map((product) => (
          <OutputAllProductsData key={product.id} {...product} />
        ))}
        {activeQuery === 'SingleProduct' && <div>Single product</div>}
        {activeQuery === 'Shop' &&
          <OutputShopData key={shop.id} {...shop} />
        }
        {activeQuery === 'SingleCollection' && <div>Single Collection</div>}
      </div>
    </div>
  );
};

export default OutputTable;
