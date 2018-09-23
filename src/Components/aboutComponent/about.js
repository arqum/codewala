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

        const that = this;
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
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
</p>
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
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
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