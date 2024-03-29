import StorefrontApi from "./components/StorefrontApi"
import CheckoutExtensibility from "./components/CheckoutExtensibility"
import AdminApi from "./components/AdminApi"
import { useActiveApi } from "@/app/context/ActiveApiProvider"
import styles from "../../styles/showApi.module.css";
import InputData from "./components/InputData";


function ShowApi() {
  const { activeApi } = useActiveApi();

  const getActiveApiComponent = () => {
    switch (activeApi) {
      case 'StorefrontApi':
        return <StorefrontApi />;
      case 'AdminApi':
        return <AdminApi />;
      case 'CheckoutExtensibility':
        return <CheckoutExtensibility />;
      default:
        return <div>No API selected</div>;
    }
  }

  return (
    <div className={styles.showApi}>
      <InputData />
      <div className={styles.showApiTable}>
        {getActiveApiComponent()}
      </div>
    </div>
  )
}

export default ShowApi
