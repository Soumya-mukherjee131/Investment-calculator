import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';

const Header = () => {
    return (
      <div id={styles.container}>
        <div id={styles.header}>
          <img src={logo} alt="logo" />
          <h1>Investment calculator</h1>
        </div>
        <div id={styles.btn}>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        {/* <Link to="/login">
          <button>Log In</button>
        </Link> */}
        
        </div>
      </div>

     )
}

export default Header
