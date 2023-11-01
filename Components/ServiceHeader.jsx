import Link from "next/link"
import Image from "next/image"
import styles from "../public/style/ServiceHeader.css"
import serviceBackgroundElementOne from "../public/materials/serviceBackgroundElementOne.svg"
import serviceBackgroundElementTwo from "../public/materials/serviceBackgroundElementTwo.svg"
import eparrowdown from "../public/materials/ep_arrow-down.svg"

const ServiceHeader = () => {
  return (
    <div className="mainServiceBackgroundContainer">
      <div className="servicesTop">
        <div className="serviceTextHeaderContainer">
          <div className="ourServicesTextContainer">
            <h1>Our Services</h1>
          </div>
          <div className="servicesHeaderSmallTextContainer">
            <p>
              As a technologically rooted firm, we guide our clients in
              integrating suitable blockchain solutions alongside other emerging
              technologies into their business strategy. We present a range of
              specialized services designed to empower companies to harness the
              full spectrum of digital advancements.
            </p>
          </div>
        </div>
        <div className="servicesImageContainer">
          <Image
            alt="service page background 1"
            src={serviceBackgroundElementOne}
          ></Image>
          <Image
            alt="service page background 2"
            src={serviceBackgroundElementTwo}
          ></Image>
        </div>
      </div>
      <Image alt="arrow" id="epArrow" src={eparrowdown}></Image>
    </div>
  )
}

export default ServiceHeader
