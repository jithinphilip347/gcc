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
          {/* LEFT SIDE */}
          <div className="ContactMainLeft">
            <p className="ContactTitle">
              For Further Info, Please Contact Us With This Line
            </p>

            <p className="ContactDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>

            <div className="ContactAddressBox">
              <div className="ConnectBox">
                <HiOutlineLocationMarker />
                <a>234 Triumph, Los Angeles, California, US</a>
              </div>

              <div className="ConnectBox">
                <HiOutlinePhone />
                <a>+1 876 43987 247</a>
              </div>

              <div className="ConnectBox">
                <HiOutlineMail />
                <a>helo@thriveminds.ca</a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="ContactMainRight">
            <form className="ContactFormGroup">
              <div className="ContactFormBox">
                {/* <label>Your Name</label> */}
                <input type="text" placeholder="Name" />
              </div>

              <div className="ContactFormBox">
                {/* <label>Email Address</label> */}
                <input type="email" placeholder="Your Email" />
              </div>

              <div className="ContactFormBox">
                {/* <label>Phone Number</label> */}
                <input type="text" placeholder="Your Phone Number" />
              </div>

              <div className="ContactFormBox">
                {/* <label>Additional Info</label> */}
                <textarea placeholder="Additional Info"></textarea>
              </div>

              <div className="ContactBtn">
                <button type="submit">Get Quote</button>
              </div>
            </form>
          </div>
        </div>
       
      </div>
       <div className="ContactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
    </div>
  );
};

export default HomeContact;
