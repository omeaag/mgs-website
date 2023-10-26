'use client'
import Link from "next/link";
import Image from "next/image";
import githubIcon from "../public/icons/github.svg";
import linkedinIcon from "../public/icons/linkedin.svg";
import twitterIcon from "../public/icons/twitter.svg";
import notionIcon from "../public/icons/notion.svg";
import instaIcon from "../public/materials/headerInstaLogo.svg";

import mgsLogo from "../public/materials/logo.svg";
import menu from '../public/materials/menu.svg';
import close from '../public/materials/closeBtn.svg';
import { useState } from 'react';


export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='HeaderContainer'>
            <Image
                id='mgsLogo'
                src={mgsLogo}
                alt='mgs-icon'
            />
            <div className={`Navbar open`}>
                <Link href='/'>Home</Link>
                <Link href='/services'>Services</Link>
                <Link href='/mood-convert'>MoodConvert</Link>
                <Link href='/careers'>Careers</Link>
            </div>
            <button
                id='dropdownBtn'
                className='MobileMenuButton'
                onClick={toggleMobileMenu}>
                <Image
                    src={isMobileMenuOpen ? close : menu}
                    alt='menu'
                />
            </button>
            {isMobileMenuOpen && (
                <div className='dropdownContainer efect'>
                    <div className='MobileDropdownMenu'>
                        <Link onClick={toggleMobileMenu} href='/'>Home</Link>
                        <Link onClick={toggleMobileMenu} href='/services'>Services</Link>
                        <Link onClick={toggleMobileMenu} href='/mood-convert'>MoodConvert</Link>
                        <Link onClick={toggleMobileMenu} href='/careers'>Careers</Link>
                    </div>
                    <div className='HeaderIcons'>
                        <Link href="https://moodglobalservices.notion.site/Mood-Global-Services-Portfolio-203bce8c178b4b6aa6cabeb6309d18f8"><Image src={notionIcon} alt="notion-logo" /></Link>
                        <Link href="https://github.com/orgs/Mood-Global-Services/repositories"><Image src={githubIcon} alt="github-logo" /></Link>
                        <Link href="https://twitter.com/MoodServices"><Image src={twitterIcon} alt="twitter-logo" /></Link>
                        <Link href="https://www.linkedin.com/company/mood-global-services/"><Image src={linkedinIcon} alt="linkedin-logo" /></Link>
                        <Link href="https://www.instagram.com/moodglobalservices/"><Image src={instaIcon} id="instaIcon" alt="instagram-logo" /></Link>
                    </div>
                    <div className="leftFooter">
                        <h6>© &nbsp;2023 &nbsp;Mood Global Services. All rights reserved.</h6>
                    </div>
                </div>
            )}
            <div className={`HeaderIcons open`}>
                <Link href="https://moodglobalservices.notion.site/Mood-Global-Services-Portfolio-203bce8c178b4b6aa6cabeb6309d18f8"><Image src={notionIcon} alt="notion-logo" /></Link>
                <Link href="https://github.com/orgs/Mood-Global-Services/repositories"><Image src={githubIcon} alt="github-logo" /></Link>
                <Link href="https://twitter.com/MoodServices"><Image src={twitterIcon} alt="twitter-logo" /></Link>
                <Link href="https://www.linkedin.com/company/mood-global-services/"><Image src={linkedinIcon} alt="linkedin-logo" /></Link>
                <Link href="https://www.instagram.com/moodglobalservices/"><Image id="instaIcon" src={instaIcon} alt="insta-logo" /></Link>
            </div>
        </div>
    );
}
