import React from 'react'
import styles from './ContactHeader.module.css'

const ContactHeader = () => {
    console.log(styles);
  return (
    <div className={`${styles.cont1}`}>
      <h1 className={`${styles.ch1}`}>CONTACT US</h1>
      <p className={`${styles.cp1}`}>
      LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
      </p>
    </div>
  )
}

export default ContactHeader
