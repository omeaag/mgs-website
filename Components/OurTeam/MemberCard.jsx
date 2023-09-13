import Image from "next/image";
import twitterIcon from "../../public/icons/twitter.svg";
import linkedInIcon from "../../public/icons/linkedin.svg";

function MemberCard({ person }) {
  return (
    <div className="MemberCardComponent">
      <Image src={person.image} />
      <p className="memberName">{person.member_name}</p>
      <p> {person.member_position} </p>
      <div className="icons">
        <Image src={twitterIcon} />
        <Image src={linkedInIcon} />
      </div>
    </div>
  );
}
export default MemberCard;
