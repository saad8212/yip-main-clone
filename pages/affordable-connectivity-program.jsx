
import Header from './../components/global/header/Header';
import ACP from './../components/acp/acp';
import InternetBanner from "../components/services/banner/InternetBanner";
import Head from "next/head";
const ACProgram = ({ data }) => {
  return (
    <>
      <Head>
        <title>Affordable Connectivity Program (ACP) </title>
        <meta name="title" content='Affordable Connectivity Program (ACP)' />
        <meta name="description" content='Save on internet bills! Affordable Connectivity Program (ACP) offers your household a $30 monthly discount on internet service.' />
        <meta name="keywords" content='affordable connectivity program, acp program, affordable connectivity program acp, acp program internet, acp customer service' />
      </Head>
      <main>
        <Header />
        <InternetBanner
          text={
            <>
              Affordable <span className="color__secondary">Accountability</span> Program
              (ACP)
            </>
          }
          paragraph="The ACP program offers eligible households substantial discounts on their internet or wireless services"
        />
        <ACP />
      </main>
    </>
  );
};

export default ACProgram



