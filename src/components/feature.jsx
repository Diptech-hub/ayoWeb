import CustomText from "./customHeader";
import Card from "./card";
import "../styles/feature.css";
// import img5 from "../assets/img5.png";
// import img8 from "../assets/img8.png";
// import img6 from "../assets/img6.png";
// import img9 from "../assets/img9.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import Group37079 from "../assets/Group37079.png";
import { motion } from "framer-motion";

function Feature() {
  return (
    <div className="top">
      <CustomText text="FEATURED WORKS" />
      <div className="feature">
        <div className="feature-list">
          <motion.p
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Useable
          </motion.p>
          <motion.p
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Equitable
          </motion.p>
          <motion.p
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Enjoyable
          </motion.p>
          <motion.p
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Useful
          </motion.p>
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
        <Card
          imgSrc={card1}
          text="Fintech Onboarding with Open Banking: A UX Case Study"
          text2="A study on the new Nigeria Open Banking rule for easy onboarding of users"
          imgSrc2={Group37079}
          href="https://medium.com/@tumise100/fintech-onboarding-with-open-banking-a-ux-case-study-9c86690c1a49"
        />
        <Card
          imgSrc={card2}
          text="iKooK: The new, easy way to book a private Chef"
          text2="A SAAS platform where people can book a private chefs and Chefs can register and offer their services"
          imgSrc2={Group37079}
          href="https://medium.com/design-bootcamp/ikook-private-chef-booking-made-easy-case-study-a21115b02497"
        />
        <Card
          imgSrc={card3}
          text="GROBUY: Supermarkets in one app"
          text2="Groceries shopping from different supermarkets in one app"
          imgSrc2={Group37079}
          href="https://medium.com/@tumise100/grobuy-a-solution-to-order-groceries-from-your-favourite-supermarket-5a695bc0c1ae"
        />
        <Card
          imgSrc={card4}
          text="Roamhome: Home cleaning made easy"
          text2="An applications that allow home cleaners to manage tasks, report and interact with home owners."
          imgSrc2={Group37079}
          href="https://www.behance.net/gallery/167273651/Roamhome-Home-cleaning-made-easy-(Case-Study)"
        />
        <Card
          className="last"
          imgSrc={card5}
          text="ikook Brand Identity Design"
          text2="Branding Identity design for ikook to communicate the company's value and look"
          imgSrc2={Group37079}
          href="https://www.behance.net/gallery/149113363/Ikook-Brand-Identity"
        />
      </div>
    </div>
  );
}

export default Feature;
