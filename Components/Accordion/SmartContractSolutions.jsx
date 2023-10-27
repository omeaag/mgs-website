"use client";
import dappsArchitecture from "./accordion-images/dapps-architecture.svg";
import ercModel from "./accordion-images/logic-audit.svg";
import processAut from "./accordion-images/process.svg";
import accordionUp from "./accordion-images/accordion-up.svg";
import accordionDown from "./accordion-images/accordion-down.svg";
import Image from "next/image";
import "./AccordionComponent.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { useState, useEffect } from "react";

function SmartContractSolutions() {
  let array2 = [
    {
      id: 4,
      title: "ERC-Model Components",
      paragraph:
        "Guidance through the selection and customization of Ethereum-based token standards is provided, ensuring seamless integration within your blockchain projects for robust token creation and efficient management. ",
      image: ercModel,
    },
    {
      id: 5,
      title: "Dapps Architecture",
      paragraph:
        "We provide expertise in designing and developing decentralized applications (dApps) tailored to meet your business objectives, enabling a smooth transition to blockchain-based solutions. ",
      image: dappsArchitecture,
    },
    {
      id: 5.5,
      title: "Process Automatization",
      paragraph:
        "Process Automatization Specialized smart contract solutions are created to automate and streamline your business operations, enhancing efficiency, reducing operational costs, and optimizing your processes for superior performance.",
      image: processAut,
    },
  ];

  const [display, setDisplay] = useState(false);

  useEffect(()=>{
    let item = localStorage.getItem('service');
    if(item && item == 'smart'){
      setDisplay(true);
      localStorage.removeItem('service');
    }
  },[])

  return (
    <div className="accordionSection">
      <div id="smart" onClick={() => setDisplay(!display)} className="sectionHeader">
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
