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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
      image: cloudDatabase,
    },
    {
      id: 10,
      title: "Web & Apps Development",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
      image: webApps,
    },
    {
      id: 11,
      title: "AI Implementations",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
      image: aiImplementations,
    },
    {
      id: 12,
      title: "API Connections",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget neque lectus. Donec a lobortis est, a molestie augue. Pellentesque eget est lobortis, iaculis mi et, pulvinar lectus. Donec molestie mauris vel aliquet fermentum.",
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
