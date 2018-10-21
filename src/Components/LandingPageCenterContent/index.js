// @flow
import React, {Component} from 'react';
import ReactRotatingText from "../rotatingTextComponent/reactRotatingText";
import styles from './styles.scss';
import Lottie from 'react-lottie';
import { CSSTransition} from "react-transition-group";





type LandingPageCenterContentProps = {
    startingIndex: number,
    currentValue: (value: string) => void,
    items: Array<string>,
    description: string,
    typingInterval: number,
    deletingInterval: number,
    pause: number,
    centerImg: any,
    centerContent: boolean

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

const ontop =  {
  
  Zindex: "2000 !important",
  transition: "all 200ms cubic-bezier(0, 0, 0.58, 1)"

}

const initial = {
  Zindex: "2000 !important",
  transition: "all 200ms cubic-bezier(0, 0, 0.58, 1)",
  marginTop: "70%"
}



class LandingPageCenterContent extends Component<LandingPageCenterContentProps>{
    static defaultProps={
        typingInterval: 200,
        deletingInterval: 80,
        pause: 7000
    }
    constructor(props){
        super(props);
    }
    render(){
    const {centerImg, currentValue, items, typingInterval, deletingInterval, pause, description, startingIndex, centerContent} = this.props;
    console.log(centerImg);
    return (
        <CSSTransition
        in={centerContent}
        timeout={500}
        classNames="centerImg"
        unmountOnExit={true}    
        appear={true}
        exit={true}    
        >

        <div className="row ontop">

    <Lottie options={{
                     loop: true,
                     autoplay: true, 
                     animationData: centerImg,
                     rendererSettings: {
                     preserveAspectRatio: 'xMidYMid slice'
                     }
                   
                    }}
                    style={style}
                    isStopped={false}
                    isPaused={false}
                    className="centerImg"/>
             

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

            <div className={`codewalaText_description animated fadeIn`}>{description}</div> 


            </span>
            </div>
            </CSSTransition>
    );
                }
};
export default LandingPageCenterContent