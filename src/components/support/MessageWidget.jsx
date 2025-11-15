"use client";
import React, { useState } from "react";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";

const MessageWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <div className="messageWidgetBtn" onClick={() => setOpen(true)}>
        <IoChatbubbleEllipsesOutline />
        <span className="msgCount">1</span>
      </div>

      {/* Popup */}
      {open && (
        <div className="messagePopup">
          <div className="msgPopupHeader">
            <p>24×7 Support</p>
            <button onClick={() => setOpen(false)}>
              <IoClose />
            </button>
          </div>

          <div className="msgPopupBody">
            <div className="msgBubble">
              <p className="msgTitle">Support Team</p>
              <p className="msgText">Hi 👋, how can I assist you today?</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageWidget;
