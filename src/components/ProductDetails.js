import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Product from "./Product";

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const api = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(`${api}/${params.productID}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <>
      <div className=" body">
        <div className="details bg-warning ">
          <Link
            className=" btn position-fixed tohome end-2 bottom-2 bg-black text-warning"
            to="/"
          >
            To home
          </Link>
          <div className="container p-3 d-flex justify-content-center align-items-center flex-column ">
            <p className=" text-center fw-bolder fs-3">{product.category}</p>
            <div className="Detailsimage me-4">
              <img src={product.image} className=" mt-1 w-100 rounded-3  " />
            </div>
            <div className="detailsContent">
              <h1 className="detailT w-50 text-center m-auto my-3 fs-2 ">
                {product.title}
              </h1>
              <h3 className=" text-center my-3">{product.price}$ </h3>
              <p className=" lh-lg fw-lighter">{product.description}</p>
              {/* <div className=" fw-bolder"> rating : {product.rating.rate}</div>
              <div className=" fw-bolder">available :{product.rating.count}</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
