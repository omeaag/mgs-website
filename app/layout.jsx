import Header from "@/Components/Header"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/Components/Footer"
import WhatWeDo from "@/Components/WhatWeDo"
import OurSolution from "@/Components/OurSolution"
import OurPortfolio from "@/Components/OurPortfolio"
import Partnership from "@/Components/Partnership"
import GetInTouch from "@/Components/GetInTouch"
import techPartners from "@/Components/techPartners"
// import Head from 'next/head'
const inter = Inter({ subsets: [ "latin" ] })

export const metadata = {
  title: "MGS Web Site",
  description:
    "Design and implement digital infrastructure solutions to create valuable network interactions.",
}

export const faviconPath = "../public/icons/favicon.ico";

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Sayfa açıklaması" />
				<meta name="keywords" content="anahtar kelimeler, SEO" />
				<link rel="icon" href="/icons/favicon.svg"/>
			</head>
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
  )
}
