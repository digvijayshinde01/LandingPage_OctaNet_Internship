import React from 'react';
import github from '../assets/github.png';
import insta from '../assets/instagram.png';
import linkedn from '../assets/linkedin.png';
import logo from '../assets/logo.png';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer_container">
      <hr />
      <div className="footer">
        <div className="social_links">
          <img src={github} alt="" />
          <img src={insta} alt="" />
          <img src={linkedn} alt="" />
        </div>

        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
