import Link from "next/link";
import Image from "next/image";
import '../../public/style/techPartnersSliderStyle.css'
import nexLabsImage from "../../public/materials/TechPartnersImages/nexLabsImage.svg"

const NextLabsComponent = () => {
    return (
        <div className="TechComponentContainer">
            <div className="TechComponentContainerText">
                <h1>Next Labs</h1>
                <h3>NexLabs gives investors access to decentralized <br />indices powered by in-house built oracles to invest in <br /> cryptocurrencies, NFTs, synthetic assets and a variety <br />
                of prediction markets. Users can easily own multiple<br />assets by investing in one or more indices without<br />needing to spend time tracking latest developments in<br />
                the market and being exposed to its high volatility.</h3>
                <a href="">Go To Website →</a>
            </div>
            <div className="TechComponentContainerImage"><Image src={nexLabsImage}></Image></div>
        </div>
    )
}

export default NextLabsComponent;