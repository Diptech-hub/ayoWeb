import { useState } from "react";
import "../styles/header.css";
import mbile from "../assets/mbile.png";
import imga2 from "../assets/imga2.png";
import image2 from "../assets/image2.png";
import top from "../assets/top.png";
import Vector from "../assets/Vector.png";
import { Link } from "react-router-dom";

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
          <Link className="nav-link" to="/work">
            Work
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
          <a className="close-button" onClick={toggleMenu}>
            Close
          </a>
        </div>
      )}
      <img className="mblimg" src={mbile} alt="my-img" />
      <div className="nav">
        <Link to="/work">
          <a href="">WORK</a>
        </Link>
        <Link to="/about">
          <a href="">ABOUT</a>
        </Link>
        <Link to="/blog">
          <a href="">BLOG</a>
        </Link>
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
          <a
            href="https://docs.google.com/document/d/1Cj0Q4EMEA4dGfhMHGWalRup9xo3O-0FULIxQPlrW2h8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv"
          >
            Download CV <img src={top} />
          </a>
        </div>
        <div className="bodyfootmbl">
          <a
            href="https://docs.google.com/document/d/1Cj0Q4EMEA4dGfhMHGWalRup9xo3O-0FULIxQPlrW2h8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv"
          >
            Download CV <img src={top} />
          </a>
          <h6>SCROLL TO DISCOVER</h6>
        </div>
      </div>
    </div>
  );
}

export default Header;
