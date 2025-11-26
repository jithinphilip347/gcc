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
  Pharmacy: ["DHA (DUBAI)", "MOH (UAE)", "KUWAIT - MOH", "DOH (HAAD) – Abu Dhabi", "SPLE (Saudi Arabia)", "BAHRAIN (BPLE)"],
  Radiology: ["DHA (DUBAI)", "OMSEB (OMAN)", "QCHP (QATAR)" , "MOH (UAE)", "DOH (HAAD) – Abu Dhabi", "SPLE (SAUDI)", "BAHRAIN (BPLE)"],
};

const reviews = [
  {
    name: "Mohammad Faishal",
    date: "a year ago",
    desc: "Hello, Everyone, I feel very happy after Joining GCC academy, I would recommend it is very good Platform for many students who want to clear Prometric Exam, I would like to thanks Mrs Greeshma Ma'am, she is very good teacher, she guide you very well. Her lectures are clear, Concise and easy to understand...",
  },
  {
    name: "Shiblu Bhuiyan",
    date: "a year ago",
    desc: "very helpful to pass the exam... I genuinely appreciate to Ma'am, as her proper guidance and instructions have greatly assisted me. because prior to joining in this coaching, I attended another coaching but did not get proper guidelines.. that's why I think this is the best platform to lift up the career through following her proper guidelines...",
  },
  {
    name: "AYNA UNUS",
    date: "a year ago",
    desc: "Coaching was super ...Iam very satisfied with the classes.. especially the support of the mam was great and clears my doubts at anytime... practising questions in the last days to the exam was really helpful.Thankyou GCC academy",
  },
  {
    name: "Thankeem Kowkab",
    date: "a year ago",
    desc: " recently cleared omam Pearson vue exam. I Thank greeshma ma'am and gcc academy for their tremendous support and supporting . students to pass the exam....Thank you 👍",
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
              <h2>Get Your Free Class Now</h2>
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
