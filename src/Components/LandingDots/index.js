// @flow
import React from 'react';
import styles from './styles.scss';

type LandingDotsProps = {
    items: Array<string>,
    onClick: (index: number) => void;


};
const LandingDots = (props: LandingDotsProps) => {
    const {items, onClick} = props;
    return (
        <div className={styles.circles}>
            {
                items.map((item, index) => {
                    return (<div key={index} className="hollow-circle" onClick={() => (onClick(item))}/>);
                })
            }
        </div>
    );
};

LandingDots.defaultProps = {
    items: [],
};
export default LandingDots