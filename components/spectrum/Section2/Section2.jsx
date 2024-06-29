import React from "react";
import Img from "../../utils/image/Img";
import style from "../Section2/Section2.module.css";
import Link from "next/link";
function Section2({number}) {
  return (
    <section className={style.container}>
      <div className={style.main}>
        <div className={style.sec_img}>
          <Img 
            src={`/spectrum/Spectrum_Products_WiFi-Router_1.jpg`}
            alt="spectrum cable deals"
            sizes={{
              default: [40.4,38.88],
              mobile: [100.4,70],
            }}
          />
        </div>
        <div className={style.sec_main_text}>
          <p className={style.spectrum_mbl}>SPECTRUM MOBILE™</p>
          <h2 className="heading-2">A Better Way to Mobile Is Here</h2>
          <div className={style.tick_icon1}>
            <Img
              src={`/double_arrow.png`}
              alt="Spectrum Internet service provider"
              sizes={{
                default: [0.8, 0.8],
                mobile: [2.9,2.5],
              }}
            />
            <p>Mix and match data plans with Unlimited or By the Gig options</p>
          </div>
          <div className={style.tick_icon1}>
            <Img 
              src={`/double_arrow.png`}
              alt="Spectrum Internet service provider"
              sizes={{
                default: [0.8, 0.8],
                mobile: [2.9,2.5],
              }}
            />
            <p>Most reliable mobile service coast to coast</p>
          </div>
          <div className={style.tick_icon1}>
            <Img 
              src={`/double_arrow.png`}
              alt="Spectrum Internet service provider"
              sizes={{
                default: [0.8, 0.8],
                mobile: [2.9,2.5],
              }}
            />
            <p>Unlimited nationwide talk and text</p>
          </div>
          <div className={style.tick_icon1}>
            <Img 
              src={`/double_arrow.png`}
              alt="Spectrum Internet service provider"
              sizes={{
                default: [0.8, 0.8],
                mobile: [2.9,2.5],
              }}
            />
            <p>No contracts, added taxes or hidden fees</p>
          </div>
          <div className={style.phone}>
            <div className={style.number}>
              <Link href={`tel:${number}`}>
                <Img
                  src={`/double_arrow.png`}
                  alt="Spectrum Internet service provider"
                  sizes={{
                    default: [0.8, 0.8],
                    mobile: [2,2],
                  }}
                />
                {number}
              </Link>
             
            </div>
          </div>
          <div className={style.foot_text}>
            <p>
            ^^Savings based on single line comparison of unlimited plans among major nat’l carriers as of 08/2022: prepaid excl: data usage limits vary by carrier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
