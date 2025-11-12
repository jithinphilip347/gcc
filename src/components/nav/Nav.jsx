"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavLogo from "../../assets/images/logo/logo.png";
import { RiSearchLine } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";

const Nav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // 👉 Prevent default link reload behavior
  const handleClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
  };

  return (
    <>
      <div id="Nav">
        <div className="container">
          <div className="NavMain">
            <div className="NavLogo">
              <Image src={NavLogo} alt="Logo" />
            </div>

            <div className="NavLink">
              <ul>
                <li>
                  <a
                    href="#"
                    className={activeLink === "Home" ? "active" : ""}
                    onClick={(e) => handleClick(e, "Home")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activeLink === "Course" ? "active" : ""}
                    onClick={(e) => handleClick(e, "Course")}
                  >
                    Course
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activeLink === "About" ? "active" : ""}
                    onClick={(e) => handleClick(e, "About")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={activeLink === "Contact" ? "active" : ""}
                    onClick={(e) => handleClick(e, "Contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="NavSearchMenu">
              <div className="Searchicon" onClick={() => setShowSearch(true)}>
                <RiSearchLine />
              </div>
              <div className="NavToogleMenu">
                <CgMenuRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
