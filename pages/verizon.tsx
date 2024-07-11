import React from "react";
import Header from "../components/verizon/header/header";
import Section2 from "../components/verizon/section2/section2";
import Section3 from "../components/verizon/section3/section3";
import Section4 from "../components/verizon/section4/section4";
import Section5 from "../components/verizon/section5/section5";
import Section6 from "../components/verizon/section6/section6";
import Footer from "../components/verizon/footer/footer";
import PopUp from "../components/global/popup/Popup";

const Verizon = () => {
  return (
    <div>
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <PopUp
        color="linear-gradient(270deg, rgba(7, 2, 45, 1) 0%, rgba(42, 56, 96, 1) 52%, rgba(0, 212, 255, 1) 100%)"
        url="/verizon/logo.png"
        logoWidth="230px !important"
        number="+1(855)-610-0749"
      />
      <Footer />
    </div>
  );
};

export default Verizon;
