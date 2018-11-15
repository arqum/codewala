// @flow
import React, {Component} from 'react';
import ReactRotatingText from "../rotatingTextComponent/reactRotatingText";
import styles from './styles.scss';
import Lottie from 'react-lottie';
import { CSSTransition} from "react-transition-group";
import RotateString from "../RotateString";






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
    width: "16%",
    padding:"3px",
    height: "auto",
    position: "relative",
    top: "20%",
    zIndex: "20",
    alignSelf: "baseline",
    margin: "0px 0px 0px auto"
   
}

const style_small = {
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    width: "30%",
    padding:"3px",
    height: "auto",
    position: "relative",
    top: "20%",
    left:"30",
    zIndex: "20",
    alignSelf: "baseline",
   
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
        deletingInterval: 40,
        pause: 10000
    }
    constructor(props){
        super(props);
        this.state = ({
          
            centerContent: null
        });
    }



    render(){
    const {centerImg, currentValue, items, typingInterval, deletingInterval, pause, description, startingIndex, centerContent} = this.props;
    console.log("innder width", window.innerWidth);

    return (
      
      

        <div className="row ontop" style={{display: "flex"}}>
          <div className="col-md-6 col-sm-12" style={{padding:"0px", maxWidth:"41.666667% !important"}}>
          <CSSTransition
              in={centerContent}
              timeout={1200}
              classNames={{
                appear: 'cntrLogo-appear',
                appearActive: 'cntrLogo-active-appear',
                enter: 'cntrLogo-enter',
                enterActive: 'cntrLogo-active-enter',
                enterDone: 'cntrLogo-done-enter',
                exit: 'cntrLogo-exit',
                exitActive: 'cntrLogo-active-exit',
                exitDone: 'cntrLogo-done-exit'
               }}           
              unmountOnExit={true}
              appear={true}
              exit={true}
              >
          <Lottie options={{
                     loop: true,
                     autoplay: true, 
                     animationData: centerImg,
                     rendererSettings: {
                     preserveAspectRatio: 'xMidYMid slice'
                     }
                   
                    }}
                    style={window.innerWidth<=768? style_small:style}
                    isStopped={false}
                    isPaused={false}
                    className="centerImg"/>

          </CSSTransition>

      
          </div>
          <div className="col-md-6 col-sm-12">
          {/* <div className="landing-home-square"></div> */}
            <span className="txt-rotate">

                 <span className="codewalatext">
                     <strong>&lt;code</strong>wala/&gt;
                     <br/> is
                     <br/>
                     <RotateString stringToRotate={this.props.label}/>
                     <br/>
                 </span>
        </span>
      </div>
      <CSSTransition
                  in={centerContent}
                  timeout={1200}
                  classNames={{
                    appear: 'centerText-appear',
                    appearActive: 'centerText-active-appear',
                    enter: 'centerText-enter',
                    enterActive: 'centerText-active-enter',
                    enterDone: 'centerText-done-enter',
                    exit: 'centerText-exit',
                    exitActive: 'centerText-active-exit',
                    exitDone: 'centerText-done-exit'
                   }}        
                   unmountOnExit={true}
                   appear={true}
                   exit={true}
                  >
                  <div className="col-md-6 offset-3 codewala-desc-container ">
                     <div className={`codewalaText_description animated fadeIn`}>{description}</div> 
                  </div>

            </CSSTransition>
      </div>   
           
           
           
    );
             
  }
};
export default LandingPageCenterContent