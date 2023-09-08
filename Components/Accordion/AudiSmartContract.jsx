"use client";

import accordionUp from "./accordion-images/accordion-up.svg";
import accordionDown from "./accordion-images/accordion-down.svg";
import Image from "next/image";
import "./AccordionComponent.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import logicAudit from "./accordion-images/ai-implementations.svg";
import securityAudit from "./accordion-images/securityAudit.svg";
import analyticsPerformance from "./accordion-images/analytics-performance.svg";
import { useState } from "react";

function AudiSmartContract() {
  let array3 = [
    {
      id: 6,
      title: "Security Audit",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
      image: securityAudit,
    },
    {
      id: 7,
      title: "Logic Audit",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
      image: logicAudit,
    },
    {
      id: 8,
      title: "Analytics & Performance Tools",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
      image: analyticsPerformance,
    },
  ];
  const [display, setDisplay] = useState(false);

  return (
    <div className="accordionSection">
      <div onClick={() => setDisplay(!display)} className="sectionHeader">
        <p>
          Audi Smart <span>Contract</span>
        </p>
        {display === true ? (
          <Image src={accordionUp} />
        ) : (
          <Image src={accordionDown} />
        )}
      </div>

      {array3.map((item, index) => {
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
  );
}
export default AudiSmartContract;
