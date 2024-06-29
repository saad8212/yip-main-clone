import React from 'react'
import style from "./section.module.css";

const Section = () => {
  return (
    <div className={style.blue_section}>
     <div className={style.calling}>
       <h3>Call now to get your AT&T Internet plan today.</h3>
        <a href='tel:+1(888)-659-6919'>+1(888)-659-6919</a>
     
     </div>
    </div>
  )
}

export default Section