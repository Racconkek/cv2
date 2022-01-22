import React from 'react';

import styles from './Contacts.module.css'
import appStyles from '../../App.module.css'
import {cx} from "@emotion/css";

function Contacts() {
    return (
        <section id='contacts' className={appStyles.infoSection}>
            <h2 className={appStyles.headline}>Контакты</h2>
            <div className={styles.list}>
                <a href='https://vk.com/black_walnut_dragon' className={cx(appStyles.link, styles.listItem)}>VK</a>
                <a href='https://teleg.run/Raccoon_kek' className={cx(appStyles.link, styles.listItem)}>Telegram</a>
                <a href='https://github.com/Racconkek' className={cx(appStyles.link, styles.listItem)}>Github</a>
                <p className={styles.listItem}>+7 924 614 74 76</p>
                <p className={styles.listItem}>Lyuda-mirosh@mail.ru</p>
                <p className={styles.listItem}>Екатеринбург</p>
            </div>
        </section>
    );
}

export default Contacts;