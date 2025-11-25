"use client";
import React, {useRef,useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const programData = {
  Pharmacy: ["Diploma in Pharmacy", "Clinical Pharmacy", "Pharmacovigilance"],
  Radiology: ["CT Scan", "MRI Technology", "X-Ray Technician"],
};
const HomeDemoPopup = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const programRef = useRef(null);
const courseRef = useRef(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const selectProgram = (value) => {
    setForm({ ...form, program: value, course: "" });
    setProgramOpen(false);
  };

  const selectCourse = (value) => {
    setForm({ ...form, course: value });
    setCourseOpen(false);
  };

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbyWavRSb28rJqWs9ReBcOz28eYdnHZ-mrBb7_qLrihNvTCEq2xotni2J99g_KCBlH5g/exec";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.program ||
      !form.course
    ) {
      toast.error("Please fill all fields!");
      setIsSubmitting(false);
      return;
    }

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify(form),
      });

      toast.success("You Have Successfully Booked 1 Free Demo Class");
      setForm({
        name: "",
        email: "",
        phone: "",
        program: "",
        course: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (programRef.current && !programRef.current.contains(event.target)) {
      setProgramOpen(false);
    }

    if (courseRef.current && !courseRef.current.contains(event.target)) {
      setCourseOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
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
                <h2>Get Your Free Demo Class Now</h2>
              </div>
              <div className="FormGroup">
                <form onSubmit={handleSubmit}>
                  <div className="contactDetailGroup">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contactDetailGroup">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contactDetailGroup">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Choose Program */}
                  <div className="customDropdown" ref={programRef}>
                    <div
                      className="dropdownHeader"
                      onClick={() => setProgramOpen(!programOpen)}
                    >
                      <span>{form.program || "Choose Your Program"}</span>
                      {programOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>

                    {programOpen && (
                      <ul className="dropdownList">
                        {Object.keys(programData).map((item) => (
                          <li key={item} onClick={() => selectProgram(item)}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Choose Course */}
                  <div className="customDropdown" ref={courseRef}>
                    <div
                      className="dropdownHeader"
                      onClick={() => setCourseOpen(!courseOpen)}
                    >
                      <span>{form.course || "Choose Your Course"}</span>
                      {courseOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>

                    {courseOpen && form.program && (
                      <ul className="dropdownList">
                        {programData[form.program].map((course) => (
                          <li key={course} onClick={() => selectCourse(course)}>
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
                      {" "}
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
