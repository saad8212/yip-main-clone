import Link from "next/link";
import ProviderFeatures from "./ProviderFeatures";
import styles from "./providerFeatures.module.css";
const ProviderFeatureBox = () => {
  const data = [
    {
      id: "internetServiceProviders",
      type: `/images/radioSignal.webp`,
      heading: "Internet Service Providers",
      paragraph: (
        <p>
          If you're looking for high-speed internet services, Y/IP has got you
          covered. As one of the top service providers in the market, we offer
          reliable and fast connectivity to ensure a seamless browsing and
          streaming experience. With various plans, you can select the one that
          best suits your needs and budget. You can also enjoy additional
          benefits such as free installation and a dedicated customer support
          team to assist you whenever needed. Choose us today and experience
          lightning-fast services that cater to all your needs.
        </p>
      ),
    },
    {
      id: "cableServiceProviders",
      type: `/images/tvSignal.webp`,
      heading: "Cable Service Providers",
      paragraph: (
        <p>
          We are one of the top cable service providers in the market, offering
          access to various TV channels and entertainment options. With our
          cable services, you can enjoy crystal-clear picture quality and a
          variety of programming options that cater to your interests. You can
          choose from various packages offering different channels and features,
          ensuring you get the most value. Whether you're a sports fan, a movie
          buff, or just looking for family-friendly programming, you can enjoy a
          seamless cable service with Y/IP.
        </p>
      ),
    },
    {
      id: "wirelessInternetService",
      type: `/images/modem.webp`,
      heading: "Wireless Internet Service",
      paragraph: (
        <p>
          When it comes to wireless connectivity, we offer reliable and
          high-speed internet without the need for cables or wires. Our wireless
          services allow you to enjoy seamless browsing and streaming
          experiences. We offer various plans that cater to different needs and
          budgets. Our dedicated customer support team can always assist you
          with queries or issues. Choose us today and enjoy the freedom of
          wireless connectivity.
        </p>
      ),
    },
    {
      id: "highSpeedBusinessInternet",
      type: `/images/webWWW.webp`,
      heading: "High-Speed Business Internet",
      paragraph: (
        <p>
          As a business owner, you understand the importance of having a
          reliable internet connection. We offer high-speed business internet
          services that can support your company's needs. With multiple
          attractive plans, you can select the one that suits your business
          requirements and budget. We also provide additional benefits, such as
          free installation and a dedicated customer support team to assist you
          whenever needed.
        </p>
      ),
    },
  ];
  return (
    <>
      <div className={styles.InternetFeaturesBox}>
        <div className={styles.InternetFeaturesBox_inner}>
          {data.map((provider, i) => {
            return (
              <ProviderFeatures
                key={i.toString()}
                id={provider.id}
                heading={provider.heading}
                paragraph={provider.paragraph}
                type={provider.type}
                dark={true}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProviderFeatureBox;
