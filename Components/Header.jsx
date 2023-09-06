import Link from "next/link";
import Image from "next/image";
import githubIcon from "../public/icons/github.svg";
import linkedinIcon from "../public/icons/linkedin.svg";
import twitterIcon from "../public/icons/twitter.svg";
import notionIcon from "../public/icons/notion.svg";
import mgsLogo from "../public/materials/logo.svg";

export default function Header() {
  return (
    <div className="HeaderContainer">
      <Image src={mgsLogo} alt="mgs-icon" />
      <div className="Navbar">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/mood-convert">MoodConvert</Link>
        <Link href="/careers">Careers</Link>
      </div>
      <div className="HeaderIcons">
        <Image src={notionIcon} alt="notion-icon" />
        <Image src={githubIcon} alt="github-icon" />
        <Image src={twitterIcon} alt="twitter-icon" />
        <Image src={linkedinIcon} alt="linkedin-icon" />
      </div>
    </div>
  );
}
