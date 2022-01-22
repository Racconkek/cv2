import React from 'react';
import styles from './Technologies.module.css';
import appStyles from '../../App.module.css'
import {cx} from "@emotion/css";

function Technologies() {
  return (
    <section id='technology' className={cx(appStyles.infoSection, styles.technologies)}>
        <h2 className={appStyles.headline}>Языки и фреймворки</h2>
        <div className={styles.list}>
          <div className={styles.listItem}>
            <p className={styles.namesItem}>frontend</p>
            <p className={styles.valuesItem}>javascript, typescript, html, css, react</p>
          </div>
          <div  className={styles.listItem}>
            <p className={styles.namesItem}>backend</p>
            <p className={styles.valuesItem}>node.js, express, hbs, babel, webpack, mogodb, mongoose, postgres, sequelize</p>
          </div>
          <div  className={styles.listItem}>
            <p className={styles.namesItem}>devops</p>
            <p className={styles.valuesItem}>docker, heroku</p>
          </div>
          <div  className={styles.listItem}>
            <p className={styles.namesItem}>теория</p>
            <p className={styles.valuesItem}>ООП, алгоритмы, структуры данных</p>
          </div>
        </div>
    </section>
  );
}

export default Technologies;