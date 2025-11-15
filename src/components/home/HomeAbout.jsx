"use client";
import Image from "next/image";
import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import { FaUserGraduate, FaBookOpen, FaGlobeAsia } from "react-icons/fa";
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
                  learning strategies to help nurses achieve global success.
                </p>
                {/* <div className="AboutRightArrow">
                  <VscArrowRight />
                </div> */}
              </div>
            </div>
          </div>

          <div className="AboutMainRight">
            <div className="AboutContentBox">
              <div className="AboutTitle">
                <h2>Leading Nursing Licensing Exam Coaching Academy in GCC</h2>
              </div>
              <div className="AboutDesc">
                <p>
                  We specialize in providing comprehensive coaching for nurses
                  and healthcare professionals preparing for DHA, HAAD,
                  PROMETRIC, MOH, and other GCC licensing exams. With expert
                  mentors, structured materials, and real-time mock sessions,
                  we’ve helped thousands of students secure their professional
                  licenses and build successful international careers in the
                  healthcare industry.
                </p>
              </div>

              <div className="AboutStats">
                <div className="StatBox">
                  <FaUserGraduate />
                  <h3>1000+</h3>
                  <p>Successful Students</p>
                </div>
                <div className="StatBox">
                  <FaBookOpen />
                  <h3>100+</h3>
                  <p>Comprehensive Courses</p>
                </div>
                <div className="StatBox">
                  <FaGlobeAsia />
                  <h3>7+</h3>
                  <p>GCC Countries Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
