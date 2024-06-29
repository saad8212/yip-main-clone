import React from "react";
import Img from "../../utils/image/Img";
import styles from '../Header/Header.module.css'
const Header = ({number}) => {
  return (
    <header className={styles.header}>
      <div className={styles.text_main}>
        <div>
          
        </div>
        <div>
          <h3>CALL FROM 10:00 AM TO 7:00 PM</h3>
          <a href={`tel:${number}`}>{number}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
