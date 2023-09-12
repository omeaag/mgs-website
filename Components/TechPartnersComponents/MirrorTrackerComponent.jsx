import Link from "next/link";
import Image from "next/image";
import '../../public/style/techPartnersSliderStyle.css'
import mirrorTrackerImage from "../../public/materials/TechPartnersImages/mirrorTrackerImage.gif"

const NextLabsComponent = () => {
    return (
        <div className="TechComponentContainer">
            <div className="TechComponentContainerText">
                <h1>Mirror Tracker</h1>
                <h3>Mirror Tracker provides professional grade tools, data<br />and research combined with a decentralised social<br />
                media platform. Users can subscribe to feeds and<br />receive live updates.</h3>
                <a href="">Go To Website →</a>
            </div>
            <div className="TechComponentContainerImage"><Image src={mirrorTrackerImage}></Image></div>
        </div>
    )
}

export default NextLabsComponent;