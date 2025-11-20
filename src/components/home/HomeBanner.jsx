"use client";
import React, { useState } from "react";
import Image from "next/image";
import BannerImg from "../../assets/images/bannerimg.jpg";
import { VscArrowRight } from "react-icons/vsc";
import toast from "react-hot-toast";
import Link from "next/link";

const HomeBanner = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting,setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyWavRSb28rJqWs9ReBcOz28eYdnHZ-mrBb7_qLrihNvTCEq2xotni2J99g_KCBlH5g/exec";
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    if (!form.name || !form.email || !form.phone ) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const res = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();
      
      if (data.success) {
        toast.success("Booking Submitted Successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
      toast.success("Booking Submitted Successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }

    
  };

  return (
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
              <h1>Achieve Global Success in DHA, HAAD, PROMETRIC (SAUDI, OMAN, QATAR, KUWAIT & BAHRAIN), MOH</h1>
            </div>

            <div className="MainDesc">
              <p>
                Prepare confidently for your healthcare licensing exams across
                Oman, Qatar, Saudi Arabia, UAE, Bahrain, Kuwait, and Australia.
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
                <a href="#HomeWhyCoose">
                  <button>Why Choose Us</button>
                  <VscArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div className="BannerMainRight">
            <div className="FormTitle">
              <h2>Book Your Free Coaching Session</h2>
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

                <div className="contactDetailGroup">
                  <textarea
                    name="message"
                    placeholder="Enter your Message"
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="FormBtn">
                  <button type="submit"> {isSubmitting ? "Booking..." : "Book Now"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
