import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Tharun kadimi</span>
          <br /> Aspiring front end developer
        </span>
        <p className="introPara">
          "Browsing the web of possibilities, one line of code at a time. 💻✨
          <br />
          #AspiringWebDeveloper"
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire me" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>

      <img src={bg} alt="Profile" className="profile-img" />
    </section>
  );
};

export default Intro;
