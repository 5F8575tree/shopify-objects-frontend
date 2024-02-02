import QueryTerm from "./QueryTerm";
import AllCollections from "./AllCollections";
import AllProducts from "./AllProducts";
import styles from '@/app/styles/inputData.module.css';

const InputData = () => {
  return (
    <div className={styles.inputData}>
      <QueryTerm />
      <AllProducts />
      <AllCollections />
    </div>
  );
}

export default InputData
