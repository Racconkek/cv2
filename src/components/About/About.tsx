import React from 'react';
import styles from './About.module.css';
import appStyles from '../../App.module.css'
import { cx } from '@emotion/css';
import photo from '../../images/about.png'

function About() {
  return (
    <section id='about' className={cx(appStyles.infoSection, styles.about)}>
      <h2 className={appStyles.headline}>О себе</h2>
      <div className={styles.photoContainer}>
        <img src={photo} alt='me'/>
      </div>
      <p className={styles.description}>
        <p className={styles.descriptionItem}>Я начинающий фронтенд-разработчик. Живу в Екатеринбурге, учусь в Уральском Федеральном университете на направлении Математика и компьютерные науки. </p>
        <p className={styles.descriptionItem}>Люблю изучать что-то новое, делать удобные и красивые штуки, доводить проекты до конца.</p>
        <p className={styles.descriptionItem}>В свободное время смотрю сериалы в оригинале, интересуюсь психологией и научпоп, хожу в бассейн.</p>
      </p>
    </section>
  );
}

export default About;