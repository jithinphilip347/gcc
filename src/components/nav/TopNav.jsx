"use client";
import React, { useState } from "react";
import {
  IoCallOutline,
  IoMailOutline,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import ContactSideNav from "../nav/ContactSideNav";


const TopNav = () => {
  const [showContact, setShowContact] = useState(false);
  

  return (
    <>
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
                  href="https://www.facebook.com/people/gccacademy/61552640540223/"
                  target="_blank"
                  className="social-icon"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/gcc_gulfcoaching/"
                  target="_blank"
                  className="social-icon"
                >
                  <IoLogoInstagram />
                </a>
                {/* <a
                  href="https://youtube.com"
                  target="_blank"
                  className="social-icon"
                >
                  <IoLogoYoutube />
                </a> */}
              </div>

              <div className="TopNavEnquiryBtn">
                <button onClick={() => setShowContact(true)}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
          {showContact && (
        <div
          className="MenuRightOverlay"
          onClick={() => setShowContact(false)}
        ></div>
      )}
      <ContactSideNav  show={showContact}
        onClose={() => setShowContact(false)} />
    </>
  );
};

export default TopNav;
