import Feedback from "@/Components/MoodConvert/Feedback";
import MoodConvertAI from "@/Components/MoodConvert/MoodConvertAI";
import ReadyToTalk from "@/Components/MoodConvert/ReadyToTalk";
import dynamic from "next/dynamic";

export default function Home() {
  const ReadyToTalk = dynamic(() => import('../../Components/MoodConvert/ReadyToTalk'), {
      ssr: false,
  });

  return (
      <div>
          <MoodConvertAI />
          <ReadyToTalk />
          <Feedback />
      </div>
  );
}
