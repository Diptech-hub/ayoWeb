import "../styles/experience.css";
import img3 from "../assets/img3.png";
import Group37079 from "../assets/Group37079.png";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="top">
      <div className="top-experience">
        <motion.div 
       initial={{ x: "-100%", opacity: 0 }} // Start off-screen to the left
  whileInView={{ x: 0, opacity: 1 }} // Slide in and fade in while in view
  transition={{ duration: 1, ease: "easeOut" }}
        className="experience1">
          <p>
            I CREATE <br />
            <span>EXPERIENCE</span>
          </p>
          <img src={img3} alt="my-image" />
        </motion.div>
        <div className="experience2">
          <p>
            A designer with technical experience who focuses on creating user
            interfaces for digital products. <br />I provide simple,
            approachable solutions with a focus on clean design.
          </p>
          <p>
            To improve in both my personal and professional life, I am changing
            and learning new skills. Continuous change necessitates continuous
            adaptability.
          </p>
        </div>
      </div>
      <div className="experience3">
        <motion.a
          whileHover={{
            scale: 1.4,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/ajayiayobami/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Group37079} /> LINKEDIN
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.4,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          href="https://twitter.com/Tumise100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Group37079} /> TWITTER
        </motion.a>
        <motion.a
          whileHover={{
            scale: 1.4,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
          href="https://www.behance.net/tumise100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Group37079} /> BEHANCE
        </motion.a>
      </div>
    </div>
  );
}

export default Experience;
