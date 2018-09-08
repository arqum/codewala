import React, {Component} from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import Cursor from "../cursorComponent/cursor";
import {NavLink} from 'react-router-dom';


class MainNavigation extends Component {


    componentDidMount = ()=>{
   

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

       
    }

    

    render() {

        return(

        <div className="custom_container">
        <Cursor/>

    
  <div id="menu-button" data-toggle="off">
  <div className="logo-head">

  </div>
 
   <div id="menu-button-text">
    <strong>&lt;cw/&gt;</strong>

   </div>
 
  </div>
  <div id="menu-nav">
    <ul id="nav-items">
     <li id="nav_item_1">
         <span className="nav-items">01</span>
             <NavLink className="navlinks" to="/" activeClassName="selected"  exact>Home </NavLink>
    </li>
      <li id="nav_item_2">
         <span className="nav-items">02</span>
             <NavLink className="navlinks" to="/about"  activeClassName="selected">About</NavLink>
     </li>
     <li id="nav_item_3">
         <span className="nav-items">03</span>
             <NavLink className="navlinks" to="/work" activeClassName="selected">Work</NavLink>
     </li>
     <li id="nav_item_4">
         <span className="nav-items">04</span>
             <NavLink className="navlinks" to="/philosophy" activeClassName="selected">Philosophy</NavLink>
     </li>
     <li id="nav_item_5">
         <span className="nav-items">05</span>
             <NavLink className="navlinks" to="/hire" activeClassName="selected">Hire Us!</NavLink>
     </li>
</ul>
</div>

 

 </div>



        );

    }

}

export default MainNavigation;