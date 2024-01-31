import CredentialsInput from "@/app/pages/header/components/CredentialsInput";
import Bookmarked from "./components/Bookmarked";
import FetchBtn from "./components/FetchBtn";
import RateLimit from "./components/RateLimit";
import styles from "../../styles/navbar.module.css";
function Header() {
  return (
    <div className={styles.navbar}>
      <h1>Shopify Objects Map</h1>
      <div className={styles.navbarUserdata}>
        <CredentialsInput />
        <Bookmarked />
      </div>
      <div className={styles.navbarFetchdata}>
        <FetchBtn />
        <RateLimit />
      </div>
    </div>
  )
}

export default Header
