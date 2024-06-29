import Head from "next/head";
import style from "../components/spectrum/main.module.css";

import Header from "../components/spectrum/Header/Header";
import Section from "../components/spectrum/section1/Section";
import Section2 from "../components/spectrum/Section2/Section2";
import Area from "../components/spectrum/Area/Area";
import Section4 from "../components/spectrum/Section4/Section4";
import Footer from "../components/spectrum/Footer/Footer";
import Popup from "../components/global/popup/Popup";
import Discliamer from "../components/disclaimer/disclaimer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Spectrum Deals - Best internet, cable tv & Home Phone Services
        </title>
        <meta
          name="title"
          content=" Spectrum Deals - Best internet, cable tv & Home Phone Services"
        />
        <meta
          name="description"
          content="Spectrum offers great deals for internet, cable TV, and home phone services at best prices in your Area. Choose from a range of internet plans & Packages."
        />
        <meta
          name="keywords"
          content="spectrum internet provider, spectrum internet provider near me, spectrum internet deals, spectrum cable deals, spectrum package deals"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.spectrum_wrapper}>
        <Header number="1(855)-517-5070" />
        <Section number="1(855)-517-5070" />
        <Section2 number="1(855)-517-5070" />
        <Area />
        <Section4 />
        <Discliamer provider="spectrum" />
        <Footer />
        
        <Popup
          color="#003057"
          url="/spectrum/logo2.png"
          number="1(855)-517-5070"
          text = "Call to Cancel Spectrum"
        />
      </main>
    </>
  );
}
