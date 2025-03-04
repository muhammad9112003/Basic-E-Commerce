import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Landing from "./components/Landing.js";
import Slider from "./components/Slider.js";
import Products from "./components/Products.js";
import About from "./components/About.js";
import Shop from "./components/Shop.js";
import Contact from "./components/Contact.js";
import ProductDetails from "./components/ProductDetails.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Landing />
              <Slider />
              <Products />
              <About />
              <Contact />
            </>
          }
        />
        <Route path="shop" element={<Shop />} />
        <Route path="/product/:productID" element={<ProductDetails />} />
        <Route path="/shop/product/:productID" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}
export default App;
