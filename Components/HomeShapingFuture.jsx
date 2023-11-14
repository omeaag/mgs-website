"use client"
import { useEffect, useState } from "react"
import "../public/style/HomeShaping.css"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"

const SlotMachineWrapper = styled.div`
  display: flex;
  align-items: center;
`

const WordWrapper = styled(animated.div)`
  margin: 0 0px;
`
const words = ["Blockchain", "Development", "Technology", "Design"]

export default function HomeShapingFuture() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % words.length)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [index])

  const transitions = useTransition(words[index], {
    from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  })

  return (
		<div className="HomeShapingContainer">
			<div className="HomeShapingHeaders">
				<div className="firstRow">
					<p className="text-shaping">Think</p>
					<div className="text-creativity">
						<SlotMachineWrapper>
							{transitions((style, word) => (
								<WordWrapper style={style}>{word}</WordWrapper>
							))}
						</SlotMachineWrapper>
					</div>
				</div>
				<p className="text-shaping">Think Mood</p>
			</div>

			<div className="HomeShapingBottomLine"></div>

			<div className="HomeShapingParagraph">
				<p className="at-mood-global">At Mood Global Services, we craft digital infrastructures that enhance communication and fuel business growth.</p>
			</div>

			<div className="HomeShapingbuttons">
				<button aria-label="Get Started" className="homeshapping-btn black">
					Get Started
				</button>
				<button className="homeshapping-btn white">Learn More</button>
			</div>
		</div>
  )
}
