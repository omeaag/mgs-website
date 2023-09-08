"use client";

import ConsultingService from "./ConsultingService";
import SmartContractSolutions from "./SmartContractSolutions";
import AudiSmartContract from "./AudiSmartContract";
import DevelopmentService from "./DevelopmentService";

function AccordionComponent() {
  return (
    <div className="acordionComponentContainer">
      <ConsultingService />
      <SmartContractSolutions />
      <AudiSmartContract />
      <DevelopmentService />
    </div>
  );
}

export default AccordionComponent;
