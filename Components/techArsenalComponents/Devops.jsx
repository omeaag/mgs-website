import Image from "next/image";
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
            <Image src={aws} alt="Logo of Amazon Web Services"></Image>
            <Image src={ans} alt="Logo of Ansible"></Image>
            <Image src={dig} alt="Logo of Digital Ocean"></Image>
            <Image src={goo} alt="Logo of Google Cloud"></Image>
            <Image src={gra} alt="Logo of Grafana"></Image>
            <Image src={het} alt="Logo of Hetzner"></Image>
            <Image src={kub} alt="Logo of Kubernetes"></Image>
            <Image src={pag} alt="Logo of PagerDuty"></Image>
            <Image src={pro} alt="Logo of Prometheus"></Image>
            <Image src={hel} alt="Logo of Helm"></Image>
            <Image src={ter} alt="Logo of Terraform"></Image>
            </div>
        </div>
    );
};

export default Devops