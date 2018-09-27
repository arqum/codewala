// @flow
import React from 'react';
import ReactRotatingText from "../rotatingTextComponent/reactRotatingText";
import styles from './styles.scss';

type LandingPageCenterContentProps = {
    startingIndex: number,
    currentValue: (value: string) => void,
    items: Array<string>,
    description: string,
    typingInterval: number,
    deletingInterval: number,
    pause: number,
    centerImg: any,

};
const LandingPageCenterContent = (props: LandingPageCenterContentProps) => {
    const {centerImg, currentValue, items, typingInterval, deletingInterval, pause, description, startingIndex} = props;
    return (
        <div className="row ontop">
            <div className={`codewalaText_description fade-in-top ${styles.centerImg}`}
                 style={{backgroundImage: `url(${centerImg})`}}/>
            <i className="fa-fw select-all fas"/>
            <span className="txt-rotate animated fadeInUp">
                 <span className="codewalatext">
                     <strong>&lt;code</strong>wala/&gt; is
                     <ReactRotatingText currentValue={currentValue}
                                        startingIndex={startingIndex}
                                        items={items}
                                        typingInterval={typingInterval}
                                        deletingInterval={deletingInterval} pause={pause}/>
                     <br/>
                 </span>
            <div className={`codewalaText_description fade-in-top`}>{description}</div>
            </span>
        </div>
    );
};

LandingPageCenterContent.defaultProps = {
    typingInterval: 200,
    deletingInterval: 80,
    pause: 7000
};
export default LandingPageCenterContent