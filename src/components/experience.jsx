import "../styles/experience.css"
import img3 from "../assets/img3.png"
import Group37079 from "../assets/Group37079.png"

function Experience() {
  return (
    <div className="top">
      <div className="top-experience">
        <div className="experience1">
          <p>
            I CREATE <br />
            <span>EXPERIENCE</span>
          </p>
          <img src={img3} alt="my-image" />
        </div>
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
        <a href="#work">
          <img src={Group37079} /> LINKEDIN
        </a>
        <a href="#work">
          <img src={Group37079} /> TWITTER
        </a>
        <a href="#work">
          <img src={Group37079} /> BEHANCE
        </a>
      </div>
    </div>
  );
}

export default Experience;
