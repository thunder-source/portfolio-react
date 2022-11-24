import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Projects() {
  const projectsData = [
    {
      image: "/assets/img/projects/undraw_hamburger_-8-ge6.svg",
      title: "Quick Bites",
      description: "Single page website for meals description",
      Hoisted_Link: "https://quick-bites.netlify.app",
    },
    {
      image: "/assets/img/projects/undraw_authentication_re_svpt.svg",
      title: "Password Generator Website",
      description: "Single page website for Generating Password",
      Hoisted_Link: "https://nostalgic-einstein-376af4.netlify.app",
    },
    {
      image: "/assets/img/projects/undraw_audio_player_re_cl20.svg",
      title: "order summary",
      description: "Single page website for order description",
      Hoisted_Link: "https://loving-haibt-90c6bd.netlify.app",
    },
    {
      image: "/assets/img/projects/undraw_book_lover_re_rwjy.svg",
      title: "Book Pod",
      description: "Single page website for Books info",
      Hoisted_Link: "https://suspicious-hamilton-1f9f41.netlify.app",
    },
    {
      image: "/assets/img/projects/icons8-tire-swing-96.png",
      title: "Tires Website",
      description: "Single page website for Tires description",
      Hoisted_Link: "https://blissful-stonebraker-032143.netlify.app",
    },
    {
      image: "/assets/img/projects/undraw_design_components_9vy6.svg",
      title: "components",
      description: "component card",
      Hoisted_Link: "https://nostalgic-shaw-2805d1.netlify.app/",
    },
  ];
  return (
    <section className="project__section" id="project">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">most recent work</span>
      <div className="project__container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projectsData.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="swiper-slide">
                  <div className="project__content grid">
                    <img src={item.image} alt="" className="project__img" />
                    <div className="project__data">
                      <h3 className="project__title">{item.title}</h3>
                      <p className="project__decription">{item.description}</p>
                      <a
                        href={item.Hoisted_Link}
                        target="_"
                        className="button button--flex button--small project__button"
                      >
                        check it out
                        <i className="uil uil-arrow-right button__icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
