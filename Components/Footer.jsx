import Link from "next/link";
import Image from "next/image";
import smallLogoIcon from '../public/materials/Small-logo.svg'
import twitterIcon from '../public/materials/'

const Footer = () => {
    
    return (
      <footer>
        <div className="footerContainer">
            <div className="footerMain">
                <div className="leftFooter">
                    <Image src={smallLogoIcon}></Image>
                    <h2><strong>Mood Global Services</strong> B.V.</h2>
                    <div className="footerSocialIcons">
                        <Image src={}></Image>
                        <Image src={}></Image>
                        <Image src={}></Image>
                        <Image src={}></Image>
                    </div>
                    <h6>©2023 Mood Global Services. All rights reserved.</h6>
                </div>
                <div className="rightFooter">
                    <div className="ecoFooter">
                        <strong>MGS ECOSYSTEM</strong>
                        <button>Home</button>
                        <button>Services</button>
                        <button>MoodConvert </button>
                        <button>Careers</button>
                        <button>FAQ</button>
                        <button>Terms and Conditions</button>
                        <button>Privacy Policy</button>
                    </div>
                    <div className="hqFooter">
                        <strong>HEADQUARTERS:</strong>
                        <h5>Amsterdam, Netherlands</h5>
                        <h5>KVK: 85502081</h5>
                        <h5>info@moodglobalservices.com</h5>
                        <h5>+31-6-19565119</h5>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;