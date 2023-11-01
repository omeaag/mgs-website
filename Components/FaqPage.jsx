"use client"
import "../public/style/termsConditions.css"
import Image from "next/image"
import button1 from "../public/materials/faqplus.svg"
import button2 from "../public/materials/faqxmark.svg"
import { useState, useEffect } from "react"

function FaqPage() {
  const [showStates, setShowStates] = useState(Array(3).fill(false)) // Adjust the array size based on the number of FAQ items
  const [isMobileOn, setIsMobileOn] = useState(false)

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

<<<<<<< HEAD
  return (
    <div className="termsConditionsAllContainer">
      <div className="termsConditionsHeader">
        <h1>Frequent Asked Questions (FAQs)</h1>
        <p>Here You Can Find Frequent Asked Questions About Us</p>
      </div>
      <div className="termsConditionsText">
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>01</h1>
                <div className="FaqTitleContainer">
                  What is the primary focus of Mood Global Services?
                </div>
              </div>
              <Image
                alt="number 1"
                src={showStates[0] ? button2 : button1}
                onClick={() => toggleShow(0)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>01</h1>
              <div className="FaqTitleContainer">
                What is the primary focus of Mood Global Services?
              </div>
              <Image
                alt="number 1"
                src={showStates[0] ? button2 : button1}
                onClick={() => toggleShow(0)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[0] ? (
              <p>
                Our expertise lies in pioneering blockchain solutions and
                integrating emerging technologies, empowering businesses and
                entrepreneurs to navigate technological innovation.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>02</h1>
                <div className="FaqTitleContainer">
                  What are the benefits of using blockchain technology?
                </div>
              </div>
              <Image
                alt="number 2"
                src={showStates[1] ? button2 : button1}
                onClick={() => toggleShow(1)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>02</h1>
              <div className="FaqTitleContainer">
                What are the benefits of using blockchain technology?
              </div>
              <Image
                alt="number 02"
                src={showStates[1] ? button2 : button1}
                onClick={() => toggleShow(1)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[1] ? (
              <p>
                Blockchain technology offers numerous benefits, including
                increased security and transparency, improved efficiency and
                speed of transactions, reduced costs, and greater
                accountability.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>03</h1>
                <div className="FaqTitleContainer">
                  I'm new to blockchain. How can MGS assist my business?
                </div>
              </div>
              <Image
                alt="number 03"
                src={showStates[2] ? button2 : button1}
                onClick={() => toggleShow(2)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>03</h1>
              <div className="FaqTitleContainer">
                I'm new to blockchain. How can MGS assist my business?
              </div>
              <Image
                alt="number 03"
                src={showStates[2] ? button2 : button1}
                onClick={() => toggleShow(2)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[2] ? (
              <p>
                We provide Solidity smart contract development, marketplace
                development, creation of ERC tokens, NFTs and Real World Asset
                (RWA) tokenization. We ensure your venture into blockchain is
                smooth and efficient.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>04</h1>
                <div className="FaqTitleContainer">
                  What are Solidity smart contracts?
                </div>
              </div>
              <Image
                alt="number 04"
                src={showStates[3] ? button2 : button1}
                onClick={() => toggleShow(3)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>04</h1>
              <div className="FaqTitleContainer">
                What are Solidity smart contracts?
              </div>
              <Image
                alt="number 04"
                src={showStates[3] ? button2 : button1}
                onClick={() => toggleShow(3)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[3] ? (
              <p>
                Solidity is a programming language specifically for writing
                smart contracts on Ethereum platforms. Our experts develop
                secure and optimized smart contracts tailored to your business
                needs.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>05</h1>
                <div className="FaqTitleContainer">
                  How can Mood Global Services help if I want to set up a
                  digital marketplace?
                </div>
              </div>
              <Image
                alt="number 05"
                src={showStates[4] ? button2 : button1}
                onClick={() => toggleShow(4)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>05</h1>
              <div className="FaqTitleContainer">
                How can Mood Global Services help if I want to set up a digital
                marketplace?
              </div>
              <Image
                alt="number 05"
                src={showStates[4] ? button2 : button1}
                onClick={() => toggleShow(4)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[4] ? (
              <p>
                We offer comprehensive marketplace development services,
                ensuring your platform is robust, user-friendly, and integrated
                seamlessly with blockchain technology.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>06</h1>
                <div className="FaqTitleContainer">
                  Can you develop tokens for my brand or business?
                </div>
              </div>
              <Image
                alt="number 06"
                src={showStates[5] ? button2 : button1}
                onClick={() => toggleShow(5)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>06</h1>
              <div className="FaqTitleContainer">
                Can you develop tokens for my brand or business?
              </div>
              <Image
                alt="number 06"
                src={showStates[5] ? button2 : button1}
                onClick={() => toggleShow(5)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[5] ? (
              <p>
                Yes, we specialize in ERC token, NFT (Non-Fungible Token) and
                RWA development. Whether for a loyalty program, a new
                cryptocurrency, or unique physical and digital assets, we have
                you covered.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>07</h1>
                <div className="FaqTitleContainer">
                  What is tokenization?{" "}
                  <span style={{ opacity: "0" }}>...</span>
                </div>
              </div>
              <Image
                alt="number 07"
                src={showStates[6] ? button2 : button1}
                onClick={() => toggleShow(6)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>07</h1>
              <div className="FaqTitleContainer">What is tokenization?</div>
              <Image
                alt="number 07"
                src={showStates[6] ? button2 : button1}
                onClick={() => toggleShow(6)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[6] ? (
              <p>
                Tokenization refers to the process of converting rights to an
                asset into a digital token on a blockchain. In simpler terms,
                it's like creating a digital representation of a physical or
                intangible asset on a secure digital ledger.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>08</h1>
                <div className="FaqTitleContainer">
                  How can tokenization benefit my business?
                </div>
              </div>
              <Image
                alt="number 08"
                src={showStates[7] ? button2 : button1}
                onClick={() => toggleShow(7)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>08</h1>
              <div className="FaqTitleContainer">
                How can tokenization benefit my business?
              </div>
              <Image
                alt="number 08"
                src={showStates[7] ? button2 : button1}
                onClick={() => toggleShow(7)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[7] ? (
              <p>
                Tokenization offers several benefits, including:
                <ul>
                  <li>
                    Liquidity: Assets that are typically hard to sell or divide,
                    like real estate, can be tokenized and sold in smaller
                    portions.
                  </li>
                  <li>
                    Security: Blockchain's secure nature means that tokenized
                    assets are less susceptible to fraud.
                  </li>
                  <li>
                    Efficiency: Transactions using tokens can be done faster and
                    sometimes with lower costs than traditional methods.
                  </li>
                </ul>
                Accessibility: Tokenization can open your assets to a global
                market, making them available to a broader audience.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>09</h1>
                <div className="FaqTitleContainer">
                  How can Mood Global Services assist with tokenization?
                </div>
              </div>
              <Image
                alt="number 09"
                src={showStates[8] ? button2 : button1}
                onClick={() => toggleShow(8)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>09</h1>
              <div className="FaqTitleContainer">
                How can Mood Global Services assist with tokenization?
              </div>
              <Image
                alt="number 09"
                src={showStates[8] ? button2 : button1}
                onClick={() => toggleShow(8)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[8] ? (
              <p>
                At Mood Global Services, we have expertise in creating and
                managing tokenized assets. We guide businesses through the
                entire tokenization process: from understanding which assets can
                be tokenized, designing the token mechanics, developing the
                necessary smart contracts, to launching the tokenized asset on a
                blockchain. Our comprehensive approach ensures that your
                business can effectively leverage the benefits of tokenization.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>10</h1>
                <div className="FaqTitleContainer">
                  How can NFTs be applied to a company?
                </div>
              </div>
              <Image
                alt="number 10"
                src={showStates[9] ? button2 : button1}
                onClick={() => toggleShow(9)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>10</h1>
              <div className="FaqTitleContainer">
                How can NFTs be applied to a company?
              </div>
              <Image
                alt="number 10"
                src={showStates[9] ? button2 : button1}
                onClick={() => toggleShow(9)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[9] ? (
              <p>
                NFTs can be applied to a company in a number of ways, depending
                on the specific needs and goals of the organization. For
                example, a company could use NFTs to represent ownership of
                unique loyalty membership. This could be used to create new
                revenue streams and customer fidelization.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>11</h1>
                <div className="FaqTitleContainer">
                  Why is an audit important for my blockchain project?
                </div>
              </div>
              <Image
                alt="number 11"
                src={showStates[10] ? button2 : button1}
                onClick={() => toggleShow(10)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>11</h1>
              <div className="FaqTitleContainer">
                Why is an audit important for my blockchain project?
              </div>
              <Image
                alt="number 11"
                src={showStates[10] ? button2 : button1}
                onClick={() => toggleShow(10)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[10] ? (
              <p>
                Audits ensure the security and efficiency of your smart
                contracts and logic. Our thorough audit process identifies
                vulnerabilities and potential optimizations, guaranteeing the
                integrity of your blockchain operations.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>12</h1>
                <div className="FaqTitleContainer">
                  What do you mean by "Audit "?
                </div>
              </div>
              <Image
                alt="number 12"
                src={showStates[11] ? button2 : button1}
                onClick={() => toggleShow(11)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>12</h1>
              <div className="FaqTitleContainer">
                What do you mean by "Audit "?
              </div>
              <Image
                alt="number 12"
                src={showStates[11] ? button2 : button1}
                onClick={() => toggleShow(11)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[11] ? (
              <p>
                We provide a two-fold audit process: reviewing the logical flow
                and functionality of your application and a technical assessment
                of your smart contracts to ensure they're free from
                vulnerabilities.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>13</h1>
                <div className="FaqTitleContainer">
                  What is MICA, and why should I be concerned about it?
                </div>
              </div>
              <Image
                alt="number 13"
                src={showStates[12] ? button2 : button1}
                onClick={() => toggleShow(12)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>13</h1>
              <div className="FaqTitleContainer">
                What is MICA, and why should I be concerned about it?
              </div>
              <Image
                alt="number 13"
                src={showStates[12] ? button2 : button1}
                onClick={() => toggleShow(12)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[12] ? (
              <p>
                MICA (Markets in Crypto-assets Regulation) is an upcoming
                regulatory framework for crypto-assets in the European Union.
                Our legal consulting ensures your blockchain operations remain
                compliant with this and other relevant regulations.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>14</h1>
                <div className="FaqTitleContainer">
                  As an entrepreneur, how can blockchain benefit my startup?
                </div>
              </div>
              <Image
                alt="number 14"
                src={showStates[13] ? button2 : button1}
                onClick={() => toggleShow(13)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>14</h1>
              <div className="FaqTitleContainer">
                As an entrepreneur, how can blockchain benefit my startup?
              </div>
              <Image
                alt="number 14"
                src={showStates[13] ? button2 : button1}
                onClick={() => toggleShow(13)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[13] ? (
              <p>
                Blockchain offers transparency, security, and decentralization.
                Whether it's secure transactions, tokenizing assets, or creating
                a decentralized platform, blockchain can provide your startup
                with a competitive edge.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>15</h1>
                <div className="FaqTitleContainer">
                  Do you offer consulting for businesses unfamiliar with
                  blockchain?
                </div>
              </div>
              <Image
                alt="number 15"
                src={showStates[14] ? button2 : button1}
                onClick={() => toggleShow(14)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>15</h1>
              <div className="FaqTitleContainer">
                Do you offer consulting for businesses unfamiliar with
                blockchain?
              </div>
              <Image
                alt="number 15"
                src={showStates[14] ? button2 : button1}
                onClick={() => toggleShow(14)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[14] ? (
              <p>
                Absolutely! We understand that blockchain can be complex. Our
                team is here to guide and educate your business, ensuring you
                leverage blockchain effectively.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>16</h1>
                <div className="FaqTitleContainer">
                  How can Mood Global Services enhance my project with AI?
                </div>
              </div>
              <Image
                alt="number 16"
                src={showStates[15] ? button2 : button1}
                onClick={() => toggleShow(15)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>16</h1>
              <div className="FaqTitleContainer">
                How can Mood Global Services enhance my project with AI?
              </div>
              <Image
                alt="number 16"
                src={showStates[15] ? button2 : button1}
                onClick={() => toggleShow(15)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[15] ? (
              <p>
                We integrate AI functionalities like machine learning for
                predictive analytics and natural language processing for
                improved user interactions, ensuring your project stays ahead in
                technological advancements.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>17</h1>
                <div className="FaqTitleContainer">
                  Why would I need custom API development?
                </div>
              </div>
              <Image
                alt="number 17"
                src={showStates[16] ? button2 : button1}
                onClick={() => toggleShow(16)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>17</h1>
              <div className="FaqTitleContainer">
                Why would I need custom API development?
              </div>
              <Image
                alt="number 17"
                src={showStates[16] ? button2 : button1}
                onClick={() => toggleShow(16)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[16] ? (
              <p>
                A custom API is like a personalized bridge built to connect
                different parts of your software smoothly. It helps your
                software "talk" to other tools or services in a way that's just
                right for your needs, giving you features that standard
                solutions might not provide.
              </p>
            ) : null}
          </div>
        </div>
        <div className="FaqContainer">
          {isMobileOn ? (
            <div className="FaqUpperDivMobile">
              <div className="mobileLeft">
                <h1>18</h1>
                <div className="FaqTitleContainer">
                  What's included in your database management services?
=======
    return (
        <div className="termsConditionsAllContainer">
            <div className="termsConditionsHeader">
                <h1>Frequent Asked Questions (FAQs)</h1>
                <p>Here You Can Find Frequent Asked Questions About Us</p>
            </div>
            <div className="termsConditionsText">
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>01</h1>
                            <div className="FaqTitleContainer">What is the primary focus of Mood Global Services?</div>
                        </div>
                        <Image alt="Button" src={showStates[0] ? button2 : button1} onClick={() => toggleShow(0)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>01</h1>
                            <div className="FaqTitleContainer">What is the primary focus of Mood Global Services?</div>
                            <Image alt="Button" src={showStates[0] ? button2 : button1} onClick={() => toggleShow(0)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[0] ? <p>Our expertise lies in pioneering blockchain solutions and integrating emerging technologies, empowering businesses and entrepreneurs to navigate technological innovation.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? (
                        <div className="FaqUpperDivMobile">
                            <div className="mobileLeft">
                                <h1>02</h1>
                                <div className="FaqTitleContainer">What are the benefits of using blockchain technology?</div>
                            </div>
                            <Image alt="Button" src={showStates[1] ? button2 : button1} onClick={() => toggleShow(1)} />
                        </div>
                    ) : (
                        <div className="FaqUpperDiv">
                            <h1>02</h1>
                            <div className="FaqTitleContainer">What are the benefits of using blockchain technology?</div>
                            <Image alt="Button" src={showStates[1] ? button2 : button1} onClick={() => toggleShow(1)} />
                        </div>
                    )}
                    <div className="FaqLowerDiv">
                        {showStates[1] ? (
                            <p>Blockchain technology offers numerous benefits, including increased security and transparency, improved efficiency and speed of transactions, reduced costs, and greater accountability.</p>
                        ) : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>03</h1>
                            <div className="FaqTitleContainer">I'm new to blockchain. How can MGS assist my business?</div>
                        </div>
                        <Image alt="Button" src={showStates[2] ? button2 : button1} onClick={() => toggleShow(2)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>03</h1>
                            <div className="FaqTitleContainer">I'm new to blockchain. How can MGS assist my business?</div>
                            <Image alt="Button" src={showStates[2] ? button2 : button1} onClick={() => toggleShow(2)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[2] ? <p>We provide Solidity smart contract development, marketplace development, creation of ERC tokens, NFTs and Real World Asset (RWA) tokenization. We ensure your venture into blockchain is smooth and efficient.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>04</h1>
                            <div className="FaqTitleContainer">What are Solidity smart contracts?</div>
                        </div>
                        <Image alt="Button" src={showStates[3] ? button2 : button1} onClick={() => toggleShow(3)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>04</h1>
                            <div className="FaqTitleContainer">What are Solidity smart contracts?</div>
                            <Image alt="Button" src={showStates[3] ? button2 : button1} onClick={() => toggleShow(3)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[3] ? <p>Solidity is a programming language specifically for writing smart contracts on Ethereum platforms. Our experts develop secure and optimized smart contracts tailored to your business needs.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>05</h1>
                            <div className="FaqTitleContainer">How can Mood Global Services help if I want to set up a digital marketplace?</div>
                        </div>
                        <Image alt="Button" src={showStates[4] ? button2 : button1} onClick={() => toggleShow(4)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>05</h1>
                            <div className="FaqTitleContainer">How can Mood Global Services help if I want to set up a digital marketplace?</div>
                            <Image alt="Button" src={showStates[4] ? button2 : button1} onClick={() => toggleShow(4)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[4] ? <p>We offer comprehensive marketplace development services, ensuring your platform is robust, user-friendly, and integrated seamlessly with blockchain technology.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>06</h1>
                            <div className="FaqTitleContainer">Can you develop tokens for my brand or business?</div>
                        </div>
                        <Image alt="Button" src={showStates[5] ? button2 : button1} onClick={() => toggleShow(5)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>06</h1>
                            <div className="FaqTitleContainer">Can you develop tokens for my brand or business?</div>
                            <Image alt="Button" src={showStates[5] ? button2 : button1} onClick={() => toggleShow(5)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[5] ? <p>Yes, we specialize in ERC token, NFT (Non-Fungible Token) and RWA development. Whether for a loyalty program, a new cryptocurrency, or unique physical and digital assets, we have you covered.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>07</h1>
                            <div className="FaqTitleContainer">What is tokenization? <span style={{ opacity: '0'}}>...</span>
</div>
                        </div>
                        <Image alt="Button" src={showStates[6] ? button2 : button1} onClick={() => toggleShow(6)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>07</h1>
                            <div className="FaqTitleContainer">What is tokenization?</div>
                            <Image alt="Button" src={showStates[6] ? button2 : button1} onClick={() => toggleShow(6)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[6] ? <p>Tokenization refers to the process of converting rights to an asset into a digital token on a blockchain. In simpler terms, it's like creating a digital representation of a physical or intangible asset on a secure digital ledger.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>08</h1>
                            <div className="FaqTitleContainer">How can tokenization benefit my business?</div>
                        </div>
                        <Image alt="Button" src={showStates[7] ? button2 : button1} onClick={() => toggleShow(7)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>08</h1>
                            <div className="FaqTitleContainer">How can tokenization benefit my business?</div>
                            <Image alt="Button" src={showStates[7] ? button2 : button1} onClick={() => toggleShow(7)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[7] ? <p>
                            Tokenization offers several benefits, including:
                            <ul>
                                <li>Liquidity: Assets that are typically hard to sell or divide, like real estate, can be tokenized and sold in smaller portions.</li>
                                <li>Security: Blockchain's secure nature means that tokenized assets are less susceptible to fraud.</li>
                                <li>Efficiency: Transactions using tokens can be done faster and sometimes with lower costs than traditional methods.</li>
                            </ul>
                            Accessibility: Tokenization can open your assets to a global market, making them available to a broader audience.
                        </p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>09</h1>
                            <div className="FaqTitleContainer">How can Mood Global Services assist with tokenization?</div>
                        </div>
                        <Image alt="Button" src={showStates[8] ? button2 : button1} onClick={() => toggleShow(8)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>09</h1>
                            <div className="FaqTitleContainer">How can Mood Global Services assist with tokenization?</div>
                            <Image alt="Button" src={showStates[8] ? button2 : button1} onClick={() => toggleShow(8)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[8] ? <p>At Mood Global Services, we have expertise in creating and managing tokenized assets. We guide businesses through the entire tokenization process: from understanding which assets can be tokenized, designing the token mechanics, developing the necessary smart contracts, to launching the tokenized asset on a blockchain. Our comprehensive approach ensures that your business can effectively leverage the benefits of tokenization.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>10</h1>
                            <div className="FaqTitleContainer">How can NFTs be applied to a company?</div>
                        </div>
                        <Image alt="Button" src={showStates[9] ? button2 : button1} onClick={() => toggleShow(9)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>10</h1>
                            <div className="FaqTitleContainer">How can NFTs be applied to a company?</div>
                            <Image alt="Button" src={showStates[9] ? button2 : button1} onClick={() => toggleShow(9)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[9] ? <p>NFTs can be applied to a company in a number of ways, depending on the specific needs and goals of the organization. For example, a company could use NFTs to represent ownership of unique loyalty membership. This could be used to create new revenue streams and customer fidelization.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>11</h1>
                            <div className="FaqTitleContainer">Why is an audit important for my blockchain project?</div>
                        </div>
                        <Image alt="Button" src={showStates[10] ? button2 : button1} onClick={() => toggleShow(10)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>11</h1>
                            <div className="FaqTitleContainer">Why is an audit important for my blockchain project?</div>
                            <Image alt="Button" src={showStates[10] ? button2 : button1} onClick={() => toggleShow(10)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[10] ? <p>Audits ensure the security and efficiency of your smart contracts and logic. Our thorough audit process identifies vulnerabilities and potential optimizations, guaranteeing the integrity of your blockchain operations.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>12</h1>
                            <div className="FaqTitleContainer">What do you mean by "Audit "?</div>
                        </div>
                        <Image alt="Button" src={showStates[11] ? button2 : button1} onClick={() => toggleShow(11)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>12</h1>
                            <div className="FaqTitleContainer">What do you mean by "Audit "?</div>
                            <Image alt="Button" src={showStates[11] ? button2 : button1} onClick={() => toggleShow(11)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[11] ? <p>We provide a two-fold audit process: reviewing the logical flow and functionality of your application and a technical assessment of your smart contracts to ensure they're free from vulnerabilities.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>13</h1>
                            <div className="FaqTitleContainer">What is MICA, and why should I be concerned about it?</div>
                        </div>
                        <Image alt="Button" src={showStates[12] ? button2 : button1} onClick={() => toggleShow(12)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>13</h1>
                            <div className="FaqTitleContainer">What is MICA, and why should I be concerned about it?</div>
                            <Image alt="Button" src={showStates[12] ? button2 : button1} onClick={() => toggleShow(12)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[12] ? <p>MICA (Markets in Crypto-assets Regulation) is an upcoming regulatory framework for crypto-assets in the European Union. Our legal consulting ensures your blockchain operations remain compliant with this and other relevant regulations.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>14</h1>
                            <div className="FaqTitleContainer">As an entrepreneur, how can blockchain benefit my startup?</div>
                        </div>
                        <Image alt="Button" src={showStates[13] ? button2 : button1} onClick={() => toggleShow(13)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>14</h1>
                            <div className="FaqTitleContainer">As an entrepreneur, how can blockchain benefit my startup?</div>
                            <Image alt="Button" src={showStates[13] ? button2 : button1} onClick={() => toggleShow(13)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[13] ? <p>Blockchain offers transparency, security, and decentralization. Whether it's secure transactions, tokenizing assets, or creating a decentralized platform, blockchain can provide your startup with a competitive edge.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>15</h1>
                            <div className="FaqTitleContainer">Do you offer consulting for businesses unfamiliar with blockchain?</div>
                        </div>
                        <Image alt="Button" src={showStates[14] ? button2 : button1} onClick={() => toggleShow(14)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>15</h1>
                            <div className="FaqTitleContainer">Do you offer consulting for businesses unfamiliar with blockchain?</div>
                            <Image alt="Button" src={showStates[14] ? button2 : button1} onClick={() => toggleShow(14)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[14] ? <p>Absolutely! We understand that blockchain can be complex. Our team is here to guide and educate your business, ensuring you leverage blockchain effectively.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>16</h1>
                            <div className="FaqTitleContainer">How can Mood Global Services enhance my project with AI?</div>
                        </div>
                        <Image alt="Button" src={showStates[15] ? button2 : button1} onClick={() => toggleShow(15)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>16</h1>
                            <div className="FaqTitleContainer">How can Mood Global Services enhance my project with AI?</div>
                            <Image alt="Button" src={showStates[15] ? button2 : button1} onClick={() => toggleShow(15)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[15] ? <p>We integrate AI functionalities like machine learning for predictive analytics and natural language processing for improved user interactions, ensuring your project stays ahead in technological advancements.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>17</h1>
                            <div className="FaqTitleContainer">Why would I need custom API development?</div>
                        </div>
                        <Image alt="Button" src={showStates[16] ? button2 : button1} onClick={() => toggleShow(16)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>17</h1>
                            <div className="FaqTitleContainer">Why would I need custom API development?</div>
                            <Image alt="Button" src={showStates[16] ? button2 : button1} onClick={() => toggleShow(16)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[16] ? <p>A custom API is like a personalized bridge built to connect different parts of your software smoothly. It helps your software "talk" to other tools or services in a way that's just right for your needs, giving you features that standard solutions might not provide.</p> : null}
                    </div>
                </div>
                <div className="FaqContainer">
                    {isMobileOn ? <div className="FaqUpperDivMobile">
                        <div className="mobileLeft">
                            <h1>18</h1>
                            <div className="FaqTitleContainer">What's included in your database management services?</div>
                        </div>
                        <Image alt="Button" src={showStates[17] ? button2 : button1} onClick={() => toggleShow(17)} />
                    </div> :
                        <div className="FaqUpperDiv">
                            <h1>18</h1>
                            <div className="FaqTitleContainer">What's included in your database management services?</div>
                            <Image alt="Button" src={showStates[17] ? button2 : button1} onClick={() => toggleShow(17)} />
                        </div>
                    }
                    <div className="FaqLowerDiv">
                        {showStates[17] ? <p>We handle database design, optimization for faster queries, security measures, regular backups, and scalability solutions to ensure your data infrastructure is robust and efficient.</p> : null}
                    </div>
>>>>>>> c4f9c010e7516a8fd1c048d20850dbc46729bcac
                </div>
              </div>
              <Image
                alt="number 18"
                src={showStates[17] ? button2 : button1}
                onClick={() => toggleShow(17)}
              />
            </div>
          ) : (
            <div className="FaqUpperDiv">
              <h1>18</h1>
              <div className="FaqTitleContainer">
                What's included in your database management services?
              </div>
              <Image
                alt="number 18"
                src={showStates[17] ? button2 : button1}
                onClick={() => toggleShow(17)}
              />
            </div>
          )}
          <div className="FaqLowerDiv">
            {showStates[17] ? (
              <p>
                We handle database design, optimization for faster queries,
                security measures, regular backups, and scalability solutions to
                ensure your data infrastructure is robust and efficient.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqPage
