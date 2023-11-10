"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react"; // Import useState
import { useRef } from "react"
import LeftArrowBlue from "../public/materials/ourPortfolioImages/LeftArrowBlue.svg"
import RightArrowBlue from "../public/materials/ourPortfolioImages/RightArrowBlue.svg"
import LeftArrow from "../public/materials/ourPortfolioImages/Vector 14.svg"
import RightArrow from "../public/materials/ourPortfolioImages/Vector 17.svg"
import "swiper/swiper-bundle.css"
import "swiper/css/pagination"
import "swiper/css"
import "swiper/css/effect-fade"
import { Swiper, SwiperSlide } from "swiper/react"
import '../public/style/TechPartnersStyle.css'
import nexLabsImage from "../public/materials/TechPartnersImages/nexLabsImage.svg"
import mirrorTrackerImage from "../public/materials/TechPartnersImages/mirrorTrackerImage.gif"
import Image from "next/image";
import '../public/style/TechPartnersSliderStyle.css';
import bitcoin from '../public/materials/TechPartnersImages/mgsServciesIcons/bitcoin.svg'
import etherum from '../public/materials/TechPartnersImages/mgsServciesIcons/etherum.svg'
import binance from '../public/materials/TechPartnersImages/mgsServciesIcons/binance.svg'
import airdao from '../public/materials/TechPartnersImages/mgsServciesIcons/airdao.svg'
import polygon from '../public/materials/TechPartnersImages/mgsServciesIcons/polygon.svg'
import solana from '../public/materials/TechPartnersImages/mgsServciesIcons/solana.svg'
import filecoin from '../public/materials/TechPartnersImages/mgsServciesIcons/filecoin.svg'
import aptos from '../public/materials/TechPartnersImages/mgsServciesIcons/aptos.svg'
import arbitrum from '../public/materials/TechPartnersImages/mgsServciesIcons/arbitrum.svg'
import avalanche from '../public/materials/TechPartnersImages/mgsServciesIcons/avalanche.svg'
import optimism from '../public/materials/TechPartnersImages/mgsServciesIcons/optimism.svg'
import cosmos from '../public/materials/TechPartnersImages/mgsServciesIcons/cosmos.svg'
import blockchain from '../public/materials/TechPartnersImages/mgsServciesIcons/blockchain.svg'
import gear from '../public/materials/TechPartnersImages/mgsServciesIcons/gear.svg'
import code from '../public/materials/TechPartnersImages/mgsServciesIcons/code.svg'
import devops from '../public/materials/TechPartnersImages/mgsServciesIcons/devops.svg'
import database from '../public/materials/TechPartnersImages/mgsServciesIcons/database.svg'
import ui from '../public/materials/TechPartnersImages/mgsServciesIcons/ui.svg'
import Blockchain from "./techArsenalComponents/Blockchain";
import Backend from "./techArsenalComponents/Backend";
import Frontend from "./techArsenalComponents/Frontend";
import Devops from "./techArsenalComponents/Devops";
import Database from "./techArsenalComponents/Database";
import Uiux from "./techArsenalComponents/Uiux";
const techPartners = () => {

	const arsenalArray = [Blockchain, Backend, Frontend, Devops, Database, Uiux];
	const [currentArsenal, setcurrentArsenal] = useState(0);

	const setBackend = () => {
		setcurrentArsenal(1);
	}
	const setBlockchain = () => {
		setcurrentArsenal(0);
	}
	const setFrontend = () => {
		setcurrentArsenal(2);
	}
	const setDevops = () => {
		setcurrentArsenal(3);
	}
	const setDatabase = () => {
		setcurrentArsenal(4);
	}
	const setUiux = () => {
		setcurrentArsenal(5);
	}

	const [currentSlide, setCurrentSlide] = useState(0)
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





	return (
		<div className="techParentContainer">
			<div className="blockChainnetworkContainer">
				<div>
					<h1>
						<span>Blockchain Network</span>
					</h1>
					<h1>We Support</h1>
				</div>
				<div className="blockChainIcons">
					<div className="blockChainIconsLine">
						<Image alt="Logo Of Bitcoin" src={bitcoin}></Image>
						<Image alt="Logo Of Etherium" src={etherum}></Image>
						<Image alt="Logo Of Binance" src={binance}></Image>
						<Image alt="Logo Of Airdao" src={airdao}></Image>
						<Image alt="Logo Of Polygon" src={polygon}></Image>
						<Image alt="Logo Of Solana" src={solana}></Image>
						<Image alt="Logo Of Filecoin" src={filecoin}></Image>
						<Image alt="Logo Of Aptos" src={aptos}></Image>
						<Image alt="Logo Of Arbitrum" src={arbitrum}></Image>
						<Image alt="Logo Of Avalanche" src={avalanche}></Image>
						<Image alt="Logo Of Optimism" src={optimism}></Image>
						<Image alt="Logo Of Cosmos" src={cosmos}></Image>
					</div>
				</div>
			</div>
			<div className="techArsenalContainer">
				<h1>
					<span>Tech</span> Arsenal
				</h1>
				<div className="techArsenalButtonContainer">
					<div className="techArsenalButton" onClick={setBlockchain}>
						<Image alt="Blockchain Logo" src={blockchain}></Image>
						<button aria-label="Blockchain">Blockchain</button>
					</div>
					<div className="techArsenalButton" onClick={setBackend}>
						<Image alt="Gear Logo Representing Backend" src={gear}></Image>
						<button aria-label="Backend">Backend</button>
					</div>
					<div className="techArsenalButton" onClick={setFrontend}>
						<Image alt="Code Logo Representing Frontend" src={code}></Image>
						<button aria-label="Frontend">Frontend</button>
					</div>
					<div className="techArsenalButton" onClick={setDevops}>
						<Image alt="Devops Icon" src={devops}></Image>
						<button aria-label="DevOps">DevOps</button>
					</div>
					<div className="techArsenalButton" onClick={setDatabase}>
						<Image alt="Database Icon" src={database}></Image>
						<button aria-label="Databases & storage">Databases & storage</button>
					</div>
					<div className="techArsenalButton" onClick={setUiux}>
						<Image alt="UI UX Icon" src={ui}></Image>
						<button aria-label="UI/UX Design">UI/UX Design</button>
					</div>
				</div>
				<div className="arsenalChangeComponent">
					<div className="mainArsenalChangeComp">
						{/* Render the current component based on the state */}
						{React.createElement(arsenalArray[currentArsenal])}
					</div>
				</div>
			</div>
			<div className="techTextParentContainer">
				<h1>
					Technology <span>Partners</span>{' '}
				</h1>
				<p>
					Mood Global Services Hub empowers startups and third parties to envision and realize their ideas, providing fundamental infrastructure and services to support entrepreneurs and
					established entities.{' '}
				</p>
			</div>

			<div className="galleryContainer">
				<button
					aria-label="Previous"
					onClick={() => {
						currentSlide > 0 && setCurrentSlide(currentSlide - 1)
						goPrev1()
					}}
					className="prev-button"
					id="webNextButton"
				>
					<Image src={currentSlide == !1 ? LeftArrow : LeftArrowBlue} alt="Sol Ok" width={50} height={50} />
				</button>
				<Swiper ref={swiper1} slidesPerView="1" spaceBetween='24'>
					<SwiperSlide>
						<div className="TechComponentContainer">
							<div className="TechComponentContainerText">
								<h1>Nex Labs</h1>
								<h3>NEX presents regular, mixed, and exotic indices, which provide easy access to the most popular assets. This innovation is aimed at new investors aiming to enter the market and experienced traders seeking to expand their portfolios. Overall, NEX indices represent a significant step forward in the evolution of the DeFi (Decentralized Finance) sector by making it more accessible and user-friendly, allowing more individuals to take advantage of the unique opportunities it offers.</h3>
								<a href="">Go To Website →</a>
							</div>
							<div className="mobileImageButtonContainer">
								<button
									aria-label="Previous"
									onClick={() => {
										currentSlide > 0 && setCurrentSlide(currentSlide - 1)
										goPrev1()
									}}
									className="prev-button"
									id="mobileNextButton"
								>
									<Image src={currentSlide == !1 ? LeftArrow : LeftArrowBlue} alt="Sol Ok" width={50} height={50} />
								</button>
								<div className="TechComponentContainerImage"><Image src={nexLabsImage} alt="Logo Of Nex Labs"></Image></div>
								<button
									aria-label="Next"
									onClick={() => {
										currentSlide < 2 && setCurrentSlide(currentSlide + 1)
										goNext1()
									}}
									className="next-button"
									id="mobileNextButton"
								>
									<Image src={currentSlide == 2 ? RightArrow : RightArrowBlue} alt="Sag Ok" width={50} height={50} />
								</button>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="TechComponentContainer">
							<div className="TechComponentContainerText">
								<h1>Mirror Tracker</h1>
								<h3>Mirror Tracker provides professional grade tools, data and research combined with a decentralised social media platform. Users can subscribe to feeds and receive live updates.</h3>
								<a href="">Go To Website →</a>
							</div>
							<div className='mobileImageButtonContainer'>
								<button
									aria-label="Previous"
									onClick={() => {
										currentSlide > 0 && setCurrentSlide(currentSlide - 1)
										goPrev1()
									}}
									className="prev-button"
									id="mobileNextButton"
								>
									<Image src={currentSlide == !1 ? LeftArrow : LeftArrowBlue} alt="Sol Ok" width={50} height={50} />
								</button>

								<div className="TechComponentContainerImage"><Image src={mirrorTrackerImage} alt="Logo Of Mirror Tracker"></Image></div>
								<button
									aria-label="Next"
									onClick={() => {
										currentSlide < 2 && setCurrentSlide(currentSlide + 1)
										goNext1()
									}}
									className="next-button"
									id="mobileNextButton"
								>
									<Image src={currentSlide == 2 ? RightArrow : RightArrowBlue} alt="Sag Ok" width={50} height={50} />
								</button>
							</div>

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
					id="webNextButton"
				>
					<Image src={currentSlide == 2 ? RightArrow : RightArrowBlue} alt="Sag Ok" width={50} height={50} />
				</button>
			</div>

		</div>
	)
};

export default techPartners;