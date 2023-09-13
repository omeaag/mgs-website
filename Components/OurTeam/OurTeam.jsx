"use client";

import member1 from "./images-member/member-1.svg";
import member2 from "./images-member/member-2.svg";
import member3 from "./images-member/member-3.svg";
import member4 from "./images-member/member-4.svg";
import member5 from "./images-member/member-5.svg";
import member6 from "./images-member/member-6.svg";
import member7 from "./images-member/member-7.svg";
import member8 from "./images-member/member-8.svg";
import member9 from "./images-member/member-9.svg";
import member10 from "./images-member/member-10.svg";
import member11 from "./images-member/member-11.svg";
import member12 from "./images-member/member-12.svg";
import member13 from "./images-member/member-13.svg";
import member14 from "./images-member/member-14.svg";
import MemberCard from "./MemberCard";
import "./OurTeam.css";

function OurTeam() {
  const membersArray = [
    {
      image: member1,
      member_name: "Gianluca Di Bella 🇮🇹",
      member_position: "CEO and Co-Founder",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member2,
      member_name: "Walt Schagen 🇩🇪",
      member_position: "CTO and Co-Founder",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member3,
      member_name: "Lorenzo Ceppaluni 🇮🇹",
      member_position: "Business Developer & Co-Founder",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member4,
      member_name: "Giovanni Piccirillo 🇮🇹",
      member_position: "Fintech Lawyer and Co-Founder",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member5,
      member_name: "Mahmoud Ghadre 🇮🇹",
      member_position: "CMO and Co-Founder",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member6,
      member_name: "Morteza Khedry 🇮🇷",
      member_position: "Chief Solidity Developer",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member7,
      member_name: "Naman Thita 🇮🇳",
      member_position: "Full Stack Developer",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member8,
      member_name: "Med Newton 🇲🇦",
      member_position: "Front End Developer",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member9,
      member_name: "Sourav Maji 🇮🇳",
      member_position: "Full Stack Developer",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member10,
      member_name: "M Fahad Noor 🇵🇰",
      member_position: "Product UX Designer",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member11,
      member_name: "Adeel Shafique 🇵🇰",
      member_position: "Product UX Designer",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member12,
      member_name: "Francesco Di Bella 🇮🇹",
      member_position: "Sales Assistant",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member13,
      member_name: "Eugenio Reggianini 🇮🇹",
      member_position: "Blockchain Lawyer Expert",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
    {
      image: member14,
      member_name: "Ionut Goucan 🇮🇹",
      member_position: "Blockchain Advisor",
      twitter_link: "https://twitter.com/MoodServices",
      linkedin_link:
        "https://www.linkedin.com/company/mood-global-services/?originalSubdomain=nl",
    },
  ];

  return (
    <div className="MemberCardContainer">
      {membersArray.map((member, index) => (
        <MemberCard key={index} person={member} />
      ))}
    </div>
  );
}
export default OurTeam;
