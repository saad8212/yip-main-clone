import React from "react";
import styles from "./header.module.css";

const FrontierHeader = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.logo_div}>
        <div className={styles.img_wrapper}>
          <img src="/verizon/logo.png" alt="" width={"100%"} height={"100%"} />
        </div>
      </div>

      <div className={styles.slider}>
        <div className={styles.slider_text}>
          <h2>Verizon Internet: Reliable and Fast</h2>
          <p>
            Verizon's internet service offers unparalleled reliability and
            speed, ensuring you stay connected without interruptions. Experience
            the power of fiber-optic technology for seamless browsing and
            streaming.
          </p>
        </div>
      </div>
      <div className={styles.limited_time}>
        <h1>Limited Time Offer</h1>
        <p>
          Save $15/mo. on Fiber 500 and 1 Gig. Plus, free expert installation
          included. only on "Verizon"
        </p>
      </div>
    </div>
  );
};

export default FrontierHeader;
