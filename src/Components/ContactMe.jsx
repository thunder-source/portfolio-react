import React from "react";

export default function ContactMe() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=917974544024"
            className="contact__information"
            target="_blank"
          >
            <i className="uil uil-whatsapp contact__icon" />
            <div>
              <h3 className="contact__title">Whatsapp me</h3>
              <span className="contact__subtitle">7974544024</span>
            </div>
          </a>
          <a
            href="mailto:majhipraditya@gmail.com"
            className="contact__information"
          >
            <i className="uil uil-envelope contact__icon" />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">majhipraditya@gmail.com</span>
            </div>
          </a>
          <a
            href="https://www.google.com/maps/place/Gwalior,+Madhya+Pradesh/@26.2141389,78.1208586,12z/data=!3m1!4b1!4m5!3m4!1s0x3976c5d1792291fb:0xff4fb56d65bc3adf!8m2!3d26.2124007!4d78.1772053"
            target="_blank"
            className="contact__information"
          >
            <i className="uil uil-map-marker contact__icon" />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                Gwalior Madhya Pradesh India
              </span>
            </div>
          </a>
        </div>
        <form
          action="https://formspree.io/f/xjvzrrap"
          method="POST"
          className="contact__form grid"
        >
          <div className="contact__content">
            <label className="contact__label">Name</label>
            <input
              type="text"
              name="name"
              className="contact__input"
              required=""
            />
          </div>
          <div className="contact__content">
            <label className="contact__label">Email</label>
            <input
              type="email"
              name="email"
              className="contact__input"
              required=""
            />
          </div>
          <div className="contact__content">
            <label className="contact__label">Project</label>
            <input
              type="text"
              name="project"
              className="contact__input"
              required=""
            />
          </div>
          <div className="contact__content">
            <label className="contact__label">Message</label>
            <textarea
              name=""
              id=""
              required=""
              cols={0}
              rows={7}
              className="contact__input"
              defaultValue={""}
            />
          </div>
          <div>
            <button
              type="submit"
              // onClick={onSubmitForm()}
              className="button button--flex"
            >
              Send Message <i className="uil uil-message button__icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
