import React from "react";

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <img
          src="/assets/img/undraw_programming_re_kg9v.svg"
          alt=""
          className="about__img"
        />
        <div className="about__data">
          <p className="about__description">
            Web developer, with extensive knowledge and years of experience,
            working in web technologies and Ui / Ux design, delivering quality
            work.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">1+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>
            <div>
              <span className="about__info-title">15+</span>
              <span className="about__info-name">
                Completed <br /> project
              </span>
            </div>
            <div>
              <span className="about__info-title">10+</span>
              <span className="about__info-name">
                Technologies <br /> knowledge
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a
              download=""
              href="/assets/pdf/Praditya_CV.pdf"
              className="button button--flex"
            >
              Download CV
              <i className="uil uil-file-download-alt button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
