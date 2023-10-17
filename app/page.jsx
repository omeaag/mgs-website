"use client";

import OurServices from "../Components/OurServices";
import HomeShapingFuture from "../Components/HomeShapingFuture";
import WhatWeDo from "@/Components/WhatWeDo";
import OurSolution from "@/Components/OurSolution";
import OurPortfolio from "@/Components/OurPortfolio";
import Partnership from "@/Components/Partnership";
import GetInTouch from "@/Components/GetInTouch";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <div className="homePageAllContainer">
      <HomeShapingFuture />
      <WhatWeDo />
      <OurSolution />
      <OurServices />
      <OurPortfolio />
      <Partnership />
      <GetInTouch />
    </div>
  );
}
