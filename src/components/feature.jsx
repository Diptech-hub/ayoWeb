import CustomText from "./customHeader";
import Card from "./card";
import "../styles/feature.css";
import img5 from "../assets/img5.png"
import img8 from "../assets/img8.png"
import img6 from "../assets/img6.png"
import img9 from "../assets/img9.png"

function Feature() {
  return (
    <div className="top">
      <CustomText text="FEATURED WORKS FEATURED WORKS FEATURED WORKS" />
      <div className="feature">
        <div className="feature-list">
          <p>Useable</p>
          <p>Equitable</p>
          <p>Enjoyable</p>
          <p>Useful</p>
        </div>
        <div className="feature-content">
          <p>
            As a UI/UX & Web Designer, I prioritize achieving specific goals in
            my work. My expertise lies in creating visually appealing designs
            that cater to user preferences, ensuring optimal user experiences.
            By transforming user-submitted data into design drafts, I
            consistently enhance website and app performance.
            <br /> My design skills and ability to gather and analyze user
            feedback enable me to create intuitive and user-friendly designs
            that exceed expectations. I take pride in delivering exceptional
            quality in every project, tailoring each design solution to meet the
            specific needs of my clients.
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <Card className="card1" imgSrc={img5} text="ROAMHOME CARETAKER APP" />
          <Card className="card3" imgSrc={img8} text="DELLRY DELIVERY APP" />
        </div>
        <div className="card">
          <Card className="card2" imgSrc={img6} text="IKOOK CHEF BOOKING APP" />
          <Card className="card4" imgSrc={img9} text="GROCERY MARKETPLACE" />
        </div>
      </div>
    </div>
  );
}

export default Feature;
