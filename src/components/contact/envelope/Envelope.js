import React, { useState } from "react";
import "./envelope.scss";

const Envelope = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="envelope-wrapper">
        <a
          onClick={() => setOpen(!open)}
          id="envelope"
          className={open ? "open" : "close"}
          href="mailto:lucas.baudino@outlook.fr"
        >
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            <div className="words line1"></div>
            <div className="words line2"></div>
            <div className="words line3"></div>
            <div className="words line4"></div>
          </div>
          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Envelope;
