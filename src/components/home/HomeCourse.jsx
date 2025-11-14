"use client";
import Image from "next/image";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { VscArrowRight } from "react-icons/vsc";

import Logo1 from "../../assets/images/DHA.svg";
import Logo2 from "../../assets/images/moh-uae.webp";
import Logo3 from "../../assets/images/moh-kuwait.png";
import Link from "next/link";

const HomeCourse = () => {
  return (
    <div id="HomeCourse">
      <div className="container">
          <div className="HomeAboutHead">
            <h2>
              Our <span>Courses</span>
            </h2>
          </div>
        <div className="ViewAll">
            <Link href="/course">
            <p>View All</p>
              <VscArrowRight />
            </Link>
          </div>
        <div className="CourseMain">
          <div className="CourseBox">
            <div className="CourseIcon">
              <Image src={Logo1} alt="DHA Course" />
            </div>
            <div className="CourseTitle">
              <p>DHA (DUBAI)</p>
            </div>
            <div className="CourseDesc">
              <p>
                Get the best coaching for the Dubai Health Authority (DHA) Exam
                to become a licensed pharmacist in Dubai.
              </p>
            </div>

            <div className="Eligibility">
              <div className="EligibilityTitle">
                <p>Eligibility Criteria</p>
              </div>
              <div className="CriteriaBox">
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>D pharm/B pharm (Minimum)</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>Minimum experience required: 2 years</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>Total Questions: 150 MCQs</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>Time Allotted: 165 minutes (2 hours 45 minutes)</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>Passing Score: 60% (90 correct answers minimum)</p>
                </div>
              </div>
            </div>
          </div>

          {/* BOX 2 - MOH (UAE) */}
          <div className="CourseBox">
            <div className="CourseIcon">
              <Image src={Logo2} alt="MOH UAE" />
            </div>
            <div className="CourseTitle">
              <p>MOH (UAE)</p>
            </div>
            <div className="CourseDesc">
              <p>
                Ace the MOH Pharmacy Technician Exam on your first attempt with
                our all-in-one online coaching program – designed for guaranteed
                success.
              </p>
            </div>

            <div className="Eligibility">
              <div className="EligibilityTitle">
                <p>Eligibility Criteria</p>
              </div>
              <div className="CriteriaBox">
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>D pharm/B pharm (Minimum)</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>Minimum experience required: 2 years</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>Passing Score: 60% of total marks</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>Total Questions: Around 100 MCQs</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>Duration: ~2 hours (computer-based Prometric exam)</p>
                </div>
              </div>
            </div>
          </div>

          {/* BOX 3 - KUWAIT MOH */}
          <div className="CourseBox">
            <div className="CourseIcon">
              <Image src={Logo3} alt="KUWAIT MOH" />
            </div>
            <div className="CourseTitle">
              <p>KUWAIT - MOH</p>
            </div>
            <div className="CourseDesc">
              <p>
                Prepare with confidence and pass the Kuwait MOH Pharmacist Exam
                on your first attempt with the most trusted coaching program
                available.
              </p>
            </div>

            <div className="Eligibility">
              <div className="EligibilityTitle">
                <p>Eligibility Criteria</p>
              </div>
              <div className="CriteriaBox">
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>B pharm (Minimum)</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>Minimum experience required: 2 years</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>Total Questions: 50 MCQs (English - 30, Arabic - 20)</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon">
                    <IoMdCheckmark />
                  </div>
                  <p>Passing Score: 60% with aural exam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCourse;
