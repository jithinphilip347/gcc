"use client";
import React, { useRef, useState, useEffect } from "react";
import BannerImg from "../../assets/images/bannerimg.jpg";
import { VscArrowRight } from "react-icons/vsc";
import toast from "react-hot-toast";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HomeDemoPopup from "./HomeDemoPopup";

const programData = {
  Pharmacy: [
    "DHA (DUBAI)",
    "MOH (UAE)",
    "KUWAIT - MOH",
    "DOH (HAAD) – Abu Dhabi",
    "SPLE (Saudi Arabia)",
    "BAHRAIN (BPLE)",
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

// ✅ Combined single dropdown list with labels
const combinedCourses = [
  ...programData.Pharmacy.map((course) => `${course} (Pharmacy)`),
  ...programData.Radiology.map((course) => `${course} (Radiology)`),
];

const HomeBanner = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const courseRef = useRef(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbyWavRSb28rJqWs9ReBcOz28eYdnHZ-mrBb7_qLrihNvTCEq2xotni2J99g_KCBlH5g/exec";

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
        body: JSON.stringify(form),
      });

      toast.success("You Have Successfully Booked 1 Free Demo Class");
      setForm({
        name: "",
        email: "",
        phone: "",
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
      if (courseRef.current && !courseRef.current.contains(event.target)) {
        setCourseOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        id="HomeBanner"
        style={{ backgroundImage: `url(${BannerImg.src})` }}
      >
        <div className="overlay"></div>

        <div className="container">
          <div className="BannerMain">
            <div className="BannerMainLeft">
              <div className="MainShortTitle">
                <p>ACE YOUR Pharmacy/Radiology LICENSING EXAMS ABROAD!</p>
              </div>

              <div className="MainTitle">
                <h1>
                  Achieve Global Success in DHA, HAAD, PROMETRIC (SAUDI, OMAN,
                  QATAR, KUWAIT & BAHRAIN), MOH
                </h1>
              </div>

              <div className="MainDesc">
                <p>
                  Prepare confidently for your healthcare licensing exams across
                  <b> Oman, Qatar, Saudi Arabia, UAE, Bahrain, Kuwait, and Australia.</b>
                  Access comprehensive study resources, regional language
                  guidance, and community support designed to help you succeed
                  globally.
                </p>
              </div>

              <div className="MainBannerBtn">
                <div className="MainCourseBtn">
                  <Link href="/course">
                    <button>Explore Courses</button>
                    <VscArrowRight />
                  </Link>
                </div>

                <div className="MainWhyChooseBtn">
                  <button onClick={() => setShowPopup(true)}>
                    Book Free Demo
                    <VscArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="BannerMainRight">
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

                  <div className="contactDetailGroup">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* ✅ SINGLE UPDATED DROPDOWN */}
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
                      placeholder="Message"
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

      {showPopup && <HomeDemoPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default HomeBanner;