"use client"
import '../../../public/style/Apply.css';
import Image from 'next/image';
import upload_Icon from '../../../public/materials/upload-icon.svg';
import downArrow from '../../../public/materials/down-arrow.svg'
import {useState, useEffect} from 'react';


const page = () => {
    const [dragging, setDragging] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [daysInMonth, setDaysInMonth] = useState(31);

    /* Birtgday Input Codes */
    const months = Array.from({length: 12}, (_, index) => index + 1);
    const years = Array.from({length: new Date().getFullYear() - 1929}, (_, index) => 1930 + index);

    useEffect(() => {
        const days = new Date(selectedYear, selectedMonth, 0).getDate();
        setDaysInMonth(days);
    }, [selectedMonth, selectedYear]);

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    /* ----------- Resume Upload Codes ----------- */
    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        //...
        const formData = new FormData();
        formData.append('file', droppedFile);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                //...
            })
            .catch((error) => {
                //...
            });
    };

    return (
        <div className='applyContainer'>
            <div className='applyHeader'>
                <h1>Digital Content Creator / Tik Tok Specialist</h1>
                <div className='mobilViewInfo'>
                    <p>
                        <span>Location:</span> Remote (on-site meetings possible in the Netherlands,
                        Italy and Spain)
                    </p>
                    <p>
                        <span>Salary:</span> Competitive, based on experience{' '}
                    </p>
                    <p>
                        <span>Top type:</span> Freelance
                    </p>
                </div>
            </div>
            <div className='mobilViewText'>
                <p>
                    In the dynamic world of social media, Mood Global Services is on the lookout for
                    a passionate TikToker to amplify our digital presence. TikTok, with its vast
                    user base and innovative content formats, offers a unique platform to engage and
                    educate audiences. We aim to leverage this platform to its fullest potential,
                    making tech topics, especially blockchain and AI, accessible and engaging for
                    all.
                </p>
                <p>
                    As our dedicated TikToker, you'll be the creative force behind our TikTok
                    content, crafting videos that not only entertain but also educate. Your role
                    will be pivotal in bridging the gap between complex tech concepts and the
                    general public, making technology more relatable and understandable.
                </p>
            </div>
            <div className='applyQualifications'>
                <div className='responsibilities'>
                    <h1>Responsibilies:</h1>
                    <ul>
                        <li>
                            <span>Content Creation:</span> Design and produce captivating TikTok
                            videos that resonate with our target audience.
                        </li>
                        <li>
                            <span>Tech Education:</span> Break down complex tech topics, especially
                            blockchain and AI, into digestible and engaging content for the TikTok
                            audience.
                        </li>
                        <li>
                            <span>Trendspotting:</span> Stay updated with the latest TikTok trends
                            to ensure our content remains relevant and fresh.
                        </li>
                        <li>
                            <span>Collaboration:</span> Work closely with our tech experts,
                            blockchain enthusiasts, and community managers to curate content that's
                            both informative and entertaining.
                        </li>
                        <li>
                            <span>Engagement:</span> Boost community engagement through interactive
                            content, challenges, and collaborations on TikTok.
                        </li>
                        <li>
                            <span>Continuous Learning:</span> Stay informed about the evolving
                            digital content landscape, especially in the realms of tech education on
                            social media platforms.
                        </li>
                    </ul>
                </div>
                <div className='requirements'>
                    <h1>Experience Required:</h1>
                    <ul>
                        <li>
                            <span>TikTok Expertise:</span> Minimum 2 years of hands-on experience in
                            creating TikTok videos.
                        </li>
                        <li>
                            <span>Tech Passion:</span> A strong passion for tech education,
                            especially blockchain and AI.
                        </li>
                        <li>
                            <span>Content Translation:</span> Ability to translate complex tech
                            jargon into engaging and relatable TikTok content.
                        </li>
                        <li>
                            <span>Tech Background:</span> Prior experience in tech education or
                            content creation for tech platforms is a plus.
                        </li>
                    </ul>
                    <p>
                        Do you have a portfolio of your TikTok videos, especially those related to
                        tech topics? We'd love to see your creativity in action!
                    </p>
                </div>
            </div>
            <div className='applyFormContainer'>
                <form action=''>
                    <h1>Fill the form to apply</h1>
                    <div className='nameInputs'>
                        <h1>Full Name</h1>
                        <input
                            type='text'
                            placeholder='Enter first name'
                        />
                        <input
                            type='text'
                            placeholder='Enter middle name'
                        />
                        <input
                            type='text'
                            placeholder='Enter last name'
                            id='last_name'
                        />
                    </div>
                    <div className='birthdayInputs'>
                        <h1>Birth Day</h1>
                        <select
                            name='month'
                            id='month'
                            value={selectedMonth}
                            onChange={handleMonthChange}>
                            <option
                                value=''
                                disabled>
                                Month
                            </option>
                            {months.map((month) => (
                                <option
                                    key={month}
                                    value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                        <select
                            name='day'
                            id='day'
                            value={selectedDay}
                            onChange={handleDayChange}>
                            <option
                                value=''
                                disabled>
                                Day
                            </option>
                            {Array.from({length: daysInMonth}, (_, index) => index + 1).map(
                                (day) => (
                                    <option
                                        key={day}
                                        value={day}>
                                        {day}
                                    </option>
                                )
                            )}
                        </select>
                        <select
                            name='year'
                            id='year'
                            value={selectedYear}
                            onChange={handleYearChange}>
                            <option
                                value=''
                                disabled>
                                Year
                            </option>
                            {years.map((year) => (
                                <option
                                    key={year}
                                    value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='adressInputs'>
                        <h1>Current Adress</h1>
                        <input
                            type='text'
                            placeholder='Enter street adress'
                            id='streetAdress'
                        />
                        <input
                            type='text'
                            placeholder='Enter your city'
                        />
                        <input
                            type='text'
                            placeholder='Enter state/province'
                        />
                        <input
                            type='text'
                            placeholder='Enter postal/zip Code'
                            id='zipCode'
                        />
                    </div>
                    <div className='contactInputs'>
                        <div>
                            <h1>Email Adress</h1>
                            <input
                                type='email'
                                name=''
                                placeholder='ex: myname@example.com'
                            />
                        </div>
                        <div>
                            <h1>Phone Number</h1>
                            <input
                                type='tel'
                                name=''
                                placeholder='(000) 000-0000'
                            />
                        </div>
                        <div>
                            <h1>Linkedin</h1>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='questionInputs'>
                        <div>
                            <h1>Position Applied</h1>
                            <select
                                name=''
                                id=''>
                                <option>Please Select</option>
                                <option>Full Stack Developer</option>
                                <option>Machine Learning and Python Specialist</option>
                                <option>Defi/Tokenomics Expert</option>
                                <option>Engineering Manager</option>
                            </select>
                        </div>
                        <div>
                            <h1>How Did You Hear About Us</h1>
                            <select
                                name=''
                                id=''>
                                <option value=''>Please Select </option>
                                <option value=''>Social Media</option>
                                <option value=''>Linkedin</option>
                                <option value=''>Friend</option>
                            </select>
                        </div>
                        <div>
                            <h1>Available start date</h1>
                            <select
                                name=''
                                id=''>
                                <option value=''>Please Select</option>
                                <option value=''>In one week</option>
                                <option value=''>In two week</option>
                            </select>
                        </div>
                    </div>
                    <div
                        onDragEnter={handleDragEnter}
                        onDragOver={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`resumeInputs ${dragging ? 'dragging' : ''}`}>
                        <div className='resume'>
                            <h1>Upload Your Resume</h1>
                            <div className='innerResume'>
                                <Image alt='uploadIcon' src={upload_Icon} />
                                <h2>Browse Files</h2>
                                <h3>Drag and drop your file here</h3>
                                <h3 id='fileHere'>Upload File here</h3>
                                <div className='fileInput'>
                                    <input
                                        type='file'
                                        name=''
                                        id=''
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='coverLetter'>
                            <h1>Cover Letter</h1>
                            <textarea
                                name=''
                                id=''
                                cols=''
                                rows=''></textarea>
                        </div>
                    </div>
                    <button id='applyBtn'>Apply Now</button>
                </form>
            </div>
        </div>
    );
}

export default page