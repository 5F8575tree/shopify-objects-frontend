import SingleProduct from "./SingpleProduct";
import AllCollections from "./AllCollections";
import AllProducts from "./AllProducts";
import styles from '@/app/styles/inputData.module.css';
import SingleCollection from "./SingleCollection";
import Shop from "./Shop";
import { useActiveQuery } from "@/app/context/ActiveQueryContext";

const InputData = () => {
  const { activeQuery } = useActiveQuery();

  return (
    <div className={styles.inputData}>
      <SingleProduct isActive={activeQuery === 'SingleProduct'} />
      <AllProducts isActive={activeQuery === 'AllProducts'} />
      <Shop isActive={activeQuery === 'Shop'} />
      <SingleCollection isActive={activeQuery === 'SingleCollection'} />
      <AllCollections isActive={activeQuery === 'AllCollections'} />
    </div>
  );
}

export default InputData
