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
import { useState,useEffect } from "react";

function AudiSmartContract() {
  let array3 = [
    {
      id: 6,
      title: "Security Audit",
      paragraph:
        "Discover and rectify potential vulnerabilities with our Security Audit service. We focus on fortifying your blockchain projects against threats, ensuring adherence to industry security standards. ",
      image: securityAudit,
    },
    {
      id: 7,
      title: "Logic Audit",
      paragraph:
        "With our Logic Audit service, the accuracy and efficiency of your smart contracts are meticulously verified. We delve into contract logic to prevent costly errors and optimize performance. ",
      image: logicAudit,
    },
    {
      id: 8,
      title: "Analytics & Performance Tools",
      paragraph:
        "Our Performance Audit service is orchestrated towards elevating your project's efficiency. By analyzing and optimizing system performance, we strive to meet your operational goals and deliver seamless user experiences.",
      image: analyticsPerformance,
    },
  ];
  const [display, setDisplay] = useState(false);
  useEffect(()=>{
    let item = localStorage.getItem('service');
    if(item && item == 'audit'){
      setDisplay(true);
      localStorage.removeItem('service');
    }
  },[])
  return (
    <div className="accordionSection">
      <div id="audit" onClick={() => setDisplay(!display)} className="sectionHeader">
        <p>
          Audi Smart <span>Contract</span>
        </p>
        {display === true ? (
          <Image alt="accordion-up" src={accordionUp} />
        ) : (
          <Image alt="accordion-down" src={accordionDown} />
        )}
      </div>
      <div className="accordionIndex">
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
    </div>
  );
}
export default AudiSmartContract;
