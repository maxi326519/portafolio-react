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
          <div className="home-text__container right">
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
        <div className="home-img left">
          <div className="home-img__transform">
            <div className="home-img__container">
              <img src={img} alt="perfil" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
