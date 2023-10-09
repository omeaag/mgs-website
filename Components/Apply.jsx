"use client"
import '../public/style/Apply.css';
import Image from 'next/image';
import upload_Icon from '../public/materials/upload-icon.svg'
import {useState, useEffect} from 'react';

const Apply = () => {
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
                <h1>FullStack Developer</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero velit soluta
                    voluptate, vel labore accusantium suscipit maiores eius saepe error?
                </p>
            </div>
            <div className='applyQualifications'>
                <div className='responsibilities'>
                    <h1>Full Stack Developer Responsibilies</h1>
                    <ul>
                        <li>
                            You will be coming onboard and getting a thorough understanding of
                            project scopes, dependencies and timescales
                        </li>
                        <li>
                            You will be working in a fast-paced environment, multitasking across
                            different projects
                        </li>
                        <li>
                            You will be working closely with the wider team, including stakeholders
                            and account managers
                        </li>
                        <li>
                            You will be responsible for producing high quality work whilst adhering
                            to best practices and coding standards
                        </li>
                    </ul>
                </div>
                <div className='requirements'>
                    <h1>Full Stack Developer Requirements</h1>
                    <ul>
                        <li>Commercial experience with PHP 7 +</li>
                        <li>Understanding with associated frameworks ideally Laravel</li>
                        <li>Front end technologies such as HTML, CSS and SASS</li>
                        <li>JavaScript knowledge</li>
                        <li>Working knowledge of Git</li>
                        <li>Experience working with MySQL Databases</li>
                    </ul>
                </div>
                <div className='benefits'>
                    <h1>Full Stack Developer Benefits</h1>
                    <ul>
                        <li>Friendly, supportive, and forward-thinking team</li>
                        <li>Flexible working hours</li>
                        <li>
                            Excellent career progression opportunities and regular career
                            development plans
                        </li>
                        <li>2 days per week on site the rest form home</li>
                        <li>Regular social events</li>
                        <li>Birthdays off</li>
                        <li>25 days holiday plus bank holidays</li>
                    </ul>
                </div>
                <div className='qualifications'>
                    <h1>Full Stack Developer</h1>
                    <ul>
                        <li>Fully remote working arrangements</li>
                        <li>PHP, MVC, Larval, HTML, CSS, SASS, JavaScript, MySQL, Bootstrap</li>
                        <li>Salary up to £60,000 with benefits</li>
                        <li>Please apply by emailing me directly to</li>
                    </ul>
                </div>
                <div className='applyInfo'>
                    <h1>TO BE CONSIDERED… .</h1>
                    <p>
                        Please either apply by clicking online or emailing me directly to . For
                        further information please call me on 07719 051 877 or 01244 567 567. By
                        applying for this role, you give express consent for us to process & submit
                        (subject to required skills) your application to our client in conjunction
                        with this vacancy only. Also feel free to connect with me on LinkedIn, just
                        search Millicent Nicholson Gates. I look forward to hearing from you.
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
                                Select month
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
                                Select day
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
                                Select year
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
                                <option value=''>Please Select</option>
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
                                <Image src={upload_Icon} />
                                <h2>Browse Files</h2>
                                <h3>Drag and drop your file here</h3>
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
};

export default Apply;
