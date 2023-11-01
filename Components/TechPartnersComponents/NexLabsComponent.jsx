import Link from "next/link";
import Image from "next/image";
import '../../public/style/techPartnersSliderStyle.css'
import nexLabsImage from "../../public/materials/TechPartnersImages/nexLabsImage.svg"

const NextLabsComponent = () => {
    return (
        <div className="TechComponentContainer">
            <div className="TechComponentContainerText">
                <h1>Nex Labs</h1>
                <h3>NEX presents regular, mixed, and exotic indices, which provide easy access to the most popular assets. This innovation is aimed at new investors aiming to enter the market and experienced traders seeking to expand their portfolios. Overall, NEX indices represent a significant step forward in the evolution of the DeFi (Decentralized Finance) sector by making it more accessible and user-friendly, allowing more individuals to take advantage of the unique opportunities it offers.</h3>
                <a href="">Go To Website →</a>
            </div>
            <div className="TechComponentContainerImage"><Image src={nexLabsImage} alt="Logo Of Nex Labs"></Image></div>
        </div>
    )
}

export default NextLabsComponent;