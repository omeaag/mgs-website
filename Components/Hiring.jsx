'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import amsterdam from '../public/materials/amsterdam.svg';
import amsterdam2 from '../public/materials/Rectangle674.png';
import apply from '../public/materials/apply.svg';
import freeIcon from '../public/materials/freeIcon.svg';
import remIcon from '../public/materials/remIcon.svg';
import view from '../public/materials/view.svg';
import '../public/style/Hiring.css';

const Hiring = () => {
    const advertisement = [
        {
            title: 'Full Stack Developer',
            description: 'We are looking for an experienced Full Stack Developer to join our team.',
            features: ['Remote', 'Full-time or Freelance'],
            navigate: '/apply/full-stack-developer',
        },
        {
            title: 'Defi/Tokenomics Expert',
            description: 'We are lookin for a Tokenomics Expert to join our team.',
            features: ['Remote', 'Full-time or Freelance'],
            navigate: '/apply/tokenomics',
        },
        {
            title: 'Machine Learning and  Python Specialist',
            description: 'We are looking for Senior-level Python Specialist to join our team.',
            features: ['Remote', 'Freelance'],
            navigate: '/apply/machine-learn-and-python-specialists',
        },
        {
            title: 'Digital Content Creator / Tik Tok Specialist',
            description:
                'In the dynamic world of social media, Mood Global Services is on the lookout for a passionate TikToker to amplify our digital presence. TikTok, with its vast user base and innovative content formats, offers a unique platform to engage and educate audiences. We aim to leverage this platform to its fullest potential, making tech topics, especially blockchain and AI, accessible and engaging for all.',
            features: ['Remote', 'Freelance'],
            navigate: '/apply/digital-content-creator',
        },
        {
            title: 'SEO specialist',
            description:
                'In the dynamic digital landscape, Mood Global Services seeks an SEO Expert to elevate our online presence and drive organic traffic growth.',
            features: ['Remote', 'Full-time or Freelance'],
            navigate: '/apply/seo-specialist',
        },
    ];

    const [jobs, setJobs] = useState(advertisement);
    const [visibleJobs, setVisibleJobs] = useState(4);

    const viewMoreJobs = () => {
        const newVisibleJobs = visibleJobs + 4;
        setJobs(advertisement.slice(0, newVisibleJobs));
        setVisibleJobs(newVisibleJobs);
    };

    return (
        <div className='hiringContainer'>
            <div className='imageContainer'>
                <Image
                    id='webAmsterdamImage'
                    src={amsterdam}
                />
                <Image
                    id='mobileAmsterdamImage'
                    src={amsterdam2}
                />
                <p className='imageText'>
                    Started in Amsterdam <br /> enhancing and emplifying connections <br /> across
                    the globe.
                </p>
            </div>
            <div className='headerSection'>
                <span>We're Hiring</span>
                <h1>
                    See our Current <span>Openings</span>
                </h1>
                <p>
                    Start doing work that matters. <br />
                    We're 100% remote team spread all across the world and looking for talented
                    people.
                </p>
            </div>
            <div className='hiring'>
                {jobs.map((job, index) => (
                    <div
                        className='hiringSection'
                        key={index}>
                        <div className='hiringSectionFirst'>
                            <h1 className='hiringTitle'>{job.title}</h1>
                            <p id='hiringDescription'>{job.description}</p>
                            {job.features.map((feat, index) => (
                                <span
                                    className='hiringFeatures'
                                    key={index}>
                                    {feat !== ('Remote' || 'Hybrid' || 'On site') ? (
                                        <Image src={freeIcon} />
                                    ) : (
                                        <Image src={remIcon} />
                                    )}
                                    {feat}
                                </span>
                            ))}
                        </div>
                        <div
                            key={job.navigate}
                            className='apply'>
                            <Link href={job.navigate}>
                                Apply
                                <span>
                                    <Image
                                        src={apply}
                                        alt='apply'
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {visibleJobs < advertisement.length && (
                <button id='viewmore' /*onClick={viewMoreJobs}*/>
                    View More
                    <span>
                        <Image
                            src={view}
                            alt='view more'
                        />
                    </span>
                </button>
            )}
        </div>
    );
};

export default Hiring;
