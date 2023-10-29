'use client';
import React from 'react';
import Image from 'next/image';
import {useFormik} from 'formik';
import {useState, useEffect} from 'react';
import * as yup from 'yup';
import '../../public/style/readyToTalk.css';
import office from '../../public/materials/moodConverAIImages/office.svg';
import office2 from '../../public/materials/moodConverAIImages/office2.svg';
import global from '../../public/materials/moodConverAIImages/global.svg';
import openAI from '../../public/materials/moodConverAIImages/openAI.svg';

const ReadyToTalk = () => {
    const modal = window.document.getElementById('myModal');
    const [isTabletOn, setIsTabletOn] = useState(false);

    useEffect(() => {
        const updateWindowDimensions = () => {
            if (window.innerWidth < 1024) {
                setIsTabletOn(true);
            } else {
                setIsTabletOn(false);
            }
        };
        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, []);

    const handleClick = () => {
        if (modal) {
            modal.style.display = 'block';
        }
    };

    const closeSpan = () => {
        modal.style.display = 'none';
    };

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    /* ------------------------- TOP OF THE FORM -------------------------  */
    const schema = yup.object().shape({
        message: yup
            .string()
            .required('Message is a required field.')
            .min(15, 'Message must be at least 15 characters.'),
        name: yup
            .string()
            .required('Name is a required field.')
            .min(4, 'Name must be at least 4 characters.'),
        email: yup
            .string()
            .email('Email must be a valid email.')
            .required('Email is a required field.'),
        phone: yup
            .number()
            .typeError('Phone must be a number.')
            .required('Phone is a required field.'),
    });

    const formik = useFormik({
        initialValues: {
            message: '',
            name: '',
            email: '',
            phone: '',
        },
        validationSchema: schema,
    });
    return (
        <div className='readyContainer'>
            <div className='imageContainer'>
                <Image
                    src={isTabletOn ? office: office2}
                    alt='office'
                />

                <div className='readyText'>
                    <h1 id='readyHeader'>Ready To Talk? Contact Us Today</h1>
                    <p id='readyContent'>
                        Our team is here to assist you.Reach out now to discuss your needs,get
                        expert advice,or request a quote. Your journey starts with a call.
                    </p>

                    <button
                        id='quoteButton'
                        onClick={handleClick}>
                        GET A QUOTE NOW
                    </button>
                    <div
                        id='myModal'
                        className='modal'>
                        <div className='modal-content'>
                            <span
                                className='close'
                                onClick={closeSpan}>
                                &times;
                            </span>
                            <form
                                onSubmit={formik.handleSubmit}
                                className='form'>
                                <h1>Get A Quote For Free</h1>
                                <p>
                                    Our team is here to assist you.Reach out now to discuss your
                                    needs,get expert advice,or request a quote. Your journey starts
                                    with a call.
                                </p>
                                <input
                                    name='name'
                                    type='text'
                                    placeholder='Name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <div className='error'>{formik.errors.name}</div>
                                )}

                                <input
                                    name='email'
                                    type='email'
                                    placeholder='Email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <div className='error'>{formik.errors.email}</div>
                                )}

                                <input
                                    name='phone'
                                    type='text'
                                    placeholder='Phone'
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.phone && formik.touched.phone && (
                                    <div className='error'>{formik.errors.phone}</div>
                                )}
                                <textarea
                                    name='message'
                                    rows='6'
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Message'></textarea>
                                {formik.errors.message && formik.touched.message && (
                                    <div className='error'>{formik.errors.message}</div>
                                )}
                                <div>
                                    <button
                                        id='submitButton'
                                        type='submit'>
                                        Submit Feedback
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='poweredBy'>
                <div className='logoText'>
                    <h1>Powered By</h1>
                </div>
                <div className='logoAI'>
                    <div>
                        <Image
                            src={global}
                            alt='global'
                        />
                        <p>MoodGlobalService</p>
                    </div>
                    <div>
                        <Image
                            src={openAI}
                            alt='openAI'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadyToTalk;
