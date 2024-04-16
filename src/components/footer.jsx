import "../styles/footer.css";
import Group37079 from "../assets/Group37079.png";
import top from "../assets/top.png";

function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <div>
      <div className="footer-line"></div>
      <div className="footer-body">
        <p>AJAYI AYOBAMI © {currentDate}</p>
        <div className="footer-link">
          <a href="https://www.linkedin.com/in/ajayiayobami/" target="_blank" rel="noopener noreferrer">
            <img src={Group37079} alt="LinkedIn" /> LINKEDIN
          </a>
          <a href="https://twitter.com/Tumise100" target="_blank" rel="noopener noreferrer">
            <img src={Group37079} alt="Twitter" /> TWITTER
          </a>
          <a href="https://www.behance.net/tumise100" target="_blank" rel="noopener noreferrer">
            <img src={Group37079} alt="Behance" /> BEHANCE
          </a>
        </div>
        <a href="/">
          <img src={top} alt="Back to Top" /> BACK TO TOP
        </a>
      </div>
      <div className="footer-media">
        <a href="https://www.linkedin.com/in/ajayiayobami/">LI .</a>
        <a href="https://twitter.com/Tumise100">TW .</a>
        <a href="https://www.behance.net/tumise100">BE</a>
      </div>
    </div>
  );
}

export default Footer;
