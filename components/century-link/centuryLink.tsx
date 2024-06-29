import style from "./CenturyLink.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img from "../utils/image/Img";
import Popup from "../global/popup/Popup";
import Discliamer from "../disclaimer/disclaimer";
// import xyz from "../../public/centurylink/100mbps.svg"

function App() { 
  const formattedNumber = 'tel:+1-888-636-4073'
  const handleClick = () => {
    window.location.href = formattedNumber;  
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={style.mainDiv}>
      <div className={style.header}>
        <div className={style.logo}>
          {/* <img src="/centurylink/centurylink-logo-final.png" alt="" /> */}
          <Img
            src={`/centurylink/centurylink-logo-final.png`}
            alt="checkmark"
            sizes={{
              default: [20, 5],
              mobile: [10, 10],
            }}
          />
        </div>
        <div className={style.header_number} onClick={handleClick}>
          <p>+1 +1(888)-636-4073</p>
          <p style={{color: 'rgb(16, 142, 74)'}}>Call Now</p>
        </div>
      </div>
      <Slider {...settings}>
        <div className={style.slider_image}>
          <div className={style.slider_container}>
            <div className={style.left_content}>
              <h2> We've got your need for speed</h2>
              <p> Check your top speeds up to 940 Mbps</p>
            </div>
            <div className={style.right_content}>
              <div className={style.left_Oval}>
                <Img
                  src={`/centurylink/100mbps.svg`}
                  alt="checkmark"
                  sizes={{
                    default: [10.5, 7],
                    mobile: [10, 10],
                  }}
                />
              </div>
              <div className={style.right_Oval}>
                <Img
                  src={`/centurylink/940mbps.svg`}
                  alt="checkmark"
                  sizes={{
                    default: [10.5, 7],
                    mobile: [10, 10],
                  }}
                />
              </div>
              <div className={style.left_wrapper}>
                <h2>Simply Unlimited Internet</h2>
                <div className={style.bulletContent}>
                  <ul>
                    <li>Work from home and shop online</li>
                    <li>
                      Unlimited data on a 99.9% reliable* network <br />
                      <p>*Based on network uptime or availability </p>
                    </li>
                    <li>Connect multiple users and devices</li>
                    <li>Stream HD movies</li>
                    <li>No annual contract</li>
                  </ul>
                </div>
                <div className={style.bundlePrice}>
                  <sup>$</sup>55<span>/mo</span>
                </div>
                <div className={style.bundleDisclaimer}>
                  Speed may not be available in your area.
                  <br /> Paperless billing required. Taxes and fees apply.{" "}
                  <p>Offer Details</p>
                </div>
              </div>
              <hr />
              <div className={style.right_wrapper}>
                <div className={style.left_wrapper}>
                  <h2>Fiber Internet</h2>
                  <div className={style.bulletContent}>
                    <ul>
                      <li>20X faster upload speed than cable^</li>
                      <li>
                        Unlimited data on a 99.9% reliable* network <br />
                        <p>*Based on network uptime or availability </p>
                      </li>
                      <li>
                        <span style={{ fontWeight: "bold", color: "#0047BB" }}>
                          FREE
                        </span>{" "}
                        installation -{" "}
                        <span style={{ fontWeight: "bold", color: "#0047BB" }}>
                          $129
                        </span>{" "}
                        value
                      </li>
                      <li>WiFi equipment provided - no monthly charge</li>
                      <li>No annual contract</li>
                    </ul>
                  </div>
                  <div className={style.bundlePrice}>
                    <sup>$</sup>75<span>/mo</span>
                  </div>
                  <div className={style.bundleDisclaimer}>
                    Speed may not be available in your area.
                    <br /> Paperless billing required. Taxes and fees apply.{" "}
                    <p>Offer Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img src="/centurylink/slider_image_1.png" alt="" />
        </div>
        <div className={style.slider_image}>
          <img
            src="/centurylink/slider_image_2.png"
            alt=""
            style={{ left: "390px" }}
          />
          <div className={style.slider_2_contentBox}>
            <h2>Work hard. Play hard.</h2>
            <h1>Get internet that's up to the challenge.</h1>
            <p>
              Whether you're pulling long hours at your small business, or
              marathon gaming at home, we've got internet that's fast and
              reliable enough for you. Discover CenturyLink Fiber today.
            </p>
            <h3>Learn more about CenturyLink Small Business</h3>
            <h4> Service/fiber may not be available in your area.</h4>
          </div>
        </div>
        <div className={style.slider_image}>
          <img src="/centurylink/slider_image_3.png" alt="" />
          <div className={style.slider_3_contentBox}>
            <div className={style.accessories_title}>
              Expand your CenturyLink
              <br /> entertainment &amp; experiences
            </div>
            <div className={style.accessories_content}>
              Your smart-home will come to life with WiFi range
              <br /> extenders, security doorbells and cameras,
              <br /> work-from-home or learning technology,
              <br /> streaming TV devices, and more.
              <p>See Details</p>
            </div>
          </div>
        </div>
      </Slider>
      <div className={style.features}>
        <div className={style.iconBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="73.113"
            height="55.406"
            viewBox="0 0 73.113 55.406"
          >
            <g
              id="Group_2761"
              data-name="Group 2761"
              transform="translate(-345.147 -1305.022)"
            >
              <path
                id="Path_4225"
                data-name="Path 4225"
                d="M350.5,1358.864a35.33,35.33,0,1,1,62.293-.177"
                fill="none"
              />
              <path
                id="Path_4226"
                data-name="Path 4226"
                d="M403.166,1355.343l-15.141-12.529a6.7,6.7,0,0,0-9.88-7.57c-3.381-2.587-6.473-4.921-6.473-4.921l-3.23,1.867v3.886l6.549,4.114a6.674,6.674,0,0,0,10.308,6.4Z"
                fill="#0047bb"
              />
              <path
                id="Path_4227"
                data-name="Path 4227"
                d="M346.147,1340.455v1.085a35.33,35.33,0,0,0,5.1,18.371"
                fill="none"
                stroke="#0047bb"
                stroke-width="2"
              />
              <path
                id="Path_4228"
                data-name="Path 4228"
                d="M355.951,1317a35.535,35.535,0,0,0-9.4,19.053"
                fill="none"
                stroke="#0047bb"
                stroke-width="2"
              />
              <path
                id="Path_4229"
                data-name="Path 4229"
                d="M378.814,1306.084a35.452,35.452,0,0,0-19.974,8.189"
                fill="none"
                stroke="#0047bb"
                stroke-width="2"
              />
              <path
                id="Path_4230"
                data-name="Path 4230"
                d="M404.566,1314.273a35.328,35.328,0,0,0-21.058-8.252"
                fill="none"
                stroke="#0047bb"
                stroke-width="2"
              />
              <path
                id="Path_4231"
                data-name="Path 4231"
                d="M416.843,1336.064a35.439,35.439,0,0,0-9.463-19.179"
                fill="none"
                stroke="#0047bb"
                stroke-width="2"
              />
              <path
                id="Path_4232"
                data-name="Path 4232"
                d="M412.882,1358.649a35.481,35.481,0,0,0,4.378-17.109v-1.085"
                fill="#0047bb"
                stroke="#0047bb"
                stroke-width="2"
              />
              <path
                id="Path_4233"
                data-name="Path 4233"
                d="M412.755,1358.864l.127-.215"
                fill="#0047bb"
                stroke="#53565a"
                stroke-width="3.684"
              />
              <path
                id="Path_4234"
                data-name="Path 4234"
                d="M412.427,1359.532l.379-.668"
                fill="#0047bb"
                stroke="#53565a"
                stroke-width="2"
              />
            </g>
          </svg>
          <p>Fast connectivity</p>
        </div>
        <div className={style.iconBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // xlink="http://www.w3.org/1999/xlink"
            width="65.653"
            height="75.947"
            viewBox="0 0 65.653 75.947"
          >
            <defs>
              <clipPath id="clip-path">
                <path
                  id="Path_4217"
                  data-name="Path 4217"
                  d="M658.811,1335.516a31.75,31.75,0,1,0,31.75-31.749,31.748,31.748,0,0,0-31.75,31.749"
                  fill="none"
                />
              </clipPath>
              <clipPath id="clip-path-2">
                <path
                  id="Path_4219"
                  data-name="Path 4219"
                  d="M678.7,1292.347l10.271,23.756,9.715-18.3Z"
                  fill="none"
                />
              </clipPath>
            </defs>
            <g
              id="Group_2758"
              data-name="Group 2758"
              transform="translate(-657.759 -1292.347)"
            >
              <g id="Group_2754" data-name="Group 2754">
                <g
                  id="Group_2753"
                  data-name="Group 2753"
                  clip-path="url(#clip-path)"
                >
                  <rect
                    id="Rectangle_3392"
                    data-name="Rectangle 3392"
                    width="63.498"
                    height="63.495"
                    transform="translate(658.812 1303.767)"
                    fill="none"
                  />
                </g>
              </g>
              <text
                id="_2"
                data-name="2"
                transform="translate(666.628 1345.344)"
                fill="#ffaa3b"
                font-size="23.456"
                font-family="MaisonNeue-Book, Maison Neue"
              >
                <tspan x="0" y="0">
                  2
                </tspan>
              </text>
              <text
                id="_4_7"
                data-name="4/7"
                transform="translate(679.199 1345.344)"
                fill="#ffaa3b"
                font-size="23.456"
                font-family="MaisonNeue-Book, Maison Neue"
              >
                <tspan x="0" y="0">
                  4/7
                </tspan>
              </text>
              <text
                id="_2-2"
                data-name="2"
                transform="translate(666.346 1345.344)"
                fill="#0046c4"
                font-size="23.456"
                font-family="MaisonNeue-Medium, Maison Neue"
                font-weight="500"
              >
                <tspan x="0" y="0">
                  2
                </tspan>
              </text>
              <text
                id="_4_7-2"
                data-name="4/7"
                transform="translate(678.919 1345.344)"
                fill="#0046c4"
                font-size="23.456"
                font-family="MaisonNeue-Medium, Maison Neue"
                font-weight="500"
              >
                <tspan x="0" y="0">
                  4/7
                </tspan>
              </text>
              <line
                id="Line_13"
                data-name="Line 13"
                x2="3.525"
                y2="3.523"
                transform="translate(671.808 1313.554)"
                fill="none"
                stroke="#0046c4"
                stroke-width="1.079"
              />
              <line
                id="Line_14"
                data-name="Line 14"
                x2="4.985"
                transform="translate(661.662 1337.876)"
                fill="none"
                stroke="#0046c4"
                stroke-width="1.079"
              />
              <line
                id="Line_15"
                data-name="Line 15"
                y1="4.984"
                transform="translate(690.587 1359.21)"
                fill="none"
                stroke="#0046c4"
                stroke-width="1.079"
              />
              <g id="Group_2755" data-name="Group 2755">
                <path
                  id="Path_4218"
                  data-name="Path 4218"
                  d="M690.782,1303.724a31.761,31.761,0,1,0,16.034,4.467"
                  fill="none"
                  stroke="#0046c4"
                  stroke-width="2.158"
                />
              </g>
              <g id="Group_2757" data-name="Group 2757">
                <g
                  id="Group_2756"
                  data-name="Group 2756"
                  clip-path="url(#clip-path-2)"
                >
                  <rect
                    id="Rectangle_3393"
                    data-name="Rectangle 3393"
                    width="19.986"
                    height="23.756"
                    transform="translate(678.696 1292.347)"
                    fill="#0046c4"
                  />
                </g>
              </g>
              <line
                id="Line_16"
                data-name="Line 16"
                y1="3.897"
                x2="3.105"
                transform="translate(673.239 1354.62)"
                fill="none"
                stroke="#0046c4"
                stroke-width="1.079"
              />
              <line
                id="Line_17"
                data-name="Line 17"
                x2="3.525"
                y2="3.525"
                transform="translate(706.422 1353.044)"
                fill="none"
                stroke="#0046c4"
                stroke-width="1.079"
              />
              <line
                id="Line_18"
                data-name="Line 18"
                x2="4.985"
                transform="translate(714.308 1337.876)"
                fill="none"
                stroke="#0046c4"
                stroke-width="1.079"
              />
              <line
                id="Line_19"
                data-name="Line 19"
                y1="3.899"
                x2="3.105"
                transform="translate(703.57 1312.203)"
                fill="none"
                stroke="#0046c4"
                stroke-width="1.079"
              />
            </g>
          </svg>
          <p>24/7 support</p>
        </div>
        <div className={style.iconBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="67.048"
            height="51.618"
            viewBox="0 0 67.048 51.618"
          >
            <g
              id="Group_2760"
              data-name="Group 2760"
              transform="translate(-927.061 -1301.626)"
            >
              <g id="Group_2759" data-name="Group 2759">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Products_Concepts" data-name="Products Concepts">
                    <g id="wifi_o_gry" data-name="wifi o gry">
                      <circle
                        id="Ellipse_13"
                        data-name="Ellipse 13"
                        cx="4.8"
                        cy="4.8"
                        r="4.8"
                        transform="translate(955.262 1343.644)"
                        fill="#0046c4"
                      />
                      <path
                        id="Path_4220"
                        data-name="Path 4220"
                        d="M944.446,1339.389a21.465,21.465,0,0,1,32.264.288"
                        fill="none"
                        stroke="#0046c4"
                        stroke-width="2.323"
                      />
                      <path
                        id="Path_4221"
                        data-name="Path 4221"
                        d="M934.131,1329.05a33.878,33.878,0,0,1,52.894.516"
                        fill="none"
                        stroke="#0046c4"
                        stroke-width="2.323"
                      />
                      <path
                        id="Path_4222"
                        data-name="Path 4222"
                        d="M993.226,1317.967a43.286,43.286,0,0,0-65.3-.587"
                        fill="none"
                        stroke="#0046c4"
                        stroke-width="2.323"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <p>Fast in-home Wifi</p>
        </div>
        <div className={style.iconBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44.278"
            height="57.999"
            viewBox="0 0 44.278 57.999"
          >
            <g
              id="Layer_2"
              data-name="Layer 2"
              transform="translate(-1183.142 -1300.38)"
            >
              <g id="business">
                <g id="billing_o_gry" data-name="billing o gry">
                  <path
                    id="Path_4223"
                    data-name="Path 4223"
                    d="M1226.52,1316.593v40.886h-42.478v-56.2h26.524Z"
                    fill="#fff"
                    stroke="#0046c4"
                    stroke-width="1.8"
                  />
                  <path
                    id="Path_4224"
                    data-name="Path 4224"
                    d="M1202.384,1331.67c-3.193-.826-5.825-3.06-5.825-6.508,0-3.234,2.775-5.683,5.825-6.193v-3.835h3.234v3.835a9.621,9.621,0,0,1,6.478,4.02l-2.265,1.989c-2.04-2.316-3.009-2.918-4.2-3.06v7.579c3.734.551,7.019,2.816,7.019,6.927,0,3.835-3.418,6.518-7.019,6.559v3.795h-3.244v-3.836c-2.866-.132-5.274-2.213-6.753-4.57l2.55-1.846c1.02,1.571,2.163,3.234,4.2,3.509Zm0-9.793a3.458,3.458,0,0,0,0,6.7Zm3.234,18.158a3.785,3.785,0,0,0,3.785-3.693c0-2.04-1.847-3.468-3.785-3.744Z"
                    fill="#0046c4"
                    stroke="#0046c4"
                    stroke-width="0.51"
                  />
                </g>
              </g>
            </g>
          </svg>
          <p>no bundling, no contract</p>
        </div>
      </div>
      <div className={style.yogaLady}>
        <div className={style.contentDiv}>
          <h2>Here is what fiber internet can do for you</h2>
          <span>
            Try fiber internet, great for low-lag gaming and
            <br /> tech-forward households-or, if you just want our best. Fast
            <br /> upload speeds that are a match to their
            <br /> download speeds. This means you can stream with virtually
            <br /> no buffering. <p>Learn more</p>
          </span>
          <div className={style.iconsMainDiv}>
            <div className={style.yogaLadyiconbox}>
              <p>Gaming-Envy</p>
              {/* <img src="/centurylink/xboxController.png" alt=""  width={'7vw'}  height={'5vw'}/> */}
              {/* <Img src='/centurylink/xboxController.png' alt='' width={'7vw'}  height={'5vw'} /> */}
              <Img
                src={`/centurylink/xboxController.png`}
                alt="checkmark"
                sizes={{
                  default: [6, 4],
                  mobile: [10, 10],
                }}
              />
            </div>
            <div className={style.yogaLadyiconbox}>
              <p>Video chat</p>
              <Img
                src={`/centurylink/videoTablet.png`}
                alt="checkmark"
                sizes={{
                  default: [8, 4],
                  mobile: [10, 10],
                }}
              />
            </div>
            <div className={style.yogaLadyiconbox}>
              <p>Streaming</p>
              <Img
                src={`/centurylink/rokuStick.png`}
                alt="checkmark"
                sizes={{
                  default: [8, 5],
                  mobile: [10, 10],
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={style.Customerserviceblade}>
        <div className={style.container}>
          <div className={style.contentWrapper}>
            <div className={style.selfService}>We make self-service easy.</div>
            <div className={style.rating}>
              4.5 out of 5 in customer satisfaction.
              <span>*</span>
            </div>
            <div
              data-loading={style.lazy}
              className={style.starimageweb}
              style={{ margin: "auto", width: "fit-content" }}
            >
              <Img
                src={`/centurylink/fiveStar-518x200.png`}
                alt="checkmark"
                sizes={{
                  default: [20, 11],
                  mobile: [10, 10],
                }}
              />
            </div>
            <div className={style.satisfaction}>
              Our easy-to-use sign-up process has thousands of Five Star
              reviews!
            </div>
            <div className={style.Disclaimer}>
              {" "}
              *Based on a Post-Purchase OpinionLab Survey of ordering
              experience, 12/31/23.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className={style.getSpeed}>
        <div className={style.slider}>
          <Img
            src={`/centurylink/headphone.svg`}
            alt="checkmark"
            sizes={{
              default: [20, 11],
              mobile: [10, 10],
            }}
          />
          <div className={style.packageprice_wrapper}>
            <Img
              src={`/centurylink/100mbps.svg`}
              alt="checkmark"
              sizes={{
                default: [8, 4],
                mobile: [10, 10],
              }}
            />
            <div className={style.packageprice_1}>
              <span>
                <sup>$</sup>55<small>/mo</small>
                <br />
              </span>
            </div>
          </div>
          <p className={style.disclaimer}>
            Speed may not be available in your area. Paperless billing required.
            Taxes and fees apply.
          </p>
        </div>
        <div className={style.contentWrapper}>
          <h2 className={style.htwo}>Get the speed you need</h2>
          <p>
            The speed your household needs depends on a few things: the number
            of users in your home, the number of devices you have and how you
            are using your speed.
          </p>
          <div className={style.speediconswrapper}>
            <div className={style.speedIcons}>
              <Img
                src={`/centurylink/100mbps.svg`}
                alt="checkmark"
                sizes={{
                  default: [8, 4],
                  mobile: [10, 10],
                }}
              />
              <p>Stream music & shop online </p>
            </div>
            <div className={style.speedIcons}>
              <Img
                src={`/centurylink/940mbps.svg`}
                alt="checkmark"
                sizes={{
                  default: [8, 4],
                  mobile: [10, 10],
                }}
              />
              <p>Use several devices at the same time</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.premium_section}>
        <div className={style.Premium_WiFi}>
          <h3 className={style.wifiheader}>Premium WiFi</h3>
          <p>An amazing fiber connection and so much more.</p>
        </div>
        <div className={style.image_warp}>
          <div className={style.check_img}>
            <div className={`${style.checkmark} ${style.check_img1}`}>
              <div style={{ margin: "auto", width: "fit-content" }}>
                <Img
                  src={`/centurylink/checkmark.png`}
                  alt="checkmark"
                  sizes={{
                    default: [8, 8],
                    mobile: [10, 10],
                  }}
                />
              </div>
              <h3 className={style.coverage}>Coverage</h3>
              <p>A seamless connection.</p>
            </div>

            <div className={`${style.checkmark} ${style.check_img2}`}>
              <div style={{ margin: "auto", width: "fit-content" }}>
                <Img
                  src={`/centurylink/checkmark.png`}
                  alt="checkmark"
                  sizes={{
                    default: [8, 8],
                    mobile: [10, 10],
                  }}
                />
              </div>
              <h3 className={style.coverage}>Control</h3>
              <p>
                Parental settings for <br /> peace of mind.
              </p>
            </div>

            <div className={`${style.checkmark} ${style.check_img3}`}>
              <div style={{ margin: "auto", width: "fit-content" }}>
                <Img
                  src={`/centurylink/checkmark.png`}
                  alt="checkmark"
                  sizes={{
                    default: [8, 8],
                    mobile: [10, 10],
                  }}
                />
              </div>
              <h3 className={style.coverage}>Cybersecurity</h3>
              <p>
                Helps protect against <br /> online threats.
              </p>
            </div>
          </div>
        </div>
        <p className={style.limited_avail}>
          Limited availability. Service in select locations only.
        </p>
        <div className={style.banner}>
          <div className={style.high_speedContent}>
            <h3 className={style.htwo}>Refer friends. Get paid. Give back.</h3>
            <p>
              The Refer &amp; Earn Program has gotten even better. Now you can
              earn rewards while making a difference. Just refer any of our
              CenturyLink internet services to your friends, and if the referral
              results in a sale, you'll both be rewarded up to $100. What's
              more, we'll donate an extra $10 to your choice from our select
              list of charities.
            </p>
          </div>
        </div>
      </div>
      <div className={style.packages_section}>
        <div className={style.package_image}>
          {/* <p>Lorem ipsum dolor sit amet.</p> */}
          <Img
            src={`/centurylink/packages.png`}
            alt="checkmark"
            sizes={{
              default: [50, 25],
              mobile: [10, 10],
            }}
          />
        </div>
        <div className={style.package_content}>
          <h2>Get internet in your new home</h2>
          <p>
            Get Internet for your new home right now. Moving just got a lot
            easier. Transfer your internet, TV, or home phone services to your
            new home with ease and simplicity.
          </p>
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.footer_img}>
          <Img
            src={`/centurylink/digital-marketing.webp`}
            alt="checkmark"
            sizes={{
              default: [50, 25],
              mobile: [10, 10],
            }}
          />
        </div>
        <p>
          this website offers a comprehensive range of services to meet your
          needs. Easily manage your account with features like Quick Bill Pay
          and View or Pay My Bill, and stay connected with Check My Email. Need
          to make changes? No problem – Move My Services is here to assist you.
          Looking to upgrade your home setup? Explore our Shop section, where
          you'll find options for Internet, TV, Phone, and Accessories. For any
          assistance, our Support team is ready to help with Account & Billing
          Support, Internet Support, TV Support, Phone Support, or even Request
          a Repair. Navigate through My CenturyLink for personalized options,
          including My Home, Sign In, Enroll, and Contact Us.
        </p>
      </div>
      <Discliamer provider = "CenturyLink"/>
      <div className={style.mobilePopUp}>
        <Popup
          color="#108e4a"
          url="/centurylink/centurylink-logo-final.png"
          number="1-888-636-4073"
          logoWidth="200px !important"
        />
      </div>
    </div>
  );
}
export default App;
