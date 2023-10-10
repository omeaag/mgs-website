import Link from "next/link";
import Image from "next/image";
import styles from "../public/style/ServiceHeader.css"
import serviceBackgroundElementOne from "../public/materials/serviceBackgroundElementOne.svg"
import serviceBackgroundElementTwo from "../public/materials/serviceBackgroundElementTwo.svg"
import eparrowdown from "../public/materials/ep_arrow-down.svg"

const ServiceHeader = () => {
    return (
        <div className="mainServiceBackgroundContainer">
            <div className="servicesTop">
                <div className="serviceTextHeaderContainer">
                    <div className="ourServicesTextContainer">
                        <h1>OUR SERVICES</h1>
                    </div>
                    <div className="servicesHeaderSmallTextContainer">
                        <p>
                            As a Blockchain-based firm, we help our clients integrate the <br />
                            most optimal blockchain solutions into their business<br />
                            strategy. We have developed a range of specialized services<br />
                            aimed at helping companies to fully exploit blockchain<br />
                            technologies.
                        </p>
                    </div>
                </div>
                <div className="servicesImageContainer">
                <Image src={serviceBackgroundElementOne}></Image>
                <Image src={serviceBackgroundElementTwo}></Image>
                </div>
            </div>
            <Image id="epArrow" src={eparrowdown}></Image>
        </div>
    );
};

export default ServiceHeader;