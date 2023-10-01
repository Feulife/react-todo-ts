import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css"

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className={styles.about}>
      <h2>About</h2>
      <span className={styles.script}>
        This is a TODO List built with React + TypeScript
      </span>
      <button className={styles.button} onClick={() => navigate('/')}>
        Go to TODO List
      </button>
      </div>
    </Fragment>
  )
}