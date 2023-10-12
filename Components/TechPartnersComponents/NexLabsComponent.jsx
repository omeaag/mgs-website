import Link from "next/link";
import Image from "next/image";
import '../../public/style/techPartnersSliderStyle.css'
import nexLabsImage from "../../public/materials/TechPartnersImages/nexLabsImage.svg"

const NextLabsComponent = () => {
    return (
        <div className="TechComponentContainer">
            <div className="TechComponentContainerText">
                <h1>Nex Labs</h1>
                <h3>NexLabs gives investors access to decentralized indices powered by<br />in-house built oracles to invest in cryptocurrencies, NFTs, synthetic<br />assets and a variety of prediction markets. Users can easily own<br />
                multiple assets by investing in one or more indices without needing to<br />spend time tracking latest developments in the market and being<br />exposed to its high volatility.</h3>
                <a href="">Go To Website →</a>
            </div>
            <div className="TechComponentContainerImage"><Image src={nexLabsImage}></Image></div>
        </div>
    )
}

export default NextLabsComponent;