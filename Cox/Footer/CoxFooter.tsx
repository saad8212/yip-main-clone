import React from 'react'
import Img from '../../components/utils/image/Img'
import style from './CoxFooter.module.css'
function CoxFooter() {
  return (
    <nav className={style.main_nav}>
    <div className={style.container}>
    <Img 
        src={`/cox/cox_logo.svg`}
          alt="Banner image"
          sizes={{
          default: [9,7],
          mobile: [25,19],
      }}
        />
         <div className={style.nav_btn}><a href="tel:+18009623418"> +1+1(800) 962-3418</a></div>
    </div>
</nav>
  )
}

export default CoxFooter

 