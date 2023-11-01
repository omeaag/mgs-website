"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "../public/style/OurServiceStyle.css"
import greenHere from "../public/materials/greenHere.svg"
import aquaHere from "../public/materials/aquaHere.svg"
import orangeHere from "../public/materials/orangeHere.svg"
import turkuazHere from "../public/materials/turkuazHere.svg"
import europe from "../public/materials/europe.svg"
import { useState, useEffect } from "react"

const OurServices = () => {
  const [isMobileOn, setIsMobileOn] = useState(false)
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

  return (
    <div className="mainServiceContainer">
      <div className="blueServiceContainer">
        <div className="blueContentContainer">
          <div className="headServiceText">
            <h1>Our Services</h1>
            <h6>
              At Mood Global Services, we offer a spectrum of services to
              navigate your business through the digital tide. Whether it's
              comprehensive consulting, crafting smart contracts, mobile app
              development, or pioneering software solutions for Web 2.0 and 3.0,
              we are with you in every stride of your digital transformation
              journey.
            </h6>
          </div>
          {isMobileOn ? (
            <div className="serviceBoxContainer">
              <div className="serviceTContainer">
                <div className="tLeftService">
                  <h3
                    onClick={() => {
                      localStorage.setItem("service", "consulting")
                      window.location.href = "/services#Consulting"
                    }}
                    href="/services#Consulting"
                  >
                    Consulting
                  </h3>
                  <div className="lineClass1">
                    <button disabled aria-label="line">
                      .
                    </button>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "consulting")
                      window.location.href = "/services#Consulting"
                    }}
                  >
                    <Image alt="green bg" src={greenHere}></Image>
                    <h4>
                      MicaR Compliance <Image id="flag" src={europe} />
                    </h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "consulting")
                      window.location.href = "/services#Consulting"
                    }}
                  >
                    <Image alt="green bg" src={greenHere}></Image>
                    <h4>Blockchain advisory</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "consulting")
                      window.location.href = "/services#Consulting"
                    }}
                  >
                    <Image alt="green bg" src={greenHere}></Image>
                    <h4>Tokenomics Advisory</h4>
                  </div>
                </div>
                <div className="tRightService">
                  <h3
                    onClick={() => {
                      localStorage.setItem("service", "smart")
                      window.location.href = "/services#smart"
                    }}
                    href="/services#smart"
                  >
                    Smart Contracts Solution
                  </h3>
                  <div className="lineClass3">
                    <button aria-label="line" disabled>
                      .
                    </button>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "smart")
                      window.location.href = "/services#smart"
                    }}
                  >
                    <Image alt="orange bg" src={orangeHere}></Image>
                    <h4>ERC-Model Components</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "smart")
                      window.location.href = "/services#smart"
                    }}
                  >
                    <Image alt="orange bg" src={orangeHere}></Image>
                    <h4>Dapps Architecture</h4>
                  </div>
                </div>
              </div>
              <div className="serviceBContainer">
                <div className="bLeftService">
                  <h3
                    onClick={() => {
                      localStorage.setItem("service", "audit")
                      window.location.href = "/services#audit"
                    }}
                    href="/services#audit"
                  >
                    Audit Smart Contracts
                  </h3>
                  <div className="lineClass2">
                    <button aria-label="line" disabled>
                      .
                    </button>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "audit")
                      window.location.href = "/services#audit"
                    }}
                  >
                    <Image alt="aqua bg" src={aquaHere}></Image>
                    <h4>Security Audit</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "audit")
                      window.location.href = "/services#audit"
                    }}
                  >
                    <Image alt="aqua bg" src={aquaHere}></Image>
                    <h4>Logic Audit</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "audit")
                      window.location.href = "/services#audit"
                    }}
                  >
                    <Image alt="aqua bg" src={aquaHere}></Image>
                    <h4>Analytics & Performance Tools</h4>
                  </div>
                </div>
                <div className="bRightService">
                  <h3
                    onClick={() => {
                      localStorage.setItem("service", "development")
                      window.location.href = "/services#development"
                    }}
                    href="/services#development"
                  >
                    Development
                  </h3>
                  <div className="lineClass4">
                    <button disabled aria-label="line">
                      .
                    </button>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "development")
                      window.location.href = "/services#development"
                    }}
                  >
                    <Image alt="Turquoise bg" src={turkuazHere}></Image>
                    <h4>Cloud & Database Management</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "development")
                      window.location.href = "/services#development"
                    }}
                  >
                    <Image alt="Turquoise bg" src={turkuazHere}></Image>
                    <h4>Web & Apps Development</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "development")
                      window.location.href = "/services#development"
                    }}
                  >
                    <Image alt="Turquoise bg" src={turkuazHere}></Image>
                    <h4>AI Implementations</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "development")
                      window.location.href = "/services#development"
                    }}
                  >
                    <Image src={turkuazHere}></Image>
                    <h4>API Connections</h4>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="serviceBoxContainer">
              <div className="serviceTContainer">
                <div className="tLeftService">
                  <h3
                    onClick={() => {
                      localStorage.setItem("service", "consulting")
                      window.location.href = "/services#Consulting"
                    }}
                  >
                    Consulting
                  </h3>
                  <div className="lineClass1">
                    <button disabled aria-label="line">
                      .
                    </button>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "consulting")
                      window.location.href = "/services#Consulting"
                    }}
                  >
                    <Image alt="green bg" src={greenHere}></Image>
                    <h4>
                      MicaR Compliance{" "}
                      <Image alt="Europe flag" id="flag" src={europe} />
                    </h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "consulting")
                      window.location.href = "/services#Consulting"
                    }}
                  >
                    <Image alt="green bg" src={greenHere}></Image>
                    <h4>Blockchain advisory</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "consulting")
                      window.location.href = "/services#Consulting"
                    }}
                  >
                    <Image alt="green bg" src={greenHere}></Image>
                    <h4>Tokenomics Advisory</h4>
                  </div>
                </div>
                <div className="bLeftService">
                  <h3
                    onClick={() => {
                      localStorage.setItem("service", "audit")
                      window.location.href = "/services#audit"
                    }}
                  >
                    Audit Smart Contracts
                  </h3>
                  <div className="lineClass2">
                    <button disabled aria-label="line">
                      .
                    </button>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "audit")
                      window.location.href = "/services#audit"
                    }}
                  >
                    <Image alt="aqua bg" src={aquaHere}></Image>
                    <h4>Security Audit</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "audit")
                      window.location.href = "/services#audit"
                    }}
                  >
                    <Image alt="aqua bg" src={aquaHere}></Image>
                    <h4>Logic Audit</h4>
                  </div>
                  <div
                    id="AnalyticsText"
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "audit")
                      window.location.href = "/services#audit"
                    }}
                  >
                    <Image alt="aqua bg" src={aquaHere}></Image>
                    <h4>Analytics & Performance Tools</h4>
                  </div>
                </div>
              </div>
              <div className="serviceBContainer">
                <div className="tRightService">
                  <h3
                    onClick={() => {
                      localStorage.setItem("service", "smart")
                      window.location.href = "/services#smart"
                    }}
                  >
                    Smart Contracts Solution
                  </h3>
                  <div className="lineClass3">
                    <button disabled aria-label="line">
                      .
                    </button>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "smart")
                      window.location.href = "/services#smart"
                    }}
                  >
                    <Image alt="orange bg" src={orangeHere}></Image>
                    <h4>ERC-Model Components</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "smart")
                      window.location.href = "/services#smart"
                    }}
                  >
                    <Image alt="orange bg" src={orangeHere}></Image>
                    <h4>Dapps Architecture</h4>
                  </div>
                </div>
                <div className="bRightService">
                  <h3
                    onClick={() => {
                      localStorage.setItem("service", "development")
                      window.location.href = "/services#development"
                    }}
                  >
                    Development
                  </h3>
                  <div className="lineClass4">
                    <button disabled aria-label="line">
                      .
                    </button>
                  </div>
                  <div
                    id="CloudDataText"
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "development")
                      window.location.href = "/services#development"
                    }}
                  >
                    <Image alt="Turquoise bg" src={turkuazHere}></Image>
                    <h4>Cloud & Database Management</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "development")
                      window.location.href = "/services#development"
                    }}
                  >
                    <Image alt="Turquoise bg" src={turkuazHere}></Image>
                    <h4>Web & Apps Development</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "development")
                      window.location.href = "/services#development"
                    }}
                  >
                    <Image alt="Turquoise bg" src={turkuazHere}></Image>
                    <h4>AI Implementations</h4>
                  </div>
                  <div
                    className="textImageCont"
                    onClick={() => {
                      localStorage.setItem("service", "development")
                      window.location.href = "/services#development"
                    }}
                  >
                    <Image alt="Turqoise bg" src={turkuazHere}></Image>
                    <h4>API Connections</h4>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OurServices
