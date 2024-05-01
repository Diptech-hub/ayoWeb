/* eslint-disable react/prop-types */
import "../styles/card.css";
const Card = ({ className = "", imgSrc, imgSrc2, text, text2, href }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card">
        <div className="card-img">
          <img src={imgSrc} alt="Image" />
        </div>
        <div className="card-body">
          <p>{text}</p>
          <h6>{text2}</h6>
          <a href={href} target="_blank" rel="noopener noreferrer">
            Read Case Study <img src={imgSrc2} alt="Image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
