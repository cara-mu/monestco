import * as React from "react";
import logo from "../assets/logo_footer.png";
import logoFacebook from "../assets/footer_facebook.svg";
import logoTwitter from "../assets/footer_twitter.svg";
import logoInstagram from "../assets/footer_instagram.svg";
import logoTiktok from "../assets/footer_tiktok.svg";
import logoLinkedin from "../assets/footer_linkedin.svg";

import logoFacebookNavy from "../assets/facebook_navy.svg";
import logoTwitterNavy from "../assets/twitter_navy.svg";
import logoInstagramNavy from "../assets/instagram_navy.svg";
import logoTiktokNavy from "../assets/tiktok_navy.svg";
import logoLinkedinNavy from "../assets/linkedin_navy.svg";

import circleC from "../assets/circle_c.svg";
import circleCNavy from "../assets/copyRight-navy.svg";
import { useMediaQuery } from "@material-ui/core";

import "../styles/Footer.css";

function FooterForm() {
  return (
    <div className="right-block">
      <div className="footer-sign-up-text">
        Stay updated on our newest features!
      </div>
      <form className="footer-sign-up-form">
        <input
          type="text"
          className="footer-sign-up-text-input"
          placeholder="Your email address"
        ></input>
        <button type="submit" className="footer-sign-up-submit-input">
          Sign Up
        </button>
      </form>
    </div>
  );
}

function SocialMedia({ isMobile }) {
  return (
    <div className="social-media-list">
      <img src={isMobile ? logoFacebookNavy : logoFacebook}></img>
      <img src={isMobile ? logoTwitterNavy : logoTwitter}></img>
      <img src={isMobile ? logoInstagramNavy : logoInstagram}></img>
      <img src={isMobile ? logoLinkedinNavy : logoLinkedin}></img>
      <img src={isMobile ? logoTiktokNavy : logoTiktok}></img>
    </div>
  );
}

function Rights({ isMobile }) {
  return (
    <div className="footer-rights">
      <img src={isMobile ? circleCNavy : circleC}></img>
      <div className="footer-rights-text">2021 Monest All rights reserved.</div>
    </div>
  );
}

function Footer() {
  const isMobile = useMediaQuery("(max-width:767px)");

  if (isMobile) {
    return (
      <div className="footer-main">
        <div className="footer-content">
          <div className="top-list-wrapper">
            <div className="top-list">
              <div className="left-block">
                <img className="logo-image" src={logo}></img>
              </div>
              <FooterForm />
            </div>
            <div className="site-list">
              <div className="list-item">About Us</div>
              <div className="list-item">Contact</div>
              <div className="list-item">FAQ</div>
              <div className="list-item">Donate</div>
            </div>
          </div>
          <div className="mobile-bottom-wrapper">
            <SocialMedia isMobile={isMobile} />
            <Rights isMobile={isMobile} />
            <div className="site-list-bottom">
              <div className="list-item-bottom">Privacy Policy</div>
              <div className="list-item-bottom">Terms & Conditions</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="footer-main">
        <div className="footer-content">
          <div className="top-list-wrapper">
            <div className="top-list">
              <div className="left-block">
                <img className="logo-image" src={logo}></img>
                <SocialMedia />
              </div>
              <FooterForm />
            </div>
            <div className="site-list">
              <a className="list-item" href="/aboutus">About Us</a>
              <a className="list-item" href="/contactus">Contact</a>
              <a className="list-item" href="/faq">FAQ</a>
              <a className="list-item" href="/privacypolicy">Privacy Policy</a>
              <div className="list-item">Donate</div>
              <a className="list-item" href="/thankyou">Terms & Conditions</a>
            </div>
          </div>
          <Rights />
        </div>
      </div>
    );
  }
}

export default Footer;
