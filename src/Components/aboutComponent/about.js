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
            down: true
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
        window.addEventListener('scroll', this.handleScroll, { passive: true })





        // this.closeMenuAnimation();
               let interval = 1;
       let x;
       x = setInterval(() => {
           this.setState({
               show: true
           })
           interval += 1;
           if (interval == 3) {
               this.setState({
                   show: false
  
               })
                 
               clearInterval(x);            

           }
       },600);
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

       
            return (
                <div className="animated fadeIn delay-1s" id="container_fade" onWheel={this.handleScroll}>


 <Loading className="loading"
    show={this.state.show}
    color="#54d5cd"
    showSpinner={false}
  />



<div className="row" ref="top">
<div className="col-md-3 col-sm-12 animated row-pattern fadeInLeft delay-1s" style={{overflow: "hidden"}}>

</div>

<div className="col-md-3 col-sm-12 leftBorder row-pattern-faded rightBorder top-10 animated fadeInRight delay-1s" id="" style={{overflow: "hidden"}}>
<h1 className="inner-h1 animated bounceInDown delay-1s">
About<span className="inner-h1-span">
Codewala
</span>
</h1>

<p className="inner-paragraph-upper animated fadeIn delay-1s  ">
Codewala is a one man endevour to provide small and medium businesses a premium digital presense. It is also an effort to demonstrate my capabilities and the services I can offer. I envision a world where code means something and design appeals to the senses.</p>
<div className="inner-upper-icons-container">


<div className={`inner-upper-icons inner-upper-desktop animated pulse `+ this.state.iconHoverClass} ></div>
<div className="inner-upper-icons inner-upper-mobile">
</div>
</div>
</div>

<ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutUp' duration={1}>

<div class="scroll-downs " onClick={()=> { scrollToComponent(this.refs.bottom, {
                offset: 0,
                align: 'top',
                duration: 600
            })}}>
  <div class="mousey animated fadeInUp">
    <div class="scroller"></div>
  </div>
</div>
</ScrollAnimation>

<div className="col-md-3 col-sm-12 animated fadeInLeft delay-1s rightBorder">
<div className="inner-upper-icons-container">
<div className="inner-upper-icons inner-upper-creative">
</div>

<div className="inner-upper-icons inner-upper-analysis">
</div>

</div>



</div>
<div className=" row-pattern col-md-3 col-sm-12 animated fadeIn delay-1s"></div>

</div>
<div className="row" ref="bottom">
<div className="col-md-3 col-sm-12 row-pattern animated fadeInLeft delay-1s" >
</div>


<div className="leftBorder col-md-3 col-sm-12 nopadding rightBorder">

<ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutDown' duration={1}>
<div className="cw_txt" id="ab_gradient" >
<p className="inner-paragraph">
Hello there. I am Arqum. A 
<span className="txt-rotate animated fadeInUp" >
         <span className="codewalatext">
         Hello there. I am Arqum. A 
         <ReactRotatingText currentValue={this.currentValue} items={[ " code.", " mobile.", " design.", " ux.", " fun!", " life" ]} typingInterval={200}  deletingInterval={80} pause={7000} />
         <br/>
         </span>    
        {/* <Motion 
         defaultStyle={{opacity:0}} 
         style={{opacity: spring(1)}}
         onRest={this.onRest}
         >

        {(style) =>( */}

        <div className="codewalaText_description animated fadeIn faster"></div>

        {/* )}
         </Motion> */}

        </span> 
 with a decade of experience in many, many digital and creative "things". Long before specialization became a requirement for the
present, there were Polymaths. People who did not believe in resctricting human capabilities to one or a couple of distint disciplines, instead they did what they liked, when they liked. 
They did it because they loved it and nobody could tell them they couldn't do everything. They did everything because they thought they could. Before the left-brain right-brain enlightenment came to make us 
robust, one dimensional, stay-in-the-box human machines, people wrote poetry AND made weapons. Painted and invented theorems. 
People of the brave new world, why can't we try to loosen up a bit and do what we love? 

<p className="inner-para-highlight">So, I offer my services. All that I do. From writing code to designing logos. Analyzing business problems to architecting information. Identifying psychological biases, their implications and human emotions and decision making.
A 360 degree digital solution provider. 
</p>
</p>


</div>

</ScrollAnimation>

</div>



<div className="col-md-3 col-sm-12 rightBorder">
<ScrollAnimation animateIn='fadeIn'>
<div className="cw_img" ref="bottom"></div>
</ScrollAnimation>


</div>

<div className="col-md-3 col-sm-12 animated fadeIn delay-1s rightBorder row-pattern">

</div>

</div>


</div>
    
    
       
        );

    }

}

export default AboutPage;