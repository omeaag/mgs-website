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
import styles from "../public/style/OurPortfolioStyle.css"
import Script from "next/script"
import iconoir_design from "../public/materials/ourPortfolioImages/iconoir_design-nib.svg"
import iconoir_dev_laptop from "../public/materials/ourPortfolioImages/iconoir_dev-mode-laptop.svg"
import iconoir_dev_phone from "../public/materials/ourPortfolioImages/iconoir_dev-mode-phone.svg"
import iconamoon_settings from "../public/materials/ourPortfolioImages/iconamoon_settings-thin.svg"
import streamline_interface from "../public/materials/ourPortfolioImages/streamline_interface-edit-magic-wand-design-magic-star-supplies-tool-wand.svg"
import Line from "../public/materials/ourPortfolioImages/Line-Separation.svg"
import LeftArrowBlue from "../public/materials/ourPortfolioImages/LeftArrowBlue.svg"
import RightArrowBlue from "../public/materials/ourPortfolioImages/RightArrowBlue.svg"
import LeftArrow from "../public/materials/ourPortfolioImages/Vector 14.svg"
import RightArrow from "../public/materials/ourPortfolioImages/Vector 17.svg"
import Heart from "../public/materials/ourPortfolioImages/Vector.svg"
import pp1 from "../public/materials/ourPortfolioImages/pp1.svg"
import pp2 from "../public/materials/ourPortfolioImages/pp2.svg"
import pp3 from "../public/materials/ourPortfolioImages/pp3.svg"
import sliderlogo from "../public/materials/ourPortfolioImages/sliderlogo.svg"
import sliderlogo2 from "../public/materials/ourPortfolioImages/sliderlogo2.svg"
import clutchco1 from "../public/materials/ourPortfolioImages/clutchco1.svg"

function OurPortfolio() {
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

  const swiper1 = useRef(null)
  const goNext1 = () => {
    if (swiper1.current && swiper1.current.swiper) {
      swiper1.current.swiper.slideNext()
    }
  }
  const goPrev1 = () => {
    if (swiper1.current && swiper1.current.swiper) {
      swiper1.current.swiper.slidePrev()
    }
  }

  const [slidesPerView, setSlidesPerView] = useState(2)
  const [slideGap, setSlideGap] = useState(24)
  const [currentSlide, setCurrentSlide] = useState(0)
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
      <div>
        <Image alt="iconoir_design" id="iconoir_design" src={iconoir_design} />
        <Image
          alt="iconoir_dev_laptop"
          id="iconoir_dev_laptop"
          src={iconoir_dev_laptop}
        />
        <Image
          alt="iconoir_dev_phone"
          id="iconoir_dev_phone"
          src={iconoir_dev_phone}
        />
        <Image
          alt="iconamoon_settings"
          id="iconamoon_settings"
          src={iconamoon_settings}
        />
        <Image
          alt="streamline_interface"
          id="streamline_interface"
          src={streamline_interface}
        />
      </div>

      <div className="headerContainer-5">
        <h1>
          Our <span>Portfolio</span>
        </h1>
        <div className="line"></div>
      </div>
      <p className="headerContainerp">
        Dive into our portfolio to see how we've enabled businesses to flourish
        digitally. From blockchain solutions to innovative app development, our
        projects reflect our dedication and commitment to tailored strategies
        and technological advancement.
      </p>
      <div className="galleryContainer">
        <button
          aria-label="Previous"
          onClick={() => {
            currentSlide > 0 && setCurrentSlide(currentSlide - 1)
            goPrev1()
          }}
          className="prev-button"
        >
          <Image
<<<<<<< HEAD
            src={currentSlide == !1 ? LeftArrow : LeftArrowBlue}
            alt="Sol Ok"
=======
            src={currentSlide ==!1 ? LeftArrow : LeftArrowBlue}
            alt="Left Arrow"
>>>>>>> c4f9c010e7516a8fd1c048d20850dbc46729bcac
            width={50}
            height={50}
          />
        </button>
        <Swiper
          ref={swiper1}
          spaceBetween={slideGap}
          slidesPerView={slidesPerView}
        >
          <SwiperSlide>
            <div className="sliderContent">
              <h4>Nex Decentralized Exchange Decentralized Exchange</h4>
<<<<<<< HEAD
              <p>
                Nexlabs.io, welcome! <br /> Nexlabs: decentralised trading
                platform
              </p>
              <p className="slideLink">
                <Image src={sliderlogo} /> https://www.nexlabs.io
              </p>
=======
              <p>Nexlabs.io, welcome! <br /> Nexlabs: decentralised trading platform</p>
              <p className="slideLink"><Image alt="NexLabs Logo" src={sliderlogo} /> https://www.nexlabs.io</p>
>>>>>>> c4f9c010e7516a8fd1c048d20850dbc46729bcac
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderContent">
              <h4>The NFT Shoppe NFT's MarketPlace</h4>
<<<<<<< HEAD
              <p>
                React App, welcome! <br /> Web site created using
                create-react-app
              </p>
              <p className="slideLink">
                <Image src={sliderlogo2} />
                https://nft-wall-arts.vercel.app/home
              </p>
=======
              <p>React App, welcome! <br /> Web site created using create-react-app</p>
              <p className="slideLink"><Image alt="Nft Wall Art Logo" src={sliderlogo2} />https://nft-wall-arts.vercel.app/home</p>
>>>>>>> c4f9c010e7516a8fd1c048d20850dbc46729bcac
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderContent">
              <h4>Wedge Finance E-Commerce Solutions On Blockchain</h4>
              <p>
                Wedge Finance Provide Frictionless Decentralised Finance
                transactions in a block chain Environment{" "}
              </p>
              <p className="slideLink">https://wedge-token.vercel.app/</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderContent">
              <h4>CBD Platform Real World Asset Tokenization E-Commerce</h4>
              <p>
                Real World Asset TokenizationE-commerce Crypto payments Ramp
              </p>
              <p className="slideLink">https://cbdplatform.xyz/</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          aria-label="Next"
          onClick={() => {
            currentSlide < 2 && setCurrentSlide(currentSlide + 1)
            goNext1()
          }}
          className="next-button"
        >
          <Image
<<<<<<< HEAD
            src={currentSlide == 2 ? RightArrow : RightArrowBlue}
            alt="Sag Ok"
=======
            src={currentSlide ==2 ? RightArrow : RightArrowBlue}
            alt="Right Arrow"
>>>>>>> c4f9c010e7516a8fd1c048d20850dbc46729bcac
            width={50}
            height={50}
          />
        </button>
      </div>

      <div className="build30">
        <h2 className="build">Builders and Projects Helped</h2>
        <h2 className="plus30">22+</h2>
      </div>
      <div className="whatPeoplePersonBackground">
        <div className="whatPeopleContainer">
          <h1>
            What People&nbsp;
            <Image alt="Heart" id="heart" src={Heart} />
            &nbsp;to say about us!{" "}
          </h1>
        </div>

<<<<<<< HEAD
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
=======
        <div className='personContainer'>
        <button
          onClick={() => {
            (currentSlide2 > 0 && setCurrentSlide2(currentSlide2 - 1));
            goPrev()
          }}
          className='prev-button'>
          <Image
            src={currentSlide2 ==!1 ? LeftArrow : LeftArrowBlue}
            alt="Left Arrow"
            width={100}
            height={100}
          />
        </button>
>>>>>>> c4f9c010e7516a8fd1c048d20850dbc46729bcac
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
                    width={200}
                    height={200}
                  />
                  <h2>{person.name}</h2>
                  <p>{person.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
<<<<<<< HEAD
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
=======
          onClick={() => {
            (currentSlide2 < 2 && setCurrentSlide2(currentSlide2 + 1));
            goNext() 
          }}
          className='next-button'>
          <Image
            src={currentSlide2 ==2 ? RightArrow : RightArrowBlue}
            alt="Right Arrow"
            width={100}
            height={100}
          />
        </button>
>>>>>>> c4f9c010e7516a8fd1c048d20850dbc46729bcac
        </div>
        <div className="clutchContainer">
          <p>We are on trusted platforms</p>
          <Image src={clutchco1} alt="clutchco1" />
        </div>
      </div>
    </div>
  )
}

export default OurPortfolio
