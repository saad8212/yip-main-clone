import React from 'react'
import Img from '../../components/utils/image/Img'
import style from './CoxBanner.module.css'
import Popup from '../../components/global/popup/Popup'
function CoxBanner() {
  return (
   <div className={style.container}>
      <div className={style.banner}>
        <h1> <span>/</span>Cox Communications: Internet | cable | Home Security</h1>
        <ul>
          <li>Blazing fast Cox Internet offers speeds up to 1 Gig</li>
          <li>Unlimited local and long-distance calling with Cox Voice</li>
          <li>An exhilarating lineup of more than 250 channels including HBO Max™, ShowTime®, and STARZ® with Cox Cable</li>
          <li>Take control of your entire home with Cox Home Security and Home Automation Solutions</li>
        </ul>
        <h2>Cox Internet Essential</h2>
            <h4>$49.99 <sub>/month</sub></h4> 
            <p>Everyday Low Price. No Term Contract.</p>
        <a href="tel:+18009623418"> +1+1(800) 962-3418</a>
      </div>
      <div className={style.bannar_image_sec}>
        <span><Img 
        src={`/cox/cox-banner-img.webp`}
          alt="Banner image"
          sizes={{
          default: [45,30],
          mobile: [91,59],
      }}
        /></span>
      </div>
      <Popup color="linear-gradient(120deg, rgba(187,154,222,1), 12%, rgba(187,154,222,1), rgba(187,208,153,1) 96%)" url = "/cox/cox.png"/>
      </div>
  )
}

export default CoxBanner