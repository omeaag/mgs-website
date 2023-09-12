import Link from "next/link";

import Image from "next/image";
import '../public/style/TechPartnersStyle.css';
import techPartnersButton from '../public/materials/TechPartnersImages/techpartnersbuttonunclicked.svg'
import NextLabsComponent from "./TechPartnersComponents/NexLabsComponent";
import MirrorTrackerComponent from "./TechPartnersComponents/MirrorTrackerComponent";
import GoalStarComponent from "./TechPartnersComponents/GoalStarComponent";

const techPartners = () => {
    const sliderChanger = () =>{
        sliderArrayList = [NextLabsComponent, MirrorTrackerComponent, GoalStarComponent];
        //This func will be given to an image, and on click to that image, i want techPartnerComponentContainer's inside component to change from NexLabsComponent to next one the list like an gallery 
    }
    return (
        <div className="techParentContainer">
            <div className="techTextParentContainer">
            <h1>Technology <span>Partners</span> </h1>
            <p>Mood Global Services Hub gives startups and third parties a place to conceptualize and build their ideas. The hub <br />
            is the space where ideas become reality, by providing the necessary infrastructure and services that supports <br />
            entrepreneurs and established.</p>
            </div>
            <div className="techSliderParentContainer">
                <div className="techPartnersLeftButtonContainer">
                    <Image src={techPartnersButton}></Image>
                </div>
                <div className="techPartnerComponentContainer">
                    <NextLabsComponent />
                </div>
                <div className="techPartnersRightButtonContainer">
                    <Image id="techRightButtonID" src={techPartnersButton}></Image>
                </div>
            </div>
        </div>
    );
};

export default techPartners;