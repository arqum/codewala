import React, {Component} from 'react';
import $ from 'jquery';
import MainNavigation from "../navigationComponent/mainNavigation";
import Cursor from "../cursorComponent/cursor";
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import ReactRotatingText from '../rotatingTextComponent/reactRotatingText'; 
import {Motion, spring, TransitionMotion } from 'react-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoCover from 'react-video-cover';
import ScrollAnimation from 'react-animate-on-scroll';




let intervelll;
let period;
const Videostyle = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };


class HomeLogoBGComponent extends Component {

    constructor() {
        super()

        this.state = ({
            show: true,
            codeText:{title:'', description:'', classname:''},
            centerLogoClass:'',
            centerlogoimageURL: "",
            videoOptions: "/assets/images/code_video.mp4",
            blurredBg: "",
            blurredClass: "zoomIn"

        
        })

        
    }
    componentDidMount() {

       
        // this.closeMenuAnimation();
       // $('body').css('background', '#2c3343');
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
render() {
    const Blurred = {
        filter: "blur(50px)",
        backgroundImage: this.state.blurredBg,
        backgroundRepeat: "no-repeat",
        position: "fixed",
        top: "0",
        opacity: "1",
        bottom: "0",
        width: "100%",
        zIndex: "-2",
        height: "100%",
        backgroundSize: "cover",
        transform: "scale(1.2)",
        transition: "all 300ms linear",

    }


    const videoOptions = {
        src: this.state.videoOptions,
        autoPlay: true,
        loop: true,
       

      };

    const centerlogo = {

        backgroundSize: "70%",
        backgroundRepeat: "no-repeat",
        width: "240px",
        height: "250px",
        position: "absolute",
        left: "34%",
        top: "50%",
        opacity: "0",
        marginLeft: "-150px",
        marginTop: "-150px",
        zIndex: "13",
        backgroundImage: this.state.centerlogoimageURL,
        transition: "all 300ms linear",


        

    }

    const centerlogoimage = {
        // backgroundImage: "url('/assets/images/logo.png')",
        backgroundImage: this.state.centerlogoimageURL


    }

    const vidStyle= {
        filter: "blur(20px)",
        transition: "all 300ms linear",
        objectFit:"cover",
    }


   // console.log(centerlogo);
    return(



    <div className="animated fadeIn delay-1s">
    <div class="scroll-downs" style={{zIndex:100}}>
<div class="mousey animated fadeInUp">
<div class="scroller"></div>
</div>
</div>
<div className="gridOverlay">
<div className="row">
<div className="col-md-3 column_1 "><div className="animated fadeInLeft delay-1s columns_font"></div></div>
<div className="col-md-3 column_2"><div className="animated fadeInLeft delay-1s columns_font"></div></div>
<div className="col-md-3 column_3"><div className="animated fadeInLeft delay-1s columns_font"></div></div>
<div className="col-md-3 column_4"><div className="animated fadeInLeft delay-1s columns_font"></div>


</div>


</div>
</div>



   <Loading className="loading"
      show={this.state.show}
      color="#54d5cd"
      showSpinner={false}
    />
    <div id="element"></div>
    <div id="gradient"></div>

    <div style={Videostyle
   
}>
  <VideoCover className="videoCover"
    videoOptions={videoOptions}
  />
</div>
    <div className="grain animated fadeIn"></div> 

    <div id="blurred" className={this.state.blurredClass} style={Blurred}></div>

    <div className="row ontop">
    <div className={this.state.codeText.classname} style={centerlogo}></div>
    <i className="fa-fw select-all fas"></i>
    <span className="txt-rotate animated fadeInUp" >
     <span className="codewalatext">
     <strong>&lt;code</strong>wala/&gt; is 
     <ReactRotatingText currentValue={this.currentValue} items={[ " code.", " mobile.", " design.", " ux.", " fun!", " life" ]} typingInterval={200}  deletingInterval={80} pause={7000} />
     <br/>
     </span>    
 
    <div className={this.state.codeText.classname}>{this.state.codeText.description}</div>
    </span> 
    </div>


    </div>


    );

}
}

export default HomeLogoBGComponent;