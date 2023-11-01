"use client"
import Feedback from "@/Components/MoodConvert/Feedback"
import MoodConvertAI from "@/Components/MoodConvert/MoodConvertAI"
// import ReadyToTalk from "@/Components/MoodConvert/ReadyToTalk"

import dynamic from "next/dynamic"
const ReadyToTalk = dynamic(
  () => import("../../Components/MoodConvert/ReadyToTalk"),
  {
    ssr: false,
  }
)

export default function Home() {
  return (
    <div>
      <MoodConvertAI />
      <ReadyToTalk />
      <Feedback />
    </div>
  )
}
