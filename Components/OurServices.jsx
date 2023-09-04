import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
    return(
        <div className="mainServiceContainer">
            <div className="blueServiceContainer">
                <div className="blueContentContainer">
                    <div className="headServiceText">
                        <h1>Our Services</h1>
                        <h6>Mood Global Services offers a range of services to help your business thrive in the digital age. 
                        From <br />comprehensive consulting to smart contract creation, mobile app development, and software development for <br />
                        Web 2.0 and 3.0, we're your partners in the digital transformation 
                        journey.</h6>
                    </div>
                    <div className="serviceBoxContainer">
                        <div className="serviceTContainer">
                            <div className="tLeftService">
                                <h4>Consulting</h4>
                                <button>.</button>
                                <h4>MicaR Compliance</h4>
                                <h4>Blockchain advisory</h4>
                                <h4>Tokenomics Advisory</h4>
                            </div>
                            <div className="tRightService">
                                <h4>Smart Contracts Solution</h4>
                                <button>.</button>
                                <h4>ERC-Model Components</h4>
                                <h4>Dapps Architecture</h4>
                            </div>
                        </div>
                        <div className="serviceBContainer">
                            <div className="bLeftService">
                                <h4>Audit Smart Contracts</h4>
                                <button>.</button>
                                <h4>Security Audit</h4>
                                <h4>Logic Audit</h4>
                                <h4>Analytics & Performance Tools</h4>
                            </div>
                            <div className="bRightService">
                                <h4>Development</h4>
                                <button>.</button>
                                <h4>Cloud & Database Management</h4>
                                <h4>Web & Apps Development</h4>
                                <h4>AI Implementations</h4>
                                <h4>API Connections</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;