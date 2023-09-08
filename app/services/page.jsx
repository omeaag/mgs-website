import AccordionComponent from "../../Components/Accordion/AccordionComponent";
import OurServices from "../../Components/OurServices";
import ServiceHeader from "../../Components/ServiceHeader";

export default function Services() {
  return (
    <div>
      <ServiceHeader />
      <AccordionComponent />
      <OurServices />
    </div>
  );
}
