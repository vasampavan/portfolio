import React from "react";
import info from "../../data/info.js";
import { SiInfosys } from "react-icons/si";
import { FaLandmark } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { SiUdemy } from "react-icons/si";
import { PiCertificateFill } from "react-icons/pi";
import { SiHackerrank } from "react-icons/si";

import Slider from "react-slick";
import "../styles/educationandexperience.css";

export default function EducationAndExperience() {
  const certSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="ee-section">
      {/* EDUCATION & CERTIFICATES */}
      <div className="ee-column ee-education">
        <h4 className="ee-title">
          <FaLandmark className="ee-icon-edu" />
          Education
        </h4>
        {info.education.map((edu, i) => (
          <div className="ee-item" key={i}>
            {/* Duration floating above the dot */}
            <div className="ee-duration">
            <span >{edu.duration}</span>
            </div>
            <div className="ee-timeline">
              <div className="ee-line" />
              <div className="ee-dot" />

              <div className="ee-content">
                <h3 className="ee-entry-header">
                  <img
                    className="ee-logo"
                    src={edu.image}
                    alt={`${edu.school} logo`}
                  />
                  <div>
                    {edu.school}
                    <p className="ee-subtext">{edu.degree}</p>
                  </div>
                </h3>
              </div>
            </div>
          </div>
        ))}

        <h4 className="ee-title ee-cert-title">
          <PiCertificateFill className="ee-icon-cert" />
          Certificates
        </h4>
        <div className="ee-carousel-container">
          <Slider {...certSettings}>
            {info.certificates.map((cert, i) => (
              <div className="ee-slide" key={i}>
                { cert.icon === "google" ? (
                  <FcGoogle className="ee-cert-icon google" />
                ) :cert.icon === "infosys" ? (
                  <SiInfosys className="ee-cert-icon infosys" />
                ):
                cert.icon === "smartinterviews" ? (
                  <img src="/smartinterviews.webp" alt="" className="ee-cert-icon smartinterviews" />
                ):cert.icon === "udemy" ? (
                  <SiUdemy className="ee-cert-icon udemy" />
                ):(
                  <SiHackerrank className="ee-cert-icon hrank" />
                )}
                <div className="ee-cert-content">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ee-cert-link"
                  >
                    <p className="ee-cert-title-text">{cert.title}</p>
                    <p className="ee-cert-desc">{cert.description}</p>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="ee-column ee-experience">
        <h4 className="ee-title">
          <FaBuildingUser className="ee-icon-exp" />
          Experience
        </h4>
        {info.experience.map((exp, i) => (
          <div className="ee-item" key={i}>
            <div className="ee-duration">
            <span >{exp.duration}</span>
             </div>
            <div className="ee-timeline">
              <div className="ee-line" />
              <div className="ee-dot" />

              <div className="ee-content">
                <h3 className="ee-entry-header">
                  <img
                    className="ee-logo"
                    src={exp.image}
                    alt={`${exp.company} Logo`}
                  />
                  <div>
                    {exp.company}
                    <p className="ee-subtext">{exp.position}</p>
                  </div>
                </h3>
                <ul className="ee-desc-list">
                  {exp.descriptions.map((d, j) => (
                    <li key={j}>
                      <svg
                        className="ee-check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    
                      <span>{d}</span>
                    
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
