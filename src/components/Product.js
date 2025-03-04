import { Link } from "react-router";
import "./Product.css";
function Product(props) {
  const { data } = props;
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src={data.image}
              class="card-img-top w-100 h-50"
              alt="Card Image"
            />
            <div class="card-body">
              <h4 class="card-title mt-2 fs-6 fw-bolder">{data.title}</h4>
              <p class="card-text p-2 ">
                Old Price :{" "}
                <del>
                  <strong className=" p-2">{data.price}</strong>
                </del>
              </p>
              <span className=" text-warning">
                {" "}
                count : {data.rating.count}{" "}
              </span>
            </div>
          </div>
          <div class="flip-card-back card d-flex align-items-center justify-content-center">
            <p>rate : {data.rating.rate} / 5</p>
            <Link to={`product/${data.id}`} class="btn">
              View more details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
