import React from "react";
import { HomeServicesCard } from "./HomeServicesCard";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import {
  webDevServiceImage,
  staffAugmentationServiceImage,
  startUpServiceImage,
  mobDevServiceImage,
  servicesSvg1,
  servicesSvg2,
} from "../assets";

export function HomeServices() {
  const data = [
    {
      image: webDevServiceImage,
      title: "Web App Development",
      info: "Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet.",
    },
    {
      image: mobDevServiceImage,
      title: "Mobile App Development",
      info: "Custom built mobile applications with amazing experiences that help support your business goals.",
    },
    {
      image: staffAugmentationServiceImage,
      title: "Staff Augmentation",
      info: "Get The Best IT Talent Under One Roof. Leverage our IT staff augmentation services to access certified IT professionals, including skilled software developers, business analysts, Scrum Masters, and QA specialists. We can help you scale up on demand with the right pool of talented individuals without stretching your budget.",
    },
    {
      image: startUpServiceImage,
      title: "Startup Services",
      info: "Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet.",
    },
  ];
  return (
    <section className="home__services">
      <img
        loading="lazy"
        src={servicesSvg1}
        alt="servicesSvg1"
        className="home__services__svg1"
      />
      <img
        loading="lazy"
        src={servicesSvg2}
        alt="servicesSvg2"
        className="home__services__svg2"
      />
      <Fade bottom distance="30%">
        <div className="home__services__heading heading">
          A complete enterprise designed
        </div>
      </Fade>
      <Fade bottom distance="30%">
        <div className="home__services__sub__heading heading">
          to modernize your business
        </div>
      </Fade>
      <Fade bottom distance="30%">
        <div className="home__services__info">
          We excel in providing cutting-edge solutions and development services
          that drive business performance, cultivate startups, and accelerate
          growth.
        </div>
      </Fade>
      <div className="home__services__content">
        {data?.map((item, index) => (
          <HomeServicesCard
            key={index}
            image={item.image}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
      <Fade bottom distance="30%">
        <Link
          to="/services"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          title="View All Projects"
          className="home__work__button"
        >
          View All Services
        </Link>
      </Fade>
    </section>
  );
}
