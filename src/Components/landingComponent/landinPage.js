import React, {
    Component
} from 'react';
import $ from 'jquery';
import MainNavigation from "../navigationComponent/mainNavigation";
import Cursor from "../cursorComponent/cursor";
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import ReactRotatingText from '../rotatingTextComponent/reactRotatingText'; 
import {Motion, spring, TransitionMotion } from 'react-motion';


let intervelll;
let period;



class LandingPage extends Component {

    constructor() {
        super()

        this.onRest = this.onRest.bind(this);
        this.state = ({
            show: true,
            codeText:{title:'', description:'', classname:''},
            animating:false,
        })

        
    }

   

    componentDidMount() {

        $('body').css('background', '#2c3343');
        let interval = 1;
        let x;
        x = setInterval(() => {
            this.setState({
                show: true
            })
            interval += 1;
            if (interval == 2) {
                this.setState({
                    show: false
   
                })
                  
                clearInterval(x);            
    
            }
        }, 600)
      
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
                console.log("inside blur mouse move");
                $('#gradient').fadeOut(3000);
                $('.txt-rotate').css('color', '#2c3343');
                $("#line").css("background", "#2c3343");


            } else {

                $('#blurred').css({
                    filter: "blur(" + (filterStrength) + "px)"
                    //  '-webkit-transform': 'scale(' + scaleAfterMap + ')'
                });

                $('#gradient').fadeIn(3000);
                $('.txt-rotate').css('color', '#ffff');
                $("#line").css("background", "#ffff");

            }

        });


        // GRADIENT TRANSITION

        (function () {
            var colors = new Array(
                [148, 152, 163], [44, 51, 67], [171, 175, 183], [76, 150, 109], [66, 196, 124], [126, 178, 81], [128, 214, 55], [164, 189, 62], [200, 233, 69]);

            var step = 0;
            //color table indices for: 
            // current color left
            // next color left
            // current color right
            // next color right
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

            $('#blurred').css("background-image", "url(/../../../Assets/images/img_2.jpg)");
            this.setState({codeText:{title:value, 
            description:"Over 10 years of experience in writing beautiful code that always works! Reliable code is hard to come by isn't it?",
            classname:'centerLogoCode'}});

        
           
            //  $('.codewalaText_description')
            // .html("Over 10 years of experience in writing beautiful code that always works! Reliable code is hard to come by isn't it?");

               
            // $("#centerlogo").removeClass('centerLogoFun').delay(60).queue(
            //     function (next) {
            //         $(this).addClass('centerLogoCode');
            //         next();

            //        }
                
            // );

        } else if (value.includes("ux")) {
           
            $('#blurred').css("background-image", "url(/../../../Assets/images/img_6.jpg)");
            this.setState({codeText:{title:value,
            description:"We don't merely make it work, we like to extend the magic. Applications that connect on a human level. And for that, our process includes ideating every possible facet, emotions, persuassion, usability. We consider psychological biases, human decision making process and its drives. It's a science and we know it!",
            classname:'centerLogoUX'}});
        
            // $("#centerlogo").removeClass('centerLogoCode').delay(60).queue(
            //     function (next) {
            //         $(this).addClass('centerLogoUX');""
            //         next();

            //        }
            // );

        } else if (value.includes("design")) {
           
            $('#blurred').css("background-image", "url(/../../../Assets/images/img_4.jpg)");            
            this.setState({codeText:{title:value,
            description:"Applications with exquisite designs are perceived to work immaculately as well. We spend our time in a land where Art and Science meet. It's a small unknown place, but we have found it.",
            classname:'centerLogoDesign'}});
            // $('.codewalaText_description')
            // .html("Applications with exquisite designs are perceived to work immaculately as well. We spend our time in a land where Art and Science meet. It's a small unknown place, but we have found it."); // $('#centerlogo').addClass("centerLogoDesign", 6000).removeClass( "centerLogoUX", 6000);

            // $("#centerlogo").removeClass('centerLogoUX').delay(60).queue(
            //     function (next) {
            //         $(this).addClass('centerLogoDesign');
            //         next(); 

                   
            //     }
            // );

        } else if (value.includes("mobile")) {
          
            $('#blurred').css("background-image", "url(/../../../Assets/images/img_3.jpg)");

            this.setState({codeText:{title:value,
            description:"if it be true there is a Website on the web of the world which is wide, there shouldst beest an App as well.",
            classname:'centerLogoMobile'}});
            // $('.codewalaText_description')
            // .html("if it be true there is a Website on the web of the world which is wide, there shouldst beest an App as well."); // $('#centerlogo').addClass("centerLogoMobile", 6000 ).removeClass( "centerLogoDesign", 6000);

            // $("#centerlogo").removeClass('centerLogoDesign').delay(60).queue(
            //     function (next) {
            //         $(this).addClass('centerLogoMobile');
            //         next();

                   
            //     }
            // );



        } else if (value.includes("fun")) {
           
            $('#blurred').css("background-image", "url(/../../../Assets/images/img_1.jpg)");

            this.setState({codeText:{title:value,
            description:"It's not worth it if it ain't fun. We believe in co-creation. We don't shove ideas with a take-it-or-leave-it approach, we like to chase a dream. Your dream.",
            classname:'centerLogoFun'}});
                    // $('.codewalaText_description')
                    // .html("It's not worth it if it ain't fun. We believe in co-creation. We don't shove ideas with a take-it-or-leave-it approach, we like to chase a dream. Your dream."); //$('#centerlogo').addClass("centerLogoFun", 6000 ).removeClass( "centerLogoMobile", 6000);
    
            // $("#centerlogo").removeClass('centerLogoMobile').delay(60).queue(
            //     function (next) {
            //         $(this).addClass('centerLogoFun');
            //         next();

                    
            //     }
            // );

        }


        console.log(value);
    }

    onRest() {
        this.setState({ animating: false });
      }

    render() {
        

        return(

        <div className="custom_container">
       
       <Loading className="loading"
          show={this.state.show}
          color="#54d5cd"
          showSpinner={false}
        />

        <div id="log"></div>
        <div id="element"></div>
        <div id="gradient"></div>
        <div id="blurred"></div>
        <div  id="centerlogo" className={this.state.codeText.classname}></div>
        <i className="fa-fw select-all fas"></i>
        <div className="txt-rotate">
        </div> 

        <span className="txt-rotate" >
         <span className="codewalatext">

         <strong>&lt;code</strong>wala/&gt; is 
         <ReactRotatingText currentValue={this.currentValue} items={[ " code.", " ux.", " design.", " mobile.", " fun!" ]} typingInterval={200}  deletingInterval={80} pause={7000} />
         <br/>
         </span>    

      

        <Motion 
         defaultStyle={{opacity:0}} 
         style={{opacity: spring(1)}}
         onRest={this.onRest}
         >

        {(style) =>(

        <p className="codewalaText_description" style={{opacity: style.opacity}}>{this.state.codeText.description}</p>

        )}
         </Motion>

     {/* <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
    {this.state.renderSubComponent ? 
        <p className="codewalaText_description">{this.state.codeText.description}</p>
        : undefined}
  </VelocityTransitionGroup> */}

        </span> 

        </div>


        );

    }


}

export default LandingPage;






