import Image from "next/image";
import React from "react";
import Team from "../../assets/images/team.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";

const HomeTeam = () => {
  return (
    <div id="HomeTeam">
        <div className="HomeAboutHead">
          <h2>
            Our <span>Team</span>
          </h2>
        </div>
        <div className="HomeTeamMain">
             <div className="container">
                <div className="HomeTeamMainBox">
          <div className="OurTeamImgBox">
            <Image src={Team} alt="Team" className="teamimg" />
          </div>
          <div className="OurTeamDetailsBox">

            <div className="OurTeamNameBox">
              <h2>Dr. Anandhu K</h2>
              <p>Pharmacology Specialist / Lecturer</p>
            </div>

            <div className="LearnMoreOurTeam">
              <p>
                Dr. Anandhu K is a highly experienced pharmacology educator with over 
                8+ years of teaching and clinical expertise. He has guided thousands 
                of students in preparing for DHA, MOH, HAAD, SPLE, and Prometric exams 
                with a proven track record of success.
              </p>
            </div>

            <div className="OurTeamContactBox">
              <a href="tel:+917902345678">
                <HiOutlinePhone /> +91 79023 45678
              </a>

              <a href="mailto:doctor@example.com">
                <HiOutlineMail /> doctor@example.com
              </a>
            </div>

          </div>
                </div>


        </div>
      </div>
    </div>
  );
};

export default HomeTeam;
