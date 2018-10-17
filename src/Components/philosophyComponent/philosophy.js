import React, {
    Component
} from 'react';
import $ from 'jquery';
import MainNavigation from "../navigationComponent/mainNavigation";
import Cursor from "../cursorComponent/cursor";
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import ScrollAnimation from 'react-animate-on-scroll';
import *  as animationData from './../../Assets/animations/philosophy_animation.json';
import *  as animationDataBrain from './../../Assets/animations/brain.json';
import GridOverlay from "../GridOverlay";



import Lottie from 'react-lottie';


let intervelll;

class PhilosophyPage extends Component {

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

    UnconsciousIncompetenceHover (){
        console.log("inside first hover");
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

          const defaultOptionsBrain = {
            loop: true,
            autoplay: true, 
            animationData: animationDataBrain,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
       
            return (
                <div className="animated fadeIn delay-1s" id="container_fade" onWheel={this.handleScroll}>


 <Loading className="loading"
    show={this.state.show}
    color="#54d5cd"
    showSpinner={false}
  />



<div className="row" ref="top">
<div className="col-md-3 col-sm-12 animated row-pattern fadeIn delay-1s" style={{overflow: "hidden"}}>

</div>

<div className="col-md-6 col-sm-12 leftBorder  rightBorder  animated fadeInDown" id="" style={{overflow: "hidden", height:"100vh"}}>
<h1 className="inner-h1 animated bounceInDown delay-1s">
Codewala<span className="inner-h1-span">
Philosophy
</span>
</h1>

<p className="inner-paragraph-upper animated fadeIn delay-1s  ">
Codewala is a one man endevour to provide small and medium businesses a premium digital presense. It is also an effort to demonstrate my capabilities and the services I can offer. I envision a world where code means something and design appeals to the senses.</p>

<div className="inner-upper-icons-container" style={{marginTop:"12%"}}>
<div className="brain-gridOverlay">
<div className="row">
<div className="col-md-2">
</div>
<div className="col-md-2">
</div>

<ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutUp' duration={3}>
<div className="col-md-2">
<div className="brain-overlays">
<span className="brain-overlays-bold-span">2- Conscious</span><span className="brain-overlays-span">Incompetence</span>
</div>
</div>
</ScrollAnimation>


<div className="col-md-2">
</div>
<div className="col-md-2">
</div>

<ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutUp' duration={4}>
<div className="col-md-2">
<div className="brain-overlays" style={{top:"100px", left:"10%"}}>
<span className="brain-overlays-bold-span">3- Conscious</span><span className="brain-overlays-span">Competence</span>
</div>
</div>
</ScrollAnimation>


</div>
<div className="row">

<div className="col-md-2"></div>


<ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutUp' duration={2}>
<div className="col-md-2">
<div className="brain-overlays"  >
<span className="brain-overlays-bold-span">1- Unconsious</span><span className="brain-overlays-span">Incompetence</span>
</div>
</div>

</ScrollAnimation>


<div className="col-md-2">
</div>

<ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutUp' duration={5}>
<div className="col-md-2" style={{top:"64%"}}>
<div className="brain-overlays" style={{bottom:"20%"}}>
<span className="brain-overlays-bold-span">4- Unconscious</span><span className="brain-overlays-span">Competence</span>
</div>
</div>
</ScrollAnimation>

<div className="col-md-2">
</div>
<div className="col-md-2">
</div>
</div>

</div>
<Lottie options={defaultOptionsBrain}
              height={"60%"}
              width={"60%"}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
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

<div className="col-md-3 col-sm-12 row-pattern animated top-10 fadeIn delay-1s rightBorder">

</div>

</div>
<div className="row" ref="bottom">

<div className="leftBorder col-md-6 col-sm-12 rightBorder">

<ScrollAnimation animateIn='fadeIn'>
<div className="cw_img_ph" ref="bottom row-pattern-faded">

<Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/></div>

</ScrollAnimation>

</div>



<div className="col-md-6 col-sm-12 rightBorder nopadding">

<ScrollAnimation animateIn='fadeInUp' animateOut='fadeOutDown' duration={1}>
<div className="cw_txt_ph" id="ab_gradient" >

<ScrollAnimation animateIn='fadeInDown' animateOut='fadeOutDown' duration={1} delay={1000}>

<p className="inner-paragraph" style={{color: "#ffffff"}}>   
I have with me a decade of experience in a plethora of skills. Long before specialization became a requirement for the
present, there were Polymaths. People who did not believe in resctricting human capabilities to one or a couple of distint disciplines, instead they did what they liked, when they liked. 
They did it because they loved it and nobody could tell them they couldn't do everything. Before the left-brain right-brain "enlightenment" came to make us 
robust, one dimensional, stay-in-the-box human machines, people wrote poetry and made weapons. Painted and invented theorems. 
So, People of the brave new world, why can't we try to loosen up a bit and do what we love? 
<br/>
<br/>


</p>
</ScrollAnimation>

</div>

</ScrollAnimation>

</div>












</div>


</div>
    
    
       
        );

    }
}

export default PhilosophyPage;