import React from 'react'
import Header from '../components/frontier/header/header'
import Section2 from '../components/frontier/section2/section2'
import Section3 from '../components/frontier/section3/section3'
import Section4 from '../components/frontier/section4/section4'
import Section5 from '../components/frontier/section5/section5'
import Section6 from '../components/frontier/section6/section6'
import Footer from '../components/frontier/footer/footer'
import PopUp from '../components/global/popup/Popup'

const Frontier = () => {
  return (
    <div>
        <Header/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <PopUp color="red" url = "./frontier/frontier_logo.webp" logoWidth="230px !important" number="+0-(000)-000-0000" />
        <Footer />
    </div>
  )
}

export default Frontier