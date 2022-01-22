import React from 'react';

import styles from './Footer.module.css'

function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.designerInfo}>
                <p>2020</p>
                <p>Дизайнер - Мария Мельникова</p>
                <p>marimel185@gmail.com</p>
            </div>
        </section>
    );
}

export default Footer;