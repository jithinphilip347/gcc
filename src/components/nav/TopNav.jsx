import React from "react";
import {
  IoCallOutline,
  IoMailOutline,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";

const TopNav = () => {
  return (
    <div id="TopNav">
      <div className="container">
        <div className="TopNavMain">
          <div className="TopNavMainLeft">
            <div className="EmargancyCall">
              <IoCallOutline className="TopNavIcon" />
              <p>
                <a href="tel:+917012584203">+91 7012584203</a>
              </p>
            </div>
            <div className="EmargancyMail">
              <IoMailOutline className="TopNavIcon" />
              <p>
                <a href="mailto:info@gccacademy.net">info@gccacademy.net</a>
              </p>
            </div>
          </div>

          <div className="TopNavMainRight">
            <div className="TopNavSocialBox">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <IoLogoInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <IoLogoYoutube />
              </a>
            </div>
            <div className="TopNavEnquiryBtn">
              <button>Get Enquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
