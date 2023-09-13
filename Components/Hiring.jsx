'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import amsterdam from '../public/materials/amsterdam.svg';
import apply from '../public/materials/apply.svg';
import freeIcon from '../public/materials/freeIcon.svg';
import remIcon from '../public/materials/remIcon.svg';
import view from '../public/materials/view.svg';
import '../public/style/Hiring.css';

const Hiring = () => {
    const advertisement = [
        {
            title: 'Machine Learning and  Python Specialist',
            description: 'We are looking for Senior-level Python Specialist to join our team.',
            features: ['Remote', 'Freelancer'],
        },
        {
            title: 'Full Stack Developer',
            description: 'We are looking for an experienced Full Stack Developer to join our team.',
            features: ['Remote', 'Full-time'],
        },
        {
            title: 'Defi/Tokenomics Expert',
            description: 'We are lookin for a Tokenomics Expert to join our team.',
            features: ['Remote', 'Part-time'],
        },
        {
            title: 'Engineering Manager',
            description: 'We are lookin for an experienced Engineering Manager to join our team.',
            features: ['Remote', 'Full-time'],
        },
        {
            title: 'Full Stack Developer',
            description: 'We are lookin for an experienced Full Stack Developer to join our team.',
            features: ['Remote', 'Full-time'],
        },
    ];

    const [jobs, setJobs] = useState(advertisement.slice(0, 4));
    const [visibleJobs, setVisibleJobs] = useState(4);

    const viewMoreJobs = () => {
        const newVisibleJobs = visibleJobs + 4;
        setJobs(advertisement.slice(0, newVisibleJobs));
        setVisibleJobs(newVisibleJobs);
    };

    return (
        <div className='hiringContainer'>
            <div className='imageContainer'>
                <Image src={amsterdam} />
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
                        <div style={{width: '90%'}}>
                            <h1 className='hiringTitle'>{job.title}</h1>
                            <p id='hiringDescription'>{job.description}</p>
                            {job.features.map((feat, index) => (
                                <span
                                    className='hiringFeatures'
                                    key={index}>
                                    {feat !== 'Remote' ||'Hybrid'||'On site' ? (
                                        <Image src={freeIcon} />
                                    ) : (
                                        <Image src={remIcon} />
                                    )}
                                    {feat}
                                </span>
                            ))}
                        </div>
                        <div className='apply'>
                            <Link href={'/'}>
                                Apply{' '}
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
                <button onClick={viewMoreJobs}>
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
