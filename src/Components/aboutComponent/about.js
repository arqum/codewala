import React, {
    Component
} from 'react';
import $ from 'jquery';
import MainNavigation from "../navigationComponent/mainNavigation";
import Cursor from "../cursorComponent/cursor";
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import {Motion, spring, TransitionMotion } from 'react-motion';
import scrollToComponent from 'react-scroll-to-component';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactRotatingText from '../rotatingTextComponent/reactRotatingText'; 
import *  as animationData from './../../Assets/animations/about_animation.json';
import Lottie from 'react-lottie';




let intervelll;


class AboutPage extends Component {

    constructor() {
        super()

        this.state = ({
            show: true,
            fader:true,
            menu: '',
            iconHoverClass: '',
            lastScrollPos: 0,
            changedPos: undefined,
            down: true,
            isStopped: false,
            isPaused: false
        })
        this.handleIconHover = this.handleIconHover.bind(this);
        this.handleScroll = this.handleScroll.bind(this);


        
    }


componentWillMount(){

    this.setState({
        menu: 'false'
        
    })

    window.removeEventListener('scroll', this.handleScroll)

}

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
           this.setState({
               show: true
           })

           // Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos){
    console.log("scrolling up");

    document.getElementById('info-box').dataset.scrollDirection = 'UP';

  }
         
	else{
        document.getElementById('info-box').dataset.scrollDirection = 'DOWN';
        console.log("scrolling down");

    }
		
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
});
    
    }

    componentWillUnmount() {
        clearInterval(intervelll);

    }

    currentValue=(value)=>{

        if (value.includes("code")) {

         
        }}

    handleIconHover () {

        this.setState({

            iconHoverClass: 'inner-upper-desktop-hover'
        })
        console.log("inside icon hover " +this.state.iconHoverClass);
    }

    handleScroll(event) {
        let newOffset = 0;
        // if (window.pageYOffset > 10){
            // scrollToComponent(this.refs.bottom, {
            //     offset: 0,
            //     align: 'top',
            //     duration: 3000
            // });
        //     newOffset = 100;
        // } 
        // else if (newOffset == 100){

        //     scrollToComponent(this.refs.top, {
        //         offset: 0,
        //         align: 'top',
        //         duration: 1500
        //     });

        //     newOffset = 0;

        // }
    }


   

    render() {
     
       
          const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
       
            return (
                <div className="animated fadeIn delay-1s" id="container_fade" onWheel={this.handleScroll}>


     
  

 <Loading
    show={this.state.show}
    color="#54d5cd"
    showSpinner={false}
  />



<div className="row" ref="top">
<div className="col-md-2 col-sm-12 animated row-pattern fadeInLeft delay-1s" style={{overflow: "hidden"}}>

</div>

<div className="col-md-4 col-sm-12 leftBorder rightBorder top-10 animated fadeInRight delay-1s" id="" style={{overflow: "hidden"}}>
<h1 className="inner-h1 animated bounceInDown delay-1s">
About<span className="inner-h1-span">
Codewala
</span>
</h1>

<p className="inner-paragraph-upper animated fadeIn delay-1s  ">
Codewala is a one man endevour to provide small and medium businesses a premium digital presense. It is also an effort to demonstrate my capabilities and the services I can offer. I envision a world where code means something and design appeals to the senses.</p>
<div className="inner-upper-icons-container">


<div className={`inner-upper-icons inner-upper-desktop animated pulse `+ this.state.iconHoverClass} >
<div className="inner-upper-icon-heading">
WEB
</div>
</div>
<div className="inner-upper-icons inner-upper-mobile">
<div className="inner-upper-icon-heading">
MOBILE
</div>
</div>
</div>
</div>

<ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutUp' duration={1}>

<div class="scroll-downs " onClick={()=> { scrollToComponent(this.refs.bottom, {
                offset: 0,
                align: 'top',
                ease: 'inQuad',
                duration: 1000
            })}}
            onWheelCapture={()=> { scrollToComponent(this.refs.bottom, {
                offset: 0,
                align: 'top',
                duration: 600
            })}}
            >
  <div class="mousey animated fadeInUp">
    <div class="scroller"></div>
  </div>
</div>
</ScrollAnimation>

<div className="col-md-4 col-sm-12 animated fadeInLeft delay-1s rightBorder">
<div className="inner-upper-icons-container">
<div className="inner-upper-icons inner-upper-creative">
<div className="inner-upper-icon-heading">
creative
</div>
</div>

<div className="inner-upper-icons inner-upper-analysis">
<div className="inner-upper-icon-heading">
analysis
</div>
</div>

</div>



</div>
<div className=" row-pattern col-md-2 col-sm-12 animated fadeIn delay-1s"></div>

</div>
<div className="row" ref="bottom">
<div className="col-md-2 col-sm-12 row-pattern animated fadeInLeft delay-1s" >
</div>


<div className="leftBorder col-md-4 col-sm-12 nopadding rightBorder">

<ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutDown' duration={1}>
<div className="cw_txt" id="ab_gradient" >

<ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutDown' duration={1} delay={1000}>

<p className="inner-paragraph">

        
         Hello there. I am Arqum. A 
         <ReactRotatingText className="about-rotator-style" currentValue={this.currentValue} items={[ " Web Developer. ", " Business Analyst. ", " Software Engineer. ", " UX/UI Designer. ", "n Information Architect. ", "n aspiring Polymath. ", " Writer.", " Photographer. " ]} typingInterval={100}  deletingInterval={40} pause={2000} />
        
   <br/>    
I have with me a decade of experience in a plethora of skills. Long before specialization became a requirement for the
present, there were Polymaths. People who did not believe in resctricting human capabilities to one or a couple of distint disciplines, instead they did what they liked, when they liked. 
They did it because they loved it and nobody could tell them they couldn't do everything. Before the left-brain right-brain "enlightenment" came to make us 
robust, one dimensional, stay-in-the-box human machines, people wrote poetry and made weapons. Painted and invented theorems. 
So, People of the brave new world, why can't we try to loosen up a bit and do what we love? 
<br/>
<br/>


</p>
</ScrollAnimation>

<div className="grain" style={{position:"unset", opacity:1}}></div> 


</div>

</ScrollAnimation>

</div>



<div className="col-md-4 col-sm-12 rightBorder" style={{padding:"2%"}}>
<ScrollAnimation animateIn='fadeIn'>


<Lottie options={defaultOptions}
              height={"60%"}
              width={"60%"}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
</ScrollAnimation>

<ScrollAnimation animateIn='fadeInRight'>

<p className="inner-para-highlight">
So, I offer my services. From writing code to designing logos.
 Analyzing business problems to architecting information. Identifying psychological biases, their implications and human emotions and decision making.
A complete digital solution provider. I have been doing this, I am here to demonstrate that we can do it all and do it good!
</p>
</ScrollAnimation>

<ScrollAnimation animateIn='fadeInUp' style={{position: "relative", top:"10%"}}>



<div className="inner-upper-icons inner-upper-khaled">
</div>

<div className="inner-upper-icons inner-upper-talal">
</div>

<div className="inner-upper-thanks inner-upper-icons">
...And a heartiest gratitude to my friends and Senseis, Khaled and Talal for helping me out with their awesome ninja skills! 
</div>


</ScrollAnimation>



</div>

<div className="col-md-2 col-sm-12 animated fadeIn delay-1s rightBorder row-pattern">
</div>

</div>


</div>
    
    
       
        );

    }

}

export default AboutPage;