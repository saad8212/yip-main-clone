import React from "react";
import styles from "./section6.module.css";

const Section6 = () => {
  return (
    <>
      <div className={styles.image_wrapper}>
        <img src="/verizon/hero-2.jpg" alt="" width={"100%"} height={"100%"} />
      </div>
      <div className={styles.limited_time}>
        <p>
          Ready to find internet plans available on verizon in your
          neighborhood?
        </p>
      </div>
    </>
  );
};

export default Section6;
