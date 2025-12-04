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
         Founder&apos;s <span>Note</span>
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
                {/* <h2>Greeshma Arun</h2> */}
                {/* <h2>A Note from Our Founder</h2> */}
                {/* <p>Pharmacist Educator / Gulf Licensing Exam Coach</p> */}
              </div>

              <div className="LearnMoreOurTeam">
                <p>
                  I believe most professionals don’t need ‘more studying’ , they
                  need focused guidance, clarity, and a mentor who shows them
                  exactly what to learn to pass.
                </p>
                <p>
                  For 8+ years, I’ve guided professionals who felt they’d
                  ‘forgotten everything’ ,  and watched them clear their Gulf
                  licensing exams with confidence.
                </p>
                <p>
                  At GCC Academy, you’re not just learning… you’re building a
                  future you once dreamed of. And I’m here to walk that journey
                  with you.
                </p>
              </div>
                <div className="OwnerBox">
                  <h2>Greeshma Arun</h2>
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
