import "./styles/header.css";

function Header() {
  return (
    <div>
      <h5>AJAYI AYOBAMI</h5>
      <div className="nav">
        <div className="navcontent">
          <h6>WORK</h6>
          <h6>ABOUT</h6>
          <h6>BLOG</h6>
        </div>
      </div>
      <div className="main">
        <img className="bimg" src="/imga2.png" alt="my-image" />
        <div className="ajayi">
          <p>AJAYI AYOBAMI</p>
          <img src="/image (2).png" alt="my-image" />
        </div>
        <div className="product">
          <h5>certified</h5>
          <p>PRODUCT DESIGNER</p>
        </div>
        <div className="web">
          <p>& WEB DESIGNER</p>
          <h5>Based in Nigeria</h5>
        </div>
        <div className="bodyfoot">
        <button>Scrool</button>
        <button className="cv">Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
