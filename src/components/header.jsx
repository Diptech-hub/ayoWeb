import { useState } from "react";
import "../styles/header.css";
import mbile from "../assets/mbile.png";
import imga2 from "../assets/imga2.png";
import image2 from "../assets/image2.png";
import Group37079 from "../assets/Group37079.png";
import Vector from "../assets/Vector.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        <motion.div
          className="mobile-nav"
          initial={{ x: "100%", opacity: 0 }} // Off-screen to the right, invisible
          animate={{ x: 0, opacity: 1 }} // Slide in and become visible
          exit={{ x: "100%", opacity: 0 }} // Slide out and fade out
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        >
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
        </motion.div>
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
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bimg"
          src={imga2}
          alt="my-image"
        />
        <div className="ajayi">
          <motion.p
            initial={{ x: "-100%", opacity: 0 }} // Start off-screen to the left
            animate={{ x: 0, opacity: 1 }} // Slide in and fade in
            transition={{ duration: 1, ease: "easeOut" }}
          >
            AJAYI AYOBAMI
          </motion.p>
          <img src={image2} alt="my-image" />
        </div>
        <div className="product">
          <h5>certified</h5>
          <motion.p
            initial={{ x: "100%", opacity: 0 }} // Start off-screen to the right
            animate={{ x: 0, opacity: 1 }} // Slide in and fade in
            transition={{ duration: 1, ease: "easeOut" }}
          >
            PRODUCT DESIGNER
          </motion.p>
        </div>
        <div className="web">
          <motion.p
            initial={{ y: "-100%", opacity: 0 }} // Start off-screen to the up
            animate={{ y: 0, opacity: 1 }} // Slide in and fade in
            transition={{ duration: 1, ease: "easeOut" }}
          >
            & WEB DESIGNER
          </motion.p>
          <h5>Based in Nigeria</h5>
        </div>
        <div className="bodyfoot">
          <motion.a
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://calendly.com/tumise100/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="cv"
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Let's talk
            <img src={Group37079} />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://docs.google.com/document/d/1Cj0Q4EMEA4dGfhMHGWalRup9xo3O-0FULIxQPlrW2h8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv"
          >
            Download CV <img src={Group37079} />
          </motion.a>
        </div>
        <div className="bodyfootmbl">
          <motion.a
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://docs.google.com/document/d/1Cj0Q4EMEA4dGfhMHGWalRup9xo3O-0FULIxQPlrW2h8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv"
          >
            Download CV <img src={Group37079} />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://calendly.com/tumise100/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="cv"
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Let's talk
            <img src={Group37079} />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Header;
