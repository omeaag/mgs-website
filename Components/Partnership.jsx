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

    const logosData = [
        {
            id: 'first',
            url: [
                logos11,
                logos12,
                logos13,
                logos14,
            ],
        },
        {
            id: 'second',
            url: [
                logos21,
                logos22,
                logos23,
                logos24,
            ],
        },
        {
            id: 'third',
            url: [
                logos31,
                logos32,
                logos33,
                logos34,
            ],
            interval: 2200,
        },
        {
            id: 'fourth',
            url: [
                logos33,
                logos13,
                logos43,
                logos44,
            ],
        },
        {
            id: 'fiveth',
            url: [
                logos51,
                logos34,
                logos21,
                logos33,
            ],
        },
        {
            id: 'sixth',
            url: [
                logos32,
                logos11,
                logos51,
                logos22,
            ],
        },
        {
            id: 'seventh',
            url: [
                logos71,
                logos31,
                logos12,
                logos44,
            ],
        },
    ];


    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [count5, setCount5] = useState(0);
    const [count6, setCount6] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, [count]);
    useEffect(() => {
        const initialDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setCount1((prevCount) => (prevCount + 1) % 4);
            }, 3000);
        }, 100);
        return () => {
            clearTimeout(initialDelay);
        };
    }, []);
    useEffect(() => {
        const initialDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setCount2((prevCount) => (prevCount + 1) % 4);
            }, 3000);
        }, 200);
        return () => {
            clearTimeout(initialDelay);
        };
    }, []);
    useEffect(() => {
        const initialDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setCount3((prevCount) => (prevCount + 1) % 4);
            }, 3000);
        }, 300);
        return () => {
            clearTimeout(initialDelay);
        };
    }, []);
    useEffect(() => {
        const initialDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setCount4((prevCount) => (prevCount + 1) % 4);
            }, 3000);
        }, 400);
        return () => {
            clearTimeout(initialDelay);
        };
    }, []);
    useEffect(() => {
        const initialDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setCount5((prevCount) => (prevCount + 1) % 4);
            }, 3000);
        }, 500);
        return () => {
            clearTimeout(initialDelay);
        };
    }, []);
    useEffect(() => {
        const initialDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setCount6((prevCount) => (prevCount + 1) % 4);
            }, 3000);
        }, 600);
        return () => {
            clearTimeout(initialDelay);
        };
    }, []);

    return (
        <div className="allContainer" >
            <div className='allRows'>
                <div className='firstRow'>
                    <div className='hexagonContainer'>
                        <Image alt={logosData[count].id} id='hexagon' src={hexagon} ></Image>
                        <Image alt={logosData[count].id} src={logosData[0].url[count]}></Image>
                    </div>
                    <div className='hexagonContainer'>
                        <Image alt={logosData[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logosData[count].id} src={logosData[1].url[count4]}></Image>
                    </div>
                </div>
                <div className='secondRow'>
                    <div className='hexagonContainer'>
                        <Image alt={logosData[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logosData[count].id} src={logosData[2].url[count2]}></Image>
                    </div>
                    <div className='hexagonContainer'>
                        <Image alt={logosData[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logosData[count].id} src={logosData[3].url[count3]}></Image>
                    </div>
                    <div className='hexagonContainer'>
                        <Image alt={logosData[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logosData[count].id} src={logosData[4].url[count1]}></Image>
                    </div>
                </div>
                <div className='thirdRow'>
                    <div className='hexagonContainer'>
                        <Image alt={logosData[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logosData[count].id} src={logosData[5].url[count6]}></Image>
                    </div>
                    <div className='hexagonContainer'>
                        <Image alt={logosData[count].id} id='hexagon' src={hexagon}></Image>
                        <Image alt={logosData[count].id} src={logosData[6].url[count5]}></Image>
                    </div>
                </div>
            </div>
            <div className='textContainer' style={{ margin: "auto" }}>
                <h2>Partnership</h2>
                <h1>Developing <br /> With The Best</h1>
            </div>
        </div>
    );
};

export default Partnership;