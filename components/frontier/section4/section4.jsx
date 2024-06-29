import React from "react";
import styles from "./section4.module.css";

const Section4 = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.left_content}>
        <img
          src="./frontier/section4_image.png"
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className={styles.right_content}>
        <h1>
          <b>Best Unlimited Internet Plans With No Caps</b>
        </h1>
      </div>
    </div>
  );
};

export default Section4;
