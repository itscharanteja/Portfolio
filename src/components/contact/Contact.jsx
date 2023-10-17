import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h3>Contact</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input type="email" placeholder="Enter email" required="true" />

          <textarea placeholder="Message" required="true" />

          <button>Submit</button>
        </form>
        {submitted ? <p>Thanks! Will reply in ASAP</p> : null}
        <div className="socialMedia">
          <a
            href="https://www.instagram.com/itscharanteja"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/instagram.png" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/itscharanteja/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://www.github.com/itscharanteja"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  );
}
