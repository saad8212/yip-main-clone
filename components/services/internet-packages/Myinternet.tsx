import InternetPackages from "./InternetPackages";
import styles from "./Internetpackages.module.css";
const Myinternet = () => {
  const data = [
    {
      one: "1",
      image: `/providers/Exfinity.webp`,
      call: "+1+1(800) 962-3418",
    },
    {
      one: "2",
      image: `/providers/spectrum.webp`,
      call: "+1+1(800) 962-3418",
    },
    {
      one: "3",
      image: `/providers/HomeInternet.webp`,
      call: "+1+1(800) 962-3418",
    },
    {
      one: "4",
      image: `/providers/cox.webp`,
      call: "+1+1(800) 962-3418",
    },
  ];
  return (
    <div className={styles.main}>
      <h2 className="heading__primary color__secondary">
        Top Cable TV Providers
      </h2>

      {data.map((detail, i) => {
        return (
          <InternetPackages
            key={i}
            one={detail.one}
            call={detail.call}
            image={detail.image}
          />
        );
      })}
    </div>
  );
};

export default Myinternet;
