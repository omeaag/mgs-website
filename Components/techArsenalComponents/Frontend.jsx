import Image from "next/image";
import '../../public/style/TechPartnersStyle.css';
import Nex from "../../public/materials/TechPartnersImages/mgsServciesIcons/frontendIcons/Nex.svg"
import rea from "../../public/materials/TechPartnersImages/mgsServciesIcons/frontendIcons/rea.svg"
import Gat from "../../public/materials/TechPartnersImages/mgsServciesIcons/frontendIcons/Gat.svg"
import nat from "../../public/materials/TechPartnersImages/mgsServciesIcons/frontendIcons/nat.svg"
const Frontend = () => {
    return(
        <div className="ArsenalMiniComponent">
            <Image src={Nex}></Image>
            <Image src={rea}></Image>
            <Image src={Gat}></Image>
            <Image src={nat}></Image>
        </div>
    );
};

export default Frontend