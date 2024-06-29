import styles from "./banner.module.css";
import dynamic from "next/dynamic";
const Banner = ({ content }: any) => {
  const CursorAnimation = dynamic(
    () => import("../../utils/bg-cursor-animation/CursorAnimation"),
    {
      loading: () => <p>Loading...</p>, // Optional loading component
      ssr: false, // Set to true if you want to enable server-side rendering for this component
    }
  );

  const scrollToProviders = () => {
    const element = document.getElementById("down");
    if (element) {
      window.scrollTo(0, element.offsetTop + 50);
    }
  };

  return (
    <section className={styles.banner_sec}>
      <CursorAnimation />
      <div className={styles.banner_textCol}>
        <div className={styles.banner_heading + " text-center"}>
          <h2 className="heading__main">{content.primary_heading}</h2>
          <p className="para__primary">{content.text}</p>
          <button onClick={scrollToProviders} className="para__primary">
            {content.secondary_heading}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
