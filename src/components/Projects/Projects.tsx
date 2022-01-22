import React from 'react';

import styles from './Projects.module.css';
import appStyles from '../../App.module.css';
import Project from './Project/Project';
import photo_project01 from '../../images/project01.png';
import photo_project02 from '../../images/project02.png';
import {cx} from "@emotion/css";

function Projects() {
  return (
    <section id='projects' className={cx(appStyles.infoSection, styles.projects)}>
        <h2 className={appStyles.headline}>Проекты</h2>
        <div className={styles.list}>
          <Project 
            number={'01'}
            name={'Список студентов'}
            github={'https://github.com/Racconkek/doubletapp'}
            app={'https://doubletapp-students.herokuapp.com/'}
            description={'Тестовое задание в компанию doubletapp: сайт со списком студентов и возможностью их добавления и удаления.'}
            photo={photo_project01}/>
          <Project
            number={'02'}
            name={'Бот-игра "Быки и коровы"'}
            github={'https://github.com/Racconkek/Cows_and_bulls_bot'}
            description={'Бот играет с вами в игру “Быки и коровы”, а также вы можете поиграть с другим человеком через бота.'}
            photo={photo_project02}/>
        </div>
    </section>
  );
}

export default Projects;