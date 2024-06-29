import React from "react";
import Img from '../../utils/image/Img'
import style from "./XfinityFooter.module.css";
function XfinityFooter() {
  return (
    <nav className={style.main_nav}>
      <div className={style.container}>
        <Img 
            src={`/xfinity/logo.webp`}
            alt="Footer logo"
            sizes={{
              default: [14,5],
              mobile: [34,17],
          }}
        />
        <div className={style.nav_logo}>
          <Img src={`/xfinity/footer-logo.png`} alt="Footer logo" 
            sizes={{
              default: [8,8],
              mobile: [20,20],
          }}
          />
        </div>
      </div>
    </nav>
  );
}

export default XfinityFooter;
