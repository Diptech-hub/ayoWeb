import "../styles/customHeader.css";

// eslint-disable-next-line react/prop-types
const CustomText = ({ text }) => {
  return (
    <div className="custom-text">
      <div className="horizontal-line"></div>
      <div className="marquee">
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default CustomText;
