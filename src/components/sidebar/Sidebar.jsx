import React, { useState } from "react";
import "./sidebar.css";
import "../../index.css";
import Logo from "../../assets/logo.png";

const Sidebar = ({ toggle, setToggle }) => {
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav_logo">
          <img src={Logo} alt="" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#languages" className="nav__link">
                  <i className="icon-screen-desktop"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#idiom" className="nav__link">
                  <i className="icon-speech"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#interview" className="nav__link">
                  <i className="icon-camrecorder"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="icon-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2024 - 2025.</span>
        </div>
      </aside>

      <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => setToggle(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
