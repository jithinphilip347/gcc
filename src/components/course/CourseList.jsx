import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
import Logo1 from "../../assets/images/DHA.svg";
import Logo2 from "../../assets/images/moh-uae.webp";
import Logo3 from "../../assets/images/moh-kuwait.png";
// import Logo4 from "../../assets/images/doh-abudabi.ashx";
import Logo5 from "../../assets/images/sple-saudi.svg";
// import Logo6 from "../../assets/images/moh-kuwait.png";

const CourseList = () => {
  return (
    <div id="CourseList">
      <div className="container">
        <div className="CourseMain">

          {/* BOX 1 - DHA */}
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
                  <div className="CheckmarkIcon"><IoMdCheckmark /></div>
                  <p>D pharm/B pharm (Minimum)</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon"><IoMdCheckmark /></div>
                  <p>Minimum experience required: 2 years</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon"><IoMdCheckmark /></div>
                  <p>Total Questions: 150 MCQs</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon"><IoMdCheckmark /></div>
                  <p>Time Allotted: 165 minutes (2 hours 45 minutes)</p>
                </div>
                <div className="Box">
                  <div className="CheckmarkIcon"><IoMdCheckmark /></div>
                  <p>Passing Score: 60% (90 correct answers minimum)</p>
                </div>
              </div>
            </div>
          </div>

          {/* BOX 2 - MOH UAE */}
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
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>D pharm/B pharm (Minimum)</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Minimum experience required: 2 years</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Passing Score: 60% of total marks</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Total Questions: Around 100 MCQs</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Duration: ~2 hours (computer-based Prometric exam)</p></div>
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
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>B pharm (Minimum)</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Minimum experience required: 2 years</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Total Questions: 50 MCQs (English - 30, Arabic - 20)</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Passing Score: 60% with aural exam</p></div>
              </div>
            </div>
          </div>

          {/* BOX 4 - DOH (HAAD) */}
          <div className="CourseBox">
            {/* <div className="CourseIcon">
              <Image src={Logo4} alt="SPLE" />
            </div> */}
            <div className="CourseTitle">
              <p>DOH (HAAD) – Abu Dhabi</p>
            </div>
            <div className="CourseDesc">
              <p>
                Get licensed as a Pharmacy Technician in Abu Dhabi with our
                comprehensive DOH Exam Preparation Course.
              </p>
            </div>

            <div className="Eligibility">
              <div className="EligibilityTitle"><p>Eligibility Criteria</p></div>
              <div className="CriteriaBox">
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>B pharm (Minimum)</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Minimum experience required: 2 years</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Number of Questions: 150 MCQs</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Duration: 3 hours</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Passing Score: 55–60%</p></div>
              </div>
            </div>
          </div>

          {/* BOX 5 - SPLE SAUDI */}
          <div className="CourseBox">
             <div className="CourseIcon">
              <Image src={Logo5} alt="SPLE" />
            </div>
            <div className="CourseTitle">
              <p>SPLE (Saudi Arabia)</p>
            </div>
            <div className="CourseDesc">
              <p>
                Saudi Pharmacist Licensure Examination required for all
                pharmacists who want to practise in Saudi Arabia.
              </p>
            </div>

            <div className="Eligibility">
              <div className="EligibilityTitle"><p>Eligibility Criteria</p></div>
              <div className="CriteriaBox">
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>B pharm (Minimum)</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Minimum experience required: 2 years</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Number of Questions: 150 MCQs</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Duration: 2 hours</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Passing Score: 55–60%</p></div>
              </div>
            </div>
          </div>

          {/* BOX 6 - BAHRAIN */}
          <div className="CourseBox">
            <div className="CourseIcon">
              <p className="text-logo">BPLE</p>
            </div>
            <div className="CourseTitle">
              <p>BAHRAIN (BPLE)</p>
            </div>
            <div className="CourseDesc">
              <p>
                Bahrain Pharmacy Licensure Examination administered by the
                National Health Regulatory Authority (NHRA).
              </p>
            </div>

            <div className="Eligibility">
              <div className="EligibilityTitle"><p>Eligibility Criteria</p></div>
              <div className="CriteriaBox">
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>B pharm (Minimum)</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Minimum experience required: 2 years</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Number of Questions: 150 MCQs</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Duration: 2.5 hours</p></div>
                <div className="Box"><div className="CheckmarkIcon"><IoMdCheckmark /></div><p>Passing Score: 60%</p></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseList;
