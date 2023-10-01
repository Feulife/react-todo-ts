import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => (
  <nav className={styles.navbar}>
    <div className={styles.wrapper}>
      <div>
        <Link to="/" className={styles.title} >
          TODO list
        </Link>
      </div>
      <div>
        <Link to="/about" className={styles.about}>
          About
        </Link>
      </div>
    </div>
  </nav>
)