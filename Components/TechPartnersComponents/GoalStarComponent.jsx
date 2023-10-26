import Link from "next/link";
import Image from "next/image";
import '../../public/style/techPartnersSliderStyle.css'
import goalStarImage from "../../public/materials/TechPartnersImages/goalStarImage.svg"

const NextLabsComponent = () => {
    return (
        <div className="TechComponentContainer">
            <div className="TechComponentContainerText">
                <h1>Goal Star</h1>
                <h3>Introducing Goal Star, the sports betting platform that uses NFTs to let users participate in their favouritesports events. By purchasing an NFT on the platform, users can bet on the outcomes of sports events and compete for tournament prize pools. Goal Star allows users to engage with sports in a fun and exciting way,and potentially earn rewards through tournament competition.</h3>
                <a href="">Go To Website →</a>
            </div>
            <div className="TechComponentContainerImage"><Image src={goalStarImage}></Image></div>
        </div>
    )
}

export default NextLabsComponent;