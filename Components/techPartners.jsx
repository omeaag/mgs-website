"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react"; // Import useState
import Image from "next/image";
import '../public/style/TechPartnersStyle.css';
import techPartnersButton from '../public/materials/TechPartnersImages/techpartnersbuttonunclicked.svg'
import NextLabsComponent from "./TechPartnersComponents/NexLabsComponent";
import MirrorTrackerComponent from "./TechPartnersComponents/MirrorTrackerComponent";
import GoalStarComponent from "./TechPartnersComponents/GoalStarComponent";

import bitcoin from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/bitcoin-logo.svg'
import etherum from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/Eth-bw.svg'
import binance from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/bsc.svg'
import airdao from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/airdao-logo.svg'
import polygon from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/polygon.svg'
import solana from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/Group1000001039.svg'
import filecoin from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/filecoin.svg'
import aptos from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/aptos-apt-logo-full.svg'
import arbitrum from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/arbitrum-arb-logo-full.svg'
import avalanche from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/avalanche-logo.svg'
import optimism from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/op.svg'
import cosmos from '../public/materials/TechPartnersImages/mgsServciesIcons/hover/cosmos.svg'

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
    // Define an array of components and a state variable to track the current component
    const sliderArrayList = [NextLabsComponent, MirrorTrackerComponent];
    const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

    // Function to handle changing the component to the next one
    const sliderChangerNext = () => {
        // Calculate the index of the next component in the array
        const nextIndex = (currentComponentIndex + 1) % sliderArrayList.length;
        setCurrentComponentIndex(nextIndex);
    }

    // Function to handle changing the component to the previous one
    const sliderChangerPrevious = () => {
        // Calculate the index of the previous component in the array
        const previousIndex = (currentComponentIndex - 1 + sliderArrayList.length) % sliderArrayList.length;
        setCurrentComponentIndex(previousIndex);
    }
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
				<div className="techSliderParentContainer">
					<div className="techPartnersLeftButtonContainer">
						{/* Previous button */}
						<Image
							alt="Left Button"
							id="techLeftButtonID"
							src={techPartnersButton}
							onClick={sliderChangerPrevious} // Call the sliderChangerPrevious function on click
						/>
					</div>
					<div className={`techPartnerComponentContainer component-transition`}>
						{/* Render the current component based on the state */}
						{React.createElement(sliderArrayList[currentComponentIndex])}
					</div>
					<div className="techPartnersRightButtonContainer">
						<Image
							alt="Right Button"
							id="techRightButtonID"
							src={techPartnersButton}
							onClick={sliderChangerNext} // Call the sliderChangerNext function on click
						/>
					</div>
				</div>
			</div>
		)
};

export default techPartners;