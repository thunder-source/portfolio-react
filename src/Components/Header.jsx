import React, { useEffect, useState } from "react";
const selectedIcon = localStorage.getItem("selected-icon");

export default function Header() {
  const [dayNightToggle, setDayNightToggle] = useState(selectedIcon || "day");
  const [mobileNavToggle, setmobileNavToggle] = useState(false);

  useEffect(() => {
    const bodyClass = document.body.className;
    if (dayNightToggle === "night") {
      document.body.className = "dark-theme";
    } else {
      if (bodyClass == "dark-theme") {
        document.body.className = "";
      } else {
        document.body.className = "dark-theme";
      }
    }
    localStorage.setItem("selected-theme", bodyClass);
    localStorage.setItem("selected-icon", dayNightToggle);
  }, [dayNightToggle]);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Praditya
        </a>
        <div
          className={`nav__menu ${mobileNavToggle ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setmobileNavToggle(!mobileNavToggle)}
                className="nav__link active-link"
              >
                <i className="uil uil-home nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setmobileNavToggle(!mobileNavToggle)}
                className="nav__link"
              >
                <i className="uil uil-user-circle nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setmobileNavToggle(!mobileNavToggle)}
                className="nav__link"
              >
                <i className="uil uil-file-heart nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setmobileNavToggle(!mobileNavToggle)}
                className="nav__link"
              >
                <i className="uil uil-message nav__icon" />
                Contact Me
              </a>
            </li>
          </ul>
          <i
            className="uil uil-multiply nav__close "
            id="nav-close"
            onClick={() => setmobileNavToggle(!mobileNavToggle)}
          />
        </div>
        <div className="nav__btns">
          {/* Button for Theme change */}
          <i
            className={`uil change__theme uil-moon ${
              dayNightToggle === "day" ? "uil-moon" : "uil-sun"
            } `}
            onClick={() =>
              dayNightToggle === "day"
                ? setDayNightToggle("night")
                : setDayNightToggle("day")
            }
            id="theme-button"
          />
          <div
            className={`nav__toggle ${mobileNavToggle ? "show-menu" : ""}`}
            onClick={() => setmobileNavToggle(!mobileNavToggle)}
            id="nav-toggle"
          >
            <i className="uil uil-apps" />
          </div>
        </div>
      </nav>
    </header>
  );
}
