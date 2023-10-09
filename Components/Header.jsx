'use client'
import Link from "next/link";
import Image from "next/image";
import githubIcon from "../public/icons/github.svg";
import linkedinIcon from "../public/icons/linkedin.svg";
import twitterIcon from "../public/icons/twitter.svg";
import notionIcon from "../public/icons/notion.svg";
import mgsLogo from "../public/materials/logo.svg";
import menu from '../public/materials/menu.svg';
import close from '../public/materials/closeBtn.svg';
import {useState} from 'react';


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
                        <Image
                            src={notionIcon}
                            alt='notion-icon'
                        />
                        <Image
                            src={githubIcon}
                            alt='github-icon'
                        />
                        <Image
                            src={twitterIcon}
                            alt='twitter-icon'
                        />
                        <Image
                            src={linkedinIcon}
                            alt='linkedin-icon'
                        />
                    </div>
                </div>
            )}
            <div className={`HeaderIcons open`}>
                <Image
                    src={notionIcon}
                    alt='notion-icon'
                />
                <Image
                    src={githubIcon}
                    alt='github-icon'
                />
                <Image
                    src={twitterIcon}
                    alt='twitter-icon'
                />
                <Image
                    src={linkedinIcon}
                    alt='linkedin-icon'
                />
            </div>
        </div>
    );
}
