import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import {MdMessage} from 'react-icons/md'
import { IoMdMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { useState } from 'react';


const ContactForm = () => {

  const [name, setname] = useState("example");
  const [email, setemail] = useState("example@gmail.com");
  const [text, settext] = useState("xyz");
  // console.log(styles.contactf1);
  const onSubmit = (event) => {
    event.preventDefault();

    setname(event.target[0].value);
    setemail(event.target[1].value);
    settext(event.target[2].value);

   
    // email = event.target[1].value;
    // text = event.target[2].value;

    // console.log("name",event.target[0].value);
    // console.log("email",event.target[1].value);
    // console.log("text",event.target[2].value);
    // console.log(event); 
  }
  return (
    <section className={`${styles.container}`}>
      <div className={styles.form1}>
        <div className={`${styles.contactf1}`}>
            <div className={styles.top_btn}>
            <Button text=" VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
            <Button text=" VIA CALL" icon={<IoIosCall fontSize="24px"/>} />
            </div>
            <div className={styles.top_btn1}>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<IoMdMail fontSize="24px" />} />
            </div>

            <form action="" onSubmit={onSubmit}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email'/>
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name='text'rows="5" />
              </div>
              <div className={styles.fb1}>
                <Button formBtn={true} text="SUBMIT" />
                
              </div>
              <div>
              {
                name + " " + email + " " + text 
              }
              </div>

            </form>
            
        </div>
        <div className={styles.contact_image}>
          <img src="/images/cont2.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default ContactForm
