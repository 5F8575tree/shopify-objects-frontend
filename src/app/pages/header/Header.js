import CredentialsInput from "@/app/pages/header/components/CredentialsInput";
import Bookmarked from "./components/Bookmarked";
import FetchBtn from "./components/FetchBtn";
import RateLimit from "./components/RateLimit";
function Header() {
  return (
    <div className="navbar">
      <h1>Shopify Objects Map</h1>
      <div className="navbar-userdata">
        <CredentialsInput />
        <Bookmarked />
      </div>
      <div className="navbar-fetchdata">
        <FetchBtn />
        <RateLimit />
      </div>
    </div>
  )
}

export default Header
