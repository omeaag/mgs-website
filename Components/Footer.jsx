import Link from "next/link";
import Image from "next/image";
import smallLogoIcon from "../public/materials/Small-logo.svg";
import twitterIcon from "../public/materials/mdi_twitter.svg";
import linkedinIcon from "../public/materials/entypo-social_linkedin-with-circle.svg";
import githubIcon from "../public/materials/mdi_github.svg";
import notionIcon from "../public/materials/mingcute_notion-fill.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerMain">
          <div className="leftFooter">
            <Image src={smallLogoIcon} alt="small-logo" />
            <h2>
              <strong>Mood Global Services</strong> B.V.
            </h2>
            <div className="footerSocialIcons">
              <Image src={notionIcon} alt="notion-logo" />
              <Image src={githubIcon} alt="github-logo" />
              <Image src={twitterIcon} alt="twitter-logo" />
              <Image src={linkedinIcon} alt="linkedin-logo" />
            </div>
            <h6>©2023 Mood Global Services. All rights reserved.</h6>
          </div>
          <div className="rightFooter">
            <div className="ecoFooter">
              <strong>MGS ECOSYSTEM</strong>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/mood-convert">MoodConvert</Link>
              <Link href="/careers">Careers</Link>
              <button>FAQ</button>
              <button>Terms and Conditions</button>
              <button>Privacy Policy</button>
            </div>
            <div className="hqFooter">
              <strong>HEADQUARTERS:</strong>
              <h5>🌍 Amsterdam, Netherlands</h5>
              <h5>🧑🏼‍💼 KVK: 85502081</h5>
              <h5>✉️ info@moodglobalservices.com</h5>
              <h5>📞 +31-6-19565119</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
