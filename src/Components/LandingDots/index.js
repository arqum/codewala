// @flow
import React from 'react';
import styles from './styles.scss';

type LandingDotsProps = {
    items: Array<string>,
    onClick: (index: number) => void;
    label: string,
    index: number,


};
const LandingDots = (props: LandingDotsProps) => {
    const {items, onClick, index: Index} = props;
    const Data = require('../../API/LandingPageData/data.json');
    const label = Data[Index].label;
    return (
        <div className={styles.circles}>
            {
                items.map((item, index) => {
                    return (<div key={index} className={`hollow-circle ${index === Index?'lll':'llll'}`}
                                 onClick={() => (onClick(item))}>{label}</div>);
                })
            }
        </div>
    );
};

LandingDots.defaultProps = {
    items: [],
};
export default LandingDots