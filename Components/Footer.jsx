import Link from 'next/link'
import Image from 'next/image'
import twitterIcon from '../public/materials/mdi_twitter.svg'
import linkedinIcon from '../public/materials/entypo-social_linkedin-with-circle.svg'
import githubIcon from '../public/materials/mdi_github.svg'
import notionIcon from '../public/materials/mingcute_notion-fill.svg'
import instaIcon from '../public/materials/instalogo.svg'
import mgsLogo from '../public/materials/logo.svg'
import netherland from '../public/materials/netherland.svg'
import phone from '../public/materials/phone.svg'
import europe from '../public/materials/europe.svg'
import mail from '../public/materials/mail.svg'

const Footer = () => {
	return (
		<footer>
			<div className="footerContainer">
				<div className="footerMain">
					<div className="leftFooter">
						<Image src={mgsLogo} alt="Mood small svg logo" />
						<h2>
							<strong>Mood Global Services</strong> B.V.
						</h2>
						<div className="footerSocialIcons">
							<Link href="https://moodglobalservices.notion.site/Mood-Global-Services-Portfolio-203bce8c178b4b6aa6cabeb6309d18f8">
								<Image src={notionIcon} alt="notion-logo" />
							</Link>
							<Link href="https://www.linkedin.com/company/mood-global-services/">
								<Image src={linkedinIcon} alt="linkedin-logo" />
							</Link>
							<Link href="https://github.com/orgs/Mood-Global-Services/repositories">
								<Image src={githubIcon} alt="github-logo" />
							</Link>
							<Link href="https://twitter.com/MoodServices">
								<Image src={twitterIcon} alt="twitter-logo" />
							</Link>
							<Link href="https://www.instagram.com/moodglobalservices/">
								<Image id="instaIcon" src={instaIcon} alt="linkedin-logo" />
							</Link>
						</div>
						<h6>©2023 Mood Global Services B.V. All rights reserved.</h6>
					</div>
					<div className="rightFooter">
						<div className="ecoFooter">
							<strong>MGS ECOSYSTEM</strong>
							<Link href="/">Home</Link>
							<Link href="/services">Services</Link>
							<Link href="/mood-convert">MoodConvert</Link>
							<Link href="/careers">Careers</Link>
							<Link href="/faq">FAQ</Link>
							<Link href="/terms-conditions">Terms and Conditions</Link>
							<Link href="/privacy-policy">Privacy Policy</Link>
						</div>
						<div className="hqFooter">
							<strong>HEADQUARTERS:</strong>
							<h5>
								<Image src={netherland} alt="netherland" />
								&nbsp;&nbsp;Amsterdam, Netherlands
							</h5>

							<h5>
								<Image src={europe} alt="europe" />
								&nbsp;&nbsp; KVK: 85502081
							</h5>
							<h5>
								<Image src={mail} alt="mail" />
								&nbsp;&nbsp; info@moodglobalservices.com
							</h5>
							<h5>
								<Image src={phone} alt="phone" />
								&nbsp;&nbsp; +31-6-19565119
							</h5>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
