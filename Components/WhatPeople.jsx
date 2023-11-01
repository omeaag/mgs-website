"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Pagination, Navigation } from "swiper/modules"
import SwiperCore from "swiper"
import { useEffect, useState } from "react"
import "swiper/swiper-bundle.css"
import "swiper/css/pagination"
import "swiper/css"
import "swiper/css/effect-fade"
import Image from "next/image"
import { useRef } from "react"
// import styles from "../public/style/OurPortfolioStyle.css"
// import Script from "next/script"
// import iconoir_design from "../public/materials/ourPortfolioImages/iconoir_design-nib.svg"
// import iconoir_dev_laptop from "../public/materials/ourPortfolioImages/iconoir_dev-mode-laptop.svg"
// import iconoir_dev_phone from "../public/materials/ourPortfolioImages/iconoir_dev-mode-phone.svg"
// import iconamoon_settings from "../public/materials/ourPortfolioImages/iconamoon_settings-thin.svg"
// import streamline_interface from "../public/materials/ourPortfolioImages/streamline_interface-edit-magic-wand-design-magic-star-supplies-tool-wand.svg"
// import Line from "../public/materials/ourPortfolioImages/Line-Separation.svg"
import LeftArrowBlue from "../public/materials/ourPortfolioImages/LeftArrowBlue.svg"
import RightArrowBlue from "../public/materials/ourPortfolioImages/RightArrowBlue.svg"
import LeftArrow from "../public/materials/ourPortfolioImages/Vector 14.svg"
import RightArrow from "../public/materials/ourPortfolioImages/Vector 17.svg"
import Heart from "../public/materials/ourPortfolioImages/Vector.svg"
import pp1 from "../public/materials/ourPortfolioImages/pp1.svg"
import pp2 from "../public/materials/ourPortfolioImages/pp2.svg"
import pp3 from "../public/materials/ourPortfolioImages/pp3.svg"
import clutchco1 from "../public/materials/ourPortfolioImages/clutchco1.svg"

function WhatPeople() {
  SwiperCore.use([Navigation])

  const people = [
    {
      id: 1,
      name: "Jessica Muller",
      description:
        "Research published by the Statista Research Department found global spending on blockchain solutions accelerated from 4.5 billion to 6.6 billion in 2021.By 2024...",
      image: pp1,
    },
    {
      id: 2,
      name: "Millan Jovanovi",
      description:
        "Research published by the Statista Research Department found global spending on blockchain solutions accelerated from 4.5 billion to 6.6 billion in 2021.By 2024...",
      image: pp2,
    },
    {
      id: 3,
      name: "Elinor Denney",
      description:
        "Research published by the Statista Research Department found global spending on blockchain solutions accelerated from 4.5 billion to 6.6 billion in 2021.By 2024...",
      image: pp3,
    },
  ]

  const swiper = useRef(null)
  const goNext = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slideNext()
    }
  }
  const goPrev = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slidePrev()
    }
  }

  const [slidesPerView, setSlidesPerView] = useState(2)
  const [slideGap, setSlideGap] = useState(24)
  const [currentSlide2, setCurrentSlide2] = useState(0)

  useEffect(() => {
    const updateWindowDimensions = () => {
      if (window.innerWidth < 600) {
        setSlidesPerView(1)
        setSlideGap(0)
      } else if (window.innerWidth >= 600) {
        setSlidesPerView(2)
        setSlideGap(24)
      }
    }
    updateWindowDimensions()
    window.addEventListener("resize", updateWindowDimensions)
    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, [])

  return (
    <div className="ourPortfolioContainer">
      <div className="whatPeoplePersonBackground">
        <div className="whatPeopleContainer">
          <h1>
            What People&nbsp;
            <Image alt="Heart" id="heart" src={Heart} />
            &nbsp;to say about us!{" "}
          </h1>
        </div>

        <div className="personContainer">
          <button
            aria-label="Previous"
            onClick={() => {
              currentSlide2 > 0 && setCurrentSlide2(currentSlide2 - 1)
              goPrev()
            }}
            className="prev-button"
          >
            <Image
              src={currentSlide2 == !1 ? LeftArrow : LeftArrowBlue}
              alt="Sol Ok"
              width={100}
              height={100}
            />
          </button>
          <Swiper
            className="mySwiper"
            pagination={true}
            modules={[Pagination]}
            ref={swiper}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
          >
            {people.map((person) => (
              <SwiperSlide key={person.id}>
                <div className="personSlider">
                  <Image
                    src={person.image.src}
                    alt={person.name}
                    width={40}
                    height={40}
                  />
                  <h2>{person.name}</h2>
                  <p>{person.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            aria-label="Next"
            onClick={() => {
              currentSlide2 < 2 && setCurrentSlide2(currentSlide2 + 1)
              goNext()
            }}
            className="next-button"
          >
            <Image
              src={currentSlide2 == 2 ? RightArrow : RightArrowBlue}
              alt="Sag Ok"
              width={100}
              height={100}
            />
          </button>
        </div>
        <div className="clutchContainer">
          <p>We are on trusted platforms</p>
          <Image src={clutchco1} alt="clutchco1"></Image>
        </div>
      </div>
    </div>
  )
}

export default WhatPeople
