import "./About.css";
import about from "../images/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
function About() {
  return (
    <>
      <div className="about" id="about">
        <h1 className="head text-center text-warning mt-4 aboutHead mb-0">
          {" "}
          about us{" "}
        </h1>
        <div className="content container mt-5 mb-5 d-flex justify-content-between align-items-center flex-lg-row flex-column">
          <img src={about} className=" w-75 rounded-5 mx-3 " alt="" />
          <span className="icon-about"></span>
          <div className="text-about text-center  w-100 fs-5 mx-3 mt-2 mb-0">
            Welcome to our e-commerce platform, where convenience, quality, and
            innovation come together to create an exceptional shopping. Welcome
            to our e-commerce platform, where convenience, quality, and
            innovation come together to create an exceptional shopping. Welcome
            to our e-commerce platform, where convenience, quality.
          </div>
        </div>
        <div className=" socials container p-5 d-flex justify-content-center">
          <FontAwesomeIcon
            icon={faFacebook}
            color="blue"
            className=" me-5 fs-1 social text-center d-flex justify-content-center  "
          />
          <FontAwesomeIcon
            icon={faTwitter}
            color="#1DA1F2"
            className=" me-5 fs-1 social  "
          />
          <FontAwesomeIcon
            icon={faInstagram}
            color="#E1306C"
            className=" me-5 fs-1 social "
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#0077B5"
            className=" me-5 fs-1 social "
          />
          <FontAwesomeIcon
            icon={faGithub}
            color="red"
            className=" me-5 fs-1 social "
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            color="white"
            className=" me-0 fs-1 social "
          />
        </div>
      </div>
    </>
  );
}
export default About;
