"use client"
import Image from 'next/image';
import Script from 'next/script'
import styles from "../public/style/PartnershipStyle.css"
import logos11 from "../public/materials/partnershipImages/logos11.svg";
import logos12 from "../public/materials/partnershipImages/logos12.svg";
import logos13 from "../public/materials/partnershipImages/logos13.svg";
import logos14 from "../public/materials/partnershipImages/logos14.svg";
import logos21 from "../public/materials/partnershipImages/logos21.svg";
import logos22 from "../public/materials/partnershipImages/logos22.svg";
import logos23 from "../public/materials/partnershipImages/logos23.svg";
import logos24 from "../public/materials/partnershipImages/logos24.svg";
import logos31 from "../public/materials/partnershipImages/logos31.svg";
import logos32 from "../public/materials/partnershipImages/logos32.svg";
import logos33 from "../public/materials/partnershipImages/logos33.svg";
import logos34 from "../public/materials/partnershipImages/logos34.svg";
import logos43 from "../public/materials/partnershipImages/logos43.svg";
import logos44 from "../public/materials/partnershipImages/logos44.svg";
import logos51 from "../public/materials/partnershipImages/logos51.svg";
import logos71 from "../public/materials/partnershipImages/logos71.svg";
import hexagon from "../public/materials/partnershipImages/hexagon.svg";
import { useState, useEffect } from 'react';

const Partnership = () => {
    const logos1 = [
        {
            id: "hex",
            url: logos11
        },
        {
            id: "infinite",
            url: logos12
        },
        {
            id: "beta",
            url: logos13
        },
        {
            id: "rımo",
            url: logos14
        }
    ]
    const logos2 = [
        {
            id: "star",
            url: logos21
        },
        {
            id: "erbis",
            url: logos22
        },
        {
            id: "tree",
            url: logos23
        },
        {
            id: "ko",
            url: logos24
        }
    ]
    const logos3 = [
        {
            id: "github",
            url: logos31
        },
        {
            id: "xlogo",
            url: logos32
        },
        {
            id: "pyramid",
            url: logos33
        },
        {
            id: "react",
            url: logos34
        }
    ]
    const logos4 = [
        {
            id: "pyramit",
            url: logos33
        },
        {
            id: "beta",
            url: logos13
        },
        {
            id: "universe",
            url: logos43
        },
        {
            id: "veztek",
            url: logos44
        }
    ]
    const logos5 = [
        {
            id: "eye",
            url: logos51
        },
        {
            id: "react",
            url: logos34
        },
        {
            id: "star",
            url: logos21
        },
        {
            id: "tree",
            url: logos33
        }
    ]
    const logos6 = [
        {
            id: "xlogo",
            url: logos32
        },
        {
            id: "hex",
            url: logos11
        },
        {
            id: "eye",
            url: logos51
        },
        {
            id: "erbis",
            url: logos22
        }
    ]
    const logos7 = [
        {
            id: "aws",
            url: logos71
        },
        {
            id: "github",
            url: logos31
        },
        {
            id: "infinite",
            url: logos12
        },
        {
            id: "veztek",
            url: logos44
        }
    ]

    const [count, setCount] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount + 1) % logos1.length);
        }, 2000);
        return () => clearInterval(interval);
    });



    return (
        <div style={{ display: 'flex', gap: "100px", alignItems: "center", }}>
            <div style={{ display: 'flex', flexDirection: "column" }}>
                <div style={{ display: 'flex', gap: "7px", }}>
                    <div className='hexagonContainer'>
                        <Image alt={logos1[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logos1[count].id} src={logos1[count].url}></Image>
                    </div>
                    <div className='hexagonContainer'>
                        <Image alt={logos2[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logos2[count].id} src={logos2[count].url}></Image>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: "7px", marginTop: "-70px", marginLeft: "-146px", }}>
                    <div className='hexagonContainer'>
                        <Image alt={logos3[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logos3[count].id} src={logos3[count].url}></Image>
                    </div>
                    <div className='hexagonContainer'>
                        <Image alt={logos4[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logos4[count].id} src={logos4[count].url}></Image>
                    </div>
                    <div className='hexagonContainer'>
                        <Image alt={logos5[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logos5[count].id} src={logos5[count].url}></Image>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: "7px", marginTop: "-70px" }}>
                    <div className='hexagonContainer'>
                        <Image alt={logos6[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logos6[count].id} src={logos6[count].url}></Image>
                    </div>
                    <div className='hexagonContainer'>
                        <Image alt={logos7[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logos7[count].id} src={logos7[count].url}></Image>
                    </div>
                </div>
            </div>
            <div style={{ margin: "auto" }}>
                <h2 style={{ fontSize: "60px", color: "#1DA7D9", fontFamily: "MonumentExtended" }}>Partnership</h2>
                <h1 style={{ fontSize: "100px", color: "#3C3C3C", fontFamily: "MonumentExtended" }}>Developing <br /> With The Best</h1>
            </div>
        </div>
    );
};

export default Partnership;