import React, { useState, useEffect } from "react";
import Links from "./Links";

import "./styles/Home.scss";
import img from "../assets/img/Perfil.png";

export default function Home() {
  const [text, setText] = useState({
    animation: "Hello ",
    store: "Hello World!".split(""),
    char: 6,
    isComplete: false,
  });

  useEffect(() => {
    setTimeout(() => {
      if (!text.isComplete) {
        if (text.char >= text.store.length)
          setTimeout(() => {
            setText({ ...text, isComplete: true });
          }, 1000);
        else {
          setText({
            ...text,
            animation: text.animation + text.store[text.char],
            char: text.char + 1,
          });
        }
      } else if (text.isComplete) {
        if (text.char <= 6)
          setTimeout(() => {
            setText({ ...text, isComplete: false });
          }, 1000);
        else {
          setText({
            ...text,
            animation: text.animation
              .split("")
              .slice(0, text.animation.length - 1)
              .join(""),
            char: text.char - 1,
          });
        }
      }
    }, 400);
  }, [text]);

  return (
    <div id="home">
      <div className="home-container">
        <div className="home-text">
          <div className="home-text__container">
            <h2>
              <b>{text.animation}</b>
            </h2>
            <p>
              <b>I'm Maximiliano Garcia</b>
            </p>
            <p>
              <b>Full Stack Developer</b>
            </p>
            <a className="home-btn-contact" href="#contact">
              CONTACT ME{" "}
            </a>
            <Links />
          </div>
        </div>
        <div className="home-img">
          <div className="home-img__transform">
            <div className="home-img__container">
              <img src={img} alt="perfil" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-wave">
        <svg
          className="arrow-dowm"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >

          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
        <svg
          className="wave"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,128L34.3,160C68.6,192,137,256,206,266.7C274.3,277,343,235,411,224C480,213,549,235,617,250.7C685.7,267,754,277,823,256C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,202.7C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
        <svg
          className="wave2"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,224L34.3,213.3C68.6,203,137,181,206,165.3C274.3,149,343,139,411,165.3C480,192,549,256,617,250.7C685.7,245,754,171,823,165.3C891.4,160,960,224,1029,245.3C1097.1,267,1166,245,1234,245.3C1302.9,245,1371,267,1406,277.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}
