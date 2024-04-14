import { useState } from "react";
import "../styles/header.css";
import mbile from "../assets/mbile.png";
import imga2 from "../assets/imga2.png";
import image2 from "../assets/image2.png";
import top from "../assets/top.png";
import Vector from "../assets/Vector.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <h5>AJAYI AYOBAMI</h5>
      <button className="mobile-button" onClick={toggleMenu}>
        <img src={Vector} alt="mobile-toogle" />
      </button>
      {isMenuOpen && (
        <div className="mobile-nav">
          <a>Work</a>
          <a>About</a>
          <a>Blog</a>
          <a className="close-button" onClick={toggleMenu}>
            Close
          </a>
        </div>
      )}
      <img className="mblimg" src={mbile} alt="my-img" />
      <div className="nav">
        <h6>WORK</h6>
        <h6>ABOUT</h6>
        <h6>BLOG</h6>
      </div>
      <div className="main">
        <img className="bimg" src={imga2} alt="my-image" />
        <div className="ajayi">
          <p>AJAYI AYOBAMI</p>
          <img src={image2} alt="my-image" />
        </div>
        <div className="product">
          <h5>certified</h5>
          <p>PRODUCT DESIGNER</p>
        </div>
        <div className="web">
          <p>& WEB DESIGNER</p>
          <h5>Based in Nigeria</h5>
        </div>
        <div className="bodyfoot">
          <h6>SCROLL TO DISCOVER</h6>
          <h6 className="cv">
            Download CV <img src={top} />{" "}
          </h6>
        </div>
        <div className="bodyfootmbl">
          <h6 className="cv">
            Download CV <img src={top} />{" "}
          </h6>
          <h6>SCROLL TO DISCOVER</h6>
        </div>
      </div>
    </div>
  );
}

export default Header;
