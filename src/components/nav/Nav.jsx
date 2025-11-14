"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavLogo from "../../assets/images/logo/logo.png";
import { RiSearchLine } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import { VscMenu } from "react-icons/vsc";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactSideNav from "../nav/ContactSideNav";
import SideNav from "../nav/SideNav"; 

const Nav = () => {
  const [showContact, setShowContact] = useState(false);
  const [showLeftNav, setShowLeftNav] = useState(false);
  const pathname = usePathname();

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
                  <Link href="/" className={pathname === "/" ? "active" : ""}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/course"
                    className={pathname === "/course" ? "active" : ""}
                  >
                    Course
                  </Link>
                </li>

                <li>
                  <Link href="#HomeAbout">About</Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className={pathname === "/contact" ? "active" : ""}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="NavSearcTooglehMenu">

              <div
                className="MainsideNavMenuIcon"
                onClick={() => setShowLeftNav(true)}
              >
                <VscMenu />
              </div>

              <div className="NavSearchMenu">
                <div className="Searchicon">
                  <RiSearchLine />
                </div>

                <div
                  className="NavToogleMenu"
                  onClick={() => setShowContact(true)}
                >
                  <CgMenuRight />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {showLeftNav && (
        <div
          className="LeftNavOverlay"
          onClick={() => setShowLeftNav(false)}
        ></div>
      )}

      <SideNav show={showLeftNav} onClose={() => setShowLeftNav(false)} />

      {showContact && (
        <div
          className="MenuRightOverlay"
          onClick={() => setShowContact(false)}
        ></div>
      )}

      <ContactSideNav show={showContact} onClose={() => setShowContact(false)} />
    </>
  );
};

export default Nav;
