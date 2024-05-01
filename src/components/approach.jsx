import CustomText from "./customHeader";
import ApproachCard from "./approachCard";
import Rectangle6458 from "../assets/Rectangle6458.png"
import "../styles/approach.css"

function Approach() {
  return (
    <div>
      <CustomText text="MY APPROACH" />
      <div className="approach-body">
        <div className="approach1">
          <img src={Rectangle6458} alt="me" />
          <p className="process">Process</p>
          <p>
            Every project is different and takes work to accomplish objectives.
            All that is necessary is the establishment of a process and guiding
            principles that aid in getting the best possible results.
          </p>
        </div>
        <div className="approach2">
          <ApproachCard
            paragraph1="Understanding     "
            paragraph2="Before I design, I make an effort to study as much as I can. I support the Why before How strategy. Understanding the issue at hand entails conducting research, gathering data, and doing everything else I can to feel connected to the project."
          />
          <ApproachCard
            paragraph1="Design Approach"
            paragraph2="Before moving on with development, I gather a few design directions, make prototypes, run usability tests, and calculate several UX metrics to assess the idea's viability."
          />
          <ApproachCard
            paragraph1="Development"
            paragraph2="To put the finished project into reality, I work with programmers. To ensure we have the finest possible solution, this entails going through quality assurance and testing."
          />
        </div>
      </div>
    </div>
  );
}

export default Approach;
