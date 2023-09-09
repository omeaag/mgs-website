import TechPartners from "@/Components/techPartners";
import AccordionComponent from "../../Components/Accordion/AccordionComponent";
import ServiceHeader from "../../Components/ServiceHeader";
import GetInTouch from "@/Components/GetInTouch";
import Partnership from "@/Components/Partnership";

export default function Services() {
  return (
    <div>
      <ServiceHeader />
      <AccordionComponent />
      <TechPartners />
      <Partnership />
      <GetInTouch />
    </div>
  );
}
