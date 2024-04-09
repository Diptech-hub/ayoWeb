import "../styles/customHeader.css";

// eslint-disable-next-line react/prop-types
const CustomText = ({ text }) => {
  return (
    <div className="custom-text">
      <div className="horizontal-line"></div>
      <p>{text}</p>
      <div className="horizontal-line"></div>
    </div>
  );
};

export default CustomText;
