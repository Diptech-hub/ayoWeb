/* eslint-disable react/prop-types */
import "../styles/card.css";
import { motion } from "framer-motion";

const Card = ({ className = "", imgSrc, imgSrc2, text, text2, href }) => {
  return (
    <motion.div
      className={`card ${className}`}
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animate to final state
      transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      }} // Animation on hover
      whileTap={{ scale: 0.95 }} // Animation on click
    >
      <div className="card">
        <div className="card-img">
          <motion.img
            src={imgSrc}
            alt="Image"
            whileHover={{ scale: 1.05 }} // Slight zoom on hover
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="card-body">
          <p>{text}</p>
          <h6>{text2}</h6>
          <a href={href} target="_blank" rel="noopener noreferrer">
            Read Case Study{" "}
            <motion.img
              src={imgSrc2}
              alt="Image"
              whileHover={{ rotate: 15 }} // Rotate the icon slightly on hover
              transition={{ duration: 0.3 }}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
