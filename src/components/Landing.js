import { Link } from "react-router";
import "./Landing.css";
function Landing() {
  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center  landing  "
        id="home"
      >
        <div className="text text-center ">
          <h1 className=" text-black text-center mt-5 fw-bold p-3">
            welcome in sale store
          </h1>
          <p className=" fs-5 d-block p-2">We are here for your convenience</p>
          <Link className="btn mt-3 w-25 fs-5" to="/shop">
            shop now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing;
