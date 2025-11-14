"use client";
import React from "react";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const SideNav = ({ show, onClose }) => {
  const pathname = usePathname();

  return (
    <div id="SideNav" className={show ? "active" : ""}>
      <div className="SidenavMain">
        <div className="SideNavClose" onClick={onClose}>
          <IoCloseOutline />
        </div>

        <div className="SideNavLink">
          <ul>
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "active" : ""}
                onClick={onClose}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/course"
                className={pathname === "/course" ? "active" : ""}
                onClick={onClose}
              >
                Course
              </Link>
            </li>

            <li>
              <Link href="#HomeAbout" onClick={onClose}>
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "active" : ""}
                onClick={onClose}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
