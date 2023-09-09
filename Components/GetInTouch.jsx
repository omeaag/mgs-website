"use client"
import Image from 'next/image';
import Script from 'next/script'
import styles from "../public/style/GetInTouchStyle.css"


const GetInTouch = () => {

    return (
        <div className="partnershipAllContainer" >
            <div className='getInTouchContainer'>
                <h1>Get in touch</h1>
                <h3>We're here to guide you every step of the way. Start with a free initial meeting where we'll discuss your project, assess its feasibility, and outline potential strategies. This is just the beginning of our journey together towards your digital transformation. Don't hesitate to reach out to us today. We're excited to embark on this journey with you.</h3>
            </div>

            <form className="formContainer" action="">
                <div className="namesContainer" >
                    <div className="groupContainer">
                        <label htmlFor="fname">First Name</label>
                        <input placeholder='Enter first name' type="text" id="fname" />
                    </div>
                    <div className="groupContainer">
                        <label htmlFor="lname">Last Name</label>
                        <input placeholder='Enter last name' type="text" id="lname" />
                    </div>
                </div>

                <div className="groupContainer">
                    <label htmlFor="email">Email</label>
                    <input placeholder='Enter email adress' type="text" id="email" />
                </div>

                <div className="comphoneContainer">
                    <div className="groupContainer">
                        <label htmlFor="company">Company</label>
                        <input placeholder='Enter company name' type="text" id="company" />
                    </div>
                    <div className="groupContainer">
                        <label htmlFor="phone">Phone</label>
                        <input placeholder='Enter phone number' type="text" id="phone" />
                    </div>
                </div>
                <div className="groupContainer">
                    <label htmlFor="details">Details</label>
                    <input placeholder="Tell us your needs" type="text" id="details" />
                </div>
                <button>Let's Build Together</button>
            </form>
        </div>
    );
};

export default GetInTouch;