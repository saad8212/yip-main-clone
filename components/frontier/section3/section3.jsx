import React from 'react'
import styles from "./section3.module.css";

const Section3 = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.left_content}>
        <h1><b>Save $120 on YouTube TV</b></h1>
        <p>Get your favorite channels with Frontier® Fiber and YouTube TV. Save $10/mo. on your first year of YouTube TV. Watch 100+ channels of live sports, news and shows on our ultra-fast fiber internet.Tooltip Icon</p>
      </div>
      <div className={styles.right_content}>
        <img src="./frontier/lcd_screen.png" alt="" width={'100%'} height={'100%'}/>
      </div>
    </div>
  )
}

export default Section3