"use client";
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const SearchPopup = ({ onClose }) => {
  return (
    <div id="SearchPopup">
      <div className="SearchPopupOverlay" onClick={onClose}></div>

      <div className="SearchPopupContainer">
        <button className="SearchCloseIcon" onClick={onClose}>
          <IoMdClose />
        </button>

        <div className="SearchBarWrapper">
          <input type="text" placeholder="Search..." className="SearchInput" />

          <button className="SearchBtn">
            <RiSearchLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
