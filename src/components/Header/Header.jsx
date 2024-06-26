import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  console.log(styles);
  return (
    <div>
      <nav className={`${styles.h1} container`}>
        <div className={`${styles.himg1}`}>
            <img className={`${styles.imag1}`} src="/public/images/logo.png" alt="logo" />
        </div>
        <div className={`${styles.menu}`}>
          <ul>
            <li>Home</li>
            <li>
              about
            </li>
            <li>
              contact
            </li>
          </ul>
        </div>
        
      </nav>
    </div>
  )
}

export default Header;
