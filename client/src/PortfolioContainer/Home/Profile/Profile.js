import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
import { data } from "../../../data";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/nikhil.baghel.982">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://github.com/Nikhil-Kumar12">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.instagram.com/__ig_snowflake_/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/nikhil-kumar-803a0b196">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://twitter.com/_snowburst">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">{data.name}</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🔴",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "Mern Stack Dev 😎",
                    1000,
                    "UI/UX Designer 🌐",
                    1000,
                    "React Dev 📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">{data.catchLine}</span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              Hire Me
            </button>
            <a href="Resume.pdf" download="Nikhil Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
