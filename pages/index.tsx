import Head from "next/head";
import Script from "next/script";
import QnA from "../components/global/QnA/QnA";
import Banner from "../components/home/banner/Banner";
import InternetProviders from "../components/home/internetProviders/InternetProviders";
import Providers from "../components/home/providers/Providers";
import YipDifferent from "../components/home/yip-different/YipDifferent";
import getBlogs from "../controllers/getBlogs";

// Content
import Link from "next/link";
import IntroductionService from "../components/home/introduction-services/IntroductionService";
import LatestBlogs from "../components/home/latest-blogs/LatestBlogs";
import ProviderFeatureBox from "../components/home/provider-features/ProviderFeatureBox";
import content from "../data/home.json";
import Popup from "../components/global/popup/Popup";

const Home = ({ data }: any) => {
  const dataProvider = [
    {
      heading: "What is YourInternetProvider?",
      text: "YourInternetProvider is an online portal that helps you find the best TV, internet, and home phone deals in your area. Simply enter your Devices and address, and we'll search through a range of top-rated service providers to find the best packages to fit your needs. Our expert team is always available to help you find the right deal and answer any questions you have. Our goal is to make it easy for you to discover and compare available options to find the perfect package.",
    },
    {
      heading: "What services does YourInternetProvider offer?",
      text: (
        <p>
          As an authorized retailer for top telecom providers in the U.S.A,
          YourInternetProvider helps you find the best deals on{" "}
          <Link
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}phone-services-providers`}
          >
            phone
          </Link>
          ,{" "}
          <Link
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}cable-tv-providers-in-your-area`}
          >
            cable
          </Link>
          , and{" "}
          <Link
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}internet-providers-in-your-area`}
          >
            internet services
          </Link>{" "}
          in your area. Our website features a comprehensive list of all
          available provider according to your zip code, allowing you to easily
          compare Starting pricing, features, terms & conditions.
        </p>
      ),
    },
    {
      heading: "How can I get services from YourInternetProvider?",
      text: (
        <p>
          Ordering services is easy! You can simply call us at{" "}
          <a href="tel:+18009623418"> +1+1(800) 962-3418</a>, and our highly trained
          customer service representatives will guide you through the process.
          We understand that navigating the world of telecom can be
          overwhelming, so we're here to help you find the perfect internet
          service provider to meet your unique needs.
        </p>
      ),
    },
    {
      heading: "What information do I need to provide when ordering services?",
      text: "To get started, all you need to provide is your address and contact information. We'll take care of the rest! Our advanced technology scans thousands of service providers to find the best offers available in your area. By providing your information, you can be confident that you'll get the best service at the best price.",
    },
  ];
  console.log('...', data)
  return (
    <>
      <Script
        type="application/ld+json"
        id="normal"
        className="yoast-schema-graph yoast-schema-graph--main"
      >
        {`{"@context":"https://schema.org",
          "@graph":[{"@type":"WebSite",
          "@id":"https://www.yourinternetprovider.us/#website",
            "url":"https://www.yourinternetprovider.us/",
            "name":"yourinternetprovider.us",
            "inLanguage":"en-US",
            "description":"Internet Provider Comparisons, Speed and Streaming Guides, and FAQ",
            "potentialAction":[{"@type":"SearchAction",
            "target":"https://www.yourinternetprovider.us/?s={search_term_string}",
            "query-input":"required name=search_term_string"}]},
            {"@type":"ImageObject",
            "@id":"https://next.thepic.store/frontend/logo.svg/#primaryimage",
            "inLanguage":"en-US",
            "url":"https://next.thepic.store/frontend/logo.svg"},
            {"@type":"WebPage","@id":"https://www.yourinternetprovider.us/#webpage",
            "url":"https://www.yourinternetprovider.us/",
            "name":"Helping you find high speed quality internet service providers",
            "isPartOf":{"@id":"https://www.yourinternetprovider.us/#webpage"},
            "inLanguage":"en-US",
            "primaryImageOfPage":
            {"@id":"https://next.thepic.store/frontend/logo.svg"},
            "datePublished":"2023-02-20T17:15:46+00:00",
            "dateModified":"2023-02-22T16:56:31+00:00",
            "description":"Compare internet service providers in your area. Find speeds, prices, customer satisfaction scores, and reviews for ISPs near you.",
            "potentialAction":[{"@type":"ReadAction",
            "target":["https://www.yourinternetprovider.us/"]}]}]}

          `}
      </Script>
      <Script type="application/ld+json" id="website">
        {`{
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.yourinternetprovider.us/",
            "name": "yourinternetprovider.us",
            "description": "Looking for the best internet service providers in your area? Compare top cable, phone, Landline and wireless providers to find the right fit for your needs.",
            "about": "Internet Providers",
            "dateModified": "2023-03-05T15:15:56+00:00",
            "thumbnailUrl": "https://next.thepic.store/frontend/logo.svg",
            "author": {
            "@type": "Person",
            "name": "Muhammad Arshad"
            },
            "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.yourinternetprovider.us?zip={zip}",
            "query-input": "name=zip"
            }
            }
          `}
      </Script>
      <Script type="application/ld+json" id="organization">
        {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "YourInternetProvider",
            "alternateName": "Internet Service Provider",
            "url": "https://www.yourinternetprovider.us/",
            "logo": "https://next.thepic.store/frontend/logo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1+1(800) 962-3418",
              "contactType": "customer service",
              "contactOption": "HearingImpairedSupported",
              "areaServed": "US",
              "availableLanguage": "en-US"
            },
            "sameAs": "https://www.yourinternetprovider.us/"
          }
          `}
      </Script>
      {/* Google tag (gtag.js) */}
      <Script id="analytics">
        {`{
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RR7J7CT0ST');
        }
        `}
      </Script>
      
      <Head>
        <title>
          Helping you find high speed quality internet service provider
        </title>
        <meta
          name="title"
          content="Helping you find high speed quality internet service provider"
        />
        <meta
          name="description"
          content="Looking for the best internet service providers in your area? Compare top cable, phone, Landline  and wireless providers to find the right fit for your needs."
        />
        <meta
          name="keywords"
          content="internet service providers, internet service providers in my area, cable service providers, wireless internet service providers, business internet service providers"
        />
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.yourinternetprovider.us/"
        />
        <meta
          property="og:title"
          content="Helping you find high speed quality internet service providers"
        />
        <meta
          property="og:description"
          content="Looking for the best internet service providers in your area? Compare top cable and wireless providers to find the right fit for your needs. Discover the top business internet service providers for reliable and fast internet connectivity."
        />
        <meta
          property="og:image"
          content="https://yip-storage.s3.amazonaws.com/yourinternetprovider.png"
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.yourinternetprovider.us"
        />
        <meta
          property="twitter:title"
          content="Helping you find high speed quality internet service providers"
        />
        <meta
          property="twitter:description"
          content="Looking for the best internet service providers in your area? Compare top cable and wireless providers to find the right fit for your needs. Discover the top business internet service providers for reliable and fast internet connectivity."
        />
        <meta
          property="twitter:image"
          content="https://yip-storage.s3.amazonaws.com/yourinternetprovider.png"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="Z_QaMPQN2Fj6qakI0oyGR6uHowiRc9hx__DOIA8-v3g"
        />
        <link
          rel="alternate"
          href="https://www.yourinternetprovider.us/"
          hrefLang="en-us"
        />
        <link href="https://www.yourinternetprovider.us/" rel="canonical" />
        <link rel="icon" href="/favicon.ico" />
         
       
      </Head>
       
      <main>
        <Banner content={content.banner} />
        <Providers content={content.plans} />
        <YipDifferent />
        <IntroductionService />
        <InternetProviders />
        <ProviderFeatureBox /> 
        {/* <LatestBlogs blogs={data}/>  */}
        <QnA data={dataProvider} />
       
      </main>
    
    </>
  );
};

// export async function getStaticProps() {
//   const response = (await getBlogs(1, 5)) as [];
//   if (response.length < 1) {
//     return {
//       props: {
//         data: [],
//       },
//     };
//   }
//   return {
//     props: {
//       data: response,
//     },
//   };
// }
export default Home;
