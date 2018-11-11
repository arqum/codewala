// @flow
import React from 'react';
import {times} from 'lodash';
import styles from './styles.scss';

type GridOverlayProps = {
    numberOfColumns: number
};

let count = 0;
const GridOverlay = (props: GridOverlayProps) => {
    const {numberOfColumns} = props;
    return (
        <div className="gridOverlay">

            <div className="row">
                {
                    times(numberOfColumns, (index) => {
                        return (
                            <div className={`animated SlideInLeft delay-2s col ${index % 2 === 0 ? styles.colStyleDark : styles.colStylelight}`}>
                                <div className={`${index % 2 !== 0 ? styles.landingDecorNone : styles.landingDecor}`}/>
                                                                <div className={`${index % 2 !== 0 ? styles.landingDecorNone : styles.landingDecor2}`}/>

                            </div>
                        
                        )
                    })
                }
            </div>
        </div>
    );
}
export default GridOverlay