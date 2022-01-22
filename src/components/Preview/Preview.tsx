import React, { useEffect, useState } from "react";

import styles from './Preview.module.css'
import Header from '../Header/Header'
import small from '../../images/preview-small.png'
import middle from '../../images/preview-middle.png'
import large from '../../images/preview-large.png'
import {cx} from "@emotion/css";

function Preview() {
    const [loaded, setLoaded] = useState(false);
    const [photoSize, setPhotoSize] = useState(large)
    
    useEffect(() => {
        const handleLoad = () => setLoaded(true)
        const width =  window.innerWidth;
        const height = window.innerHeight;
        if (width >=2500 || height >= 1500) {
            setPhotoSize(large)
        } else if (width <= 1800 || height <= 1000) {
            setPhotoSize(small)
        } else {
            setPhotoSize(middle)
        }
        window.addEventListener('load', handleLoad);
    
        return () => {
          window.removeEventListener('load', handleLoad);
       }
    }, [])

    return (
        <section className={styles.preview}>
            <Header loaded={loaded}/>
            <h1 className={cx(styles.headline, loaded ? styles.headlineLoaded : styles.headlineUnloaded)}>
                Людмила <br/>
                Мирошниченко
            </h1>
            <div className={cx(styles.photoContainer, loaded ? styles.photoContainerLoaded : styles.photoContainerUnloaded)}>
                <img src={photoSize} alt={'me'} className={styles.photo}/>
            </div>
        </section>
    );
}

export default Preview;
