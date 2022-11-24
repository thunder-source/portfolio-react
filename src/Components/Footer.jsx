import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Praditya</h1>
            <span className="footer__subtitle">Full stack developer</span>
          </div>
          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__links">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="footer__links">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__links">
                Contact
              </a>
            </li>
          </ul>
          <div className="footer__socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-instagram" />
            </a>
            <a
              href="https://twitter.com/PradityaManjhi"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-twitter-alt" />
            </a>
            <a
              href="https://www.linkedin.com/in/praditya-manjhi-0165a7211/"
              target="blank"
              className="footer__social"
            >
              <i className="uil uil-linkedin-alt" />
            </a>
          </div>
        </div>
        <p className="footer__copy">© ThunderCode. All right reserved</p>
      </div>
    </footer>
  );
}
