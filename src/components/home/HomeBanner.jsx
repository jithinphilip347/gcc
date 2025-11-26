"use client";
import React, { useRef, useState, useEffect } from "react";
import BannerImg from "../../assets/images/bannerimg.jpg";
import { VscArrowRight } from "react-icons/vsc";
import toast from "react-hot-toast";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HomeDemoPopup from "./HomeDemoPopup";

const programData = {
  Pharmacy: ["Diploma in Pharmacy", "Clinical Pharmacy", "Pharmacovigilance"],
  Radiology: ["CT Scan", "MRI Technology", "X-Ray Technician"],
};

const HomeBanner = () => {
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
    <>
      <div
        id="HomeBanner"
        style={{
          backgroundImage: `url(${BannerImg.src})`,
        }}
      >
        <div className="overlay"></div>

        <div className="container">
          <div className="BannerMain">
            <div className="BannerMainLeft">
              <div className="MainShortTitle">
                <p>ACE YOUR HEALTHCARE LICENSING EXAMS ABROAD!</p>
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
                  <b>
                    {" "}
                    Oman, Qatar, Saudi Arabia, UAE, Bahrain, Kuwait, and
                    Australia.
                  </b>
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
                    Free Demo Class
                    <VscArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div className="BannerMainRight">
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
      {showPopup && <HomeDemoPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default HomeBanner;
