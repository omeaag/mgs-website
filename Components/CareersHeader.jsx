"use client"

import Image from "next/image"
import "../public/style/CareersHeader.css"
import worldMap from "../public/materials/world-map-background.svg"

function CareersHeader() {
  return (
    <div className="careersHeaderContainer">
      <div className="careersHeaderAllContent">
        <div className="careersHeaderAllText">
          <div className="careersBiggestHeader">
            <p>Meet our team of</p>
          </div>
          <div className="careersSmallHeader">
            <p>Developers, Managers, and world-class problem solvers</p>
          </div>
          <div className="mobilCareersHeaderImageContainer">
            <Image alt="world map" className="floatImage" src={worldMap} />
          </div>
          <div className="careersHeaderPar my-9">
            <p>
              Uncover a realm of innovation with our adept ensemble, where each
              challenge unraveled leads to a hallmark solution. Your venture
              into the digital domain is navigated with precision, ensuring
              every milestone is a stride towards enduring success. Engage with
              a team where dedication converges with excellence, propelling your
              projects to horizons yet explored.
            </p>
          </div>
        </div>
        <div className="careersHeaderImageContainer">
          <Image alt="world map" className="floatImage" src={worldMap} />
        </div>
      </div>
    </div>
  )
}

export default CareersHeader
