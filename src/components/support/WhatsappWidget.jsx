// "use client";
// import React, { useEffect, useState } from "react";
// import { FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa"; // Imported FaPhoneAlt and FaTimes
// import { MdKeyboardArrowUp } from "react-icons/md";
// import { IoCloseSharp } from "react-icons/io5";
// const WhatsappWidget = () => {
//   const [showScroll, setShowScroll] = useState(false);
//   const [scrollPercent, setScrollPercent] = useState(0);
//   const [isOpen, setIsOpen] = useState(false); // State to toggle menu

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;

//       const scrolled = (scrollTop / docHeight) * 100;
//       setScrollPercent(scrolled);

//       setShowScroll(scrollTop > 200);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const radius = 18;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (scrollPercent / 100) * circumference;

//   return (
//     <>
//       <div
//         className={`scrollTopBtn ${showScroll ? "show" : ""}`}
//         onClick={scrollToTop}
//       >
//         <svg className="progressRing" width="44" height="44">
//           <circle
//             className="progressBg"
//             cx="22"
//             cy="22"
//             r={radius}
//           />
//           <circle
//             className="progressBar"
//             cx="22"
//             cy="22"
//             r={radius}
//             style={{
//               strokeDasharray: circumference,
//               strokeDashoffset: offset,
//             }}
//           />
//         </svg>
//         <MdKeyboardArrowUp />
//       </div>

//       <div className="floatingWidgetContainer">
        
//         <div className={`widgetOptions ${isOpen ? "open" : ""}`}>
          
//           <a href="tel:+917012584203" className="actionBtn">
//             <span className="icon">
//               <FaPhoneAlt />
//             </span>
//             <span className="text">Call Now</span>
//           </a>

//           <a
//             href="https://wa.me/+917012584203"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="actionBtn"
//           >
//             <span className="icon">
//               <FaWhatsapp />
//             </span>
//             <span className="text">WhatsApp Me</span>
//           </a>
//         </div>

//         <div className={`whatsappMainBtn ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
//           {isOpen ? <IoCloseSharp  /> : <FaWhatsapp />}
//         </div>
//       </div>
//     </>
//   );
// };

// export default WhatsappWidget;

"use client";
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const WhatsappWidget = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );

      const viewPortHeight = window.innerHeight;
      const docHeight = pageHeight - viewPortHeight;

      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollPercent(Math.min(Math.max(scrolled, 0), 100));
      setShowScroll(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {/* Scroll Top Button */}
      <div
        className={`scrollTopBtn ${showScroll ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <svg className="progressRing" width="44" height="44">
          <circle className="progressBg" cx="22" cy="22" r={radius} />
          <circle
            className="progressBar"
            cx="22"
            cy="22"
            r={radius}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        <MdKeyboardArrowUp />
      </div>

      {/* Floating WhatsApp Widget */}
      <div className="floatingWidgetContainer">
        <div className={`widgetOptions ${isOpen ? "open" : ""}`}>
          <a href="tel:+917012584203" className="actionBtn">
            <span className="icon"><FaPhoneAlt /></span>
            <span className="text">Call Now</span>
          </a>

          <a
            href="https://wa.me/+917012584203"
            target="_blank"
            rel="noopener noreferrer"
            className="actionBtn"
          >
            <span className="icon"><FaWhatsapp /></span>
            <span className="text">WhatsApp Me</span>
          </a>
        </div>

        <div
          className={`whatsappMainBtn ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          {isOpen ? <IoCloseSharp /> : <FaWhatsapp />}
        </div>
      </div>
    </>
  );
};

export default WhatsappWidget;
