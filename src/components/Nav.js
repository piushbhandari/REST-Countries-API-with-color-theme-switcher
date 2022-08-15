import React from "react";
import styles from "./Nav.module.css";
import { BsMoon } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__cont}>
        <h1 className={`${styles.nav__logo} primary-header`}>
          Where in the world?
        </h1>
        <button type="" className={`${styles.theme__btn} theme-btn`}>
          <BsMoon />
          <span>Dark Mode</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
