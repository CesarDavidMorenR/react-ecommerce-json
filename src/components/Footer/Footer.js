import React from "react";
import "./Footer.css"
// import black_logo from '../../images/black_logo.png'

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="row">
          {/* <div className="footer-col-2">
            <img src={black_logo} alt="" />
            <p>
              No te digo trigo por no llamarte Rodrigor apetecan no te digo
              trigo por no llamarte Rodrigor
            </p>
          </div> */}

          <div className="footer-col-3">
            <h3>More discounts!</h3>
            <ul>
              <li>Coupons</li>
              <li>How to get more Discounts</li>
              <li>Affiliate for discounts</li>
            </ul>
          </div>

          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and IOS mobile phone.</p>
            <div className="app-logo">
              <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
              <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
            </div>
          </div>

          <div className="footer-col-4">
            <h3>Our socials</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Update to 2022 - Desk For programmers Copyright &copy;
        </p>
      </div>
    </div>
  );
}

export default Footer;
