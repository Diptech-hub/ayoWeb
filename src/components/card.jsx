import "../styles/card.css";

// eslint-disable-next-line react/prop-types
const Card = ({ className = "", imgSrc, text, href, target, rel }) => {
  return (
    <div className={`card ${className}`}>
      <img src={imgSrc} alt="Image" />
      <a href={href} target={target} rel={rel}>{text}</a>
    </div>
  );
};

export default Card;
