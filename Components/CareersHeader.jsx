"use client";

import Image from "next/image";
import "../public/style/CareersHeader.css";
import worldMap from "../public/materials/world-map-background.svg";

function CareersHeader() {
  return (
    <div className="careersHeaderContainer">
      <div className="careersHeaderAllContent">
        <div className="careersHeaderAllText">
          <div className="careersBiggestHeader">
            <p>Meet Our Team Of</p>
          </div>
          <div className="careersSmallHeader">
            <p>Developers, Managers, and world-class problem solvers</p>
          </div>
          <div className="careersHeaderPar">
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Integer eget neque lectus.
              <br /> Donec a lobortis est, a molestie augue.
              <br />
              Pellentesque.
            </p>
          </div>
        </div>
        <div className="careersHeaderImageContainer">
          <Image className="floatImage" src={worldMap} />
        </div>
      </div>
    </div>
  );
}

export default CareersHeader;
