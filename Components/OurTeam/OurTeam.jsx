"use client"

import member1 from "../../public/materials/images-member/Polygon7.png"
import member2 from "../../public/materials/images-member/Polygon8.png"
import member3 from "../../public/materials/images-member/Polygon12.png"
import member4 from "../../public/materials/images-member/Polygon9.png"
import member5 from "../../public/materials/images-member/Polygon11.png"
import member6 from "../../public/materials/images-member/Polygon10.png"
import member7 from "../../public/materials/images-member/Polygon13.png"
import member8 from "../../public/materials/images-member/Polygon14.png"
import member9 from "../../public/materials/images-member/Polygon15.png"
import member10 from "../../public/materials/images-member/Polygon16.png"
import member11 from "../../public/materials/images-member/Polygon19.png"
import member12 from "../../public/materials/images-member/Polygon21.png"
import member13 from "../../public/materials/images-member/Polygon22.png"
import member14 from "../../public/materials/images-member/Polygon17.png"
import member15 from "../../public/materials/images-member/Polygon18.png"
import member16 from "../../public/materials/images-member/Polygon23.png"
import flag1 from "../../public/materials/flags/1.svg"
import flag2 from "../../public/materials/flags/2.svg"
import flag3 from "../../public/materials/flags/3.svg"
import flag4 from "../../public/materials/flags/4.svg"
import flag5 from "../../public/materials/flags/5.svg"
import flag6 from "../../public/materials/flags/6.svg"
import flag7 from "../../public/materials/flags/7.svg"
import twitterIcon from "../../public/icons/twitter.svg"
import Image from "next/image"
import linkedInIcon from "../../public/icons/linkedin.svg"
import Link from "next/link"
import "./OurTeam.css"

function OurTeam() {
  const membersArray = [
    {
      image: member1,
      member_name: "Gianluca Di Bella",
      img: flag3,
      member_position: "CEO and Co-Founder",
      twitter_link: "https://twitter.com/GianlucaDiBell9",
      linkedin_link: "https://www.linkedin.com/in/gdbmoodglobalservices",
    },
    {
      image: member2,
      member_name: "Walt Schagen",
      img: flag4,
      member_position: "CTO and Co-Founder",
      twitter_link: "",
      linkedin_link: "https://www.linkedin.com/in/walt-schagen-7302017b/",
    },
    {
      image: member3,
      member_name: "Lorenzo Ceppaluni",
      img: flag3,
      member_position: "Business Developer & Co-Founder",
      twitter_link: "https://twitter.com/LorenzoCeppalu1",
      linkedin_link: "https://www.linkedin.com/in/lorenzo-ceppaluni/",
    },
    {
      image: member4,
      member_name: "Giovanni Piccirillo",
      img: flag3,
      member_position: "Fintech Lawyer and Co-Founder",
      twitter_link: "https://twitter.com/Giovanni8586",
      linkedin_link:
        "https://www.linkedin.com/in/giovanni-piccirillo-941709239/",
    },
    {
      image: member5,
      member_name: "Mahmoud Ghadre",
      img: flag3,
      member_position: "CMO and Co-Founder",
      twitter_link: "https://twitter.com/Moomsxxx",
      linkedin_link: "",
    },
    {
      image: member6,
      member_name: "Morteza Khedry",
      img: flag1,
      member_position: "Chief Solidity Developer",
      twitter_link: "",
      linkedin_link: "https://www.linkedin.com/in/morteza-khedri-20076720b/",
    },
    {
      image: member7,
      member_name: "Naman Thita",
      img: flag1,
      member_position: "Full Stack Developer",
      twitter_link: "",
      linkedin_link: "https://www.linkedin.com/in/namanthitha/",
    },
    {
      image: member8,
      member_name: "Med Newton",
      img: flag5,
      member_position: "Front End Developer",
      twitter_link: "",
      linkedin_link: "https://www.linkedin.com/in/mohamed-ben-moussa-b60ab498/",
    },
    {
      image: member9,
      member_name: "Sourav Maji",
      img: flag2,
      member_position: "Full Stack Developer",
      twitter_link: "",
      linkedin_link: "https://www.linkedin.com/in/sourav-maji-0217b41b3/",
    },
    {
      image: member10,
      member_name: "M Fahad Noor",
      img: flag6,
      member_position: "Product UX Designer",
      twitter_link: "",
      linkedin_link: "https://www.linkedin.com/in/mfahadnoor/",
    },
    {
      image: member11,
      member_name: "Adeel Shafique",
      img: flag6,
      member_position: "Product UX Designer",
      twitter_link: "",
      linkedin_link: "https://www.linkedin.com/in/adeel-shafique-32b53420",
    },
    {
      image: member12,
      member_name: "Francesco Di Bella",
      img: flag3,
      member_position: "Sales Assistant",
      twitter_link: "",
      linkedin_link:
        "https://www.linkedin.com/in/francesco-di-bella-851044274/",
    },
    {
      image: member13,
      member_name: "Davide Castiglione",
      img: flag3,
      member_position: "Sales Assistant",
      twitter_link: "",
      linkedin_link:
        "https://www.linkedin.com/in/davide-castiglione-026561294/",
    },
    {
      image: member14,
      member_name: "Eugenio Reggianini",
      img: flag3,
      member_position: "Blockchain Lawyer Expert",
      twitter_link: "",
      linkedin_link: "https://www.linkedin.com/in/eugenio-reggianini-a9a572a4/",
    },
    {
      image: member15,
      member_name: "Ionut Goucan",
      img: flag3,
      member_position: "Blockchain Advisor",
      twitter_link: "https://twitter.com/ionutgaucanREAL",
      linkedin_link: "https://www.linkedin.com/in/ionut-gaucan-b42403112/",
    },
    {
      image: member16,
      member_name: "Samuel Oreoluw",
      img: flag7,
      member_position: "Content Designer",
      twitter_link: "https://twitter.com/ionutgaucanREAL",
      linkedin_link: "",
    },
  ]

  return (
    <div className="MemberCardContainer">
      {membersArray.map((member, index) => (
        <div key={index} className="MemberCardComponent">
          <Image
            alt={"headshot for " + member.member_name}
            id="memberImage"
            src={member.image}
          />
          <p className="memberName">
            {member.member_name}{" "}
            <Image alt={member.member_name} src={member.img} />{" "}
          </p>
          <p> {member.member_position} </p>
          <div className="icons">
            {member.twitter_link && (
              <Link href={member.twitter_link}>
                <Image alt="Twitter Link" id="socialImage" src={twitterIcon} />
              </Link>
            )}
            {member.linkedin_link && (
              <Link href={member.linkedin_link}>
                <Image
                  alt="LinkedIn Link"
                  id="socialImage"
                  src={linkedInIcon}
                />
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
export default OurTeam
