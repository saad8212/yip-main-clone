import { Box } from "./Box";
// style
import styles from "./provider.module.css";
import { motion, useScroll } from "framer-motion";
import useDimensions from "../../../hooks/use-dimensions"; 

const pagesURL = [
  "/internet-providers-in-your-area",
  "/cable-tv-providers-in-your-area",
  "/",
  "/phone-services-providers",
];

const Providers = ({ content }: any) => {
  const { width } = useDimensions();
  

  return (
    <section>
      <motion.section 
        className= {styles.wrapper}
      
      >
        <motion.div
          whileInView={{ y: 0 }}
          initial={{ y: 200 }}
          viewport={{ once: true }}
          transition={{
            duration: width < 600 ? 0.6 : 1,
          }}
          className={styles.compare_bg}
        >
          <div className={styles.best_text + " text-center"}>
            <h2 className="heading__primary color__fifth">
              {content.primary_heading}
            </h2>
          </div>
          <div className={styles.provider_row}>
            {/* {data.map((box, i) => {
              return (
                <Box
                  key={i.toString()}
                  img={box.img}
                  heading={content.items[i].title}
                  para={content.items[i].description}
                  url={pagesURL[i]}
                />
              );
            })} */}
            <Box
              img={`/images/wifi.png`}
              heading="Internet"
              para={
                <p>
                  We offer lightning-fast speeds of up to 400 Mbps with DSL,
                  fiber-optic, or satellite. Affordable rates and tailored
                  features are available.
                </p>
              }
              url="/internet-providers-in-your-area"
            />
            <Box
              img={`/images/cable.png`}
              heading="Cable"
              para={
                <p>
                  Find cable plans to match your preferences. Immerse yourself
                  in top-tier picture quality, customizable viewing options, and
                  exceptional customer service.
                </p>
              }
              url="/cable-tv-providers-in-your-area"
            />
            <Box
              img={`/images/landline.png`}
              heading="Landline"
              para={
                <p>
                  Socialize or attend business through our reliable and
                  affordable landline plans from top USA providers with
                  crystal-clear sound and multiple features
                </p>
              }
              url="/"
            />
            <Box
              img={`/images/mobile.png`}
              heading="Phones"
              para={
                <p>
                  We offer on-the-go affordable and flexible phone plans from
                  top USA providers. Enjoy unlimited talk, text, and data to
                  stay connected.
                </p>
              }
              url="/phone-services-providers"
            />
          </div>
        </motion.div>
      </motion.section>
    </section>
  );
};
export default Providers;
