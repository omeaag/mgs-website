"use client";

import OurServices from "../Components/OurServices";
import HomeShapingFuture from "../Components/HomeShapingFuture";
import WhatWeDo from "@/Components/WhatWeDo";
import OurSolution from "@/Components/OurSolution";
import OurPortfolio from "@/Components/OurPortfolio";

export default function Home() {
  return (
    <div>
      <HomeShapingFuture />
      <WhatWeDo />
      <OurSolution />
      <OurServices />
      <OurPortfolio />
    </div>
  );
}
