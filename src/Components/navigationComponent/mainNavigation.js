import React, {Component} from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

class MainNavigation extends Component {

    componentDidMount = ()=>{
   


//map function from large values to small
function map(num, in_min, in_max, out_min, out_max) {
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

    //menu animation
    $('#menu-button').on('click', function () {

        if ($(this)[0].hasAttribute("data-toggle")) {

            $(this).removeAttr('data-toggle');
            $('#menu-nav').css({
                'opacity': 0.8,
                'visibility': 'visible',
                'height': '100%'
            });

            $('#nav-items').css({
                'opacity': 0.98,
                'visibility': "visible",
            }).delay(6000);

            $('#menu-button').css({
                'height': '140px',
                'background': 'white'
            });
            $('#menu-button-text').css({
                'top': '70%',
                'color': '#2c3343'
            });

            $('#menu-gradient-lines').css({
                'height': '20px',
                'opacity': '0.7'
            });


        } else {

            $('#menu-nav').css({
                'opacity': 0,
                'visibility': 'hidden',
                'height': '0%'
            });
            $('#nav-items').css({
                'opacity': 0,
                'visibility': "hidden",
            }).delay(6000);

            $('#menu-button').css({
                'height': '80px',
                'background': '#2c3343'
            });
            $('#menu-button-text').css({
                'top': '40%',
                'color': 'white'
            });

            $('.lnr-cross').css({
                'visibility': 'hidden'
            });

            //hide the menu logo 
            $('.logo-head').css({
                'visibility': 'hidden',
                'opacity': 0,
                'margin': '-120px 0px 0px 17px',
                'transition': 'all 100ms cubic-bezier(0.420, 0.000, 1.000, 1.000)'
            });

            $(this).attr('data-toggle', 'off')
        }


    });

    $('#menu-button').hover(function () {

        if ($(this)[0].hasAttribute("data-toggle")) {


            $('.lnr-cross').toggleClass('lnr-cross lnr-menu');

            $('#menu-button').css({
                'height': '140px',
                'background': 'white'
            });

            $('#cursor').css({
                'width': '60px',
                'height': "60px"
            });

            $('.lnr-menu').css({
                'visibility': 'visible'
            });
            $('#menu-button-text').css({
                'top': '70%',
                'color': '#2c3343'
            });
            $('.logo-head').css({
                'visibility': 'visible',
                'opacity': 1,
                'margin': '-10px 0px 0px 17px',
                'transition': 'all 500ms cubic-bezier(0.420, 0.000, 1.000, 1.000)'
            });

        } else {

            $('#cursor').css({
                'width': '60px',
                'height': "60px",
            });
            $('.lnr-menu').toggleClass('lnr-menu lnr-cross');

            $('.lnr-cross').css({
                'visibility': 'visible'
            });


        }
    });

    $('#menu-button').mouseleave(function () {

        if ($(this)[0].hasAttribute("data-toggle")) {

            //  hide main gradient
            $('#menu-gradient-lines').css({
                'height': '0px',
                'opacity': '0'
            });

            //hide the menu icon from cursor
            $('.lnr-menu').css({
                'visibility': 'hidden'
            });

            //make cursor small again
            $('#cursor').css({
                'width': '20px',
                'height': "20px"
            });

            //make menu button blue and small again
            $('#menu-button').css({
                'height': '80px',
                'background': '#2c3343'
            });

            //change the menu text to white again
            $('#menu-button-text').css({
                'top': '40%',
                'color': 'white'
            });

            //hide the menu logo 
            $('.logo-head').css({
                'visibility': 'hidden',
                'opacity': 0,
                'margin': '-120px 0px 0px 17px',
                'transition': 'all 100ms cubic-bezier(0.420, 0.000, 1.000, 1.000)'
            });

        } else {



            //hide menu in cursor
            $('.lnr-menu').css({
                'visibility': 'hidden'
            });
            //hide the close icon in cursor
            $('.lnr-cross').css({
                'visibility': 'hidden'
            });

            //make cursor small again
            $('#cursor').css({
                'width': '20px',
                'height': "20px"
            });
        }


    });





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
        this.period = parseInt(period, 13) || 2000;
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

            $('#blurred').css("background-image", "url(../images/img_6.jpg)");
            // $(".txt-rotate").css("color", "white");
            // $("#line").css("background", "white");

        } else if (words.includes("ux")) {
            $('#blurred').css("background-image", "url(/../../../Assets/images/img_6.jpg)");


        } else if (words.includes("design")) {
            $('#blurred').css("background-image", "url(/../../../Assets/images/img_4.jpg)");
            $(".txt-rotate").css("color", "#fff");
            $("#line").css("background", "#fff");



        } else if (words.includes("fun")) {
            $('#blurred').css("background-image", "url(/../../../Assets/images/img_1.jpg)");

        } else if (words.includes("mobile")) {
            $('#blurred').css("background-image", "url(/../../../Assets/images/img_3.jpg)");
            $(".txt-rotate").css("color", "#2c3343");
            $("#line").css("background", "#fff");


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
    }

    

    render() {

        return(

        <div className="mainNavigation_container">

          
 
  <div id="menu-button" data-toggle="off">
  <div className="logo-head">

  </div>
 
   <div id="menu-button-text">
    <strong>&lt;cw/&gt;</strong>

   </div>
 
  </div>
  <div id="menu-nav">
<ul id="nav-items">
  <li><a href="#">
    <span className="nav-items">01</span>About
  </a></li>
  <li><a href="#">
    <span className="nav-items">02</span>Work
  </a></li>
  <li><a href="#">
    <span className="nav-items">03</span>Philosophy
  </a></li>
  <li><a href="#">
    <span className="nav-items">04</span> Hire Us!
  </a></li>
</ul>
</div>

 

 </div>



        );

    }

}

export default MainNavigation;