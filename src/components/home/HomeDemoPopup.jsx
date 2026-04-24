"use client";
import { GOOLE_SHEET_ID } from "@/utilis/constants";
import React, { useRef, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import countryCodes  from '@/data/CountryCodes.json'

const programData = {
  Pharmacy: [
    "DHA (DUBAI)",
    "MOH (UAE)",
    "KUWAIT - MOH",
    "DOH (HAAD) – Abu Dhabi",
    "SPLE (Saudi Arabia)",
    "BAHRAIN (BPLE)",
    "OMSEB (OMAN)",
  ],
  Radiology: [
    "DHA (DUBAI)",
    "OMSEB (OMAN)",
    "QCHP (QATAR)",
    "MOH (UAE)",
    "DOH (HAAD) – Abu Dhabi",
    "SPLE (SAUDI)",
    "BAHRAIN (BPLE)",
  ],
};


const combinedCourses = [
  ...programData.Pharmacy.map((course) => `${course} (Pharmacy)`),
  ...programData.Radiology.map((course) => `${course} (Radiology)`),
];

const HomeDemoPopup = ({ onClose,course = "" }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: course,
    message: "",
    source: "Book Demo Now!"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const courseRef = useRef(null);

  const [codeOpen, setCodeOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState("+91");
  const codeRef = useRef(null);

  const [search, setSearch] = useState("");


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const GOOGLE_SHEET_URL =
    `https://script.google.com/macros/s/${GOOLE_SHEET_ID}/exec`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.name || !form.email || !form.phone || !form.course) {
      toast.error("Please fill all fields!");
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify({
          ...form,
          phone: `${selectedCode.replace('+', '')}${form.phone}`
        }),
      });

      
    } catch (err) {
      console.error(err);
    } finally {
      toast.success("You Have Successfully Booked 1 Free Demo Class");
      setForm({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
        source: "Course Page"
      });
      onClose()
      setIsSubmitting(false);
    }
  };

const filteredCountries = countryCodes.filter((item) =>
  item.dial_code.includes(search) ||
  item.name.toLowerCase().includes(search.toLowerCase())
);

const handlePhoneChange = (e) => {
  // Allow only numbers
  const value = e.target.value.replace(/\D/g, "");
  setForm({ ...form, phone: value });
};


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (courseRef.current && !courseRef.current.contains(event.target)) {
        setCourseOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "auto";
  };
}, []);


useEffect(() => {
  const handleClickOutside = (event) => {
    if (courseRef.current && !courseRef.current.contains(event.target)) {
      setCourseOpen(false);
    }

    if (codeRef.current && !codeRef.current.contains(event.target)) {
      setCodeOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  return (
    <div id="HomeDemoPopup">
      <div className="container">
        <div className="DemoPopupOverlay">
          <span className="PopupClose" onClick={onClose}>
            <IoClose />
          </span>

          <div className="DemoPopupBox" onClick={(e) => e.stopPropagation()}>
            <div className="popupDemoForm">
              <div className="FormTitle">
                <h2>Get Your Free Class Now</h2>
              </div>

              <div className="FormGroup">
                <form onSubmit={handleSubmit}>
                  <div className="contactDetailGroup">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contactDetailGroup">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

           
                  <div className="contactDetailGroup phoneGroup" ref={codeRef}>
                    <div className="phoneInputWrapper">
                      
                     
                      <div
                        className="codeDropdownHeader"
                        onClick={() => setCodeOpen(!codeOpen)}
                      >
                        <span>{selectedCode}</span>
                        {codeOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                      </div>

                      {codeOpen && (
                        <ul className="codeDropdownList">
                          <li className="search-li" onClick={(e) => e.stopPropagation()}>
                            <input
                              type="text"
                              placeholder="Search country..."
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              autoFocus
                            />
                          </li>
                          {filteredCountries.map((item) => (
                            <li
                              key={item.code} 
                              onClick={() => {
                                setSelectedCode(item.dial_code);
                                setCodeOpen(false);
                                setSearch("");
                              }}
                            >
                              {item.dial_code} {item.name}
                            </li>
                          ))}
                        </ul>
                      )}

                      
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                 

                  <div className="customDropdown" ref={courseRef}>
                    <div
                      className="dropdownHeader"
                      onClick={() => setCourseOpen(!courseOpen)}
                    >
                      <span>{form.course || "Choose Your Course"}</span>
                      {courseOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>

                    {courseOpen && (
                      <ul className="dropdownList">
                        {combinedCourses.map((course) => (
                          <li
                            key={course}
                            onClick={() => {
                              setForm({ ...form, course });
                              setCourseOpen(false);
                            }}
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="contactDetailGroup">
                    <textarea
                      name="message"
                      placeholder="Enter your Message"
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="FormBtn">
                    <button type="submit">
                      {isSubmitting ? "Booking..." : "Book Now"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDemoPopup;