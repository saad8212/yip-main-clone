import React from "react";
import styles from "./header.module.css";

const FrontierHeader = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.logo_div}>
        <div className={styles.img_wrapper}>
          <img
            src="./frontier/frontier_logo.webp"
            alt=""
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <div className={styles.limited_time}>
        <h1>Limited Time Offer</h1>
        <p>
          Save $15/mo. on Fiber 500 and 1 Gig. Plus, free expert installation
          included. only on frontier 
        </p>
        <p>Get Started Now!</p>
      </div>
      <div className={styles.slider}>
        <img
          src="./frontier/slider_img1.png"
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default FrontierHeader;
