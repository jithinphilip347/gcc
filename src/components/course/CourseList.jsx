
"use client";
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import Logo1 from "../../assets/images/DHA.svg";
import Logo2 from "../../assets/images/moh-uae.webp";
import Logo3 from "../../assets/images/moh-kuwait.png";
import Logo4 from "../../assets/images/doh.png";
import Logo5 from "../../assets/images/sple-saudi.svg";
import Logo6 from "../../assets/images/bple-beharin.png";
import HomeDemoPopup from "../home/HomeDemoPopup";

// Reusable Card Component to handle individual state
const SingleCourseCard = ({ logo, title, desc, eligibility, onBook, setCourse }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`CourseBox ${isExpanded ? "expanded" : ""}`}>
      <div className="CourseIcon">
        <Image src={logo} alt={title} />
      </div>
      <div className="CourseTitle">
        <p>{title}</p>
      </div>

      {/* Details Section - Only visible if expanded */}
      {isExpanded && (
        <div className="CourseDetailsFade">
          <div className="CourseDesc">
            <p>{desc}</p>
          </div>
          <div className="Eligibility">
            <div className="EligibilityTitle">
              <p>Eligibility Criteria</p>
            </div>
            <div className="CriteriaBox">
              {eligibility.map((item, index) => (
                <div className="Box" key={index}>
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="CourseBookBtn">
            <button onClick={() => {
              onBook()
              setCourse(title)
            }}>BOOK NOW</button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        className="ToggleBtn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "LESS" : "KNOW MORE"}
      </button>
    </div>
  );
};

const CourseList = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [course,setCourse] = useState("");
  // Data for Pharmacy Courses
  const pharmacyCourses = [
    {
      logo: Logo1,
      title: "DHA (DUBAI)",
      desc: "Get the best coaching for the Dubai Health Authority (DHA) Exam to become a licensed pharmacist in Dubai.",
      eligibility: [
        "D pharm/B pharm (Minimum)",
        "Minimum experience required: 2 years",
        "Total Questions: 150 MCQs",
        "Time Allotted: 165 minutes",
        "Passing Score: 60% (90 correct answers)",
      ],
    },
    {
      logo: Logo2,
      title: "MOH (UAE)",
      desc: "Ace the MOH Pharmacy Technician Exam on your first attempt with our all-in-one online coaching program.",
      eligibility: [
        "D pharm/B pharm (Minimum)",
        "Minimum experience required: 2 years",
        "Passing Score: 60% of total marks",
        "Total Questions: Around 100 MCQs",
        "Duration: ~2 hours (Prometric exam)",
      ],
    },
    {
      logo: Logo3,
      title: "KUWAIT - MOH",
      desc: "Prepare with confidence and pass the Kuwait MOH Pharmacist Exam on your first attempt.",
      eligibility: [
        "B pharm (Minimum)",
        "Minimum experience required: 2 years",
        "Total Questions: 50 MCQs",
        "Passing Score: 60% with aural exam",
      ],
    },
    {
      logo: Logo4,
      title: "DOH (HAAD) – Abu Dhabi",
      desc: "Get licensed as a Pharmacy Technician in Abu Dhabi with our comprehensive DOH Exam Preparation Course.",
      eligibility: [
        "B pharm (Minimum)",
        "Minimum experience required: 2 years",
        "Number of Questions: 150 MCQs",
        "Duration: 3 hours",
        "Passing Score: 55–60%",
      ],
    },
    {
      logo: Logo5,
      title: "SPLE (Saudi Arabia)",
      desc: "Saudi Pharmacist Licensure Examination required for all pharmacists who want to practise in Saudi Arabia.",
      eligibility: [
        "B pharm (Minimum)",
        "Minimum experience required: 2 years",
        "Number of Questions: 150 MCQs",
        "Duration: 2 hours",
        "Passing Score: 55–60%",
      ],
    },
    {
      logo: Logo6,
      title: "BAHRAIN (BPLE)",
      desc: "Bahrain Pharmacy Licensure Examination administered by the National Health Regulatory Authority (NHRA).",
      eligibility: [
        "B pharm (Minimum)",
        "Minimum experience required: 2 years",
        "Number of Questions: 150 MCQs",
        "Duration: 2.5 hours",
        "Passing Score: 60%",
      ],
    },
  ];

  // Data for Radiology Courses
// Data for Radiology Courses (Full List)
  const radiologyCourses = [
    {
      logo: Logo1,
      title: "DHA (DUBAI)",
      desc: "Get the best coaching for the Dubai Health Authority (DHA) Exam to become a licensed Radiographer in Dubai.",
      eligibility: [
        "Diploma or Bachelor’s degree in Radiologic Technology / Medical Imaging / Radiography",
        "Minimum experience required: 2 years",
        "Total Questions: 70-100 MCQs",
        "Time Allotted: 120 minutes (2 hours)",
        "Passing Score: 60% - 70%",
        "Attempts Allowed: Up to 3",
      ],
    },
    {
      logo: Logo2,
      title: "OMSEB (OMAN)",
      desc: "Oman Medical Specialty Board exam preparation for Radiographers.", // Note: Description added based on title context or you can update it
      eligibility: [
        "Diploma or Bachelor’s degree in Radiologic Technology / Medical Imaging / Radiography",
        "Minimum experience required: 2 years",
        "Total Questions: 70-100 MCQs",
        "Time Allotted: Approx. 2-3 hours",
        "Passing Score: 60% - 70%",
        "Attempts Allowed: Up to 3",
      ],
    },
    {
      logo: Logo3,
      title: "QCHP (QATAR)",
      desc: "Qatar Council for Healthcare Practitioners exam coaching.",
      eligibility: [
        "Diploma or Bachelor’s degree in Radiography / Medical Imaging",
        "Minimum experience required: 2 years",
        "Total Questions: 70-100 MCQs",
        "Time Allotted: 120 Minutes",
        "Passing Score: 60% - 70%",
      ],
    },
    {
      logo: Logo2,
      title: "MOH (UAE)",
      desc: "Ace the MOH radiographer Exam on your first attempt with our all-in-one online coaching program – designed for guaranteed success",
      eligibility: [
        "Diploma or Bachelor’s degree in Radiography / Medical Imaging / Radiologic Technology from a recognized institution",
        "Minimum experience required: 2 years",
        "Passing Score: 60% - 70% of total marks",
        "Total Questions: Around 100 MCQs",
        "Duration: ~2 hours (computer based Prometric exam)",
        "Attempts Allowed: 3",
      ],
    },
    {
      logo: Logo4,
      title: "DOH (HAAD) – Abu Dhabi",
      desc: "HAAD stands for Health Authority – Abu Dhabi. It's now officially part of the Department of Health – Abu Dhabi (DOH-Abu Dhabi). Get licensed as a Radiographer in Abu Dhabi, UAE with our comprehensive DOH Exam Preparation Course.",
      eligibility: [
        "Diploma or Bachelor’s degree in Radiography / Radiologic Technology / Medical Imaging from an accredited university",
        "Minimum experience required: 2 years",
        "Passing Score: 60% - 70% of total marks",
        "Total Questions: Around 100 MCQs",
        "Duration: ~2 hours (computer based Prometric exam)",
        "Attempts Allowed: 3",
      ],
    },
    {
      logo: Logo5,
      title: "SPLE (SAUDI)",
      desc: "Saudi Radiographer Licensure Examination is required for all Radiographers who want to practise in Saudi Arabia. It is conducted by the Saudi Commission for Health Specialties (SCFHS).",
      eligibility: [
        "Bachelor’s or Diploma in Radiography / Radiologic Technology / Medical Imaging from an accredited university",
        "Minimum experience required: 2 years",
        "Number of Questions: 100 - 150 MCQs",
        "Duration: 2.5 – 3 hours",
        "Passing Score: 55% – 60%",
        "Attempts Allowed: 3",
      ],
    },
    {
      logo: Logo6,
      title: "BAHRAIN (BPLE)",
      desc: "", // Description was missing in the provided JSX for Bahrain Radiology
      eligibility: [
        "Diploma or Bachelor’s degree in Radiography / Medical Imaging / Radiologic Technology from an accredited institution",
        "Minimum experience required: 2 years",
        "Number of Questions: 100 MCQs",
        "Duration: 2 hours",
        "Passing Score: 60% (correct answers required to pass)",
      ],
    },
  ];

  return (
    <>
      <div id="CourseList">
        <div className="container">
          <div className="CourseMain">
            {/* PHARMACY SECTION */}
            <div className="CourseMainTopBox">
              <div className="CourseTopHeadBox">
                <h2>Pharmacy</h2>
              </div>
              <div className="CourseTopBox">
                {pharmacyCourses.map((course, index) => (
                  <SingleCourseCard
                    key={index}
                    {...course}
                    onBook={() => setShowPopup(true)}
                     setCourse={setCourse}
                  />
                ))}
              </div>
            </div>

            {/* RADIOLOGY SECTION */}
            <div className="CourseMainBottomBox">
              <div className="CourseBottomHeadBox">
                <h2>Radiology</h2>
              </div>
              <div className="CourseBottomBox">
                {radiologyCourses.map((course, index) => (
                  <SingleCourseCard
                    key={index}
                    {...course}
                    onBook={() => {
                      setShowPopup(true)
                    }}
                    setCourse={setCourse}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <HomeDemoPopup onClose={() => setShowPopup(false)} course={course} />}
    </>
  );
};

export default CourseList;