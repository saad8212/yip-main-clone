import Popup from "../../global/popup/Popup";
import Img from "../../utils/image/Img";
import style from "./header.module.css";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Img
          src={`/att/att-new.png`}
          alt="img"
          sizes={{
            default: [10, 4.5],
            mobile: [33.4, 13.4],
          }}
        />
      </div>
      <div className={style.tag}>
        <a href="tel:+1(888)-659-6919">+1(888)-659-6919</a>
      </div>
      <Popup
        color="#0b9eda"
        url="/att/att-new.png"
        text="Call to get AT&T internet Now"
        number="1-888-659-6919"
      />
    </header>
  );
};
