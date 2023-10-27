"use client";
import aiImplementations from "./accordion-images/ai-implementations.svg";
import apiConnections from "./accordion-images/api-connections.svg";
import cloudDatabase from "./accordion-images/cloud-database.svg";
import webApps from "./accordion-images/webApps.svg";

import accordionUp from "./accordion-images/accordion-up.svg";
import accordionDown from "./accordion-images/accordion-down.svg";
import Image from "next/image";
import "./AccordionComponent.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { useState,useEffect } from "react";

function DevelopmentService() {
  let array4 = [
    {
      id: 9,
      title: "Cloud & Database Management",
      paragraph:
        "We offer robust cloud architectures and database management services ensuring secure, accessible, and scalable data infrastructure to bolster project reliability and performance. ",
      image: cloudDatabase,
    },
    {
      id: 10,
      title: "Web & Apps Development",
      paragraph:
        "We offer robust cloud architectures and database management services ensuring secure, accessible, and scalable data infrastructure to bolster project reliability and performance. ",
      image: webApps,
    },
    {
      id: 11,
      title: "AI Implementations",
      paragraph:
        "Provide machine learning and artificial intelligence implementation services, tailored to drive innovation, enhance operational efficiency, and sharpen your competitive edge in your domain. ",
      image: aiImplementations,
    },
    {
      id: 12,
      title: "API Connections",
      paragraph:
        "Offer robust API connections and management services to facilitate smooth interactions between applications, third-party services, and data resources, ensuring optimized system integration",
      image: apiConnections,
    },
  ];
  const [display, setDisplay] = useState(false);
  useEffect(()=>{
    let item = localStorage.getItem('service');
    if(item && item == 'development'){
      setDisplay(true);
      localStorage.removeItem('service');
    }
  },[])

  return (
    <div className="accordionSection">
      <div id="development" onClick={() => setDisplay(!display)} className="sectionHeader">
        <p>
          <span>Development</span> Service
        </p>
        {display === true ? (
          <Image alt="accordion-up" src={accordionUp} />
        ) : (
          <Image alt="accordion-down" src={accordionDown} />
        )}
      </div>
      <div className="accordionIndex">
      {array4.map((item, index) => {
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
export default DevelopmentService;
