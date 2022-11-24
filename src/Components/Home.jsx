import React from "react";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/praditya-manjhi-0165a7211/"
              target="blank"
              className="home__social-icon"
            >
              <i className="uil uil-linkedin-alt" />
            </a>
            <a
              href="https://github.com/thunder-source"
              target="blank"
              className="home__social-icon"
            >
              <i className="uil uil-github-alt" />
            </a>
            <a
              href="https://leetcode.com/majhipraditya/"
              target="blank"
              className="home__social-icon"
            >
              <i className="uil uil-arrow" />
            </a>
          </div>
          <div className="home__img">
            {/* <img
              src="/assets/img/undraw_software_engineer_re_fyew.svg"
              alt=""
            /> */}
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              //   xmlns="http://www.w3.org/2000/svg"
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  className="home__blob-img"
                  x="0"
                  y="0"
                  href="assets/img/myImage.png"
                />
              </g>
            </svg>
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I'am Praditya</h1>
            <h3 className="home__subtitle">Full stack developer</h3>
            <p className="home__description">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering quality
              work.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me
              <i className="uil uil-message button__icon" />
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt-2 home__scroll-mouse" />
            <span className="home__scroll-name">Scroll down</span>
            <i className="uil uil-angle-down home__scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
