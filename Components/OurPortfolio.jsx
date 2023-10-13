"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from 'swiper/modules';
import SwiperCore, { Navigation } from "swiper";
import { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from "next/image";
import { useRef } from "react";
import styles from "../public/style/OurPortfolioStyle.css";
import Script from "next/script";
import iconoir_design from "../public/materials/ourPortfolioImages/iconoir_design-nib.svg";
import iconoir_dev_laptop from "../public/materials/ourPortfolioImages/iconoir_dev-mode-laptop.svg";
import iconoir_dev_phone from "../public/materials/ourPortfolioImages/iconoir_dev-mode-phone.svg";
import iconamoon_settings from "../public/materials/ourPortfolioImages/iconamoon_settings-thin.svg";
import streamline_interface from "../public/materials/ourPortfolioImages/streamline_interface-edit-magic-wand-design-magic-star-supplies-tool-wand.svg";
import Line from "../public/materials/ourPortfolioImages/Line-Separation.svg";
import LeftArrow from "../public/materials/ourPortfolioImages/Vector 14.svg";
import RightArrow from "../public/materials/ourPortfolioImages/Vector 17.svg";
import Heart from "../public/materials/ourPortfolioImages/Vector.svg";
import pp1 from "../public/materials/ourPortfolioImages/pp1.svg";
import pp2 from "../public/materials/ourPortfolioImages/pp2.svg";
import pp3 from "../public/materials/ourPortfolioImages/pp3.svg";
import sliderlogo from "../public/materials/ourPortfolioImages/sliderlogo.svg";
import sliderlogo2 from "../public/materials/ourPortfolioImages/sliderlogo2.svg";
import clutchco1 from "../public/materials/ourPortfolioImages/clutchco1.svg";

function OurPortfolio() {
  SwiperCore.use([Navigation]);

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
  ];

  const swiper = useRef(null);
  const goNext = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slidePrev();
    }
  };

  const swiper1 = useRef(null);
  const goNext1 = () => {
    if (swiper1.current && swiper1.current.swiper) {
      swiper1.current.swiper.slideNext();
    }
  };
  const goPrev1 = () => {
    if (swiper1.current && swiper1.current.swiper) {
      swiper1.current.swiper.slidePrev();
    }
  };

  const [slidesPerView, setSlidesPerView] = useState(2);
  const [slideGap, setSlideGap] = useState(24);

  useEffect(() => {
    const updateWindowDimensions = () => {
      if (window.innerWidth < 600) {
        setSlidesPerView(1);
        setSlideGap(0);
      } else if (window.innerWidth >= 600) {
        setSlidesPerView(2);
        setSlideGap(24);
      }
    };
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, []);


  return (
    <div className='ourPortfolioContainer'>
      <Image
        alt='iconoir_design'
        id='iconoir_design'
        src={iconoir_design}
      />
      <Image
        alt='iconoir_dev_laptop'
        id='iconoir_dev_laptop'
        src={iconoir_dev_laptop}
      />
      <Image
        alt='iconoir_dev_phone'
        id='iconoir_dev_phone'
        src={iconoir_dev_phone}
      />
      <Image
        alt='iconamoon_settings'
        id='iconamoon_settings'
        src={iconamoon_settings}
      />
      <Image
        alt='streamline_interface'
        id='streamline_interface'
        src={streamline_interface}
      />

      <div className='headerContainer-5'>
        <h1>
          Our <span>Portfolio</span>
        </h1>
        <Image
          alt='Line'
          id=''
          src={Line}
        />
      </div>
      <p className='headerContainerp'>
        An analysis of the Blockchain marketplace in 2021 by Markets and Markets found the
        industry is expected to grow from a value of $4.9 billion (as of 2021) to $67.4
        billion by 2026. This represents a Compound Annual Growth Rate of 68.4% during the
        forecast period.
      </p>
      <div className='galleryContainer'>
        <button
          onClick={goPrev1}
          className='prev-button'>
          <Image
            src={LeftArrow}
            alt='Sol Ok'
            width={50}
            height={50}
          />
        </button>
        <Swiper
          ref={swiper1}
          spaceBetween={slideGap}
          slidesPerView={slidesPerView}>
          <SwiperSlide>
            <div className="sliderContent">
              <h4>Nex Decentralized Exchange Decentralized Exchange</h4>
              <p>Nexlabs.io, welcome! <br /> Nexlabs: decentralised trading platform</p>
              <p className="slideLink"><Image src={sliderlogo} /> https://www.nexlabs.io</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderContent">
              <h4>The NFT Shoppe NFT's MarketPlace</h4>
              <p>React App, welcome! <br /> Web site created using create-react-app</p>
              <p className="slideLink"><Image src={sliderlogo2} />https://nft-wall-arts.vercel.app/home</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderContent">
              <h4>Wedge Finance E-Commerce Solutions On Blockchain</h4>
              <p>Wedge Finance Provide Frictionless Decentralised Finance transactions in a block chain Environment </p>
              <p className="slideLink">https://wedge-token.vercel.app/</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderContent">
              <h4>CBD Platform Real World Asset Tokenization E-Commerce</h4>
              <p>Real World Asset TokenizationE-commerce Crypto payments Ramp</p>
              <p className="slideLink">https://cbdplatform.xyz/</p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          onClick={goNext1}
          className='next-button'>
          <Image
            src={RightArrow}
            alt='Sağ Ok'
            width={50}
            height={50}
          />
        </button>
      </div>

      <div className='build30'>
        <h2 className='build'>Builders and Projects Helped</h2>
        <h2 className='plus30'>22+</h2>
      </div>
      <div className="whatPeoplePersonBackground">
        <div className='whatPeopleContainer'>
          <h1>
            What People&nbsp;
            <Image
              alt='Heart'
              id='heart'
              src={Heart}
            />
            &nbsp;to say about us!{' '}
          </h1>
        </div>

        <div className='personContainer'>
          <button
            onClick={goPrev}
            className='prev-button'>
            <Image
              src={LeftArrow}
              alt='Sol Ok'
              width={100}
              height={100}
            />
          </button>
          <Swiper
            className='mySwiper'
            pagination={true}
            modules={[Pagination]}
            ref={swiper}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.prev-button',
              nextEl: '.next-button',
            }}>
            {people.map((person) => (
              <SwiperSlide key={person.id}>
                <div className='personSlider'>
                  <img
                    src={person.image.src}
                    alt={person.name}
                  />
                  <h2>{person.name}</h2>
                  <p>{person.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={goNext}
            className='next-button'>
            <Image
              src={RightArrow}
              alt='Sağ Ok'
              width={100}
              height={100}
            />
          </button>
        </div>
        <div className="clutchContainer">
          <p>We are on trusted platforms</p>
          <Image
            src={clutchco1}
            alt="clutchco1"></Image>
        </div>
      </div>
    </div>
  );
}

export default OurPortfolio;
