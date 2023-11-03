"use client"
import '../../../public/style/Apply.css';
import Image from 'next/image';
import upload_Icon from '../../../public/materials/upload-icon.svg'
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
                <h1>Defi/Tokenomics Expert</h1>
                <div className='mobilViewInfo'>
                    <p>
                        <span>Location:</span> Remote (on-site meetings possible in the Netherlands,
                        Italy and Spain)
                    </p>
                    <p>
                        <span>Salary:</span> Competitive, based on experience{' '}
                    </p>
                    <p>
                        <span>Top type:</span> Full-time or freelance
                    </p>
                </div>
            </div>
            <div className='mobilViewText'>
                <p>
                    In the rapidly evolving world of decentralised finance (DeFi), Mood Global
                    Services seeks a DeFi/Tokenomics Expert to guide clients' financial innovations.
                </p>
                <p>
                    DeFi, often stylized as DeFi, has revolutionised the financial sector by
                    offering instruments without the need for traditional intermediaries such as
                    banks or brokerages. Instead, it harnesses the power of blockchain technology,
                    primarily Ethereum, to facilitate peer-to-peer transactions. From lending and
                    borrowing to trading cryptocurrencies and insuring against risks, DeFi platforms
                    have democratised access to financial tools, all underpinned by smart contracts.
                </p>
                <p>
                    As our DeFi/Tokenomics Expert, you'll be at the forefront of this financial
                    revolution. Your deep understanding of tokenomics will be crucial in shaping our
                    strategies, ensuring that we remain at the cutting edge of DeFi innovations.
                </p>
            </div>
            <div className='applyQualifications'>
                <div className='responsibilities'>
                    <h1>Responsibilities:</h1>
                    <ul>
                        <li>
                            Guiding our strategic choices in the DeFi space, ensuring that we
                            leverage the best platforms and tools available.
                        </li>
                        <li>
                            Analysing and interpreting tokenomics trends to optimise our financial
                            offerings.
                        </li>
                        <li>
                            Collaborating with a team of experts to develop and implement DeFi
                            solutions that align with our organisational goals.
                        </li>
                    </ul>
                </div>
                <div className='experienceRequired'>
                    <h1>Experience Required:</h1>
                    <ul>
                        <li>
                            <span>Deep Understanding of DeFi:</span> Comprehensive knowledge of
                            decentralised finance platforms, protocols, and instruments. Moreover,
                            be able to demonstrate a commitment to staying updated with the latest
                            trends, tools, and technologies in the DeFi and blockchain world.
                        </li>
                        <li>
                            <span>Tokenomics Expertise: </span>Familiarity with token design,
                            distribution strategies, and understanding of how tokens can drive
                            behaviour in decentralised ecosystems.
                        </li>
                        <li>
                            <span>Quantitative Research:</span> Experience in quantitative research,
                            especially in the digital assets market-making space. This includes
                            pricing of highly illiquid assets and understanding both CeFi
                            (Centralised Finance) and DeFi (Decentralised Finance) landscapes.
                        </li>
                        <li>
                            <span>Security:</span> Knowledge of security protocols in the blockchain
                            and DeFi space. Understanding of potential risks and mitigation
                            strategies.
                        </li>
                        <li>
                            <span>Communication Skills:</span> Ability to explain complex DeFi
                            concepts to a non-technical audience and collaborate effectively with
                            stakeholders.
                        </li>
                    </ul>
                    <p>
                        Do you have an example of a written business proposal, pitch deck or white
                        paper displaying your skills?
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
                    <button aria-label="Apply Now" id='applyBtn'>Apply Now</button>
                </form>
            </div>
        </div>
    );
};

export default page