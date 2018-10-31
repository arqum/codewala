// @flow
import React from 'react';
import styles from './styles.scss';

type BlurredProps = {};
const Blurred = (props: BlurredProps) => {
    return (
        <div id="blurred" className={`zoomIn ${styles.blurredStyle}`}/>
    );
};
export default Blurred