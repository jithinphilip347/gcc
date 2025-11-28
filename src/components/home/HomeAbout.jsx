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
                  Founded in 2021, GCC Academy is one of the best coaching
                  institutes in Kerala for healthcare professionals preparing
                  for licensing exams. We specialize in Gulf exam coaching,{" "}
                  <b> DHA, MOH, HAAD/DOH, QCHP, and Prometric </b> exam
                  preparation, and online exam training.
                </p>
                <p>
                  Our mission is to help working healthcare professionals pass
                  their licensing exams with confidence, even if they’ve been
                  away from academics for years. Through one-on-one coaching,
                  flexible schedules, structured lessons, and personalized
                  guidance, we ensure each student gets the support they need
                  until they succeed.
                </p>
                <p>
                  Over the years, GCC Academy has earned a reputation for high
                  pass rates, clear teaching, and personal attention, making us
                  a trusted choice for professionals seeking exam success in
                  Kerala and beyond.
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
