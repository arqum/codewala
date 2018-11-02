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
            isPaused: false,
            show: true
        })
    }

    componentDidMount(){
        let interval = 1;
        let x;
        x = setInterval(() => {
            this.setState({
                show: true
            })
            interval += 1;
            if (interval == 3) {
                this.setState({
                    show: false,

                })

                clearInterval(x);


            }
        }, 600);


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
 {/* <Loading className="loading"
                         show={this.state.show}
                         color="#54d5cd"
                         showSpinner={false}
                /> */}

<Loading
  show={true}
  color="red"
  change={false}
  showSpinner={true}
/>            
            <div className="row animated fadeInDown work-top">
               
                 <div className="col-md-6 offset-2 col-sm-12 top-5 animated fadeInDown delay-1s" id="">
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

                
                <div className="row work-filters"></div>

                <div className="row work-thumbs-row">

                <div className="col-md-2 offset-2"  style={{padding:"0px"}}>

                <div className="work-thumb"></div>

                </div>

                 <div className="col-md-2" style={{padding:"0px"}}>

                <div className="work-thumb"></div>

                </div>

                 <div className="col-md-2" style={{padding:"0px"}}>

                <div className="work-thumb"></div>

                </div>

                 <div className="col-md-2" style={{padding:"0px"}}>

                <div className="work-thumb"></div>

                </div>

            </div>


                            <div className="row work-thumbs-row">

                    <div className="col-md-2 offset-2"  style={{padding:"0px"}}>

                    <div className="work-thumb"></div>

                    </div>

                    <div className="col-md-2" style={{padding:"0px"}}>

                    <div className="work-thumb"></div>

                    </div>

                    <div className="col-md-2" style={{padding:"0px"}}>

                    <div className="work-thumb"></div>

                    </div>

                    <div className="col-md-2" style={{padding:"0px"}}>

                    <div className="work-thumb"></div>

                    </div>

                    </div>


 </div>


        );

    }




}
export default WorkPage;