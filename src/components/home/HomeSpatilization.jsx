"use client";
import React , { useState } from "react";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { TbReportMedical } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import Enquiry from "../enquiry/Enquiry";

const HomeSpatilization = () => {
      const [showEnquiry, setShowEnquiry] = useState(false);
    
  return (
    <div id="HomeSpatilization">
      <div className="container">
        <div className="HomeAboutHead">
          <h2>
            Our <span>Specializations</span>
          </h2>
        </div>

        <div className="HomeSpatilizationMain">
          {/* LEFT – PHARMACY */}
          <div className="HomeSpatilizationLeft">
            <div className="SpatilizationBox" onClick={() => setShowEnquiry(true)}>
              <div className="SpatilizationIconBox">
                <MdOutlineLocalPharmacy />
              </div>
              <div className="SpatilizationTitle">
                <h2>Pharmacy</h2>
              </div>
              <div className="SpatilizationDesc">
                <p>
                  Learn essential pharmaceutical skills, drug formulation,
                  dispensing techniques, and medical regulations.
                </p>
              </div>

              <div className="SpatilizationEligibility">
                <h4>Eligibility</h4>
                <ul>
                  <li>
                    <div className="CheckmarkIcon">
                      <FaCheck />
                    </div>
                    Plus Two (Science)
                  </li>
                  <li>
                    <div className="CheckmarkIcon">
                      <FaCheck />
                    </div>
                    Basic Biology Knowledge
                  </li>
                  <li>
                    <div className="CheckmarkIcon">
                      <FaCheck />
                    </div>
                    Good Communication Skills
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT – RADIOLOGY */}
          <div className="HomeSpatilizationRight">
            <div className="SpatilizationBox" onClick={() => setShowEnquiry(true)}>
              <div className="SpatilizationIconBox">
                <TbReportMedical />
              </div>
              <div className="SpatilizationTitle">
                <h2>Radiology</h2>
              </div>
              <div className="SpatilizationDesc">
                <p>
                  Master X-ray, CT, MRI scanning techniques and medical imaging
                  procedures with hands-on training.
                </p>
              </div>

              <div className="SpatilizationEligibility">
                <h4>Eligibility</h4>
                <ul>
                  <li>
                    <div className="CheckmarkIcon">
                      <FaCheck />
                    </div>
                    Plus Two (Science)
                  </li>
                  <li>
                    <div className="CheckmarkIcon">
                      <FaCheck />
                    </div>
                    Basic Physics Knowledge
                  </li>
                  <li>
                    <div className="CheckmarkIcon">
                      <FaCheck />
                    </div>
                    Observation Skills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Enquiry show={showEnquiry} onClose={() => setShowEnquiry(false)} />

    </div>
  );
};

export default HomeSpatilization;
