import { Link } from "react-router";
import "./Shop.css";
import Products from "./Products";
function Shop() {
  return (
    <>
      <div className=" container-fluid shop ">
        <h1 className="text-center head"> hello in shop page</h1>
        <Products />
        <Link className=" btn position-fixed tohome" to="/">
          home
        </Link>
      </div>
    </>
  );
}
export default Shop;
