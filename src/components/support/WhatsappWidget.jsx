"use client";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const WhatsappWidget = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ✅ Scroll To Top Button */}
      <div
        className={`scrollTopBtn ${showScroll ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <MdKeyboardArrowUp />
      </div>

      {/* ✅ WhatsApp Button */}
      <a
        href="https://wa.me/+917012584203"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsappWidget"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default WhatsappWidget;
