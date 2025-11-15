import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";

const HomeContact = () => {
  return (
    <div id="HomeContact">
      <div className="container">
        <div className="HomeAboutHead">
          <h2>
            Contact <span>Us</span>
          </h2>
        </div>

        <div className="ContactMain">
          <div className="ContactMainLeft">
            <p className="ContactTitle">Get in Touch With GCC Academy</p>

            <p className="ContactDesc">
              Kerala’s leading institute for DHA, HAAD, PROMETRIC, SPLE, OMAN,
              and MOH exam preparation.
            </p>

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
                <a>info@gccacademy.net</a>
              </div>
            </div>
          </div>

          <div className="ContactMainRight">
            <form className="ContactFormGroup">
              <div className="ContactFormBox">
                <input type="text" placeholder="Name" />
              </div>

              <div className="ContactFormBox">
                <input type="email" placeholder="Your Email" />
              </div>

              <div className="ContactFormBox">
                <input type="text" placeholder="Your Phone Number" />
              </div>

              <div className="ContactFormBox">
                <textarea placeholder="Additional Info"></textarea>
              </div>

              <div className="ContactBtn">
                <button type="submit">Get Quote</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
