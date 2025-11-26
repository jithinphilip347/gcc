"use client";
import React, { useRef, useState, useEffect } from "react";
import BannerImg from "../../assets/images/review.jpg";
import { VscArrowRight } from "react-icons/vsc";
import toast from "react-hot-toast";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const programData = {
  Pharmacy: ["Diploma in Pharmacy", "Clinical Pharmacy", "Pharmacovigilance"],
  Radiology: ["CT Scan", "MRI Technology", "X-Ray Technician"],
};

const reviews = [
  {
    name: "Mohammad Faishal",
    date: "6 months ago",
    desc: "Hello, Everyone I feel very happy after Joining GCC academy, I would recommend it is very good Platform for many students who want to clear Prometric Exam, I would like to thanks Mrs Greeshma Ma'am.",
  },
  {
    name: "Anjali Krishna",
    date: "2 months ago",
    desc: "Excellent coaching and support. The study materials provided were very helpful for my DHA exam preparation. Highly recommended!",
  },
  {
    name: "Rahul R",
    date: "1 month ago",
    desc: "Great experience with GCC Academy. The faculties are very supportive and the classes are very interactive.",
  },
  {
    name: "Sarah John",
    date: "3 months ago",
    desc: "I cleared my HAAD exam in the first attempt. Thank you GCC Academy for the guidance.",
  },
];

const HomeGoogleReview = () => {
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
    <div
      id="HomeReview"
      style={{
        backgroundImage: `url(${BannerImg.src})`,
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="GoogleReviewMain">
          <div className="GoogleReviewLeft">
            <div className="MainShortTitle">
              <p>gccacademy Reviews</p>
            </div>

            <div className="SwiperContainerBox">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 2.2,
                  },
                }}
                className="mySwiper"
              >
                {reviews.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="GoogleReviewBox">
                      <div className="ReviewerBox">
                        <div className="ReviwerProfile">
                          <div className="ProfilePlaceholder">
                            {item.name.charAt(0)}
                          </div>
                        </div>
                        <div className="ReviewerNameBox">
                          <h4>{item.name}</h4>
                        </div>
                      </div>
                      <div className="ReviewRateBox">
                        <div className="StarBox">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <div className="ReviewUpload">
                          <p>{item.date}</p>
                        </div>
                      </div>
                      <div className="ReviewDescBox">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="GoogleReviewRight">
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
  );
};

export default HomeGoogleReview;
