import React from "react";

import Card from "./Card-proyect";

import "./styles/Proyects.scss";
import weather from "../assets/img/weather-app.png";
import pomodro from "../assets/img/pomodoro.png";
import todo from "../assets/img/to-do.png";

export default function Proyects() {
  return (
    <div id="proyects-container">
      <h2>Proyects</h2>
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
      <div className="proyects width-container">
        <Card
          name="Weather App"
          content="This project was developed at Henry's Bootcamp with React and Redux. The public weather api was used "
          img={weather}
          url={"https://the-weather-webapp.netlify.app/"}
          urlGitHub={"https://github.com/maxi326519/clima-app"}
        />
        <Card
          name="Pomodoro App"
          content="The app for manage your time more efficuently, breaking it up into small pomodoro beats and adding breaks in between"
          img={pomodro}
          url={"https://pomodoro-page.netlify.app/"}
          urlGitHub={"https://github.com/maxi326519/pomodoro-app"}
        />
        <Card
          name="To Do App"
          content="The to do app to manage your tasks, adding date limite and time limite for them, and grouping them into categories"
          img={todo}
          url={"https://the-todo-list-webapp.netlify.app/"}
          urlGitHub={"https://github.com/maxi326519/to-do-list-app"}
        />
      </div>
      <svg
        className="wave"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path d="M0,128L34.3,160C68.6,192,137,256,206,266.7C274.3,277,343,235,411,224C480,213,549,235,617,250.7C685.7,267,754,277,823,256C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,202.7C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>
    </div>
  );
}
