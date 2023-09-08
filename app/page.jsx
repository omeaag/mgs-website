"use client";

import OurServices from "../Components/OurServices";
import HomeShapingFuture from "../Components/HomeShapingFuture";
import AccordionComponent from "../Components/Accordion/AccordionComponent";
import WhatWeDo from "@/Components/WhatWeDo";
import OurSolution from "@/Components/OurSolution";

export default function Home() {
  return (
    <div>
      <HomeShapingFuture />
      <WhatWeDo />
      <OurSolution />
      <OurServices />
    </div>
  );
}
