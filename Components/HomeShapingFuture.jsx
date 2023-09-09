import { useEffect, useState } from "react";
import "../public/style/HomeShaping.css";

export default function HomeShapingFuture() {
  let texts = [
    "Creativity",
    "Technology",
    "Imagination",
    "Innovation",
    "Simplicity",
  ];
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setCurrentText(texts[index]);
  }, [index]);

  return (
    <div className="HomeShapingContainer">
      <div className="HomeShapingHeaders">
        <p className="text-shaping">Shaping the Future with Blockchain</p>

        <p className="text-creativity">{currentText}</p>
      </div>

      <div className="HomeShapingBottomLine"></div>

      <div className="HomeShapingParagraph">
        <p className="at-mood-global">
          At Mood Global Services, we&#39;re committed to crafting and setting
          up digital infrastructures that enhance valuable network communication
          and stimulate business progression.
        </p>
      </div>

      <div className="HomeShapingbuttons">
        <button className="homeshapping-btn black">Get Started</button>
        <button className="homeshapping-btn white">Learn More</button>
      </div>
    </div>
  );
}
