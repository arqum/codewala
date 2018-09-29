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
    return (
        <div className={styles.circles}>
            {
                items.map((item, index) => {
                    const label = Data[index].label;
                    return (
                    <div>
                                <div key={index} className={`hollow-circle ${index === Index?'hollow-circle-selected':'llll'}`}
                                 onClick={() => (onClick(item))}>
                                 </div>
                                  <div className="circles-label circle-container">{label}</div>
                        
                    </div>
                   );
                })
            }
        </div>
    );
};

LandingDots.defaultProps = {
    items: [],
};
export default LandingDots

