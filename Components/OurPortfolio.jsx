"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import { useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import styles from "../public/style/OurPortfolioStyle.css"
import Script from 'next/script'
import iconoir_design from "../public/materials/ourPortfolioImages/iconoir_design-nib.svg";
import iconoir_dev_laptop from "../public/materials/ourPortfolioImages/iconoir_dev-mode-laptop.svg";
import iconoir_dev_phone from "../public/materials/ourPortfolioImages/iconoir_dev-mode-phone.svg";
import iconamoon_settings from "../public/materials/ourPortfolioImages/iconamoon_settings-thin.svg";
import streamline_interface from "../public/materials/ourPortfolioImages/streamline_interface-edit-magic-wand-design-magic-star-supplies-tool-wand.svg";
import Line from "../public/materials/ourPortfolioImages/Line-Separation.svg";
import Block1 from "../public/materials/ourPortfolioImages/Block-1.svg";
import Block2 from "../public/materials/ourPortfolioImages/Block-2.svg";
import Block3 from "../public/materials/ourPortfolioImages/Block-3.svg";
import Block4 from "../public/materials/ourPortfolioImages/Block-4.svg";
import Profile from "../public/materials/ourPortfolioImages/Group 1000000908.svg";
import Info from "../public/materials/ourPortfolioImages/Group 1000000915.svg";
import LeftArrow from "../public/materials/ourPortfolioImages/Vector 14.svg";
import RightArrow from "../public/materials/ourPortfolioImages/Vector 17.svg";
import Heart from "../public/materials/ourPortfolioImages/Vector.svg";
import pp1 from "../public/materials/ourPortfolioImages/pp1.svg";
import pp2 from "../public/materials/ourPortfolioImages/pp2.svg";
import pp3 from "../public/materials/ourPortfolioImages/pp3.svg";



function OurPortfolio() {
    SwiperCore.use([Navigation]);
    const photos = [
        {
            id: 1,
            url: Block1
        },

        {
            id: 2,
            url: Block2
        },

        {
            id: 3,
            url: Block3
        },

        {
            id: 4,
            url: Block4
        },
    ];


    const people = [
        {
            id: 1,
            name: "Jessica Muller",
            description: "Research published by the Statista Research Department found global spending on blockchain solutions accelerated from 4.5 billion to 6.6 billion in 2021.By 2024...",
            image: pp1
        },
        {
            id: 2,
            name: "Millan Jovanovi",
            description: "Research published by the Statista Research Department found global spending on blockchain solutions accelerated from 4.5 billion to 6.6 billion in 2021.By 2024...",
            image: pp2
        },
        {
            id: 3,
            name: "Elinor Denney",
            description: "Research published by the Statista Research Department found global spending on blockchain solutions accelerated from 4.5 billion to 6.6 billion in 2021.By 2024...",
            image: pp3
        }
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

    return (
        <div className='allContainer-5'>
            <Image alt='iconoir_design' id="iconoir_design" src={iconoir_design} />
            <Image alt='iconoir_dev_laptop' id="iconoir_dev_laptop" src={iconoir_dev_laptop} />
            <Image alt='iconoir_dev_phone' id="iconoir_dev_phone" src={iconoir_dev_phone} />
            <Image alt='iconamoon_settings' id="iconamoon_settings" src={iconamoon_settings} />
            <Image alt='streamline_interface' id="streamline_interface" src={streamline_interface} />

            <div className="headerContainer-5">
                <h1>Our <span>Portfolio</span></h1>
                <Image alt="Line" id="" src={Line} />
            </div>
            <p className="headerContainerp">An analysis of the Blockchain marketplace in 2021 by Markets and Markets found the industry is expected to grow from a value of $4.9 billion (as of 2021) to $67.4 billion by 2026. This represents a Compound Annual Growth Rate of 68.4% during the forecast period.</p>
            <div className='galleryContainer'>
                <button onClick={goPrev1} className="prev-button">
                    <Image src={LeftArrow} alt="Sol Ok" width={50} height={50} />
                </button>
                <Swiper
                    ref={swiper1}
                    spaceBetween={10}
                    slidesPerView={2}
                >
                    <SwiperSlide>
                        <Image src={photos[0].url} alt="Image 1" width={660} height={600} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={photos[1].url} alt="Image 2" width={660} height={600} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={photos[2].url} alt="Image 3" width={660} height={600} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={photos[3].url} alt="Image 4" width={660} height={600} />
                    </SwiperSlide>
                </Swiper>
                <button onClick={goNext1} className="next-button">
                    <Image src={RightArrow} alt="Sağ Ok" width={50} height={50} />
                </button>
            </div>

            <div className="build30">
                <h2 className="build">Builders and Projects Helped</h2>
                <h2 className="plus30">30+</h2>
            </div>
            <div className="whatPeopleContainer">
                <h1>What People&nbsp;<Image alt='Heart' id="heart" src={Heart} />&nbsp;to say about us!                </h1>
            </div>

            <div className="personContainer">
                <button onClick={goPrev} className="prev-button">
                    <Image src={LeftArrow} alt="Sol Ok" width={150} height={150} />
                </button>
                <Swiper className='personSwiper'
                    ref={swiper}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.prev-button',
                        nextEl: '.next-button',
                    }}
                >
                    {people.map(person => (
                        <SwiperSlide key={person.id}>
                            <div className="personSlider">
                                <img src={person.image.src} alt={person.name} />
                                <h2>{person.name}</h2>
                                <p>{person.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button onClick={goNext} className="next-button">
                    <Image src={RightArrow} alt="Sağ Ok" width={150} height={150} />
                </button>
            </div>

        </div>
    );
};

export default OurPortfolio;