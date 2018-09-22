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


class LandingPage extends Component {

    constructor() {
        super()

        this.state = ({
            show: true,
            codeText:{title:'', description:'', classname:''},
            animating:false,
            centerlogoimageURL: "",
            videoOptions: "/assets/images/code_video.mp4"

        
        })

        
    }

    componentWillMount(){

        this.setState({
            menu: 'false',
            
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
      
        //map function from large values to small
        function map(num, in_min, in_max, out_min, out_max) {
            return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }

        var opened = 0;
        var filterStrength = 0;
        var movementStrength = 25;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        var mX, mY, distance,
            $distance = $('#distance span'),
            $element = $('#element');

        //calculate distance
        function calculateDistance(elem, mouseX, mouseY) {
            return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
        }

        $(document).mousemove(function (e) {


            $('#blurred').css("background-position", newvalueX + "px     " + newvalueY + "px");


            //image move with mouse
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 35;
            var newvalueY = height * pageY * -1 - 50;
            $('#blurred').css("background-position", newvalueX + "px     " + newvalueY + "px");


            //distance from element
            distance = calculateDistance($element, mX, mY);
            $distance.text(distance);

            //cursor ball
            mX = e.pageX;
            mY = e.pageY;
            $(document).bind('mousemove', function (e) {
                $('#cursor').css({
                    left: e.pageX + 20,
                    top: e.pageY
                });


            });

            //blur
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            var filterAfterMap = map(distance, 100, windowWidth, 2, 50);
            var filterStrength = filterAfterMap;

            if (distance < 400) {
                $('#blurred').css({
                    filter: "blur(" + (filterAfterMap) + "px)"
                    //  '-webkit-transform': 'scale(' + scaleAfterMap + ')'
                   

                });
               // console.log("inside blur mouse move");
                $('#gradient').fadeOut(3000);
                $('.txt-rotate').css('color', '#2c3343');
                $("#line").css("background", "#2c3343");
               // $(".grain").css ('opacity', filterAfterMap - 10);
                console.log("filter after map value" +filterAfterMap);


            } else {

                $('#blurred').css({
                    filter: "blur(" + (filterStrength) + "px)"
                    //  '-webkit-transform': 'scale(' + scaleAfterMap + ')'
                });
                var filterAfterMapGrain = filterAfterMap - 10;
                // $('.grain').css ('opacity', filterAfterMapGrain);
                $('#gradient').fadeIn(3000);
                $('.txt-rotate').css('color', '#ffff');
                $("#line").css("background", "#ffff");
                console.log("filter after map value grain " +filterAfterMapGrain);


            }

        });


        // GRADIENT TRANSITION

        (function () {
            var colors = new Array(
                [148, 152, 163], [44, 51, 67], [171, 175, 183], [76, 150, 109], [66, 196, 124], [126, 178, 81], [128, 214, 55], [164, 189, 62], [200, 233, 69]);

            var step = 0;

            var colorIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

            //transition speed
            var gradientSpeed = 0.003;

            function updateGradient() {

                if ($ === undefined) return;

                var c0_0 = colors[colorIndices[0]];
                var c0_1 = colors[colorIndices[1]];
                var c1_0 = colors[colorIndices[2]];
                var c1_1 = colors[colorIndices[3]];

                var istep = 1 - step;
                var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
                var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
                var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
                var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

                var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
                var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
                var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
                var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

                $('#gradient').css({
                    // background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
                    background: "linear-gradient(to bottom," + color1 + "," + color2 + ")"
                }).css({
                    background: "-moz-linear-gradient(to bottom, " + color1 + " 0%, " + color2 + " 100%)"
                });

                $('#centerlogo').hover(function () {


                });

                step += gradientSpeed;
                if (step >= 1) {
                    step %= 1;
                    colorIndices[0] = colorIndices[1];
                    colorIndices[2] = colorIndices[3];

                    //pick two new target color indices
                    //do not pick the same as the current one
                    colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
                    colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

                }
            }

            intervelll = setInterval(updateGradient, 10);
        })();

    }

    componentWillUnmount() {
        clearInterval(intervelll);

    }
 
    currentValue=(value)=>{

        if (value.includes("code")) {

            // $('#blurred').css("background-image", "url(/../../../Assets/images/img_2.jpg)");
            
            this.setState({
                codeText:{title:value, 
                    description:"Over 10 years of experience in writing beautiful code that always works! Reliable code is hard to come by isn't it?",
                    classname: 'animated fadeInUp faster'},
                    centerlogoimageURL:"url('/assets/images/logo.svg')",
                    videoOptions: "/assets/images/code_video.mp4"
            });

        } else if (value.includes("ux")) {
           
            // $('#blurred').css("background-image", "").addClass('animated');
            this.setState({
                codeText:{title:value, 
                    description:"We don't merely make it work, we like to extend the magic. Applications that connect on a human level. And for that, our process includes ideating every possible facet, emotions, persuassion, usability. We consider psychological biases, human decision making process and its drives. It's a science and we know it!",
                    classname: 'animated fadeInUp faster'},
                    centerlogoimageURL:"url('/assets/images/logo_ux.svg')",
                    videoOptions: "/assets/images/ux_video.mp4"
            });

        } else if (value.includes("design")) {
           
            $('#blurred').css("background-image", "url(/../../../Assets/images/img_4.jpg)").addClass('animated');            
            this.setState({
                codeText:{title:value,
                description:"Applications with exquisite designs are perceived to work immaculately as well. We spend our time in a land where Art and Science meet. It's a small unknown place, but we have found it.",
                classname:'animated fadeInUp faster'},
                centerlogoimageURL:"url('/assets/images/logo_design.svg')",
                videoOptions: ""

            });
        
        } else if (value.includes("mobile")) {
          
            // $('#blurred').css("background-image", "url(/../../../Assets/images/img_3.jpg)").addClass('animated');
            this.setState({codeText:{title:value,
                description:"if it be true there is a Website on the web of the world which is wide, there shouldst beest an App as well.",
                classname:'animated fadeInUp faster'},
                centerlogoimageURL:"url('/assets/images/logo_mobile.svg')",
                videoOptions: "/assets/images/mobile_video.mp4"

             });
    
        } else if (value.includes("fun")) {
           
            $('#blurred').css("background-image", "url(/../../../Assets/images/img_1.jpg)").addClass('animated');
            this.setState({codeText:{title:value,
                description:"It's not worth it if it ain't fun. We believe in co-creation. We don't shove ideas with a take-it-or-leave-it approach, we like to chase a dream. Your dream.",
                classname:'animated fadeInUp faster'},
                centerlogoimageURL:"url('/assets/images/logo_fun.svg')",
                videoOptions: ""

            });
  
        }
        else if (value.includes("life")) {
           
            this.setState({codeText:{title:value,
                description:"It's not worth it if it ain't fun. We believe in co-creation. We don't shove ideas with a take-it-or-leave-it approach, we like to chase a dream. Your dream.",
                classname:'animated fadeInUp faster'},
                centerlogoimageURL:"url('/assets/images/logo_fun.svg')",
                videoOptions: "/assets/images/life_video.mp4"

            });
  
        }


        // console.log(value);
    }

 
    render() {

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
            backgroundImage: this.state.centerlogoimageURL

            

        }

        const centerlogoimage = {
            // backgroundImage: "url('/assets/images/logo.png')",
            backgroundImage: this.state.centerlogoimageURL


        }


       // console.log(centerlogo);
        return(

        <div className="animated fadeIn delay-1s">
<div className="gridOverlay">
<div className="row">
<div className="col-md-3 column_1"><div className="animated fadeInLeft delay-1s">C</div></div>
<div className="col-md-3 column_2"><div className="animated fadeInLeft delay-1s">O</div></div>
<div className="col-md-3 column_3"><div className="animated fadeInLeft delay-1s">D</div></div>
<div className="col-md-3 column_4"><div className="animated fadeInLeft delay-1s">E</div></div>


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
      <VideoCover
        videoOptions={videoOptions}
      />
    </div>
        <div className="grain"></div> 

     
 
        <div id="blurred" className="animated fadeIn faster"></div>

 
        <div className="row ontop">
        <div className={this.state.codeText.classname} style={centerlogo}></div>
        <i className="fa-fw select-all fas"></i>
        <span className="txt-rotate animated fadeInUp" >
         <span className="codewalatext">
         <strong>&lt;code</strong>wala/&gt; is 
         <ReactRotatingText currentValue={this.currentValue} items={[ " code.", " mobile.", " design.", " ux.", " fun!", " life" ]} typingInterval={200}  deletingInterval={80} pause={7000} />
         <br/>
         </span>    
        {/* <Motion 
         defaultStyle={{opacity:0}} 
         style={{opacity: spring(1)}}
         onRest={this.onRest}
         >

        {(style) =>( */}

        <div className="codewalaText_description animated fadeIn faster">{this.state.codeText.description}</div>

        {/* )}
         </Motion> */}

        </span> 
        </div>
    

        </div>


        );

    }


}

export default LandingPage;






