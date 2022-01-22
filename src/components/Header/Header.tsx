import React from 'react';
import {Link} from 'react-scroll'
import styles from './Header.module.css';
import {cx} from "@emotion/css";

interface IHeader {
    loaded: boolean;
}

function Header({loaded}: IHeader) {
    return (
        <header className={cx(styles.header, loaded ? styles.loaded : styles.unloaded)}>
                <Link 
                    to='about'
                    activeClass={styles.itemActive}
                    spy={true}
                    smooth={true}
                    duration= {500}
                    offset={10}
                    className={styles.item}>О себе</Link>
                <Link
                    to='technology'
                    activeClass={styles.itemActive}
                    spy={true}
                    smooth={true}
                    duration= {500}
                    offset={10}
                    className={styles.item}>Языки и фреймворки</Link>
                <Link
                    to='projects'
                    activeClass={styles.itemActive}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={20}
                    className={styles.item}>Проекты</Link>
        </header>
    )
}

export default Header;