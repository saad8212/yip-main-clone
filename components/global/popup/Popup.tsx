import React, { useState } from "react";
import styles from "./popup.module.css";

const Popup = (props:any) => {
  const [isOpen, setIsOpen] = useState(true);  
    const formattedNumber =  props.number? `tel:+${props.number}`: `tel:+18886268081`;
    const number = props.number? props.number :'+1-888-626-8081'
    const Width =  props.logoWidth? props.logoWidth :'130px !important'
    const text = props.text? props.text : 'Call to Pay Your Bill Now'
    const handleClick = () => {
      window.location.href = formattedNumber;  
    };
  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={handleClick}> 
            <div className={styles.popup} onClick={handleClick}>
            <div className={styles.popupHeader} style = {{background:props.color}}></div>
            <div className={styles.popupContent}>
                <img src={`${props?.url}`} alt="Logo" className={styles.logo} style={{width: Width}} />
                <h2 className={styles.heading}> {text} </h2>
                <p className={styles.phoneNumber} style = {{background:`${props.color}`}}>{number}</p>
            </div>
            <div className={styles.popupFooter} style = {{background:props.color}}>Call Now  {number}</div>
            </div>
        </div>
      )}
    </>
  );
};

export default Popup;