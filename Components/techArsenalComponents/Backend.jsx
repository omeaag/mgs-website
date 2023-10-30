import Image from "next/image";
import go from "../../public/materials/TechPartnersImages/mgsServciesIcons/backendIcons/go.svg"
import nod from "../../public/materials/TechPartnersImages/mgsServciesIcons/backendIcons/nod.svg"
import Pyt from "../../public/materials/TechPartnersImages/mgsServciesIcons/backendIcons/Pyt.svg"
import Rus from "../../public/materials/TechPartnersImages/mgsServciesIcons/backendIcons/Rus.svg"
const Backend = () => {
    return(
        <div className="ArsenalMiniComponent">
            <Image src={go} alt="Logo of Go"></Image>
            <Image src={nod} alt="Logo of Node JS"></Image>
            <Image src={Pyt} alt="Logo of Python"></Image>
            <Image src={Rus} alt="Logo of Rust"></Image>
        </div>
    );
};

export default Backend