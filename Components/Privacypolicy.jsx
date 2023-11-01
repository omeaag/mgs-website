"use client"
import "../public/style/privacyPolicy.css"
import { useState, useEffect } from "react"
import Image from "next/image"
import accordionUp from "@/Components/Accordion/accordion-images/accordion-up.svg"
import accordionDown from "@/Components/Accordion/accordion-images/accordion-down.svg"
import Vector19 from "@/public/materials/Vector19.svg"

function Privacypolicy() {
  const [isMobileOn, setIsMobileOn] = useState(false)
  const [showStates, setShowStates] = useState(Array(3).fill(false))

  const toggleShow = (index) => {
    const newShowStates = [...showStates]
    newShowStates[index] = !newShowStates[index]
    setShowStates(newShowStates)
  }

  useEffect(() => {
    const updateWindowDimensions = () => {
      if (window.innerWidth < 600) {
        setIsMobileOn(true)
      } else if (window.innerWidth >= 600) {
        setIsMobileOn(false)
      }
    }
    updateWindowDimensions()
    window.addEventListener("resize", updateWindowDimensions)
    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, [])

  const textArray = [
    {
      id: 1,
      h2: `1. Introduction`,
      p1: `With this information Mood Global Services B.V., with registered office in Amsterdam at Brediusstraat street n° 7 registered in the Dutch Company Register n°85502081 VAT number 86364487, (hereinafter, the “Company” or “Mood Global Services B.V.” or the "Owner"), as owner of the processing of personal data, intends to provide, in a transparent and detailed manner, the information in relation to the personal data of users that the Company collects, the methods of processing and the subjects to whom the same are transferred, as well as the precautions taken to protect such data and the rights of users.`,
      p2: `This information is prepared in compliance with the provisions of EU Regulation 2016/679 (the "GDPR") and Legislative Decree 196/2003, as amended by Legislative Decree 101/2018 (jointly, the "Privacy Legislation" ). As regards the meaning of the terms used in this information with the initial capital letter and which are not defined within the same, please refer to the definitions of the GDPR.
            For any question relating to this information, the Data Controller can be contacted at the following email address: info@moodglobalservices.com.`,
      li1: [],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 2,
      h2: `2. Scope of application`,
      p1: `Mood Global Services B.V. offers, through its website https://moodglobalservices.com/ (the “Site”) the following services (collectively, the “Services”):`,
      p2: `a) Legal consultancy in the financial and blockchain sectors;`,
      p3: `b) Smart Contract Solution for component development, tokenization and NFT solutions;`,
      p4: `c) Brand Management.`,
      p5: `his policy applies to all users who use the Services, the Platform, the applications and/or interact in any other way with Mood Global Services B.V. and/or technologies connected to the Platform (e.g. business partners, interested parties, service providers, APIs, etc.).`,
      p6: `With reference to the processing of personal data through cookies and similar technologies, please refer to the information on cookies.`,
      li1: [],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 3,
      h2: `3. Personal Data being processed`,
      p1: `The personal data received from the user (the "Personal Data") are processed by the Company for the purposes of establishing the commercial relationship and the related Services offered. Furthermore, Personal Data received from credit agencies, debtor lists, business analysis providers, public registers, third-party anti-money laundering service providers and from publicly accessible sources (e.g. registers) may also be processed by the Data Controller. of companies, association registers, land registers, media, sanctions lists).`,
      p2: `When using the Services of Mood Global Services B.V. or by interacting with the Platform, the following Personal Data may be processed:`,
      p3: `Contact Information: When you request the company's services, Mood Global Services B.V. may process the following Personal Data:`,
      p4: `Generally Mood Global Services B.V. does not process particular categories of Personal Data pursuant to art. 9, co. Of the Customers' GDPR.`,
      p5: `In addition to personal identification data (screenshots of identity documents and related identification data, residence, status of politically exposed persons, video data, etc.), biometric data may also be collected (personal data resulting from specific technical processing in relation to the physical, physiological or behavioral characteristics of a person and which allow the unique identification of a person, for example, facial images, fingerprints). This processing of biometric data takes place exclusively on the basis of the user's explicit consent, which can be revoked at any time.`,
      p6: `The biometric data will be processed exclusively by our data controller Gianluca Di Bella in order to carry out the user due diligence process`,
      li1: [],
      li2: [],
      li3: [
        `if a natural person: name, surname, tax code, date of birth, residential address, telephone number, e-mail, date of birth, photo of the user;`,
        `if a legal person: name, registered office, tax code.`,
        `Data for due diligence: for the purposes of due diligence of the user pursuant to anti-money laundering legislation, depending on the activities actually carried out by the Company, one or more of the following Personal Data may be required: copy of a current identification document validity (passport, driving license, identity card); copy of documents proving the "contact information" (by way of example, data from a utility bill in the user's name for verification of the relevant residence, data on the status of politically exposed persons, video data for the execution of the procedure remote user identification and authentication, biometric verification data, etc.).`,
        `Financial data: in the course of using the Services, Mood Global Services B.V. may collect and process one or more of the following Personal Data of the user: bank details (IBAN, BIC), information on the payment service provider, payment data, transaction ID.`,
        `Log data: in case of use of the Site, Mood Global Services B.V. will collect and process one or more of the following Personal Data of the user: IP address, transaction data, information about the computer or mobile device used, frequency of use of the Site, time of use of the Site, operating system, browser type, type of device used, unique device identification number, identification cookies, optional module data, crash reports, performance data, third-party cookies.`,
        `Company information: if you are someone other than a natural person, Mood Global Services B.V. will record and process one or more of the following Personal Data: company records, data relating to or concerning the beneficial owners, data or additional information on recent, past or planned commercial activities, other data necessary to determine/confirm the corporate structure, the beneficial owner or any existing powers of attorney relating to the company.`,
        `Support Requests: If you use our support service, Mood Global Services B.V. will record and process one or more of the following Personal Data: Personal Data provided to the support team or transmitted to any other employee and/or collaborator of Mood Global Services B.V..`,
        `Marketing data: if you visit the Website or social media pages of Mood Global Services B.V., Mood Global Services B.V. will record and process one or more of the following statistical and marketing data: number of visitors, frequency of use, clicks made, time of use, geographical location from which access is made, target groups, data from cookies and similar technologies ( Pixels, ClearGIF, etc.), behavior of the user(s), interests and preferences of the user(s), data on market research and target group surveys.`,
        `Application data: if the user and/or another person applies for a job offer on the website or via LinkedIn, one or more of the following data necessary for the hiring process may be subject to recording and processing : contact details, CV, personal qualifications, criminal record, credit report, copies of identification documents (such as passport, driving licence, ID), links to social media platforms.`,
      ],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 4,
      h2: `4. Purpose of the processing`,
      p1: `In general, the user's Personal Data is collected to allow the Owner to provide the Services, fulfill legal obligations, respond to requests or enforcement actions, protect their rights and interests (or those of other users or third parties) , identify any malicious or fraudulent activities, as well as for the following purposes:`,
      p2: `Any use of cookies - or other tracking tools - by Mood Global Services B.V., unless otherwise specified, has the purpose of providing the Services used from time to time by the user, in addition to the additional purposes described in this    information and in the cookie policy of Mood Global Services B.V..`,
      p3: `If Mood Global Services B.V. should ask the user to provide further Personal Data not included among those indicated above, the Company will communicate to the user, at the same time as the request, which data it needs, what the purpose of the processing is and the legal basis(s) relation to this request.`,
      li1: [
        `activities relating to pre-contractual information and any further activity instrumental to the signing and execution of the contract with third-party operators, including the activation of products and services offered by such operators;`,
        `periodically notify the user about the tariffs; respond to requests for assistance or information from the user; fulfillment of legislative or regulatory obligations (e.g. of a fiscal nature);`,
        `sending of commercial communications and newsletters, as described below, exclusively with the express consent of the user;`,
        `And profiling and statistics, as described below, exclusively with the express consent of the user.`,
      ],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 5,
      h2: `5. Legal basis(s) of the processing`,
      p1: `Mood Global Services B.V. will process the user's Personal Data in compliance with the provisions of the Privacy Law by virtue of the following legal bases:`,
      p2: `Below is detailed information in relation to the legal basis(s) underlying the processing of Personal Data in the context of use of the Platform and/or in case of communication with Mood Global Services B.V.:`,
      p3: (
        <u>
          <strong>
            For the fulfillment of contractual obligations (art. 6, co. 1, par.
            b, GDPR)"
          </strong>
        </u>
      ),
      p4: `The processing of Personal Data may be necessary for the execution of the contractual conditions stipulated with the user or for the execution of pre-contractual measures adopted at the user's request. The following Personal Data processing operations fall within the scope of the fulfillment of contractual obligations:`,
      p5: `general provision of the Services, all actions necessary for the operation, execution and administration of Mood Global Services B.V.;`,
      p6: (
        <u>
          <strong>
            For the fulfillment of legal obligations (art. 6, co. 1, par. c,
            GDPR):
          </strong>
        </u>
      ),
      p7: `The processing of Personal Data may also be necessary for the fulfillment of various legal obligations. The following Personal Data processing operations fall within the scope of legal obligations:`,
      p8: <h2>And Terrorist Financing</h2>,
      p9: `provide information to criminal tax authorities in the context of criminal tax proceedings or criminal prosecution in accordance with requests from the competent authorities;`,
      p10: (
        <u>
          <strong>
            To protect legitimate interests (art. 6, co. 1, par. f, GDPR):
          </strong>
        </u>
      ),
      p11: `Where necessary, the processing of Personal Data may also take place at times following the validity of the general contract conditions stipulated with the user, in order to protect the legitimate interests of Mood Global Services B.V. or third parties. The following Personal Data processing operations are carried out on the basis of a legitimate interest:`,
      p12: (
        <u>
          <strong>
            In accordance with the user's consent (art. 6, co. 1, par. a, GDPR):
          </strong>
        </u>
      ),
      p13: `The processing of Personal Data will only take place in accordance with the defined purposes and to the extent agreed upon at the time of granting consent by the user. The user can revoke the consent at any time without giving reasons and with future effect if he no longer agrees with the processing of Personal Data carried out by Mood Global Services B.V.. On the basis of the user's consent, Mood Global Services B.V. will process Personal Data for the following purposes:`,
      p14: `Please note that the revocation of consent will only be effective for the future, i.e. the lawfulness of the processing carried out by Mood Global Services B.V. is not affected. on the basis of the user's consent before its revocation.`,
      li1: [
        `as the Personal Data is necessary for the execution of the general conditions of the Services stipulated between the user and Mood Global Services B.V.; and/or`,
        `if the Personal Data is subject to profiling, based on the express written consent of the user; and/or if the Personal Data is processed for direct marketing purposes as described below, based on the user's express written consent; and/or`,
        `if the user has given their consent for one or more specific purposes; and/or`,
        `as the Personal Data is necessary for the execution of a task of public interest or for the exercise of public powers vested in the Data Controller; and/or`,
        `the processing is necessary for the pursuit of the legitimate interest of the Data Controller or third parties; and/or`,
        `for the purposes of fulfilling legal obligations to which the Data Controller is subject.`,
        `In any case, it is always possible to request the Data Controller to clarify the concrete legal basis of each processing and in particular to specify whether the processing (i) takes place on the basis of the provisions of the Privacy Law and/or other applicable laws and regulations, (ii) is required by a contract or necessary to conclude a contract.`,
      ],
      li2: [],
      li3: [],
      li4: [],
      li5: [
        `account management (e.g. continuous updating of user data);`,
        `execution of user orders (e.g. payment processing, chargebacks, proof of purchase and sale);`,
        `requests for assistance and support from the user`,
        `implementation of data security and IT security on the Site and safeguarding the Company's network (for example, to prevent identity theft and irregular or suspicious access to the Company's websites);`,
        `procedure for hiring new employees.`,
      ],
      li6: [],
      li7: [
        `contract management, accounting and invoicing;`,
        `compliance and risk management;`,
        `monitoring for the prevention of fraud, abuse (e.g. for illegal purposes), money laundering`,
      ],
      li8: [],
      li9: [
        `consultation of credit agencies to determine solvency and insolvency risks.`,
      ],
      li10: [
        `contract management, accounting and invoicing;`,
        `compliance and risk management;`,
        `monitoring for the prevention of fraud, abuse (e.g. for illegal purposes), money laundering`,
      ],
      li11: [
        `the prevention of fraud, abuse (e.g. for illegal purposes), money laundering and terrorist financing;`,
        `risk management and risk minimization, e.g. through inquiries to credit bureaus, debtor lists or business analytics providers;`,
        `identification and examination of cases of potentially irregular or suspicious activity and access to the Company's websites (e.g. website analysis via Sift Science);`,
        `data transmission within Mood Global Services B.V. or of companies that are possibly part of the relevant group for internal administrative purposes;`,
        `management of requests and general questions from the user;`,
        `measures to protect our users and partners, as well as to safeguard network and information security; in addition to these, there are measures to protect our employees, users and the property of Mood Global Services B.V., for example through video surveillance and information provided by data centers and external service providers;`,
        `processing of requests from authorities, lawyers, collection agencies in the course of judicial proceedings and execution of legal requests in the context of judicial proceedings;`,
        `market research, business management and continuous development of services and products;`,
        `processing of statistical data, performance data and market research data through the Site or social platforms (e.g. Facebook, Instagram, LinkedIn, YouTube, etc.);`,
        `processing user preferences (e.g. language, region) via cookies on our Site;`,
        `direct marketing and advertising (e.g. execution of marketing strategies, user targeting, sending of coupons, advertising by Mood Global Services B.V. and its partner companies);`,
        `use of audio, video and photographic data from public spaces (e.g. public events, fairs, etc.) for marketing and other representation purposes on our social channels or on our website.`,
      ],
      li12: [],
      li13: [
        `direct marketing and advertising (for example, user satisfaction surveys, newsletters, prize competitions and other advertising communications);`,
        `transfer of Personal Data to third parties;`,
        `analysis and tracking of the Site (for further information please read the cookie policy;`,
        `use of certain audio, video and photographic data (for example, advertising, interviews, etc.) for marketing and other representation purposes through various channels,`,
      ],
    },
    {
      id: 6,
      h2: `6. Consequences of failure to provide Personal Data`,
      p1: `Failure to communicate the user's Personal Data in the manner specified in this information will prevent the Owner from proceeding with the identification of the user and registration on the Platform, making it impossible to provide the Services.`,
      p2: `Furthermore, please consider that the revocation of one or more permissions and/or consents, not granted and/or revoked to third parties and/or partners, may have consequences on the correct functioning and/or the possibility of providing the Services.`,
      li1: [],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 7,
      h2: `7. Data retention`,
      p1: `The user's Personal Data, subject to processing for the purposes indicated above, will be retained for a period not exceeding 10 years from the date on which the general conditions stipulated between the user and Mood Global Services B.V. (including any possible renewal thereof) cease to be effective and, subsequently, for the period of time in which the Data Controller is subject to conservation obligations for tax purposes or for other purposes provided for by current legislation.`,
      p2: `At the end of the retention period, the Personal Data will be deleted. Therefore, upon expiry of this deadline the right of access, cancellation, rectification and the right to portability of the user's Personal Data can no longer be exercised.`,
      p3: `The user's Personal Data will be stored in paper and computer archives, including portable devices, adopting suitable measures to guarantee its security and limit access exclusively to personnel authorized by the Data Controller and within the strict scope of the purposes indicated above.`,
      li1: [],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 8,
      h2: `8. Communication of data to third parties`,
      p1: `Mood Global Services B.V. transmits users' Personal Data only in the manner described below or if required by law at the time of data collection.`,
      p2: (
        <u>
          <strong>
            Data transfer within Mood Global Services or to third parties
          </strong>
        </u>
      ),
      p3: `The user's Personal Data may be communicated to the following third parties:`,
      p4: `Within Mood Global Services B.V., those offices or employees who need it to fulfill contractual and legal obligations and legitimate interests will receive your Personal Data. The Company transfers Personal Data for the purposes of related daily business operations, such as account management and other operations requested by the user, as well as to carry out internal administrative activities in an efficient and shared manner and to maintain and improve our products and services.`,
      p5: `To a limited extent, the Company also transmits personal information to data controllers who perform any services on behalf of Mood Global Services B.V., such as IT services, customer support, improvement of our Site, databases for the implementation of the customer due diligence procedure ; execution of contracts, account management, accounting, invoicing, investigation of irregular or suspicious business cases, application management and sending of newsletters. Data controllers may use or disclose this data only to the extent necessary to perform the services requested by the Company or to comply with the law. The managers in charge of the aforementioned processing are contractually obliged to guarantee the confidentiality and security of users' Personal Data`,
      p6: `The Company may also need to transfer your Personal Data (i) if obliged to do so by law or in the context of legal proceedings, (ii) if it believes that disclosure is necessary to prevent harm or financial loss, (iii) in connection with a investigation of suspected or real fraudulent or illegal activities or (iv) at the request of the competent authorities also for the purposes of fulfilling anti-money laundering obligations.`,
      p7: (
        <u>
          <strong>
            Transfer of data to third parties other than those mentioned above
          </strong>
        </u>
      ),
      p8: `If Mood Global Services B.V. acts together with other subjects as joint data controller, the Company will provide these subjects with Personal Data, if applicable, on the basis of at least one of the legal bases listed above. In case of joint controllership of the processing, Personal Data will be transmitted only on the basis of an agreement with our partners (art. 26 of the GDPR).`,
      p9: `Mood Global Services B.V. may transfer Personal Data to other parties only with the user's prior consent to disclosure or for the purpose of fulfilling a contract or for the execution of pre-contractual measures adopted at the user's request.`,
      p10: (
        <u>
          <strong>
            Place of processing of Personal Data and non-EU countries
          </strong>
        </u>
      ),
      p11: `The user's Personal Data will be processed and stored on servers located in the territory of the European Union. If for technical and/or operational reasons it is necessary to make use of subjects located outside the European Union, or it is necessary to transfer some of the data collected to technical systems and services of third parties managed in the cloud and/or located at the outside the European Union area, the processing will be regulated in accordance with the provisions of Chapter V of the GDPR. All necessary precautions will therefore be adopted in order to guarantee the most complete protection of Personal Data by basing this transfer: a) on adequacy decisions of the recipient third countries expressed by the European Commission (Article 45 of the GDPR); b) on adequate guarantees expressed by the third party recipient (Article 46 of the GDPR); c) on the adoption of binding corporate rules, so-called. corporate binding rules (article 47 of the GDPR).`,
      p12: `In addition to what is provided for in this Privacy Policy, such data may be processed in countries outside the European Union, provided that an adequate level of protection is guaranteed, recognized by a specific adequacy decision of the European Commission. Any transfers of the user's Personal Data to non-EU countries, in the absence of an adequacy decision from the European Commission, will take place exclusively on the basis of the terms and conditions established in ad hoc contractual clauses stipulated between the exporter and importer of the Personal Data ("CCS" ), in accordance with the European Commission Decision 2010/87/EU of 5 February 2010 (“Decision”). The user may at any time request a copy of the CCS in force from time to time by sending a specific request to the following email address info@moodglobalservices.com.`,
      p13: `In the absence of adequacy decisions from the European Commission or the adequate measures described above, the transfer of Personal Data to non-EU countries will take place exclusively with the express written consent of the user or where otherwise permitted pursuant to the Privacy Law.`,
      li1: [
        `consultants, accountants or lawyers who provide services that are functional or connected to the execution of the general conditions governing the Services;`,
        `banking and insurance institutions that provide functional services or services connected to the execution of the aforementioned general conditions;`,
        `judicial or administrative authorities, for the fulfillment of legal obligations.`,
      ],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 9,
      h2: `9. Methods of processing of Personal Data`,
      p1: `The Data Controller adopts appropriate security measures aimed at preventing unauthorized access, disclosure, modification or destruction of Personal Data.`,
      p2: `The processing is carried out using IT and/or telematic tools, with organizational and technological methods strictly related to the purposes indicated. In addition to the Data Controller, in some cases, other parties involved in the organization of Mood Global Services B.V. may have access to Personal Data. (administrative, commercial, marketing, legal, system administrators) or external subjects (such as third-party technical service providers, postal couriers, hosting providers, IT companies, communication agencies) appointed, if necessary, as Data Processors by the Data Controller accordingly to the Privacy Legislation. The updated list of Managers can always be requested by the Owner.`,
      li1: [],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 10,
      h2: `10. Profiling of Personal Data`,
      p1: `Personal Data may be subject to fully automated decision-making, including profiling, only with prior express consent, which may be freely revoked at any time.`,
      p2: `Upon receipt of express written consent, Mood Global Services B.V. may proceed to profile the user using the Personal Data for the sole purpose of improving its Services, identifying and selecting homogeneous groups of users.`,
      li1: [],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 11,
      h2: `11. Rights of the interested party`,
      p1: `The rights recognized to users by the GDPR include those of:`,
      p2: `Upon receipt of express written consent, Mood Global Services B.V. may proceed to profile the user using the Personal Data for the sole purpose of improving its Services, identifying and selecting homogeneous groups of users.`,
      li1: [
        `request and obtain access to your Personal Data from the Data Controller;`,
        `request and obtain from the Data Controller the rectification of your inaccurate Personal Data or the integration of incomplete Personal Data under the terms and conditions set out in the art. 16 of the GDPR;`,
        `request and obtain from the Data Controller the deletion of your Personal Data, upon the occurrence of one of the conditions indicated in the art. 17, paragraph 1 of the GDPR and in compliance with the exceptions provided for in paragraph 3 of the same article;`,
        `request and obtain from the Data Controller the limitation of the processing of your Personal Data in the terms and conditions set out in the art. 18, paragraph 1, of the GDPR;`,
        `request and obtain from the Data Controller their Personal Data in a structured and machine-readable format, also for the purpose of communicating such data to another data controller (so-called right to portability of personal data) in the terms and conditions set out in art. 20 of the GDPR;`,
        `object at any time to the processing of your Personal Data in the terms and conditions set out in the art. 21 of the GDPR; lodge a complaint with the Guarantor Authority for the protection of personal data (www.garanteprivacy.it) or with another supervisory authority, if competent.`,
      ],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 12,
      h2: `12. Expression and revocation of consent`,
      p1: `By checking the respective separate box for news and updates via email (newsletter), you expressly consent to receive email messages as described in this policy.`,
      p2: `The user has the right to revoke his consent at any time by sending a registered letter with return receipt to Mood Global Services B.V., with registered office in Amsterdam at Brediusstraat no. 7 registered in the Dutch Company Register no. 85502081 VAT number 86364487 It is important to note that if you withdraw your consent, the Company may no longer be able to provide all of its Services. The objection does not affect the lawfulness of the processing of personal data based on legitimate interests before the objection`,
      li1: [],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 13,
      h2: `13. Method of exercising rights`,
      p1: `In order to exercise the aforementioned rights, the user can direct a request to the contact details of the Owner indicated in this information. Requests are submitted free of charge and processed by the Data Controller as soon as possible, in any case within 30 days.`,
      li1: [],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 14,
      h2: `14. Data controllers`,
      p1: `The updated list of data controllers is kept at the Data Controller's headquarters and the user can request it at any time by submitting a request to the Data Controller's contact details indicated in this information.`,
      li1: [],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 15,
      h2: `15. Cookie Policy`,
      p1: `Mood Global Services B.V. uses tracking tools (so-called cookies). For more extensive information, the user is invited to read and consult the cookie policy`,
      li1: [],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
    {
      id: 16,
      h2: `16. Changes to the information`,
      p1: `The Owner reserves the right to make changes to this information at any time by sending the user a notification as well as, where technically and legally possible, by sending a notification via one of the contact details held by Mood Global Services B.V.. Please therefore to consult this page regularly, referring to the date of last modification indicated at the end of it.`,
      p2: `If the changes affect the processing of Personal Data whose legal basis is consent, the Data Controller will collect the user's consent again, if necessary.`,
      li1: [],
      li2: [],
      li3: [],
      li4: [],
      li5: [],
      li6: [],
      li7: [],
      li8: [],
      li9: [],
      li10: [],
      li11: [],
      li12: [],
      li13: [],
    },
  ]

<<<<<<< HEAD
  return (
    <div className="privacyPolicyAllContainer">
      <div className="privacyPolicyHeader">
        <h1>Privacy Policy</h1>
        <span id="PrivacySecondHeader">
          Privacy Policy of Mood Global Services B.V.
        </span>
        <p>Our Privacy Policy were last updated on 10/10/2023</p>
      </div>
=======
            <div className="privacyPolicyText">
                {textArray.map((e) => {
                    return (
                        <div className="privacyPolicyTitle">
                            <h2>{e.h2}
                                {isMobileOn &&
                                    <Image alt="Accordion Part" id="accordionimage" onClick={() => {
                                        const element = document.getElementById(e.id);
                                        toggleShow(e.id);
                                        if (element.style.display === "none" || element.style.display === "") {
                                            element.style.display = "flex";
                                        } else {
                                            element.style.display = "none";
                                        }
                                    }}  
                                    src={showStates[e.id] ? accordionUp : accordionDown}>
                                    </Image>}
                            </h2>
                            <Image alt="Vector" style={{ display: `${isMobileOn ? "block" : "none"}` }} src={Vector19}></Image>
                            {<div className="paragraphs" id={`${e.id}`}>
                                {e.p1}
                                {e.li1.length > 0 &&
                                <ul>
                                    {e.li1.length > 0 && e.li1.map((e) => {
                                        return (
                                            <li>{e}</li>
                                        )
                                    })}
                                </ul>
                            }
                                {e.p2}
                                {e.li2.length > 0 &&
                                <ul>
                                    {e.li2.length > 0 && e.li2.map((e) => {
                                        return (
                                            <li>{e}</li>
                                        )
                                    })}
                                </ul>
                            }
                                {e.p3}
                                {e.li3.length > 0 &&
                                <ul>
                                    {e.li3.length > 0 && e.li3.map((e) => {
                                        return (
                                            <li>{e}</li>
                                        )
                                    })}
                                </ul>
                }
                                {e.p4}
                                {e.li4.length > 0 &&
                                <ul>
                                    {e.li4.length > 0 && e.li4.map((e) => {
                                        return (
                                            <li>{e}</li>
                                        )
                                    })}
                                </ul>
                            }
                                {e.p5}
                                {e.li5.length > 0 &&
                                <ul>
                                    {e.li5.length > 0 && e.li5.map((e) => {
                                        return (
                                            <li>{e}</li>
                                        )
                                    })}
                                </ul>
                }
                                {e.p6}
                                {e.li6.length > 0 &&
                                <ul>
                                    {e.li6.length > 0 && e.li6.map((e) => {
                                        return (
                                            <li>{e}</li>
                                        )
                                    })}
                                </ul>
                }
                                {e.p7}
                                {e.li7.length > 0 &&
                                <ul>
                                    {e.li7.length > 0 && e.li7.map((e) => {
                                        return (
                                            <li>{e}</li>
                                        )
                                    })}
                                </ul>
                }
                                {e.p8}
                                {e.li8.length > 0 &&
                                    <ul>
                                        {e.li8.length > 0 && e.li8.map((e) => {
                                            return (
                                                <li>{e}</li>
                                            )
                                        })}
                                    </ul>
                                }
                                {e.p9}
                                {e.li9.length > 0 &&
                                    <ul>
                                        {e.li9.length > 0 && e.li9.map((e) => {
                                            return (
                                                <li>{e}</li>
                                            )
                                        })}
                                    </ul>
                                }
                                {e.p10}
                                {e.li10.length > 0 &&
                                    <ul>
                                        {e.li10.length > 0 && e.li10.map((e) => {
                                            return (
                                                <li>{e}</li>
                                            )
                                        })}
                                    </ul>
                                }
                                {e.p11}
                                {e.li11.length > 0 &&
                                    <ul>
                                        {e.li11.map((e) => {
                                            return (
                                                <li>{e}</li>
                                            )
                                        })}
                                    </ul>}
>>>>>>> c4f9c010e7516a8fd1c048d20850dbc46729bcac

      <div className="privacyPolicyText">
        {textArray.map((e) => {
          return (
            <div className="privacyPolicyTitle" key={e.id}>
              <h2>
                {e.h2}
                {isMobileOn && (
                  <Image
                    alt="accordionimage"
                    id="accordionimage"
                    onClick={() => {
                      const element = document.getElementById(e.id)
                      toggleShow(e.id)
                      if (
                        element.style.display === "none" ||
                        element.style.display === ""
                      ) {
                        element.style.display = "flex"
                      } else {
                        element.style.display = "none"
                      }
                    }}
                    src={showStates[e.id] ? accordionUp : accordionDown}
                  ></Image>
                )}
              </h2>
              <Image
                alt="Vector19"
                style={{ display: `${isMobileOn ? "block" : "none"}` }}
                src={Vector19}
              ></Image>
              {
                <div className="paragraphs" id={`${e.id}`}>
                  {e.p1}
                  {e.li1.length > 0 && (
                    <ul>
                      {e.li1.length > 0 &&
                        e.li1.map((e, index) => {
                          return <li key={index}>{e}</li>
                        })}
                    </ul>
                  )}
                  {e.p2}
                  {e.li2.length > 0 && (
                    <ul>
                      {e.li2.length > 0 &&
                        e.li2.map((e, index) => {
                          return <li key={index}>{e}</li>
                        })}
                    </ul>
                  )}
                  {e.p3}
                  {e.li3.length > 0 && (
                    <ul>
                      {e.li3.length > 0 &&
                        e.li3.map((e, index) => {
                          return <li key={index}>{e}</li>
                        })}
                    </ul>
                  )}
                  {e.p4}
                  {e.li4.length > 0 && (
                    <ul>
                      {e.li4.length > 0 &&
                        e.li4.map((e, index) => {
                          return <li key={index}>{e}</li>
                        })}
                    </ul>
                  )}
                  {e.p5}
                  {e.li5.length > 0 && (
                    <ul>
                      {e.li5.length > 0 &&
                        e.li5.map((e, index) => {
                          return <li key={index}>{e}</li>
                        })}
                    </ul>
                  )}
                  {e.p6}
                  {e.li6.length > 0 && (
                    <ul>
                      {e.li6.length > 0 &&
                        e.li6.map((e, index) => {
                          return <li key={index}>{e}</li>
                        })}
                    </ul>
                  )}
                  {e.p7}
                  {e.li7.length > 0 && (
                    <ul>
                      {e.li7.length > 0 &&
                        e.li7.map((e, index) => {
                          return <li key={index}>{e}</li>
                        })}
                    </ul>
                  )}
                  {e.p8}
                  {e.li8.length > 0 && (
                    <ul>
                      {e.li8.length > 0 &&
                        e.li8.map((e, index) => {
                          return <li key={index}>{e}</li>
                        })}
                    </ul>
                  )}
                  {e.p9}
                  {e.li9.length > 0 && (
                    <ul>
                      {e.li9.length > 0 &&
                        e.li9.map((e, index) => {
                          return <li key={index}>{e}</li>
                        })}
                    </ul>
                  )}
                  {e.p10}
                  {e.li10.length > 0 && (
                    <ul>
                      {e.li10.length > 0 &&
                        e.li10.map((e, index) => {
                          return <li key={index}>{e}</li>
                        })}
                    </ul>
                  )}
                  {e.p11}
                  {e.li11.length > 0 && (
                    <ul>
                      {e.li11.map((e, index) => {
                        return <li key={index}>{e}</li>
                      })}
                    </ul>
                  )}
                </div>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Privacypolicy
