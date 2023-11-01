import Image from "next/image";
import Nex from "../../public/materials/TechPartnersImages/mgsServciesIcons/frontendIcons/Nex.svg"
import rea from "../../public/materials/TechPartnersImages/mgsServciesIcons/frontendIcons/rea.svg"
import Gat from "../../public/materials/TechPartnersImages/mgsServciesIcons/frontendIcons/Gat.svg"
import nat from "../../public/materials/TechPartnersImages/mgsServciesIcons/frontendIcons/nat.svg"
const Frontend = () => {
    return(
        <div className="ArsenalMiniComponent">
            <Image src={Nex} alt="Logo of NextJS"></Image>
            <Image src={rea} alt="Logo of React"></Image>
            <Image src={Gat} alt="Logo of Gatsby"></Image>
            <Image src={nat} alt="Logo of React Native"></Image>
        </div>
    );
};

export default Frontend