import "../styles/card.css";

// eslint-disable-next-line react/prop-types
const Card = ({ className = "", imgSrc, text }) => {
  return (
    <div className={`card ${className}`}>
      <img src={imgSrc} alt="Image" />
      <a href="">{text}</a>
    </div>
  );
};

export default Card;
