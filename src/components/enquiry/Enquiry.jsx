"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import toast from "react-hot-toast";

const Enquiry = ({ show, onClose }) => {
  const [courseOpen, setCourseOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Enquiry Sent Successfully!");

    onClose();
  };

  return (
    <div id="Enquiry" className={show ? "active" : ""}>
      <div className="EnquiryOverlay" onClick={onClose}></div>

      <div className="EnquiryPopup">
        <div className="EnquiryClose" onClick={onClose}>
          <IoCloseOutline />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="enquiryFieldBox">
            <input type="text" placeholder="Enter Name" required />
          </div>

          <div className="enquiryFieldBox">
            <input type="email" placeholder="Enter Email" required />
          </div>

          <div className="enquiryFieldBox">
            <input type="text" placeholder="Enter Phone" required />
          </div>

          <div className="enquiryFieldBox customDropdown">
            <div
              className="dropdownHeader"
              onClick={() => setCourseOpen(!courseOpen)}
            >
              <p>{selectedCourse || "Select Course"}</p>
            </div>

            {courseOpen && (
              <ul className="dropdownList">
                {["DHA", "MOH", "DOH"].map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setSelectedCourse(item);
                      setCourseOpen(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="EnquiryBtn">
            <button type="submit">Get Enquiry</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
