"use client";
import React from "react";
import {
  FaBookOpen,
  FaLanguage,
  FaClipboardList,
  FaChartLine,
  FaChalkboardTeacher,
  FaUsers,
  FaLaptopCode,
  FaUserGraduate,
  FaGlobeAsia,
} from "react-icons/fa";

const HomeWhyCoose = () => {
  return (
    <div id="HomeWhyCoose">
      <div className="container">
        <div className="HomeAboutHead">
          <h2>
            Why <span>Choose Us</span>
          </h2>
          <p>
           <b> Worried about your year gap? </b>
           <span>Expert one-on-one coaching for working 
          professionals who’ve lost touch with basics — 
          we rebuild your foundation and support you till 
          you pass.</span>
          </p>
        </div>

        <div className="HomeWhyCooseMain">
          <div className="WhyChooseBox">
            <div className="IconBox">
              <FaBookOpen />
            </div>
            <div className="WhyChooseTitle">
              <h3>Up-To-Date Study Materials</h3>
            </div>
            <div className="WhyChooseDesc">
              <p>
                PDFs, Mock Tests, Notes & More Comprehensive 
                Resources to build strong academic foundation.
              </p>
            </div>
          </div>
          <div className="WhyChooseBox">
            <div className="IconBox">
              <FaLanguage />
            </div>
            <div className="WhyChooseTitle">
              <h3>Additional Language Support</h3>
            </div>
            <div className="WhyChooseDesc">
              <p>
                Ask questions and get clear explanations in Malayalam, Tamil, or
                Hindi.
              </p>
            </div>
          </div>
          <div className="WhyChooseBox">
            <div className="IconBox">
              <FaClipboardList />
            </div>
            <div className="WhyChooseTitle">
              <h3>Chapter-wise Quiz Program</h3>
            </div>
            <div className="WhyChooseDesc">
              <p>
                Reinforce learning through topic-based quizzes and structured
                assessments.
              </p>
            </div>
          </div>
          <div className="WhyChooseBox">
            <div className="IconBox">
              <FaChartLine />
            </div>
            <div className="WhyChooseTitle">
              <h3>Weekly Assessments</h3>
            </div>
            <div className="WhyChooseDesc">
              <p>
                Track your progress, identify weaknesses, and improve every
                week.
              </p>
            </div>
          </div>
          <div className="WhyChooseBox">
            <div className="IconBox">
              <FaChalkboardTeacher />
            </div>
            <div className="WhyChooseTitle">
              <h3>Exam-Oriented Workshops</h3>
            </div>
            <div className="WhyChooseDesc">
              <p>
                Prepare effectively with focused sessions designed by exam
                experts.
              </p>
            </div>
          </div>
          <div className="WhyChooseBox">
            <div className="IconBox">
              <FaUsers />
            </div>
            <div className="WhyChooseTitle">
              <h3>24×7 Community Support</h3>
            </div>
            <div className="WhyChooseDesc">
              <p>
                Join exclusive WhatsApp / Telegram groups for live discussions
                and mentorship from passed candidates.
              </p>
            </div>
          </div>
          <div className="WhyChooseBox">
            <div className="IconBox">
              <FaLaptopCode />
            </div>
            <div className="WhyChooseTitle">
              <h3>Exam Prep Practice Sessions</h3>
            </div>
            <div className="WhyChooseDesc">
              <p>
                Expert-led practice sessions with tips, strategies, and real
                exam simulations.
              </p>
            </div>
          </div>
          <div className="WhyChooseBox">
            <div className="IconBox">
              <FaUserGraduate />
            </div>
            <div className="WhyChooseTitle">
              <h3>1000+</h3>
            </div>
            <div className="WhyChooseDesc">
              <p>Successful Students</p>
            </div>
          </div>
          <div className="WhyChooseBox">
            <div className="IconBox">
              <FaBookOpen />
            </div>
            <div className="WhyChooseTitle">
              <h3>100+</h3>
            </div>
            <div className="WhyChooseDesc">
              <p>Comprehensive Courses</p>
            </div>
          </div>
          <div className="WhyChooseBox">
            <div className="IconBox">
              <FaGlobeAsia />
            </div>
            <div className="WhyChooseTitle">
              <h3>7+</h3>
            </div>
            <div className="WhyChooseDesc">
              <p>GCC Countries Covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyCoose;
