import "../styles/header.css"

function Header() {
  return (
    <div>
      <h5>AJAYI AYOBAMI</h5>
      <img className="mblimg" src="/assets/mbile img.png" alt="my-img" />
      <div className="nav">
        <h6>WORK</h6>
        <h6>ABOUT</h6>
        <h6>BLOG</h6>
      </div>
      <div className="main">
        <img className="bimg" src="/assets/imga2.png" alt="my-image" />
        <div className="ajayi">
          <p>AJAYI AYOBAMI</p>
          <img src="/assets/image (2).png" alt="my-image" />
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
          <h6>SCROLL TO DISCOVER</h6>
          <h6 className="cv">Download CV <img src="/assets/Group 37079.png" /> </h6>
        </div>
        <div className="bodyfootmbl">
          <h6 className="cv">Download CV <img src="/assets/Group 37079.png" /> </h6>
          <h6>SCROLL TO DISCOVER</h6>
        </div>
      </div>
    </div>
  );
}

export default Header;
