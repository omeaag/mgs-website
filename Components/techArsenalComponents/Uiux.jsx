import Image from "next/image";

import fig from "../../public/materials/TechPartnersImages/mgsServciesIcons/uiIcons/fig.svg"
import ae from "../../public/materials/TechPartnersImages/mgsServciesIcons/uiIcons/ae.svg"
import pho from "../../public/materials/TechPartnersImages/mgsServciesIcons/uiIcons/pho.svg"
import ill from "../../public/materials/TechPartnersImages/mgsServciesIcons/uiIcons/ill.svg"
import lun from "../../public/materials/TechPartnersImages/mgsServciesIcons/uiIcons/lun.svg"
import web from "../../public/materials/TechPartnersImages/mgsServciesIcons/uiIcons/web.svg"
import ble from "../../public/materials/TechPartnersImages/mgsServciesIcons/uiIcons/ble.svg"
import fra from "../../public/materials/TechPartnersImages/mgsServciesIcons/uiIcons/fra.svg"
const Uiux = () => {
    return(
        <div className="ArsenalMiniComponent">
            <Image src={fig}></Image>
            <Image src={ae}></Image>
            <Image src={pho}></Image>
            <Image src={ill}></Image>
            <Image src={lun}></Image>
            <Image src={web}></Image>
            <Image src={ble}></Image>
            <Image src={fra}></Image>
        </div>
    );
};

export default Uiux