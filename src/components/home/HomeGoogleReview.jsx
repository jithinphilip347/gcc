"use client";
import React, { useRef, useState, useEffect } from "react";
import BannerImg from "../../assets/images/review.jpg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { GOOLE_SHEET_ID } from "@/utilis/constants";


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

// ✅ Combined dropdown list with labels
const combinedCourses = [
  ...programData.Pharmacy.map((course) => `${course} (Pharmacy)`),
  ...programData.Radiology.map((course) => `${course} (Radiology)`),
];

const reviews = [
  {
    name: "Mohammad Faishal",
    date: "a year ago",
    desc: "Hello, Everyone, I feel very happy after Joining GCC academy, I would recommend it is very good Platform for many students who want to clear Prometric Exam, I would like to thanks Mrs Greeshma Ma'am, she is very good teacher...",
  },
  {
    name: "Shiblu Bhuiyan",
    date: "a year ago",
    desc: "very helpful to pass the exam... I genuinely appreciate to Ma'am, as her proper guidance and instructions have greatly assisted me...",
  },
  {
    name: "AYNA UNUS",
    date: "a year ago",
    desc: "Coaching was super ...Iam very satisfied with the classes.. especially the support of the mam was great...",
  },
  {
    name: "Thankeem Kowkab",
    date: "a year ago",
    desc: "recently cleared omam Pearson vue exam. I Thank greeshma ma'am and gcc academy for their tremendous support...",
  },
    {
    name: "Yadhukrishnan Tu",
    date: "a year ago",
    desc: "Excellent coaching with 24*7 support, study materials are upto date and I'm happy to get support till my exam",
  },
      {
    name: "WaSim",
    date: "a year ago",
    desc: "Nice institute with great coaching and study materials",
  },
  {
    name: "RAHUL M DAS",
    date: "a year ago",
    desc: "Excellent tutoring, well experienced",
  },
  {
    name: "Deepika Ratna",
    date: "a year ago",
    desc: "Complete guidance with updated information. Good support and Stand along with us until we succeed",
  },
];

const HomeGoogleReview = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    source: "Book Demo Now!"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const courseRef = useRef(null);

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
        body: JSON.stringify(form),
      });

      
      
    } catch (err) {
      console.error(err);
    } finally {
      setForm({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
        source: "Book Demo Now!"
      });
      toast.success("You Have Successfully Booked 1 Free Demo Class");
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
    <div
      id="HomeReview"
      style={{ backgroundImage: `url(${BannerImg.src})` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="GoogleReviewMain">
          <div className="GoogleReviewLeft">
            <div className="MainShortTitle">
              <p>Google Reviews</p>
            </div>

            <div className="SwiperContainerBox">
              {/* <Swiper
                spaceBetween={20}
                slidesPerView={1}
                grabCursor={true}
                loop={true}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 2.2 },
                }}

              > */}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={20}
                  loop={true}
                  grabCursor={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      pagination: { enabled: true },
                    },
                    480: {
                      slidesPerView: 1,
                      pagination: { enabled: true },
                    },
                    768: {
                      slidesPerView: 2,
                      pagination: { enabled: true },
                    },
                    1024: {
                      slidesPerView: 2,
                      pagination: { enabled: true },
                    },
                    1200: {
                      slidesPerView: 2.2,
                      pagination: { enabled: false }, // ✅ Desktop = NO DOTS
                    },
                  }}
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
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                        <p>{item.date}</p>
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
              <h2>Book Demo Now!</h2>
              <p>Experience a regular class before you join</p>
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
  );
};

export default HomeGoogleReview;
