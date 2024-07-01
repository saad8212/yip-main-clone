import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.main_div}>
      <div className={styles.content_wrapper}>
      <div className={styles.desclaimer}>
        <h1>
          <b>Disclaimer</b>{" "}
        </h1>
        <p>
          {" "}
          This is NOT an official website of Verizon but is the Official
          Site of yourinternetprovider.us (Marketing Partner). We may send
          updates to the mobile number/email ID registered with us. The content
          is for information purposes only and does not constitute an offer to
          avail of any service. Prices mentioned are subject to change without
          notice and properties mentioned are subject to availability. Images
          are for representation purposes only. The logos and images used on
          this website are the exclusive property of their respective owners and
          are protected under applicable copyright laws. Verizon does not
          claim any ownership or rights to these materials and they are used on
          this website solely for informational purposes.
        </p>
      </div>
        <div className={styles.first_row}>
          <p>Plans & Pricing</p>
          <p>Customer Support</p>
          <p>Online Bill Pay</p>
          <p>Business</p>
          <p>Manage Account</p>
          <p>Order Online</p>
        </div>
        <div className={styles.second_row}>
          <p>
            {" "}
            [1] For Verizon internet customers new to YouTube TV. This YouTube
            TV discount is only open to participants in the United States who
            have activated the offer from Verizon on or after October 1.
            Promotional offer only available to users who are not current
            YouTube TV subscribers, have not been YouTube TV subscribers or
            participated in a YouTube TV trial before. If eligible: Verizon
            Internet customers will receive the standard free trial, and then a
            discount of $10 per month for 12 months on the standard subscription
            price; or Verizon Internet with current Verizon TV or Fiber TV
            will receive the standard free trial, and then a discount of $15 per
            month for 12 months on the standard subscription price offered by
            YouTube TV. Standard subscription price is subject to change. You
            will not be charged until the trial period expires. You can cancel
            your standard trial at no charge at any time before the trial is
            over. You can also cancel your YouTube TV paid membership at any
            time. You will continue to receive access to YouTube TV until the
            end of your YouTube TV billing period, but refunds and credits are
            not issued for partial billing periods. Offer valid for one
            redemption of YouTube TV discount per eligible Verizon account.
            Eligible participants must use the activation link provided by
            Verizon and complete activation through Google to claim offer.
            Offer requires a Google account. Promotional value of offer is
            non-transferable, not for resale, non-redeemable for cash, and
            non-refundable. Must be 18 years or older. Free trial, offers, or
            promotional offers available only for YouTube TV Base Plan.
            Equipment, installation and other service charges, taxes and fees
            extra. Verizon Internet account required. Offer and billing subject
            to Verizon Terms and Conditions. Verizon reserves the right to
            change or cancel the offer at any time and for any reason. YouTube
            Paid Service Terms of Service also apply.
          </p>

          <p>
            [2] eero max speeds are derived from IEEE specifications. Coverage
            varies based on normal use and building conditions. Actual range and
            performance can vary. See https://eero.com/legal for more details.
            ©2024 Amazon.com, Inc. or its affiliates. eero and all related marks
            are trademarks of Amazon.com, Inc. or its affiliates. Amazon.com c/o
            eero LLC, 660 3rd St., San Francisco, CA.
          </p>

          <p>
            [3] Based on comparison of Verizon Fiber 5 Gig upload speed up to
            5000 Mbps versus advertised cable upload speeds for Xfinity 2 Gig
            plan of 100 Mbps, Spectrum Internet Gig plan of 35 Mbps, and Optimum
            1 Gig Internet plan of 35 Mbps (excludes Optimum Fiber). As of
            10/9/23.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
