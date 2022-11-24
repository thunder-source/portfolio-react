import React from "react";

export default function Skills() {
  const skills = {
    frontEnd: [
      {
        name: "HTML",
        persent: "85%",
      },
      {
        name: "CSS",
        persent: "75%",
      },
      {
        name: "JavaScript",
        persent: "60%",
      },
      {
        name: "BootStrap",
        persent: "60%",
      },
      {
        name: "React Js",
        persent: "60%",
      },
      {
        name: "React Native",
        persent: "50%",
      },
    ],
    backEnd: [
      {
        name: "Java",
        persent: "55%",
      },
      {
        name: "Node Js",
        persent: "50%",
      },
      {
        name: "Express Js",
        persent: "40%",
      },
      {
        name: "FireBase",
        persent: "40%",
      },
      {
        name: "Mongo DB",
        persent: "30%",
      },
    ],
    additionalSkills: [
      {
        name: "Data Structure & Algorithms",
        persent: "55%",
      },
      {
        name: "Microsoft Office",
        persent: "60%",
      },
      {
        name: "Linux",
        persent: "40%",
      },
      {
        name: "GitHub",
        persent: "40%",
      },
    ],
  };
  return (
    <section className="skillssection" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My techinical level</span>
      <div className="skills__container container grid">
        <div>
          {/*==================== SKILLS 1 ====================*/}
          <div className="skills__content skills__open">
            <div className="skills__content">
              <div className="skills__header">
                <i className="uil uil-brackets-curly skills__icon" />
                <div>
                  <h1 className="skills_title" style={{ marginBottom: 0 }}>
                    Frontend developer
                  </h1>
                </div>
                {/* <i class="uil uil-angle-down skills__arrow"></i> */}
              </div>
              <div className="skills__list grid">
                {skills.frontEnd.map((item, i) => {
                  return (
                    <div key={i} className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">{item.name}</h3>
                        <span className="skills__number">{item.persent}</span>
                      </div>
                      <div className="skills__bar">
                        <span
                          className={`skills__percentage`}
                          style={{ width: item.persent }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/*==================== SKILLS 2 ====================*/}
          <div className="skills__content skills__close backend">
            <div className="skills__content">
              <div className="skills__header">
                <i className="uil uil-server-network-alt skills__icon" />
                <div>
                  <h1 className="skills__titles" style={{ marginBottom: 0 }}>
                    Backend developer
                  </h1>
                </div>
                {/* <i class="uil uil-angle-down skills__arrow"></i> */}
              </div>
              <div className="skills__list grid">
                {skills.backEnd.map((item, i) => {
                  return (
                    <div key={i} className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">{item.name}</h3>
                        <span className="skills__number">{item.persent}</span>
                      </div>
                      <div className="skills__bar">
                        <span
                          className={`skills__percentage`}
                          style={{ width: item.persent }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/*==================== SKILLS 3 ====================*/}
          <div className="skills__content skills__close backend">
            <div className="skills__content">
              <div className="skills__header">
                <i className="uil uil-server-network-alt skills__icon" />
                <div>
                  <h1 className="skills__titles" style={{ marginBottom: 0 }}>
                    Additional skills
                  </h1>
                </div>
                {/* <i class="uil uil-angle-down skills__arrow"></i> */}
              </div>
              <div className="skills__list grid">
                {skills.additionalSkills.map((item, i) => {
                  return (
                    <div key={i} className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">{item.name}</h3>
                        <span className="skills__number">{item.persent}</span>
                      </div>
                      <div className="skills__bar">
                        <span
                          className={`skills__percentage`}
                          style={{ width: item.persent }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
