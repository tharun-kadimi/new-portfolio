import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactimg from "../../assets/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Skills</Link>
        <Link className="desktopMenuListItem">Projects</Link>
        <Link className="desktopMenuListItem">Resume</Link>
      </div>
      <button type="button" className="desktopMenuBtn">
        <img src={contactimg} alt="" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
