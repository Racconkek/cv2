import React from 'react';
import styles from './Project.module.css';
import appStyles from '../../../App.module.css'
import {cx} from "@emotion/css";

interface IProject {
    number: string;
    name: string;
    github: string;
    app?: string;
    description: string
    photo: any;
}

function Project({app, number, name, github, description, photo}: IProject) {
  return (
    <section className={styles.project}>
        <h3 className={cx(styles.number, styles.headline)}>{number}</h3>
        <h3 className={cx(styles.name, styles.headline)}>{name}</h3>
        <div className={styles.links}>
            <a href={github} className={cx(appStyles.link, styles.link)}>github</a>
            {app && <a href={app} className={cx(appStyles.link, styles.link)}>app</a>}
        </div>
        <div className={styles.description}>
            {description}
        </div>
        <div className={styles.photos}>
            <img src={photo} alt='project'/>
        </div>
    </section>
  );
}

export default Project;