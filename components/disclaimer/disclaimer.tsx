import React from 'react'
import styles from './disclaimer.module.css'
const Discliamer = ({provider}: any) => {
  return (
    <div className={styles.disclaimer_section}>
        <h2>Disclaimer</h2>
        <p>
          This is NOT an official website of {provider} but is the Official
          Site of yourinternetprovider.us (Marketing Partner). We may send updates to the
          mobile number/email ID registered with us. The content is for
          information purposes only and does not constitute an offer to avail of
          any service. Prices mentioned are subject to change without notice and
          properties mentioned are subject to availability. Images are for
          representation purposes only. The logos and images used on this
          website are the exclusive property of their respective owners and are
          protected under applicable copyright laws. {provider} does not claim
          any ownership or rights to these materials and they are used on this
          website solely for informational purposes.
        </p>
      </div>
  )
}

export default Discliamer