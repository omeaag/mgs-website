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
            <Image src={fig} alt="Logo of Figma"></Image>
            <Image src={ae} alt="Logo of After Effects"></Image>
            <Image src={pho} alt="Logo of Photoshop"></Image>
            <Image src={ill} alt="Logo of Ai"></Image>
            <Image src={lun} alt="Logo of Lun"></Image>
            <Image src={web} alt="Logo of Webflow"></Image>
            <Image src={ble} alt="Logo of Blender"></Image>
            <Image src={fra} alt="Logo of Framer"></Image>
        </div>
    );
};

export default Uiux