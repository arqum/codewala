import React, {Component} from 'react';
import $ from 'jquery';
import MainNavigation from "../navigationComponent/mainNavigation";
import Cursor from "../cursorComponent/cursor";
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';


class LandingPage extends Component {

    constructor(){
        super()
        this.state = ({show:true})
    }

    componentWillMount() {
        this.setState({show: true})

        
    }
 
    componentDidMount = ()=>{
        this.setState({show: true})

        $('body').css('background','#2c3343');
        //map function from large values to small
    function map(num, in_min, in_max, out_min, out_max)
     {
         return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    var opened = 0;
    var  filterStrength = 0;
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    var mX, mY, distance,
        $distance = $('#distance span'),
        $element = $('#element');

 //calculate distance
    function calculateDistance(elem, mouseX, mouseY) 
    {
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


    //Text Rotation
    var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 15) || 3000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
    };



    TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];



    //imageChanger
    var words = fullTxt.toString();
    if (words.includes("code")) {

        $('#blurred').css("background-image", "url(/../../../Assets/images/img_2.jpg)");
        $('.codewalaText_description')
        .html("Over 10 years of experience in writing beautiful code that always works! Reliable code is hard to come by isn't it?");
       // $('#centerlogo').addClass("centerLogoCode", 6000 ).removeClass( "centerLogoFun", 6000 );

        $("#centerlogo").removeClass('centerLogoFun').delay(80).queue(
            function (next) {
                $(this).addClass('centerLogoCode');
                next();
            }
        );

    } else if (words.includes("ux")) {
        $('#blurred').css("background-image", "url(/../../../Assets/images/img_6.jpg)");
        $('.codewalaText_description')
        .html("We don't merely make it work, we like to extend the magic. Applications that connect on a human level. And for that, our process includes ideating every possible facet, emotions, persuassion, usability. We consider psychological biases, human decision making process and its drives. It's a science and we know it!");       // $('#centerlogo').addClass("centerLogoUX", 6000).removeClass( "centerLogoCode", 6000);
       $("#centerlogo").removeClass('centerLogoCode').delay(80).queue(
        function (next) {
            $(this).addClass('centerLogoUX');
            next();
        }
    );

    } else if (words.includes("design")) {
        $('#blurred').css("background-image", "url(/../../../Assets/images/img_4.jpg)");
        // $("#line").css("background", "#fff");
        $('.codewalaText_description')
        .html("Applications with exquisite designs are perceived to work immaculately as well. We spend our time in a land where Art and Science meet. It's a small unknown place, but we have found it.");       // $('#centerlogo').addClass("centerLogoDesign", 6000).removeClass( "centerLogoUX", 6000);

       $("#centerlogo").removeClass('centerLogoUX').delay(80).queue(
        function (next) {
            $(this).addClass('centerLogoDesign');
            next();
        }
    );

    } else if (words.includes("mobile")) {
        $('#blurred').css("background-image", "url(/../../../Assets/images/img_3.jpg)");
        $('.codewalaText_description')
        .html("if it be true there is a Website on the web of the world which is wide, there shouldst beest an App as well.");       // $('#centerlogo').addClass("centerLogoMobile", 6000 ).removeClass( "centerLogoDesign", 6000);

       $("#centerlogo").removeClass('centerLogoDesign').delay(80).queue(
        function (next) {
            $(this).addClass('centerLogoMobile');
            next();
        }
    );

    

    } else if (words.includes("fun")) {
        $('#blurred').css("background-image", "url(/../../../Assets/images/img_1.jpg)");
        $('.codewalaText_description')
        .html("It's not worth it if it ain't fun. We believe in co-creation. We don't shove ideas with a take-it-or-leave-it approach, we like to chase a dream. Your dream.");        //$('#centerlogo').addClass("centerLogoFun", 6000 ).removeClass( "centerLogoMobile", 6000);

        $("#centerlogo").removeClass('centerLogoMobile').delay(80).queue(
            function (next) {
                $(this).addClass('centerLogoFun');
                next();
            }
        );

    }


    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
    };

// END TXT ROTATION

    window.onload = function () {

    var elements = document.getElementsByClassName('txt');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');

        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);

        }
    }


    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
    };



    // GRADIENT TRANSITION

    (function () {
    var colors = new Array(
    [148,152,163],[44, 51, 67], [171,175,183], [76, 150, 109], [66, 196, 124], [126, 178, 81],[128, 214, 55],[164, 189, 62],[200, 233, 69]);

    var step = 0;
    //color table indices for: 
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0, 1, 2, 3,4,5,6,7,8];

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

    $('#centerlogo').hover(function(){


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

    setInterval(updateGradient, 10);
    })();

 


    }


    render() {

        return(

        <div className="custom_container">
        <Loading className="loading"
          show={this.state.show}
          color="#FCEE21"
          showSpinner={false}
        />
  <div id="log"></div>
  <div id="element"></div>
  <div id="gradient"></div>
  <div id="blurred"></div>
  <div  id="centerlogo"></div>
  <i className="fa-fw select-all fas"></i>
 
  <div className="txt-rotate">
    <span className="codewalatext">

      <strong>&lt;code</strong>wala/&gt; is
      <span className="txt" data-period="2000" data-rotate='[ " code.", " ux.", " design.", " mobile.", " fun!" ]'></span>
      </span><br/>
      <p className="codewalaText_description" >
      
      </p>
      
  </div>

  
 </div>



        );

    }


}

export default LandingPage;






