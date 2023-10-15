"use client";
import dappsArchitecture from "./accordion-images/dapps-architecture.svg";
import ercModel from "./accordion-images/logic-audit.svg";
import accordionUp from "./accordion-images/accordion-up.svg";
import accordionDown from "./accordion-images/accordion-down.svg";
import Image from "next/image";
import "./AccordionComponent.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { useState } from "react";

function SmartContractSolutions() {
  let array2 = [
    {
      id: 4,
      title: "ERC-Model Components",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
      image: ercModel,
    },
    {
      id: 5,
      title: "Dapps Architecture",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
      image: dappsArchitecture,
    },
  ];

  const [display, setDisplay] = useState(false);

  return (
    <div className="accordionSection">
      <div onClick={() => setDisplay(!display)} className="sectionHeader">
        <p>
          Smart Contract <span>Solutions</span>
        </p>
        {display === true ? (
          <Image alt="accordion up" src={accordionUp} />
        ) : (
          <Image alt="accordion down" src={accordionDown} />
        )}
      </div>
      <div className="accordionIndex">
      {array2.map((item, index) => {
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
export default SmartContractSolutions;
