import React from "react";
import styles from "./section5.module.css";

const Section5 = () => {
  return (
    <div className={styles.main_div}>
        <div className={styles.right_content}>
        <img
          src="/verizon/hero-1.jpg"
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className={styles.left_content}>
        <h1>
          <b>Do more even faster on verizon</b>
        </h1>
        <p>
        Verizon supercharges your internet so you can work, live and play the
          way you want.
        </p>
      </div>
    
    </div>
  );
};

export default Section5;
