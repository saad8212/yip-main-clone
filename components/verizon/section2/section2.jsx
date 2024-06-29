import React from "react";
import styles from "./section2.module.css";

const Section2 = () => {
  return (
    <div className={styles.main_div}>
    <div className={styles.paragraph}>
      <p>Get ready for a Verizon FiOS upgrade.</p>
      <p>Go further with Verizon FiOS Fiber 5 Gig Internet.</p>
    </div>
    <div className={styles.content_wrapper}>
      <div className={styles.content_box}>
        <div className={styles.icon_wrapper}>
          <img
            src="/verizon/service-2.svg"
            alt="Verizon FiOS Internet"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <p>Unlock unlimited FiOS potential</p>
        <p>Stream, work, and game with no data caps or overage charges on Verizon FiOS.</p>
      </div>
      <div className={styles.content_box}>
        <div className={styles.icon_wrapper} style={{ width: "60px" }}>
          <img
            src="/verizon/service-1.svg"
            alt="Verizon FiOS Internet"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <p>Unlock unlimited FiOS potential</p>
        <p>Stream, work, and game with no data caps or overage charges on Verizon FiOS.</p>
      </div>
      <div className={styles.content_box}>
        <div className={styles.icon_wrapper} style={{ width: "60px" }}>
          <img
            src="/verizon/service-3.svg"
            alt="Verizon FiOS Internet"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <p>Unlock unlimited FiOS potential</p>
        <p>Stream, work, and game with no data caps or overage charges on Verizon FiOS.</p>
      </div>
      <div className={styles.content_box}>
        <div className={styles.icon_wrapper} style={{ width: "50px" }}>
          <img
            src="/verizon/service-1.svg"
            alt="Verizon FiOS Internet"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <p>Unlock unlimited FiOS potential</p>
        <p>Stream, work, and game with no data caps or overage charges on Verizon FiOS.</p>
      </div>
    </div>
  </div>
  
  );
};

export default Section2;
