import React from 'react'
import Img from "../../utils/image/Img";
import style from './OptimumFooter.module.css'
function OptimumFooter() {
  return (
    <nav className={style.main_nav}>
    <div className={style.container}>
    <Img 
            src="/Optimum/logo-optimum.png"
            alt="Wrapper image"
            sizes={{
              default:[12,6],
              mobile : [40,20]
            }} 
          />
         <div className={style.nav_btn}><a href="tel:+18009623418">+1+1(800) 962-3418</a></div>
    </div>
</nav>
  )
}

export default OptimumFooter

 