import Image from "next/image";
import '../../public/style/TechPartnersStyle.css';
import aws from "../../public/materials/TechPartnersImages/mgsServciesIcons/devopsIcons/aws.svg"
import ans from "../../public/materials/TechPartnersImages/mgsServciesIcons/devopsIcons/ans.svg"
import dig from "../../public/materials/TechPartnersImages/mgsServciesIcons/devopsIcons/dig.svg"
import goo from "../../public/materials/TechPartnersImages/mgsServciesIcons/devopsIcons/goo.svg"
import gra from "../../public/materials/TechPartnersImages/mgsServciesIcons/devopsIcons/gra.svg"
import het from "../../public/materials/TechPartnersImages/mgsServciesIcons/devopsIcons/het.svg"
import kub from "../../public/materials/TechPartnersImages/mgsServciesIcons/devopsIcons/kub.svg"
import pag from "../../public/materials/TechPartnersImages/mgsServciesIcons/devopsIcons/pag.svg"
import pro from "../../public/materials/TechPartnersImages/mgsServciesIcons/devopsIcons/pro.svg"
import hel from "../../public/materials/TechPartnersImages/mgsServciesIcons/devopsIcons/hel.svg"
import ter from "../../public/materials/TechPartnersImages/mgsServciesIcons/devopsIcons/ter.svg"
const Devops = () => {
    return(
        <div className="ArsenalMiniComponentDEV">
            <div className="ArsenalMiniComponent">
            <Image src={aws}></Image>
            <Image src={ans}></Image>
            <Image src={dig}></Image>
            <Image src={goo}></Image>
            <Image src={gra}></Image>
            <Image src={het}></Image>
            </div>
            <div className="ArsenalMiniComponent">
            <Image src={kub}></Image>
            <Image src={pag}></Image>
            <Image src={pro}></Image>
            <Image src={hel}></Image>
            <Image src={ter}></Image>
            </div>
        </div>
    );
};

export default Devops