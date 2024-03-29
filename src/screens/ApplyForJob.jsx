import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";
import { homeBannerSvg1, homeBannerSvg3 } from "../assets";
import ApplyForJobJumbotron from "../components/ApplyForJobJumbotron";

export default function ApplyForJob({ setIsContact }) {
  const { state } = useLocation();
  useEffect(() => {
    setIsContact(false);
    document.querySelector("body").style.backgroundColor = "#131313";
    document.body.style.overflow = "auto";
    return () => {
      setIsContact(true);
      document.querySelector("body").style.backgroundColor = "white";
    };
  }, []);
  return (
    <>
      <div
        className="jumbotron"
        style={{
          minHeight: 300,
          justifyContent: "flex-end",
          backgroundColor: "transparent",
          marginBottom: "-2em",
        }}
      >
        <img
          loading="lazy"
          src={homeBannerSvg1}
          alt="homeBannerSvg1"
          className="home__jumbotron__svg1"
        />
        <img
          loading="lazy"
          src={homeBannerSvg3}
          alt="homeBannerSvg3"
          className="home__jumbotron__svg3"
        />
        <Fade bottom distance="30%">
          <div className="jumbotron__sub__heading heading">Be a part of us</div>
        </Fade>
        <Fade bottom distance="30%">
          <div className="jumbotron__heading heading">Apply for Job</div>
        </Fade>
      </div>
      <ApplyForJobJumbotron state={state.state} />
    </>
  );
}
