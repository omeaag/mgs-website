import Image from "next/image";

import mon from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/mon.svg"
import ela from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/ela.svg"
import pos from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/pos.svg"
import red from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/red.svg"
import mar from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/mar.svg"
import ipf from "../../public/materials/TechPartnersImages/mgsServciesIcons/dbIcons/ipf.svg"
const Database = () => {
    return(
        <div className="ArsenalMiniComponent">
            <Image src={mon} alt="Logo of MongoDB"></Image>
            <Image src={ela} alt="Logo of Elasticsearch"></Image>
            <Image src={pos} alt="Logo of PostSQL"></Image>
            <Image src={red} alt="Logo of Redis"></Image>
            <Image src={mar} alt="Logo of MariaDB"></Image>
            <Image src={ipf} alt="Logo of IPFS"></Image>
        </div>
    );
};

export default Database