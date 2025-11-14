import React from "react";
import Image from "next/image";

import FooterLogo from "../../assets/images/logo/logo-white.png";
import DesignLogo from "../../assets/images/logo/design-logo.png";

import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="container">
        <div className="FooterMain">
          <div className="FooterBox">
            <div className="FooterLogo">
              <Image src={FooterLogo} alt="" />
            </div>

            <p className="FooterDesc">
              Providing trusted coaching for DHA, HAAD, PROMETRIC, OMAN, MOH, and other healthcare licensing exams in Kerala.
            </p>
            <p className="FollowHead">Follow Us</p>
            <div className="FooterSocialIcons">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <IoLogoInstagram />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="FooterBox">
            <h4 className="FooterHead">Quicklinks</h4>
            <ul>
              <li>
                <FaChevronRight /> Home
              </li>
              <li>
                <FaChevronRight /> Course
              </li>
              <li>
                <FaChevronRight /> About
              </li>
              <li>
                <FaChevronRight /> Contact
              </li>
            </ul>
          </div>

          <div className="FooterBox">
            <h4 className="FooterHead">Contact</h4>

            <div className="ContactAddressBox">
              <div className="ConnectBox">
                <HiOutlineLocationMarker />
                <a>Building No. 625/10Keezhillam, Pin - 683541, Kerala India</a>
              </div>

              <div className="ConnectBox">
                <HiOutlinePhone />
                  <p className="numberBox">
                    <a href=""> +91-79079 74340</a>
                    <a href="">+91-70125 84203</a>
                  </p>
                
              </div>

              <div className="ConnectBox">
                <HiOutlineMail />
                <a href="">info@gccacademy.net</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="FooterBottom">
        <div className="container">
          <div className="FooterMainBottom">
            <div className="CopyRightBox">
              <p>copyright© 2025 all rights reserved</p>
            </div>

            <div className="DesignWith">
              <p>Design By</p>
              <Image src={DesignLogo} alt="" className="DesignLogo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
