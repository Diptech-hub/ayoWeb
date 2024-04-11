import "../styles/footer.css";

function Footer() {
  const currentDate = new Date().getFullYear();

  return (
    <div>
      <div className="footer-line"></div>
      <div className="footer-body">
        <p>AJAYI AYOBAMI © {currentDate}</p>
        <div className="footer-link">
          <a href="#work">
            <img src="/assets/Group 37079.png" /> LINKEDIN
          </a>
          <a href="#work">
            <img src="/assets/Group 37079.png" /> TWITTER
          </a>
          <a href="#work">
            <img src="/assets/Group 37079.png" /> BEHANCE
          </a>
        </div>
        <a href="#work">
          <img src="/assets/top.png" /> BACK TO TOP
        </a>
        <div className="footer-media">
          <a href="">LI .</a>
          <a href="">TW .</a>
          <a href="">BE</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
