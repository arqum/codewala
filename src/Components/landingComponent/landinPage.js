import React, {Component} from 'react';
import $ from 'jquery';
import {find, findIndex} from 'lodash';
import MainNavigation from "../navigationComponent/mainNavigation";
import Cursor from "../cursorComponent/cursor";
import Data from '../../API/LandingPageData/data.json';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import ReactRotatingText from '../rotatingTextComponent/reactRotatingText';
import {Motion, spring, TransitionMotion} from 'react-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoCover from 'react-video-cover';
import ScrollAnimation from 'react-animate-on-scroll';
import LandingDots from "../LandingDots";
import GridOverlay from "../GridOverlay";
import LandingPageCenterContent from "../LandingPageCenterContent";
import Blurred from "../Blurred";
import BackgroundCover from "../BackgroundCover";
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import scrollDetector from '../ScrollDetector/scrollDetector';
import Animated from 'react-animated-transitions';
import 'animate.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {CSSTransition} from 'react-transition-group';
import './styles.scss';
import WheelReact from 'wheel-react';
import RotateString from "../RotateString";


let intervelll;
const parentDivStyle = {
    height: '2000px'
};

const overlayStyle = {
    position: 'fixed',
    background: 'LightSkyBlue',
    bottom: '50px',
};

class LandingPage extends Component {
    clickTimer;

    constructor(props) {
        super(props);
        const img = require(`../../Assets/animations/${Data[0].logoImgURL}`);
        const description = Data[0].description;
        const backgroundCover = Data[0].isVideo ? require(`../../Assets/images/${Data[0].videoURL}`) : require(`../../Assets/images/${Data[0].backgroundImgURL}`);
        const isVideo = Data[0].isVideo;
        const label = Data[0].label;

        this.state = ({
            centerImg: img,
            description: description,
            backgroundCover: backgroundCover,
            isVideo: isVideo,
            currentIndex: 0,
            label: label,
            direction: '',
            lastScrollPos: 0,
            show: true,
            centerContent: true,
            content: 'Move your mouse mouse wheel or trackpad or try to scroll here!'

        });

        WheelReact.config({
            left: () => {
                this.setState({
                    content: 'left direction detected.'
                });
            },
            right: () => {
                this.setState({
                    content: 'right direction detected.'
                });
            },
            up: () => {
                console.log("wheel Down");
                this.getCurrentValue(Data[this.state.currentIndex >= Data.length - 1 ? 0 : this.state.currentIndex + 1].id);
            },
            down: () => {
                console.log("wheel up");
                this.getCurrentValue(Data[this.state.currentIndex <= 0 ? Data.length - 1 : this.state.currentIndex - 1].id);
            }
        });

    }

    componentWillMount() {

        this.setState({
            menu: 'false',

        })
        WheelReact.clearTimeout();

    }


    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);


    }

    componentDidMount() {
        setInterval(() => {
            this.setState({isVisible: !this.state.isVisible});
        }, 1000);

        // window.addEventListener('scroll', this.handleScroll);

        // this.closeMenuAnimation();
        // $('body').css('background', '#2c3343');
        // let interval = 1;
        // let x;
        // x = setInterval(() => {
        //     this.setState({
        //         show: true
        //     })
        //     interval += 1;
        //     if (interval == 3) {
        //         this.setState({
        //             show: false,

        //         })

        //         clearInterval(x);


        //     }
        // }, 600);

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

            if (distance < 600) {
                $('.bgImage, .videoCover').css({
                    filter: "blur(" + (filterAfterMap) + "px)",
                });


                // console.log("inside blur mouse move");
                $('#gradient').fadeOut(1000);
               $('.txt-rotate').css({'color': '#2c3343',
               'text-shadow': '1px 1px 1px rgba(67,67,67,0.49)'
            });

            } else {

                $('.bgImage, .videoCover').css({
                    filter: "blur(" + (filterStrength) + "px)"
                    //  '-webkit-transform': 'scale(' + scaleAfterMap + ')'
                });
                // $('.grain').css ('opacity', filterAfterMapGrain);
                $('#gradient').fadeIn(1000);
                $('.txt-rotate').css({'color': '#ffff',
                'text-shadow': '1px 1px 1px rgba(44, 51, 67, 0.17)'
            });


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

    itemsList() {
        return Data.map(item => {
            return item.id;
        });
    }


    getCurrentValue(value) {
        console.log("current index value" + value);
        this.setState({centerContent: false})
        const item = find(Data, x => (x.id === value));
        const itemIndex = findIndex(Data, x => (x.id === value));
        this.setState({label: item.label});
        setTimeout(() => {
            this.setState({
                currentIndex: itemIndex,
                centerImg: require(`../../Assets/animations/${item.logoImgURL}`),
                description: item.description,
                isVideo: item.isVideo,
                centerContent: true,
                label: item.label,
                backgroundCover: item.isVideo ? require(`../../Assets/images/${item.videoURL}`) : require(`../../Assets/images/${item.backgroundImgURL}`)
            });
        }, 1500);
    }


    changeCurrentView(valueID) {

        this.setState({centerContent: false})
        const item = find(Data, x => (x.id === valueID));
        const itemIndex = findIndex(Data, x => (x.id === valueID));
        console.log("from wheel down");
        this.getCurrentValue(valueID);
        // clickTimer = setTimeout(()=>{
        //     // this.setState({
        //     //     currentIndex: itemIndex,
        //     //     centerImg: require(`../../Assets/animations/${item.logoImgURL}`),
        //     //     description: item.description,
        //     //     isVideo: item.isVideo,
        //     //     label: item.label,
        //     //     centerContent: true,
        //     //     backgroundCover: item.isVideo ? require(`../../Assets/images/${item.videoURL}`) : require(`../../Assets/images/${item.backgroundImgURL}`)
        //     // });
        // }, 2000)

    };

    render() {
        let styl = {
            height: '400px',
            fontSize: '34px',
            textAlign: 'center'
        };
        const {isScrolling, isScrollingDown, isScrollingUp} = this.props;
        const {centerImg, description, isVideo, backgroundCover, currentIndex, label, centerContent} = this.state;
        return (

            <div className="animated fadeIn delay-1s" {...WheelReact.events} tabIndex="1">
                <Loading className="loading"
                         show={this.state.show}
                         color="#54d5cd"
                         showSpinner={false}
                />
                 {/* <div className="landing-bottom-strip">
                    <div className="landing-bottom-strip-text">  <strong>&lt;code</strong>wala/&gt;</div>
                </div> */}

                <div className="scroll-downs-home" style={{zIndex: 100}}>
                    <div className="mousey animated fadeInUp">
                        <div className="scroller"/>
                    </div>
                </div>

                <LandingDots items={this.itemsList()} label={label} index={currentIndex}
                             onClick={this.getCurrentValue.bind(this)}/>
                {/* <div className="homeLargeText">{label}</div> */}
                <GridOverlay numberOfColumns={6}/>

                <div id="element"/>
                <div id="gradient"/>
                <div className="transition-fader"></div>
                {/* <div className="landing-decor"></div> */}

                <BackgroundCover videoSource={isVideo && backgroundCover} imageSource={!isVideo && backgroundCover}
                                 centerContent={centerContent} id="bgCover"/>


                <LandingPageCenterContent label={this.state.label} currentValue={this.getCurrentValue.bind(this)}
                                          startingIndex={currentIndex}
                                          items={this.itemsList()}
                                          description={description}
                                          centerImg={centerImg} centerContent={centerContent}
                                          Nxt={true}/>
                <div className="grain animated fadeIn"></div>
               
            </div>


        );

    }


}

export default LandingPage;






