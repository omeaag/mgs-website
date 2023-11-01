"use client"

import OurServices from "../Components/OurServices"
import HomeShapingFuture from "../Components/HomeShapingFuture"
import WhatWeDo from "@/Components/WhatWeDo"
import OurSolution from "@/Components/OurSolution"
import OurPortfolio from "@/Components/OurPortfolio"
import Partnership from "@/Components/Partnership"
import GetInTouch from "@/Components/GetInTouch"
import Header from "@/Components/Header"

// import { Metadata } from "next"
// export const metadata = {
//   title: "MGS",
//   description: "a PAAS company with a focus on crypto",
// }

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
  )
}
