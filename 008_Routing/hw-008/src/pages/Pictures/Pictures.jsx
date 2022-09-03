import React from 'react';
import styles from './Pictures.module.scss'

const Pictures = () => {
    let images = [];
    for (let index = 1; index <= 8; index++) {
        const imgUrl = `images/0${index}.jpg`
        images.push(<img 
            key={imgUrl} 
            className={styles.image}
            src={imgUrl}
            alt={imgUrl} 
        />)
    }

    return (
        <div className={styles.pictures}>
            {images}
        </div>
    );
};

export default Pictures;