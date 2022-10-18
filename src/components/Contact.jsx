import React from "react";

import "./styles/Contact.scss";

export default function Contact() {
  return (
    <div className="container-form" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="width-container">
        <div className="form-info">
          <span>email</span>
        </div>
        <form>
          <div className="form-input">
            <label>Name</label>
            <input type="text" id="name"></input>
          </div>
          <div className="form-input">
            <label>E-mail</label>
            <input type="email" id="email"></input>
          </div>
          <div className="form-input">
            <label>Subject</label>
            <input type="email" id="subject"></input>
          </div>
          <div className="form-input">
            <label>Message</label>
            <textarea type="text" id="textarea"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
