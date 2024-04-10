import "../styles/approachCard.css"

// eslint-disable-next-line react/prop-types
const ApproachCard = ({ paragraph1, paragraph2 }) => {
  return (
    <div className="approachCard">
      <span>{paragraph1}</span>
      <p>{paragraph2}</p>
    </div>
  );
};

export default ApproachCard;
