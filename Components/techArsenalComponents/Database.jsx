import Image from "next/image";
import '../../public/style/TechPartnersStyle.css';
import mon from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/mon.svg"
import ela from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/ela.svg"
import pos from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/pos.svg"
import red from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/red.svg"
import mar from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/mar.svg"
import ipf from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/ipf.svg"
const Database = () => {
    return(
        <div className="ArsenalMiniComponent">
            <Image src={mon}></Image>
            <Image src={ela}></Image>
            <Image src={pos}></Image>
            <Image src={red}></Image>
            <Image src={mar}></Image>
            <Image src={ipf}></Image>
        </div>
    );
};

export default Database