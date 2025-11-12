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
} from "react-icons/fa";

const HomeWhyCoose = () => {
  return (
    <div id="HomeWhyCoose">
      <div className="container">
        <div className="HomeAboutHead">
          <h2>
            Why <span>Choose Us</span>
          </h2>
        </div>

        <div className="HomeWhyCooseMain">
          <div className="WhyChooseGrid">
            {/* 1️⃣ Study Materials */}
            <div className="WhyChooseBox">
              <div className="IconBox">
                <FaBookOpen />
              </div>
              <div className="WhyChooseTitle">
                <h3>Up-To-Date Study Materials</h3>
              </div>
              <div className="WhyChooseDesc">
                <p>
                  PDFs, Mock Tests, Notes & More — comprehensive resources to
                  boost your learning experience.
                </p>
              </div>
            </div>

            {/* 2️⃣ Language Support */}
            <div className="WhyChooseBox">
              <div className="IconBox">
                <FaLanguage />
              </div>
              <div className="WhyChooseTitle">
                <h3>Regional Language Support</h3>
              </div>
              <div className="WhyChooseDesc">
                <p>
                  Ask questions and get clear explanations in Malayalam, Tamil,
                  or Hindi.
                </p>
              </div>
            </div>

            {/* 3️⃣ Chapter-wise Quiz */}
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

            {/* 4️⃣ Weekly Assessments */}
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

            {/* 5️⃣ Workshops */}
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

            {/* 6️⃣ Community Support */}
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

            {/* 7️⃣ Practice Sessions */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyCoose;
