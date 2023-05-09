import React from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const { isScreenDesktop } = useWindowWidth();

  const techMobileDevicesNames = [
    "JavaScript",
    "React JS",
    "Redux Toolkit",
    "Node JS",
    "MongoDB",
  ];

  const techMobileDevicesArray = technologies.filter((technology) =>
    techMobileDevicesNames.includes(technology.name)
  );

  return isScreenDesktop ? (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  ) : (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {techMobileDevicesArray.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
