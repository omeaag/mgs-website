'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../../public/style/Feedback.css';

const Feedback = () => {
    let schema = yup.object().shape({
        message: yup
            .string()
            .required('Please enter your message with at least 15 characters!')
            .min(15),
    });

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: schema,
    });
    return (
			<div className="feedbackContainer">
				<h1>
					Leave Some Feedback For <br />
					<span>Make Our All Better</span>
				</h1>

				<form onSubmit={formik.handleSubmit} className="form">
					<div className="rate">
						<span>Extremely Poor</span>
						<div className="rateButtonContainer">
							<button aria-label="1">1</button>
							<button aria-label="2">2</button>
							<button aria-label="3">3</button>
							<button aria-label="4">4</button>
							<button aria-label="5">5</button>
							<button aria-label="6">6</button>
							<button aria-label="7">7</button>
							<button aria-label="8">8</button>
							<button aria-label="9">9</button>
							<button aria-label="10">10</button>
						</div>
						<span>Exteremly Good</span>
					</div>
					<textarea name="message" cols="30" rows="10" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Write Your Feedback Here"></textarea>
					{formik.errors.message && formik.touched.message && <div className="error">{formik.errors.message}</div>}
					<div>
						<button aria-label="Submit Feedback" id="submitBtn" type="submit">
							Submit Feedback
						</button>
					</div>
				</form>
			</div>
		)
};

export default Feedback;