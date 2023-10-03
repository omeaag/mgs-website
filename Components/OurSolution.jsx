'use client';
import React, {useState, useEffect} from 'react';
import '@/public/style/OurSolution.css';
import Image from 'next/image';
import frame_1 from '../public/materials/Frame.png';
import frame_3 from '../public/materials/Frame_2.png';
import frame_2 from '../public/materials/Frame_3.png';
import frame_4 from '../public/materials/Frame_4.png';
import cube from '../public/materials/Group33.png';
import Bluecube from '../public/materials/Group32.png';


const OurSolution = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [blueCubeIndex, setBlueCubeIndex] = useState(0);
    const [imageSources, setImageSources] = useState([
        {src: cube},
        {src: cube},
        {src: cube},
        {src: cube},
    ]);

    const divList = [
        {
            title: 'Innovative Research & <br/> Business Solutions',
            content:
                'Our journey begins with extensive research, understanding your business, and the possibilities that blockchain and other technologies can offer.',
            image: frame_1,
        },
        {
            title: 'Tailored Strategy For Your <br/> Unique Business',
            content:
                "We craft a strategy that's custom-made for your business, aligning with your unique goals and requirements.",
            image: frame_2,
        },
        {
            title: 'Redefining Boundaries: <br/> Innovation For A New Era',
            content:
                'We collaborate with you in brainstorming sessions, discovering new opportunities and creative solutions.',
            image: frame_3,
        },
        {
            title: 'Unwavering Support For <br/> Ongoing Success',
            content:
                'Our support continues even after implementation, ensuring your business remains at the forefront of the digital transformation journey.',
            image: frame_4,
        },
    ];

    const headerList = [
        {
            header: 'Through <br/> Exploration',
        },
        {
            header: 'Bespoke <br/> Plan',
        },
        {
            header: 'Joint <br/> Innovation',
        },
        {
            header: 'Sustained <br/> Guidance',
        },
    ];

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setBlueCubeIndex(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (currentIndex + 1) % divList.length;
            handleImageClick(nextIndex);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    useEffect(() => {
        const newImageSources = imageSources.map((imageSource, index) => {
            return index === blueCubeIndex ? {src: Bluecube} : {src: cube};
        });

        setImageSources(newImageSources);
    }, [blueCubeIndex]);

    return (
        <div className='OurSolitionContainer'>
            <div className='titleContainer'>
                <h1 className='OurSolutionTitle'>
                    Our <span>Solution</span>
                </h1>
                <div className='line'></div>
            </div>
            <div className='OurSolutionText'>
                <div className='cardContainer'>
                    {imageSources.map((imageSource, index) => (
                        <div
                            className={`card`}
                            key={index}>
                            <Image
                                src={imageSource.src}
                                onClick={() => handleImageClick(index)}
                                className={`${imageSource.src === Bluecube ? 'showImg' : ''}`}
                            />
                            <h2
                                dangerouslySetInnerHTML={{__html: headerList[index].header}}
                                className={imageSource.src === Bluecube ? 'blackHeader' : ''}
                                onClick={() => handleImageClick(index)}
                            />
                        </div>
                    ))}
                </div>
                <div className='textContainer'>
                    <div>
                        <h3 dangerouslySetInnerHTML={{__html: divList[currentIndex].title}} />
                        <p>{divList[currentIndex].content}</p>
                    </div>
                    <div>
                        <Image src={divList[currentIndex].image}></Image>
                    </div>
                    <div className='paginationButtons'>
                        <button
                            onClick={() => handleImageClick(0)}
                            className={`${currentIndex === 0 ? 'blueBtn' : ''}`}></button>
                        <button
                            onClick={() => handleImageClick(1)}
                            className={`${currentIndex === 1 ? 'blueBtn' : ''}`}></button>
                        <button
                            onClick={() => handleImageClick(2)}
                            className={`${currentIndex === 2 ? 'blueBtn' : ''}`}></button>
                        <button
                            onClick={() => handleImageClick(3)}
                            className={`${currentIndex === 3 ? 'blueBtn' : ''}`}></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSolution;
