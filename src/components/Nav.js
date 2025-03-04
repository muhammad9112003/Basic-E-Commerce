import logo from "../images/Logo1.avif";
import "./Nav.css";
function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100  fixed-top z-3">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={logo} className=" w-25 rounded-circle " />
        </a>
        <button
          class="navbar-toggler border-0 shadow-none "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center  links">
            <li class="nav-item ">
              <a
                class="nav-link  mx-3 fw-bolder active"
                aria-current="page"
                href="#"
              >
                | Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3 " aria-current="page" href="#products">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3" href="#about">
                About
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link mx-3 " aria-current="page" href="#contact">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
