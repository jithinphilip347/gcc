"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { CONTACT_FORM_ID } from "@/utilis/constants";

const GOOGLE_SHEET_URL =
  `https://script.google.com/macros/s/${CONTACT_FORM_ID}/exec`;

const ContactSideNav = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setErrors({});
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateForm();
    setErrors(validation);

    if (Object.keys(validation).length !== 0) return;

    setIsSubmitting(true);

    try {
      const res = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      toast.success("Message Sent Successfully!");
      if (data.success) {
        
      } else {
        // toast.error("Failed to send. Please try again!");
      }
    } catch (err) {
      console.log("Error submitting form:", err);
    } finally {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      toast.success("THANKS! We will get back to you soon");
      setIsSubmitting(false);

    }
  };

    useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <div id="ContactSideNav" className={show ? "active" : ""}>
      <div className="SideNavContainer">
        <div className="CloseIcon" onClick={onClose}>
          <IoCloseOutline />
        </div>

        <div className="ContactMain">
          {/* Top Contact Info */}
          <div className="ContactMainTop">
            <p className="ContactTitle">Get in Touch With GCC Academy</p>

            <p className="ContactDesc">
              Kerala’s leading institute for DHA, HAAD, PROMETRIC, SPLE, OMAN,
              and MOH exam preparation.
            </p>

            <div className="ContactAddressBox">
              <div className="ConnectBox">
                <HiOutlineLocationMarker />
                <a>Building No. 625/10, Keezhillam, Kerala India</a>
              </div>

              <div className="ConnectBox">
                <HiOutlinePhone />
                <p className="numberBox">
                  <a href="tel:+917907974340">+91-79079 74340</a>
                  <a href="tel:+917012584203">+91-70125 84203</a>
                </p>
              </div>

              <div className="ConnectBox">
                <HiOutlineMail />
                <a href="mailto:info@gccacademy.net">info@gccacademy.net</a>
              </div>
            </div>
          </div>
          {/* Bottom Contact Form */}
          <div className="ContactMainBottom">
            <form className="ContactFormGroup" onSubmit={handleSubmit}>
              <div className="ContactFormBox">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="ContactFormBox">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="ContactFormBox">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="ContactFormBox">
                <textarea
                  name="message"
                  placeholder="Additional Info"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="ContactBtn">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Send"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSideNav;
