import React from "react";
import { AboutCeoMessage } from "../components/AboutCeoMessage";
import { AboutJumbotron } from "../components/AboutJumbotron";
import { AboutOur } from "../components/AboutOur";
import { AboutTeam } from "../components/AboutTeam";
import { AboutDevelopmentProcess } from "../components/AboutDevelopmentProcess";

export default function About() {
  return (
    <>
      <AboutJumbotron />
      <AboutCeoMessage />
      <AboutOur />
      <AboutTeam />
      <AboutDevelopmentProcess />
    </>
  );
}
