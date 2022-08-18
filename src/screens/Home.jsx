import React from "react";
import { HomeServices } from "./HomeServices";
import { HomeJumbtron } from "./HomeJumbtron";
import { HomeStats } from "./HomeStats";
import { HomeWork } from "./HomeWork";
import { HomeTechnologies } from "./HomeTechnologies";
import { HomeEngagement } from "./HomeEngagement";

export default function Home() {
  return (
    <>
      <HomeJumbtron />
      <HomeServices />
      <HomeStats />
      <HomeWork />
      <HomeTechnologies />
      <HomeEngagement />
    </>
  );
}
