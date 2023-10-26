import Image from "next/image";
import go from "../../public/materials/TechPartnersImages/mgsServciesIcons/backendIcons/go.svg"
import nod from "../../public/materials/TechPartnersImages/mgsServciesIcons/backendIcons/nod.svg"
import Pyt from "../../public/materials/TechPartnersImages/mgsServciesIcons/backendIcons/Pyt.svg"
import Rus from "../../public/materials/TechPartnersImages/mgsServciesIcons/backendIcons/Rus.svg"
const Backend = () => {
    return(
        <div className="ArsenalMiniComponent">
            <Image src={go}></Image>
            <Image src={nod}></Image>
            <Image src={Pyt}></Image>
            <Image src={Rus}></Image>
        </div>
    );
};

export default Backend