import Image from "next/image";

import sol from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/sol.svg"
import rus from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/rus.svg"
import fab from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/fab.svg"
import sub from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/sub.svg"
import eth from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/eth.svg"
import nea from "../../public/materials/TechPartnersImages/mgsServciesIcons/blockchainIcons/nea.svg"
const Blockchain = () => {
    return(
        <div className="ArsenalMiniComponent">
            <Image src={sol} alt="Logo of Solidity"></Image>
            <Image src={rus} alt="Logo of Rust"></Image>
            <Image src={fab} alt="Logo of Fabric"></Image>
            <Image src={sub} alt="Logo of Substrate"></Image>
            <Image src={eth} alt="Logo of Etherium"></Image>
            <Image src={nea} alt="Logo of Near"></Image>
        </div>
    );
};

export default Blockchain