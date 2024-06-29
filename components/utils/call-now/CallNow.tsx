import useDimensions from "../../../hooks/use-dimensions";
import styles from "./callNow.module.css";
import Img from "../image/Img";

const callVarient = {
  default: {
    width: "22px",
    transition: {
      delay: 0.4,
      ease: "easeInOut",
    },
  },
  move: {
    width: 0,
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};

const CallNow = () => {
  const { width } = useDimensions();
  return (
    <>
      {width && (width < 600 ? (
        <div style={{ border: "1px solid #000" }}>
          <a
            href="tel:+1+1(800) 962-3418"
            className={styles.callNow}
            id = "mobile-call-to-action"
          >
            <Img
              src={`/call.svg`}
              alt="call now"
              sizes={{
                default: [0,0],
                mobile: [7.4,7],
              }}
            />
          </a>
        </div>
      ) : (
        ""
      )) || ""}
    </>
  );
};

export default CallNow;
