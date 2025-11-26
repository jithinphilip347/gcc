import Image from "next/image";
import React from "react";
import Team from "../../assets/images/team.jpeg";
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
                <h2>Greeshma Arun</h2>
                <p>Pharmacist Educator / Gulf Licensing Exam Coach</p>
              </div>

              <div className="LearnMoreOurTeam">
                <p>
                  Greeshma Arun is a highly experienced pharmacy educator with
                  over 8 years of expertise in coaching candidates for Gulf
                  pharmacist licensing exams. She has successfully trained
                  numerous students for DHA, MOH, HAAD/DOH, QCHP, and Prometric
                  exams, helping them achieve high pass rates through her
                  structured teaching approach and deep subject knowledge. Her
                  commitment to student success and clear, exam-focused guidance
                  has made her a trusted mentor for aspiring pharmacists
                  pursuing careers in the Gulf region.
                </p>
              </div>

              <div className="OurTeamContactBox">
                <a href="mailto:greeshma@gccacademy.net">
                  <HiOutlineMail /> greeshma@gccacademy.net
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
