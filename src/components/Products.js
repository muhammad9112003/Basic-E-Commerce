import Product from "./Product";
import "./Products.css";
import { useEffect, useState } from "react";
function Products() {
  const api = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="Products text-center " id="products">
      <h1 className="fw-bolder head">Our Products</h1>
      <div className="container mt-4 d-flex justify-content-center">
        <div className="row d-flex justify-content-center align-items-center flex-wrap">
          {data.map((data) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center mb-3 "
                key={data.id}
              >
                <Product data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Products;
