import React, {Component} from 'react';
import $ from 'jquery';
import MainNavigation from "../navigationComponent/mainNavigation";
import Cursor from "../cursorComponent/cursor";
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import scrollToComponent from 'react-scroll-to-component';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactRotatingText from '../rotatingTextComponent/reactRotatingText'; 
import Lottie from 'react-lottie';
import *  as animationData from './../../Assets/animations/work_animation.json';


class WorkPage extends Component {

    constructor(){
        super()
        this.state = ({
            isStopped: false,
            isPaused: false
        })
    }

    componentDidMount(){

    }

    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
       
        return(
            <div>

            
            <div className="row animated fadeInDown work-top">
               
                 <div className="col-md-8 col-sm-12 top-5 animated fadeInDown delay-1s" id="">
                    <h1 className="inner-h1 animated bounceInDown delay-1s">
                    About<span className="inner-h1-span">
                    Codewala
                    </span>
                    </h1>

                    <p className="inner-paragraph-upper animated fadeIn delay-1s">
                    Codewala is a one man endevour to provide small and medium businesses a premium digital presense. It is also an effort to demonstrate my capabilities and the services I can offer. I envision a world where code means something and design appeals to the senses.</p>
                 </div>

                 <div className="col-md-4 animated fadeInRight delay-2s">

                 <Lottie options={defaultOptions}
              height={"95%"}
              width={"45%"}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>

                 </div>
                </div>

                <div className="row">
                
                </div>

            </div>



        );

    }




}
export default WorkPage;