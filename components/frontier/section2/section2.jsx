import React from "react";
import styles from "./section2.module.css";

const Section2 = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.paragraph}>
        <p>Get ready for an frontier upgrade.</p>
        <p>Go further with Frontier Fiber 5 Gig Internet</p>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.content_box}>
          <div className={styles.icon_wrapper}>
            <img
              src="./frontier/lock_icon.png"
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </div>
          <p>Unlock unlimited</p>
          <p>Stream, work and game with no data caps or overage charges.</p>
        </div>
        <div className={styles.content_box}>
          <div className={styles.icon_wrapper} style={{ width: "60px" }}>
            <img
              src="./frontier/screen_icon.png"
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </div>
          <p>Unlock unlimited</p>
          <p>Stream, work and game with no data caps or overage charges.</p>
        </div>
        <div className={styles.content_box}>
          <div className={styles.icon_wrapper} style={{ width: "60px" }}>
            <img
              src="./frontier/wifi_icon.png"
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </div>
          <p>Unlock unlimited</p>
          <p>Stream, work and game with no data caps or overage charges.</p>
        </div>
        <div className={styles.content_box}>
          <div className={styles.icon_wrapper} style={{ width: "50px" }}>
            <img
              src="./frontier/fiber_icon.png"
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </div>
          <p>Unlock unlimited</p>
          <p>Stream, work and game with no data caps or overage charges.</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
