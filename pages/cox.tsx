import Head from "next/head";
import CoxBanner from "../Cox/CoxBanner/CoxBanner";
import CoxBox from "../Cox/CoxBundls/CoxBox";
import CoxFAQS from "../Cox/CoxFAQS/CoxFAQS";
import CoxWrapper from "../Cox/CoxWrapper/CoxWrapper";
import CoxWrraper2 from "../Cox/CoxWrapper2/CoxWrapper2";
import CoxFooter from "../Cox/Footer/CoxFooter";
import CoxHeader from "../Cox/Header/CoxHeader";
import Script from "next/script";

export default function Xfinity() {
  return (
    <>
      <Script id="faq-cox" type="application/ld+json">
        {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Is Cox customer service 24 hours?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Cox Customer Service works 24/7 to assist their customers. Simply dial +1+1(800) 962-3418 to get hold of a representative."
    }
  },{
    "@type": "Question",
    "name": "How to pay Cox bill?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Reach out to Cox customer service for assistance regarding billing by dialing +1+1(800) 962-3418."
    }
  },{
    "@type": "Question",
    "name": "How can I get discount on Cox Internet?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Learn about any discount or promotions being on Cox service by contacting us at +1+1(800) 962-3418."
    }
  },{
    "@type": "Question",
    "name": "How to set up Cox account?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "As a Cox customer, you can call here +1+1(800) 962-3418 to register your Cox account on the official website."
    }
  },{
    "@type": "Question",
    "name": "How do you check if Cox is down in my area?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "You can find out about any outages by dialing Cox customer service number +1+1(800) 962-3418 ."
    }
  }]
}`}
      </Script>
      <Head>
        <title>
          Cox Internet, cable, cell phone service plans & home security
        </title>
        <meta
          name="description"
          content="Cox Communications provides Internet, cable, cell phone plans & home security service.
         Supports six million residential and business customers in America. "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content=" Cox Internet plans, cox cable and internet,
         cox cell phone service, cox home security,
          cox internet prices and bundles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="cox_wrapper" style={{ overflow: "hidden" }}>
        <CoxHeader />
        <CoxBanner />
        <CoxBox />
        <CoxWrapper />
        <CoxWrraper2 />
        <CoxFAQS />
        <CoxFooter />
      </main>
    </>
  );
}
