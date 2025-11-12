"use client";
import React from "react";
import Image from "next/image";
import { VscArrowRight } from "react-icons/vsc";
import BannerImg from "../../assets/images/bannerimg.jpg";

const HomeBanner = () => {
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
              <h1>
                Achieve Global Success in DHA, HAAD, PROMETRIC, MOH
              </h1>
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
                <a href="/courses">
                  <button>Explore Courses</button>
                  <VscArrowRight />
                </a>
              </div>
              <div className="MainWhyChooseBtn">
                <a href="/about">
                  <button>Why Choose Us</button>
                  <VscArrowRight />
                </a>
              </div>
            </div>

            {/* <div className="BannerMainService">
              <div className="BannerServiceBox dark">
                <div className="BannerServiceTitle">
                  <h2>Up-to-Date Study Materials</h2>
                </div>
                <div className="BannerServiceDesc">
                  <p>
                    Get PDFs, mock tests, detailed notes, and exclusive online
                    content to strengthen your preparation with the latest exam
                    patterns and updates.
                  </p>
                </div>
                <div className="LearnMoreBox">
                  <VscArrowRight />
                </div>
              </div>

              <div className="BannerServiceBox light">
                <div className="BannerServiceTitle">
                  <h2>Regional Language Support</h2>
                </div>
                <div className="BannerServiceDesc">
                  <p>
                    Learn in Malayalam, Tamil, or Hindi — making complex medical
                    topics simple, clear, and easy to understand.
                  </p>
                </div>
                <div className="LearnMoreBox">
                  <VscArrowRight />
                </div>
              </div>

              <div className="BannerServiceBox light">
                <div className="BannerServiceTitle">
                  <h2>Exam-Focused Training</h2>
                </div>
                <div className="BannerServiceDesc">
                  <p>
                    From chapter-wise quizzes to workshops and mock tests — we
                    provide continuous assessments and real-time practice for
                    guaranteed improvement.
                  </p>
                </div>
                <div className="LearnMoreBox">
                  <VscArrowRight />
                </div>
              </div>
            </div> */}
          </div>

          <div className="BannerMainRight">
            <div className="FormTitle">
              <h2>Book Your Free Coaching Session</h2>
            </div>

            <div className="FormGroup">
              <form>
                <div className="contactDetailGroup">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="contactDetailGroup">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="contactDetailGroup">
                  <input type="number" placeholder="Your Phone Number" />
                </div>
                <div className="contactDetailGroup">
                  
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Enter your Message"
                  ></textarea>
                </div>
                <div className="FormBtn">
                  <button type="submit">Book Now</button>
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
