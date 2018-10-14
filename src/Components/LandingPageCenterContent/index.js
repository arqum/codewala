// @flow
import React from 'react';
import ReactRotatingText from "../rotatingTextComponent/reactRotatingText";
import styles from './styles.scss';
import Lottie from 'react-lottie';

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

const style = {
    backgroundSize: "30%",
    backgroundRepeat: "no-repeat",
    width: "160px",
    height: "auto",
    position: "absolute",
    left: "34%",
    top: "50%",
    marginLeft: "-150px",
    marginTop: "-150px",
    zIndex: "20",
   
}
const LandingPageCenterContent = (props: LandingPageCenterContentProps) => {
    const {centerImg, currentValue, items, typingInterval, deletingInterval, pause, description, startingIndex} = props;
    console.log(centerImg);
    return (
        <div className="row ontop">


            <div>

                 <Lottie options={{
                     loop: true,
                     autoplay: true, 
                     animationData: centerImg,
                     rendererSettings: {
                       preserveAspectRatio: 'xMidYMid slice'
                     }
                 }}
            //   height={"240px"}
            //   width={"250px"}
              style={style}
              isStopped={false}
              isPaused={false}/>
            </div>

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