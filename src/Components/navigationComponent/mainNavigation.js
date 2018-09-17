import React, {Component} from 'react';
import $ from 'jquery';
import Cursor from "../cursorComponent/cursor";
import {NavLink} from 'react-router-dom';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import LandingPage from '../landingComponent/landinPage';
import { findDOMNode, ReactDOM } from 'react-dom';



class MainNavigation extends Component {


    constructor(){
        super()
        this.state = ({
            show:false,
            menu: {
                menuOpen: 'closed',
                blue_div:'',
                green_div:'',
                yellow_div:'',
                menu_div:'',
                visibility:'hidden',
            },
           
            menuButton: {
                menuButtonHeight:'80px',
                menuButtonColor:"#2c3343"
            },
           
        })






        // this.state = (
        //     {
        //         show:true,
        //         menuOpen: 'closed',
        //         blue_div:'style_menu_blue_div_hidden',
        //         green_div:'',
        //         yellow_div:'',
        //         menu_div:'',
        //         visibility:'hidden',
        //         menuButtonHeight: "80px",
        //         menuButtonColor: "#2c3343",
            
        //     }
        
        // )

        this.menuButtonClick = this.menuButtonClick.bind(this);
        this.menuButtonHover = this.menuButtonHover.bind(this);
        this.menuButtonLeave = this.menuButtonLeave.bind(this);
        this.navButtonClick = this.navButtonClick.bind(this);
        


    }

    navButtonClick (){
        
        $('.lnr-cross').css({
            'visibility': 'hidden'
        });

    }

    menuButtonClick(){
            console.log(this.state);
            if (this.state.menu.menuOpen=='closed') {
            console.log(this.state)

            this.setState({
                show:false,
                menu: {
                    menuOpen: 'opened',
                    blue_div:'fadeInDown',
                    green_div:'fadeInDown',
                    yellow_div:'fadeInDown',
                    menu_div:'fadeInDown',
                    visibility:'visible',

                },
               
                menuButton: {
                    menuButtonHeight: "140px",
                    menuButtonColor: "white",
                },
            })


         
        } else if(this.state.menu.menuOpen == 'opened') {

            // console.log("Menu is now closed");
            // console.log(this.state);

            this.setState({
                show:false,
                menu: {
                    menuOpen: 'closed',
                    blue_div:'fadeOutUp',
                    green_div:'fadeOutUp',
                    yellow_div:'fadeOutUp',
                    menu_div:'fadeOutUp',
                    visibility:'hidden',
                },
               
                menuButton: {
                    menuButtonHeight:'80px',
                    menuButtonColor:'#2c3343'
                },
               
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

         
        }

    }

    // this.setState(prevState=>({
    //     ...prevState,
    //     menu:{
    //         ...prevState.menu,
    //         menuOpen: 'closed',
                

    //         },
    //     }
    // }))



    menuButtonHover () {
        // if ($('#menu-button')[0].hasAttribute("data-toggle")) {
            if (this.state.menu.menuOpen =='closed') {

                // console.log('inside hover if');
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
            // console.log('inside hover else');

            $('#cursor').css({
                            'width': '60px',
                            'height': "60px",
                        });
                        $('.lnr-menu').toggleClass('lnr-menu lnr-cross');
            
                        $('.lnr-cross').css({
                            'visibility': 'visible'
                        });

       }

    }

    menuButtonLeave () {
        // if ($('#menu-button')[0].hasAttribute("data-toggle")) {
            if (this.state.menu.menuOpen =='closed') {

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
}

    componentWillMount() {
        this.setState({show: true})
    }
    componentDidUpdate(){
        console.log(this.state, 'ssssss');
    }
    componentDidMount(){
 
    }

    

    render() {
        console.log(this.state, 'render');
        const style_menu_blue_div = {

            position: "absolute",
            background: "#b5e6e3",
            height: "100%",
            width: "100%",
            zIndex: "10",
            top: "0",
            left: "0",
            opacity: "0",
            visibility: this.state.menu.visibility,
        }
        
        const style_menu_green_div = {
        
            position: "absolute",
            background: "#deeec7",
            height: "96%",
            width: "100%",
            zIndex: "10",
            top: "0",
            left: "0",
            opacity: "0",
            visibility: this.state.menu.visibility,
        }
        const style_menu_yellow_div = {
        
            position: "absolute",
            background: "#fefabf",
            height: "92%",
            width: "100%",
            zIndex: "10",
            top: "0",
            left: "0",
            opacity: "0",
            visibility: this.state.menu.visibility,
        }
        
        const style_menu_div = {
        
            position: "absolute",
            background: "white",
            height: "90%",
            width: "100%",
            zIndex: "10",
            top: "0",
            left: "0",
            opacity: "0",
            visibility: this.state.menu.visibility,
        }

        const nav_links = {
            opacity: "0.8",
            visibility: this.state.menu.visibility,
        }

        const menu_button = {
            position: "absolute",
            backgroundColor: this.state.menuButton.menuButtonColor,
            height: this.state.menuButton.menuButtonHeight,
            width: "80px",
            zIndex: "19",
            top: "0",
            left: "0",
            cursor: "pointer",
            transition: "all 200ms cubic-bezier(0, 0.87, 1, 0.645)",
        }

        const menu_button_txt = {

            color: "white",
            fontSize: "20px",
            textAlign: "center",
            position: "absolute",
            top: "40%",
            left: "15px",
            alignContent: "center",
            zIndex: "23",
            transition: "all 500ms cubic-bezier(0.420, 0.000, 1.000, 1.000)",
        }

        const logo_head = {
            backgroundImage: "url('/assets/images/logo_fun.svg')",
            backgroundRepeat: "no-repeat",
            visibility: "hidden",
        }

        const colors = {
            blue: "#2c334"
        }


        return(

        <div className="custom_container">
        <Loading className="loading"
          show={this.state.show}
          color="#54d5cd"
          showSpinner={false}
        />
    <Cursor/>
  <div style={menu_button} className="animated fadeInDown"  onClick={this.menuButtonClick} onMouseEnter={this.menuButtonHover} onMouseLeave={this.menuButtonLeave}>
  <div style={logo_head}>

  </div>
 
   <div id="menu-button-text" style={menu_button_txt}>
    <strong>&lt;cw/&gt;</strong>

   </div>
 
  </div>
 



  <div id="menu-nav_blue"   style={style_menu_blue_div}   className={`animated faster ` +this.state.blue_div} ></div>
  <div id="menu-nav_green"   style={style_menu_green_div} className={`animated faster ` +this.state.green_div}></div>
  <div id="menu-nav_yellow"  style={style_menu_yellow_div} className={`animated fast ` +this.state.yellow_div}></div>

  <div id="menu-nav" className={`animated ` +this.state.menu_div} style={style_menu_div}>
    <ul style={nav_links}>
     <li>
         <span className="nav-items">01</span>
             <NavLink className="navlinks" to="/" activeClassName="selected"  exact onClick={this.navButtonClick}>Home</NavLink>
    </li>
      <li>
         <span className="nav-items">02</span>
             <NavLink className="navlinks" to="/about"  activeClassName="selected" onClick={this.navButtonClick}>About</NavLink>
     </li>
     <li>
         <span className="nav-items">03</span>
             <NavLink className="navlinks" to="/work" activeClassName="selected" onClick={this.navButtonClick}>Work</NavLink>
     </li>
     <li>
         <span className="nav-items">04</span>
             <NavLink className="navlinks" to="/philosophy" activeClassName="selected" onClick={this.navButtonClick}>Philosophy</NavLink>
     </li>
     <li>
         <span className="nav-items">05</span>
             <NavLink className="navlinks" to="/hire" activeClassName="selected" onClick={this.navButtonClick}>Hire Us!</NavLink>
     </li>
</ul>
</div>

 

 </div>



        );

    }

}

export default MainNavigation;