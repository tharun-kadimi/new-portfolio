import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, as well as design software such as Adobe
        Photoshop and Illustrator.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={UIDesign} className="skillBarImg" alt="UI Design" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={WebDesign} className="skillBarImg" alt="Web Design" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              This demo text can be changed while making the production ready
              website
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={AppDesign} className="skillBarImg" alt="App Design" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>You can write text realted to mobile app development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
