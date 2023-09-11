"use client"
import Image from 'next/image';
import Script from 'next/script'
import styles from "../../public/style/MoodConvertAI.css"
import logo from "../../public/materials/moodConverAIImages/Frame.svg";
import sendImage from "../../public/materials/moodConverAIImages/ic_baseline-send.svg";
    return (
        <div className="moodConvertAllContainer">
            <div className='bigBackground' >
                <div className='smallBackground'>
                    <div className='moodConvertAIContainer'>
                        <Image alt='ailogo' src={logo} ></Image>
                        <h3>As a Blockchain-based firm, we help our clients integrate the most optimal blockchain solutions <br />
                            into their business strategy. We have developed a range of specialised services aimed at helping <br /> companies to fully exploit blockchain technologies.</h3>
                    </div>
                </div>
            </div>
            <form className="AIformContainer" action="">
                <h4>Your Personal Project Assistant ✍️</h4>
                <div className='underForm'>
                    <div className='groupCont'>
                        <div className='cardContainer'>
                            <div className='textContainer'>
                                <h5>Back End development</h5>
                                <h6>I want to get a quotation for android development</h6>
                            </div>
                            <input className="checkbox" type="checkbox" />
                        </div>
                        <div className='cardContainer'>
                            <div className='textContainer'>
                                <h5>UI/UX Design</h5>
                                <h6>I want to get a quotation for android development</h6>
                            </div>
                            <input className="checkbox" type="checkbox" />
                        </div>
                    </div>
                    <div className='groupCont'>
                        <div className='cardContainer'>
                            <div className='textContainer'>
                                <h5>Android Application</h5>
                                <h6>I want to get a quotation for android development</h6>
                            </div>
                            <input className="checkbox" type="checkbox" />
                        </div>
                        <div className='cardContainer'>
                            <div className='textContainer'>
                                <h5>Design a website</h5>
                                <h6>I want to get a quotation for android development</h6>
                            </div>
                            <input className="checkbox" type="checkbox" />
                        </div>
                    </div>
                    <div className='bottomCont'>
                        <input placeholder="Request A Proejct" type="text" className="inputArea"></input>
                        <button className="next-button">
                            <Image className='sendButton' src={sendImage} alt="Send"  />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MoodConvertAI;
