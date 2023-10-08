import Image from "next/image";
import '../../public/style/TechPartnersStyle.css';
import sol from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/sol.svg"
import rus from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/rus.svg"
import fab from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/fab.svg"
import sub from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/sub.svg"
import eth from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/eth.svg"
import nea from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/nea.svg"
const Blockchain = () => {
    return(
        <div className="ArsenalMiniComponent">
            <Image src={sol}></Image>
            <Image src={rus}></Image>
            <Image src={fab}></Image>
            <Image src={sub}></Image>
            <Image src={eth}></Image>
            <Image src={nea}></Image>
        </div>
    );
};

export default Blockchain