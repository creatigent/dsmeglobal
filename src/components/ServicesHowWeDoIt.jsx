import React from "react";
import { ServicesHowWeDoItEntry } from "../components/ServicesHowWeDoItEntry";

export function ServicesHowWeDoIt() {
  return (
    <div className="services__how__we__do__it">
      <div className="services__how__we__do__it__heading heading">
        How we do it?
      </div>
      <div className="services__how__we__do__it__info">
        Fast-track your project's delivery using our simple three-step
        application development process.
      </div>
      <div className="services__how__we__do__it__content">
        <ServicesHowWeDoItEntry
          icon="1"
          title="Requirements Gathering"
          list={[
            "Requirements Definition",
            "Analyzing the requirements",
            "Documenting the process",
            "Provide initial design",
          ]}
        />
        <ServicesHowWeDoItEntry
          icon="2"
          title="Development & Testing"
          list={[
            "Frontend & backend development",
            "Weekly Client Feedback (SCRUM)",
            "QA Testing",
            "Deployment",
          ]}
        />
        <ServicesHowWeDoItEntry
          icon="3"
          title="Support & Maintenance"
          list={[
            "SLA Based Support",
            "L3 and Production Support Services",
            "Operational support where needed",
            "On-going Support",
          ]}
        />
      </div>
    </div>
  );
}
