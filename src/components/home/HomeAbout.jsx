"use client";
import Image from "next/image";
import React from "react";
import AboutImg from "../../assets/images/about.jpg";

const HomeAbout = () => {
  return (
    <div id="HomeAbout">
      <div className="container">
        <div className="HomeAboutHead">
          <h2>
            About <span>Us</span>
          </h2>
        </div>

        <div className="AboutMain">
          <div className="AboutMainLeft">
            <div className="HomeAboutImg">
              <Image src={AboutImg} alt="About Nursing Academy" />
              <div className="ShortAboutContentBox">
                <p>
                  Thinking insights, verified-driven research, and proven
                  learning strategies to help healthcare professionals achieve
                  global success.
                </p>
              </div>
            </div>
          </div>

          <div className="AboutMainRight">
            <div className="AboutContentBox">
              <div className="AboutTitle">
                <h2>Leading Healthcare Licensing Exam Coaching Academy</h2>
              </div>
              <div className="AboutDesc">
                <p>
                  We specialize in providing comprehensive coaching for
                  healthcare professionals preparing for <b>
                    DHA, HAAD, PROMETRIC, MOH, and other GCC licensing exams.{" "}
                  </b>{" "}
                  With expert mentors, structured materials, and real-time mock
                  sessions, we’ve helped thousands of students secure their
                  professional licenses and build successful international
                  careers in the healthcare industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
