import Head from "next/head";
import MainPage from "./../components/century-link/centuryLink"
import Script from "next/script";

export default function Century() {
  return (
    <>
    <Script id="faq-century" type="application/ld+json">
    {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is century ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "century by Comcast is a corporation that provides internet, TV, and phone services. In addition to this, you can also get century home security system at affordable prices."
    }
  },{
    "@type": "Question",
    "name": "Is Comcast and century the same thing ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "+ Comcast and century are the same things, more or less. +Comcast acts as the parent organization, while century takes the lead as the premier brand delivering a broad spectrum of services like cable TV, internet, phone, and additional utilities."
    }
  },{
    "@type": "Question",
    "name": "Is century available in my area ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "While century has a considerable presence and expansive coverage across various states, the optimal approach to determine the availability in your vicinity is by entering your zip code."
    }
  },{
    "@type": "Question",
    "name": "How much does century cost after 12 months ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "After a year of century service, you might see an increase in your monthly payment, which can depend on the plan you selected and your area."
    }
  },{
    "@type": "Question",
    "name": "How much does century cost ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "century extends an array of services in various packages, and the monthly subscription cost is contingent upon the services and packages you choose. An effective strategy to trim down your century bills is to bundle your century services."
    }
  }]
}`}

    </Script>
      <Head>
        <title>
          Centurylink Best Internet Services, TV, Home Phone Plans and Prices
        </title>
        <meta
          name="title"
          content="century Best Internet Services, TV, Home Phone Plans and Prices"
        />
        <meta
          name="description"
          content="Experience lightning-fast internet speeds with century. From streaming in 4K to staying connected on the go, our reliable service and 20 million WiFi hotspots have you covered."
        />
        <meta
          name="keywords"
          content="century internet provider, century Internet offers, century Internet deals, century internet customer service, century internet customer service phone number"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourinternetprovider.com/centurylink"
        />
        <meta
          property="og:title"
          content="century Best Internet Services, TV, Home Phone Plans and Prices"
        />
        <meta
          property="og:description"
          content=" Experience lightning-fast internet speeds with century. From streaming in 4K to staying connected on the go, our reliable service and 20 million WiFi hotspots have you covered."
        />
        <meta
          property="og:image"
          content="https://www.yourinternetprovider.com/_next/image?url=https%3A%2F%2Fnext.thepic.store%2Ffrontend%2Flogo.WebP&w=1920&q=75"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.yourinternetprovider.com/centurylink"
        />
        <meta
          property="twitter:title"
          content="century Best Internet Services, TV, Home Phone Plans and Prices"
        />
        <meta
          property="twitter:description"
          content="Experience lightning-fast internet speeds with century. From streaming in 4K to staying connected on the go, our reliable service and 20 million WiFi hotspots have you covered."
        />
        <meta
          property="twitter:image"
          content="https://www.yourinternetprovider.com/_next/image?url=https%3A%2F%2Fnext.thepic.store%2Ffrontend%2Flogo.WebP&w=1920&q=75"
        />
      </Head>
      <main className="xfinity_wrapper">
       <MainPage/>
      </main>
    </>
  );
}
