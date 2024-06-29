import styles from "./footer.module.css";
import Link from "next/link";
import Linkanimate from "./Linkanimate";
import ScrollUpBtn from "../../utils/scroll-up/ScrollUpBtn";
import { useRouter } from "next/router";
import Img from "../../utils/image/Img";
import FooterContact from "./FooterContact"; 


export const Footer = () => {

  const router = useRouter();
  const allowRoutes = [
    "/blog",
    "/blog/[slug]",
    "/bandwidth-calculator-tool",
    "/speed-testing-tool",
    "/privacy-policy",
    "/internet-providers-in-your-area",
    "/cable-tv-providers-in-your-area",
    "/phone-services-providers",
    "/california",
    "/state/[name]"
  ];
  const path = router.pathname;
  const bgColor = {background: path == "/blog/[slug]" || path === "/affordable-connectivity-program"? "#fff" : "#cdcecf"};
  const isAllow = allowRoutes.includes(path) || path === "/" || path === "/affordable-connectivity-program" ? true : false;
if (isAllow)
    return (
      <footer className={styles.footer_bg} style={ bgColor }>
        <ScrollUpBtn />
        <div className={styles.footer_row}>
          <div className={`${styles.footer_col} ${styles.footer_linkrow}`}>
            <div className={styles.footer_link}>
              <h4>All Providers</h4>
              <div className={styles.footer_linkInner}>
                <Linkanimate url="/spectrum" text="Spectrum" />
                <Linkanimate url="/xfinity" text="Xfinity" />
                <Linkanimate url="/" text="Cox" />
                <Linkanimate url="/att" text="AT&T" />
                <Linkanimate url="/" text="Century Link" />
                <Linkanimate url="/verizon" text="Verizon" />
                <Linkanimate url="/" text="Mediacom" />
              </div>
            </div>
            <div className={styles.footer_link}>
              <h4>Pages</h4>
              <div className={styles.footer_linkInner}>
                <Linkanimate url="/" text="Home" />
                <Linkanimate url="/blog" text="Blog" />
                <Linkanimate url="/privacy-policy" text="Privacy Policy" />
                <Linkanimate url="/affordable-connectivity-program" text="ACP" />
                <Linkanimate url="/cancel-xfinity" text="Cancel Account" value="Cancel Xfinity"/>
                <Linkanimate url="/cancel-spectrum" text="Cancel Package" value="Cancel Spectrum"/>
              </div>
            </div>
          </div>
          <div className={styles.footer_col}>
            <div className={styles.footer_linkAddress}>
              <h4>Address</h4>
              <div className={styles.footerSocialinner}>
                <Link href="tel:+18009623418" legacyBehavior>
                  <a>
                    <Img 
                      src={`/call.svg`} 
                      alt="call" 
                      sizes={{
                        default: [2,1.042],
                        mobile: [4.042,4.042],
                      }} 
                    />
                    <p id = "footer-call-to-action">+1(800) 962-3418</p>
                    
                  </a>
                </Link>
                <Link href="mailto:sales@leilanitech.com" legacyBehavior>
                  <a>
                    <Img 
                      src={`/images/mail.png`} 
                      alt="email" 
                      sizes={{
                        default: [1.8,1.342],
                        mobile: [5.042,5.042],
                      }} 
                    />
                    <p>sales@leilanitech.com</p>
                  </a>
                </Link>
                <a
                  href="http://maps.google.com/?q=740 2601 Bellefontaine APT B112, Houston, TX 77025"
                  target="_"
                >
                  
                  <Img
                   src={`/images/location.png`}
                   alt="location" 
                   sizes={{
                    default: [2,1.042],
                    mobile: [5.042,5.042],
                    }} 
                  />
                  <p>
                  2601 Bellefontaine APT B112,
                    <br /> Houston, TX 77025
                  </p>
                </a>
                <div className={styles.footer__textarea}>
                  <FooterContact />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.disclaimer}>
            <p>Disclaimer: <span>YourInternetProvider</span> uses trademarks solely for the purpose of describing products and services offered by their respective owners, who retain full ownership of the trademarks.</p>
          </div>
        <div className={styles.footer_services} style={ bgColor }>
          <div className={styles.footer_serviceCol}>
            <p>Leilani tech, all rights reserved</p>
          </div>
          <div className={styles.footer_serviceCol}>
            <div className={styles.footerCol_inner}>
              <Link href="/privacy-policy" legacyBehavior>
                <a>Privacy Policy</a>
              </Link>
            </div>
          </div>
          <div className={styles.footer_serviceCol}>
            <Link href="https://www.facebook.com/yourinternetproviderusa"  legacyBehavior>
              <a target="_blank">
                <div className={styles.footer_icon} style={{backgroundColor:'#0f3782'}}>
                <Img
                  src={`/images/fb.png`} 
                  alt="right arrow" 
                  sizes={{
                    default: [1.8,1.142],
                    mobile: [5.042,5.042],
                  }} 
                  
                />
                </div>
              </a>
            </Link>
            <Link href="https://www.instagram.com/your.internetprovider/" legacyBehavior>
              <a target="_blank">
                <div className={styles.footer_icon}>
                  <Img 
                    src="/social/insta.png"
                    alt="right arrow" 
                    sizes={{
                      default: [1.1,1.042],
                      mobile: [5.042,5.042],
                    }}
                  />
                </div>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/company/yourinternetprovider" legacyBehavior>
              <a target="_blank">
                <div className={styles.footer_icon}>
                  <Img
                    src="/social/linkedin.png" 
                    alt="right arrow" 
                    sizes={{
                      default: [1.2,1.042],
                      mobile: [5.042,5.042],
                    }}
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
       
      </footer>
    );
  return <></>;
};
