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
    width: "180px",
    height: "auto",
    position: "absolute",
    right: "-16%",
    top: "47%",
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
    console.log(centerImg);

    return (
      
      

        <div className="row ontop">
          <div className="col-md-4">
          <CSSTransition
              in={centerContent}
              timeout={1800}
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
                    style={style}
                    isStopped={false}
                    isPaused={false}
                    className="centerImg"/>

          </CSSTransition>
          </div>
          <div className="col-md-8">

            <span className="txt-rotate">

                 <span className="codewalatext">
                     <strong>&lt;code</strong>wala/&gt;
                     <br/> is
                     <br/>
                     <RotateString stringToRotate={this.props.label}/>
                     {/*<ReactRotatingText currentValue={currentValue}*/}
                                        {/*startingIndex={startingIndex}*/}
                                        {/*items={items}*/}
                                        {/*typingInterval={typingInterval}*/}
                                        {/*deletingInterval={deletingInterval} pause={pause}/>*/}
                     <br/>
                 </span>
               

            <CSSTransition
                  in={centerContent}
                  timeout={1600}
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
            <div className={`codewalaText_description animated fadeIn`}>{description}</div> 

            </CSSTransition>

        </span>
      </div>
      </div>   
           
           
           
    );
             
  }
};
export default LandingPageCenterContent