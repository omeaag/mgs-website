'use client'
import styles from '../public/style/GetInTouchStyle.css'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import GetInTouch from '@/Components/Firebase/mgsFirebaseForm'

function UseGetInTouch() {
	return (
		<div className="partnershipAllContainer">
			<div className="getInTouchContainer">
				<h1>Get in touch</h1>
				<h3>
					Your journey towards digital transformation begins with a free initial consultation. We'll delve into your project, assess its feasibility, and sketch out potential strategies. Reach
					out today — let's start this exciting voyage together, guiding you at every step towards a digital horizon.
				</h3>
			</div>

			<GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
				<GetInTouch />
			</GoogleReCaptchaProvider>
		</div>
	)
}

export default UseGetInTouch
