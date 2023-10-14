"use client";
import "../public/style/termsConditions.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import accordionUp from "@/Components/Accordion/accordion-images/accordion-up.svg";
import accordionDown from "@/Components/Accordion/accordion-images/accordion-down.svg";
import Vector19 from "@/public/materials/Vector19.svg";


function TermsConditions() {
    const [isMobileOn, setIsMobileOn] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);



    useEffect(() => {
        const updateWindowDimensions = () => {
            if (window.innerWidth < 600) {
                setIsMobileOn(true);
            } else if (window.innerWidth >= 600) {
                setIsMobileOn(false);
            }
        };
        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, []);

    let textArray = [
        {
            id: 1,
            h2: `1.Introduction`,
            p1: "https://moodglobalservices.com (the “Site”) is managed by MOOD GLOBAL SERVICES B.V.. Use of the Site is subject to these conditions of use (“Conditions of Use”). If you (“User”) do not intend to accept the Conditions of Use, you must immediately stop navigating the Site. By accessing and using the Site, the User accepts the Terms of Use. The Conditions of Use constitute a contract between the user and MOOD GLOBAL SERVICES B.V. and may not be modified without the consent of MOOD GLOBAL SERVICES B.V.. These Conditions of Use must be read with reference to every part of the Site concerning the operation of the Site itself and the services available.",
            b1: `1.1`,
            p2: "Use of the Site is subject to the Conditions of Use. Users are also required to read the Privacy Policy and Cookie Policy of MOOD GLOBAL SERVICES B.V.",
            b2: `1.2`,
            p3: "MOOD GLOBAL SERVICES B.V. MOOD GLOBAL SERVICES B.V. reserves the right to modify the Conditions of Use at any time and unilaterally without prior notice. All modifications will be published on the Site.",
        },
        {
            id: 2,
            h2: `2. Site Access`,
            p1: "MOOD GLOBAL SERVICES B.V. does not guarantee the User against any inefficiencies consisting of delays or interruptions in line operation that prevent access to the Site. The User is obliged not to interfere with the operation of the Site and, in particular, agrees not to attempt to circumvent its security, tamper with it, hack into it, or in any case not to prejudice the operation of the Site or any computer system, server, router or any other computer device in any way.",
            b1: `2.1`,
            p2: "The User must have a computer that meets all the technical features required to use the Site and that is compatible with the Site. MOOD GLOBAL SERVICES B.V. also cannot guarantee and does not guarantee that any content on the Site is free of infection, viruses and/or other content that has contaminating or destructive characteristics. You are responsible for implementing procedures and controls regarding viruses (including anti-virus and other security controls) to meet your particular security needs and the reliability of incoming and outgoing data.",
            b2: `2.2`,
            p3: "From time to time, MOOD GLOBAL SERVICES B.V. may limit access to certain features or portions of the Site to Users who have registered with MOOD GLOBAL SERVICES B.V.. If the User has chosen, or is otherwise provided with, a user identification code, password, or any other information as part of MOOD GLOBAL SERVICES B.V. security procedures, the",
            b3: `2.3`,
            p4: "User shall treat such information as confidential and shall not disclose it to third parties. MOOD GLOBAL SERVICES B.V. has the right to disable at its own discretion any user identification code or password, whether chosen by the User or assigned by MOOD GLOBAL SERVICES B.V., at any time, if the User has violated the Conditions of Use.",

        },
        {
            id: 3,
            h2: `3. Correctness of information`,
            p1: "https://moodglobalservices.com (the “Site”) is managed by MOOD GLOBAL SERVICES B.V.. Use of the Site is subject to these conditions of use (“Conditions of Use”). If you (“User”) do not intend to accept the Conditions of Use, you must immediately stop navigating the Site. By accessing and using the Site, the User accepts the Terms of Use. The Conditions of Use constitute a contract between the user and MOOD GLOBAL SERVICES B.V. and may not be modified without the consent of MOOD GLOBAL SERVICES B.V.. These Conditions of Use must be read with reference to every part of the Site concerning the operation of the Site itself and the services available.",
            b1: `1.1`,
            p2: "Use of the Site is subject to the Conditions of Use. Users are also required to read the Privacy Policy and Cookie Policy of MOOD GLOBAL SERVICES B.V.",
            b2: `1.2`,
            p3: "From time to time, MOOD GLOBAL SERVICES B.V. may limit access to certain features or portions of the Site to Users who have registered with MOOD GLOBAL SERVICES B.V.. If the User has chosen, or is otherwise provided with, a user identification code, password, or any other information as part of MOOD GLOBAL SERVICES B.V. security procedures, the",
            b3: `2.3`,
        },
        {
            id: 4,
            h2: "4. Intellectual Property Rights",
            p1: "All contents on this Site, including but not limited to texts, softwares, photographs, videos and images, are protected by copyright. MOOD GLOBAL SERVICES B.V., or its licensors, are the owners of the copyright and/or database rights for the selection, coordination, organization and exploitation of these contents, as well as the original content. All trademarks, service marks and logos are owned or registered by MOOD GLOBAL SERVICES B.V.. Other product names or brands are the property of their respective owners. With the exception of what is expressly indicated in the Conditions of Use, the User shall have no right to intellectual property rights in the ownership of MOOD GLOBAL SERVICES B.V. or its licensors. The User shall not assert or attempt to obtain such intellectual property rights and shall not use, copy, reproduce, modify, publish, transmit, participate in the transfer or sale, create derivative works from, or in any way exploit the name of MOOD GLOBAL SERVICES B.V., the trademarks, service marks, logo or other marks owned by MOOD GLOBAL SERVICES B.V. or any other content of this Site, either in whole or in part, except as provided for in the Conditions of Use.",
            b1: "4.1",
            p2: "Users may download information from the Site for their own personal use and in any case not for commercial purposes. Unless otherwise provided for by copyright laws, no copying, redistribution, transmission, publication or commercial exploitation of downloaded content will be permitted without the express consent of MOOD GLOBAL SERVICES B.V. as well as that of the copyright holder of the relative intellectual property rights. In the case of authorized copying, redistribution or publication of copyrighted material, no modification or cancellation of author attribution, trademark commercial communication legend or copyright shall be made. You acknowledge that you do not acquire any intellectual property rights by downloading copyrighted content.",
            b2: "4.2",
            p3: "The rights granted to the User under the Terms of Use shall immediately terminate upon the occurrence of any breach of the Terms of Use.",
            b3: "4.3",
        },
        {
            id: 5,
            h2: "5. Links to the site and to third party sites",
            p1: "The Site may contain hyperlinks to websites managed by third parties. MOOD GLOBAL SERVICES B.V. is not responsible for the contents of third-party sites that refer to the Site or that are linked from the Site. The inclusion by MOOD GLOBAL SERVICES B.V. of hyperlinks to such websites does not imply any acceptance by MOOD GLOBAL SERVICES B.V. of the material published on such websites or of any other relationship between MOOD GLOBAL SERVICES B.V. and the managers of such websites.",
            b1: "5.1",
            p2: "The User may not set up hyperlinks to the Site from third party sites, in the absence of a written agreement with MOOD GLOBAL SERVICES B.V.",
        },
        {
            id: 6,
            h2: "6. Responsibilities of MOOD GLOBAL SERVICES B.V.",
            p1: "To the maximum extent that such responsibility may be excluded by law, MOOD GLOBAL SERVICES B.V. assumes no responsibility and offers no guarantee in relation to the Site, its contents or the contents of any other site. Within the limits of what is provided for by law, MOOD GLOBAL SERVICES B.V. is not responsible for any direct or indirect damage of any kind. MOOD GLOBAL SERVICES B.V. accepts responsibility for death or personal injury caused by its own negligence, for fraudulent statements and for any other responsibilities that cannot, according to Italian law, be excluded.",
        },
        {
            id: 7,
            h2: "7. Compensation",
            p1: "The User agrees to indemnify and hold harmless MOOD GLOBAL SERVICES B.V., its suppliers and their affiliates and related entities and their respective directors, officers, employees, and agents from and against any and all claims, losses, damages, liabilities, and costs (including, without limitation and to the extent reasonable, attorneys’ fees and court costs), arising out of or relating to the User’s breach of the Terms of Use or access to or use of MOOD GLOBAL SERVICES B.V. services. The foregoing indemnification obligation shall survive the termination of the Terms of Use as well as the termination of the operation of the services of MOOD GLOBAL SERVICES B.V. or of any product or service provided by MOOD GLOBAL SERVICES B.V..",
        },
        {
            id: 8,
            h2: "8. User-Supplied Content",
            p1: "Except as otherwise provided for in the Terms of Use or in the Privacy Policy or Cookie Policy of MOOD GLOBAL SERVICES B.V., any communication or content transmitted by the User to MOOD GLOBAL SERVICES B.V. via the MOOD GLOBAL SERVICES B.V. services, by electronic mail or otherwise, including, without limitation, any contests or sweepstakes, images, photographs, video and audio files, essays, questions, comments, suggestions, or the like is and shall be treated as non-confidential and non-proprietary and may therefore be used by MOOD GLOBAL SERVICES B.V., its suppliers, or their affiliates or related parties for any purpose, including, without limitation, reproduction, modification, disclosure, transmission, publication, dissemination, advertising and also for promotional purposes through any medium without the need for further authorization, consent, payment, or other, if not prohibited by law. In addition, MOOD GLOBAL SERVICES B.V., its suppliers and affiliates, as well as subjects related to them, shall be free to use any idea, concept, know-how, or technique contained in any communication sent by the User to MOOD GLOBAL SERVICES B.V. via the MOOD GLOBAL SERVICES B.V. services for any purpose, including, without limitation, the development, marketing of products or services using the information contained in said communication.",
        },
        {
            id: 9,
            h2: "9. Withdrawal",
            p1: "The Conditions of Use are effective until withdrawn by MOOD GLOBAL SERVICES B.V.. MOOD GLOBAL SERVICES B.V. may withdraw from the Conditions of Use at any time without prior notice, even partially with reference to only one of the services offered by MOOD GLOBAL SERVICES B.V.. In the event of withdrawal, the User shall no longer be authorized to access the services of MOOD GLOBAL SERVICES B.V., and the rights and obligations of Users relative to the contents, waivers, indemnities, and limitations of responsibility established in the Conditions of Use shall survive the cessation of the effects of the Conditions of Use.",
            b1: "9.1",
            p2: "MOOD GLOBAL SERVICES B.V. also has the right, without prior notice and at any time, to interrupt some or all of the MOOD GLOBAL SERVICES B.V. services or part of them or products or services offered through them, or to prevent anyone from accessing or using the MOOD GLOBAL SERVICES B.V. services or part of them.",
        },
        {
            id: 10,
            h2: "10. Compliance with the law",
            p1: "The user agrees to comply with all the laws, statutes, ordinances and regulations relating to the use of MOOD GLOBAL SERVICES B.V. services. You must be at least 18 years old to use MOOD GLOBAL SERVICES B.V. services.",
        },
        {
            id: 11,
            h2: "11. Miscellaneous",
            p1: "Should any part of the Terms of Use be unenforceable, all other parts shall remain valid and enforceable between the parties.",
            b1: "11.1",
            p2: "The Conditions of Use are subject to the law of the Netherlands Republic and any dispute relating to the same and to the Site shall be subject to Netherlands jurisdiction.",
            b2: "11.2",
            p3: "MOOD GLOBAL SERVICES B.V. is a company with registered office in Amsterdam at Brediusstraat street n° 7 registered in the Dutch Company Register n°85502081 VAT number 86364487. All formal communications must be sent to MOOD GLOBAL SERVICES B.V. at the following email address info@moodglobalservices.com.",
            b3: "11.3",
            p4: "Failure by MOOD GLOBAL SERVICES B.V. to exercise one of its rights does not imply waiver thereof."
        },
        {
            id: 12,
            h2: "12. How to contact MOOD GLOBAL SERVICES B.V.",
            p1: "Should problems occur with the Site or should the User wish to comment on the Site, the User should not hesitate to contact MOOD GLOBAL SERVICES B.V. by writing to MOOD GLOBAL SERVICES B.V. at the following address: MOOD GLOBAL SERVICES B.V., Head Office, Amsterdam at Brediusstraat street n° 7 or via email to the following address: info@moodglobalservices.com.",
        }
    ]



    return (
        <div className="termsConditionsAllContainer">
            <div className="termsConditionsHeader">
                <h1>Terms And Conditions</h1>
                <p>Our Terms and Conditions were last updated on 10/10/2023</p>
            </div>
            <div className="termsConditionsText">
                {textArray.map((e) => {
                    return (
                        <div className="termsConditionsTitle">
                            <h2>{e.h2}
                                {isMobileOn &&
                                    <Image id="accordionimage" onClick={() => {
                                        const element = document.getElementById(e.id);
                                        setMobileMenuOpen(!isMobileMenuOpen);
                                        if (element.style.display === "none" || element.style.display === "") {
                                            element.style.display = "flex";
                                        } else {
                                            element.style.display = "none";
                                        }
                                    }}
                                        src={isMobileMenuOpen ? accordionUp : accordionDown}>
                                    </Image>}
                            </h2>



                            <Image style={{ display: `${isMobileOn ? "block" : "none"}` }} src={Vector19}></Image>
                            {<div className="paragraphs" id={`${e.id}`}>
                                <p>
                                    <b>{e.b1}</b> {e.p1}
                                </p>
                                <p>
                                    <b>{e.b2}</b> {e.p2}
                                </p>
                                <p>
                                    <b>{e.b3}</b> {e.p3}
                                </p>
                                <p>
                                    <b>{e.b4}</b> {e.p4}
                                </p>
                            </div>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default TermsConditions;
