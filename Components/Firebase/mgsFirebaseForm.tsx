'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { collection, query, where, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '@/Components/Firebase/firebaseConfig'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export interface FormData {
	email: string
	phone: string
	query: string
	first: string
	last: string
	company: string
}

const GetInTouch: React.FC = () => {
	const { executeRecaptcha } = useGoogleReCaptcha()
	const [formData, setFormData] = useState<FormData>({
		email: '',
		phone: '',
		query: '', // Initial query
		first: '',
		last: '',
		company: '',
	})

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		try {
			if (!executeRecaptcha) {
				alert('ReCaptcha has not been loaded')
				return
			}

			const recaptchaToken = await executeRecaptcha('firebaseForm')
			if (!recaptchaToken) {
				alert('Failed to verify reCAPTCHA')
				return
			}

			const usersCollection = collection(db, 'users')

			// Query for matching email
			const emailQuery = query(usersCollection, where('email', '==', formData.email))
			const emailQuerySnapshot = await getDocs(emailQuery)

			// Query for matching phone
			const phoneQuery = query(usersCollection, where('phone', '==', formData.phone))
			const phoneQuerySnapshot = await getDocs(phoneQuery)

			// Merge the results of the two queries
			const mergedDocs = new Map()
			emailQuerySnapshot.forEach((doc) => mergedDocs.set(doc.id, doc))
			phoneQuerySnapshot.forEach((doc) => mergedDocs.set(doc.id, doc))

			const { query: formQuery, ...restOfFormData } = formData
			console.log(formQuery, 'formquery')

			if (mergedDocs.size === 0) {
				// No existing document with the same email or phone, create a new one with query1
				// console.log('Creating new document')
				await setDoc(doc(usersCollection), {
					...restOfFormData,
					query1: formQuery,
				})

				try {
					console.log('Sending email')
					const response = await fetch('/api/send-mail', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(formData),
					})

					if (!response.ok) {
						throw new Error('Failed to send email')
					}
				} catch (error) {
					console.error(error)
				}
			} else {
				// console.log('Updating existing document', formQuery)
				// Documents with the same email or phone exist, update them
				mergedDocs.forEach(async (doc) => {
					const data = doc.data()
					let updateData = {}
					if (!data.query1) {
						updateData = { query1: formQuery }
					} else if (!data.query2) {
						updateData = { query2: formQuery }
					} else if (!data.query3) {
						updateData = { query3: formQuery }
					}
					// If query1, query2, and query3 all exist, do not update
					console.log('updateData', updateData)
					if (Object.keys(updateData).length > 0) {
						console.log('Updating document', doc.id)
						await updateDoc(doc.ref, updateData)
					}
				})
			}

			// Clear the form fields
			setFormData({
				email: '',
				phone: '',
				query: '',
				first: '',
				last: '',
				company: '',
			})
		} catch (error) {
			console.error('Error submitting the form:', error)
			alert('An error occurred while submitting the form. Please try again.')
		}
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	return (
		<form onSubmit={handleSubmit} className="formContainer">
			<div className="namesContainer">
				<div className="groupContainer">
					<label htmlFor="fname">First Name</label>
					<input onChange={handleChange} name="first" placeholder="Enter first name" type="text" id="fname" />
				</div>
				<div className="groupContainer">
					<label htmlFor="lname">Last Name</label>
					<input onChange={handleChange} name="last" placeholder="Enter last name" type="text" id="lname" required />
				</div>
			</div>

			<div className="groupContainer">
				<label htmlFor="email">Email</label>
				<input name="email" onChange={handleChange} placeholder="Enter email adress" type="email" id="email" required />
			</div>

			<div className="comphoneContainer">
				<div className="groupContainer">
					<label htmlFor="company">Company</label>
					<input onChange={handleChange} name="company" placeholder="Enter company name" type="text" id="company" />
				</div>
				<div className="groupContainer">
					<label htmlFor="phone">Phone</label>
					<input name="phone" onChange={handleChange} placeholder="Enter phone number" type="tel" id="phone" required />
				</div>
			</div>
			<div className="groupContainer">
				<label htmlFor="details">Details</label>
				<input placeholder="Tell us your needs" type="text" id="details" />
			</div>
			<button type="submit">Let's Build Together</button>
		</form>
	)
}

export default GetInTouch
