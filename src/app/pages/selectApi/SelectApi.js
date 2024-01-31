import styles from "../../styles/select.module.css";
import { useActiveApi } from "../../context/ActiveApiProvider";

function SelectApi() {
  const { activeApi, setActiveApi } = useActiveApi();

  // Function to check if an API is active and return the corresponding class
  const isActive = (apiName) => activeApi === apiName ? styles.active : '';

  return (
    <div className={styles.select}>
      <h3 className={isActive('StorefrontApi')} onClick={() => setActiveApi('StorefrontApi')}>Storefront API</h3>
      <h3 className={isActive('AdminApi')} onClick={() => setActiveApi('AdminApi')}>Admin API</h3>
      <h3 className={isActive('CheckoutExtensibility')} onClick={() => setActiveApi('CheckoutExtensibility')}>Checkout Extensibility</h3>
    </div>
  );
}

export default SelectApi;
