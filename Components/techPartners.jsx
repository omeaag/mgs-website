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


const techPartners = () => {
        // Define an array of components and a state variable to track the current component
        const sliderArrayList = [NextLabsComponent, MirrorTrackerComponent, GoalStarComponent];
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
                    {/* Previous button */}
                    <Image
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
                        id="techRightButtonID"
                        src={techPartnersButton}
                        onClick={sliderChangerNext} // Call the sliderChangerNext function on click
                    />
                </div>
            </div>
        </div>
    );
};

export default techPartners;