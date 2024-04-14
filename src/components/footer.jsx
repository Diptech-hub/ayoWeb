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
        <a href="#work">
          <img src={top} /> BACK TO TOP
        </a>
      </div>
        <div className="footer-media">
          <a href="">LI .</a>
          <a href="">TW .</a>
          <a href="">BE</a>
        </div>
    </div>
  );
}

export default Footer;
