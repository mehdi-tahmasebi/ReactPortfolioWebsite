import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p className="paragraph_justify">
            I'm Mehdi, I've been working in the web field for about three years
            and now, I'm a Front-End developer at SoundTrack Srl Company in
            Milan, Italy. I am working professionally on a dedicated web
            application with React and I better say I love React and my work. In
            addition, I am a developer and designer of WordPress Websites, which
            in addition to my main job, I work on WordPress Websites for various
            projects. I love learning and teaching. Anyone who would like to get
            guidance on how to start programming and would like to become a
            front-end developer can count on my help or send me a question
            wherever he has a question. I will definitely answer it as soon as
            possible.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
