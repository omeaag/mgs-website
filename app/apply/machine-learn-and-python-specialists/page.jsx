'use client';
import '../../../public/style/Apply.css';
import Image from 'next/image';
import upload_Icon from '../../../public/materials/upload-icon.svg';
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
			<div className="applyContainer">
				<div className="applyHeader">
					<h1>Machine Learning and Python Specialist</h1>
					<div className="mobilViewInfo">
						<p>
							<span>Location:</span> Remote (on-site meetings possible in the Netherlands, Italy and Spain)
						</p>
						<p>
							<span>Salary:</span> Competitive, based on experience{' '}
						</p>
						<p>
							<span>Top type:</span> Full-time or freelance
						</p>
					</div>
				</div>
				<div className="mobilViewText">
					<p>
						In the ever-evolving domain of artificial intelligence, Mood Global Services is in search of a Machine Learning and Python Specialist to spearhead our AI initiatives. The world of
						machine learning offers endless possibilities, from predictive analytics to natural language processing and beyond. As our specialist, you will play a pivotal role in harnessing
						these possibilities, turning data into actionable insights, and driving innovation.
					</p>
					<p>
						Your expertise in Python, combined with your deep understanding of machine learning frameworks, will be instrumental in developing, deploying, and optimizing our machine learning
						models. You will collaborate with our software development team, ensuring that these models are seamlessly integrated into our applications, enhancing user experience and
						functionality.
					</p>
				</div>
				<div className="applyQualifications">
					<div className="responsibilities">
						<h1>Responsibilies:</h1>
						<ul>
							<li>Design, develop, and deploy machine learning models using frameworks like TensorFlow, Keras, PyTorch, and scikit-learn.</li>
							<li>Implement and maintain cloud-based solutions for deploying ML models using AWS and Firebase/Firestore.</li>
							<li>Work closely with the software development team to integrate ML models into applications, ensuring seamless user experience.</li>
							<li>Stay updated with the latest advancements in ML and AI, and proactively suggest improvements to existing systems.</li>
						</ul>
					</div>
					<div className="experienceRequired">
						<h1>Experience Required</h1>
						<ul>
							<li>Strong proficiency in Javascript with hands-on experience in React, Nextjs, and TailwindCss. Competing frameworks are also acceptable.</li>
							<li>Experience in state management, preferably Zustand or Redux.</li>
							<li>Solid understanding of cloud platforms, especially AWS.</li>
							<li>Familiarity with Github Actions or other CI/CD architecture.</li>
							<li>Experience in smart contract interactions using web3, wagmi, or ethers</li>
						</ul>
					</div>
					<div className="bonusQualifications">
						<h1>Bonus Qualifications</h1>
						<ul>
							<li>AWS Certified Machine Learning or Professional Machine Learning Engineer certification.</li>
						</ul>
					</div>
				</div>
				<div className="applyFormContainer">
					<form action="">
						<h1>Fill the form to apply</h1>
						<div className="nameInputs">
							<h1>Full Name</h1>
							<input type="text" placeholder="Enter first name" />
							<input type="text" placeholder="Enter middle name" />
							<input type="text" placeholder="Enter last name" id="last_name" />
						</div>
						<div className="birthdayInputs">
							<h1>Birth Day</h1>
							<select name="month" id="month" value={selectedMonth} onChange={handleMonthChange}>
								<option value="" disabled>
									Month
								</option>
								{months.map((month) => (
									<option key={month} value={month}>
										{month}
									</option>
								))}
							</select>
							<select name="day" id="day" value={selectedDay} onChange={handleDayChange}>
								<option value="" disabled>
									Day
								</option>
								{Array.from({ length: daysInMonth }, (_, index) => index + 1).map((day) => (
									<option key={day} value={day}>
										{day}
									</option>
								))}
							</select>
							<select name="year" id="year" value={selectedYear} onChange={handleYearChange}>
								<option value="" disabled>
									Year
								</option>
								{years.map((year) => (
									<option key={year} value={year}>
										{year}
									</option>
								))}
							</select>
						</div>
						<div className="adressInputs">
							<h1>Current Adress</h1>
							<input type="text" placeholder="Enter street adress" id="streetAdress" />
							<input type="text" placeholder="Enter your city" />
							<input type="text" placeholder="Enter state/province" />
							<input type="text" placeholder="Enter postal/zip Code" id="zipCode" />
						</div>
						<div className="contactInputs">
							<div>
								<h1>Email Adress</h1>
								<input type="email" name="" placeholder="ex: myname@example.com" />
							</div>
							<div>
								<h1>Phone Number</h1>
								<input type="tel" name="" placeholder="(000) 000-0000" />
							</div>
							<div>
								<h1>Linkedin</h1>
								<input type="text" />
							</div>
						</div>
						<div className="questionInputs">
							<div>
								<h1>Position Applied</h1>
								<select name="" id="">
									<option>Please Select</option>
									<option>Full Stack Developer</option>
									<option>Machine Learning and Python Specialist</option>
									<option>Defi/Tokenomics Expert</option>
									<option>Engineering Manager</option>
								</select>
							</div>
							<div>
								<h1>How Did You Hear About Us</h1>
								<select name="" id="">
									<option value="">Please Select</option>
									<option value="">Social Media</option>
									<option value="">Linkedin</option>
									<option value="">Friend</option>
								</select>
							</div>
							<div>
								<h1>Available start date</h1>
								<select name="" id="">
									<option value="">Please Select</option>
									<option value="">In one week</option>
									<option value="">In two week</option>
								</select>
							</div>
						</div>
						<div onDragEnter={handleDragEnter} onDragOver={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleDrop} className={`resumeInputs ${dragging ? 'dragging' : ''}`}>
							<div className="resume">
								<h1>Upload Your Resume</h1>
								<div className="innerResume">
									<Image alt="uploadIcon" src={upload_Icon} />
									<h2>Browse Files</h2>
									<h3>Drag and drop your file here</h3>
									<h3 id="fileHere">Upload File here</h3>
									<div className="fileInput">
										<input type="file" name="" id="" />
									</div>
								</div>
							</div>
							<div className="coverLetter">
								<h1>Cover Letter</h1>
								<textarea name="" id="" cols="" rows=""></textarea>
							</div>
						</div>
						<button aria-label="Apply Now" id="applyBtn">
							Apply Now
						</button>
					</form>
				</div>
			</div>
		)
};

export default page;
