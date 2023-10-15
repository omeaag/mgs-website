"use client";

import accordionUp from "./accordion-images/accordion-up.svg";
import accordionDown from "./accordion-images/accordion-down.svg";
import micarCompliance from "./accordion-images/micar-compliance.svg";
import blockchainAdvisory from "./accordion-images/blockchain-advisory.svg";
import tokenomics from "./accordion-images/tokenomics.svg";
import Image from "next/image";
import "./AccordionComponent.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { useState } from "react";

function ConsultingService() {
  const array1 = [
    {
      id: 1,
      title: "MicaR Compliance 🇪🇺",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
      image: micarCompliance,
    },
    {
      id: 2,
      title: "Blockchain advisory",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
      image: blockchainAdvisory,
    },
    {
      id: 3,
      title: "Tokenomics Advisory",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
      image: tokenomics,
    },
  ];
  const [display, setDisplay] = useState(false);

  return (
    <div className="accordionSection">
      <div onClick={() => setDisplay(!display)} className="sectionHeader">
        <p>
          <span>Consulting</span> Service
        </p>

        {display === true ? (
          <Image alt="accordion-up" src={accordionUp} />
        ) : (
          <Image alt="accordion-down" src={accordionDown} />
        )}
      </div>
      <div className="accordionIndex">
        {array1.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <LeftSection displayContent={display} key={item.id} item={item} />
            );
          } else {
            return (
              <RightSection displayContent={display} key={item.id} item={item} />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ConsultingService;
