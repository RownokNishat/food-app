import React from "react";
import logo from "../../new-assets/logo/Tasty-food-vector-icon.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-base-content text-white p-32">
        <div>
          <img src={logo} alt="" style={{ height: "100px", width: "100px" }} />
          <p>
            Tasty Food .com
            <br />
            Providing tasty food since 2009
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="/" className="link link-hover">
            Branding
          </a>
          <a href="/" className="link link-hover">
            Design
          </a>
          <a href="/" className="link link-hover">
            Marketing
          </a>
          <a href="/" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Conncted by</span>
          <a href="/" className="link link-hover">
            About us-tastyfood@gmail.com
          </a>
          <a href="/" className="link link-hover">
            Contact-01714920112
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="/" className="link link-hover">
            Terms of use
          </a>
          <a href="/" className="link link-hover">
            Privacy policy
          </a>
          <a href="/" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
