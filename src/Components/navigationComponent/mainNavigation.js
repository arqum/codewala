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
                menuButtonColor:"#2c3343",
                menuButtonTextColor: "white",
                menuButtonTextTop:"40%",
                menuButtonLogoVisibility: "hidden",
                menuButtonLogoOpacity: "0",
                menuButtonLogoClass: "",
                menuButtonDabLogoClass:""
            },
           
        })

        this.menuButtonClick = this.menuButtonClick.bind(this);
        this.menuButtonHover = this.menuButtonHover.bind(this);
        this.menuButtonLeave = this.menuButtonLeave.bind(this);
        this.navButtonClick = this.navButtonClick.bind(this);
        
    }

    navButtonClick (){
        
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
                menuButtonColor:"#2c3343",
                menuButtonTextColor: "white",
                menuButtonTextTop:"40%",
                menuButtonLogoVisibility: "hidden",
                menuButtonLogoOpacity: "0",
                menuButtonLogoMargin: "-100px 0px 0px 17px",

            },
           
        });

        $('#menu-button-text').css({
            'top': '40%',
            'color': 'white'
        });

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
                

                    menuButtonHeight:'140px',
                    menuButtonColor:'white',
                    menuButtonTextColor: "#2c3343",
                    menuButtonTextTop:"74%",
                    menuButtonLogoVisibility: "visible",
                    menuButtonLogoOpacity: "1",
                    menuButtonLogoClass: "animated fadeInDown fast",
                    menuButtonDabLogoClass:"animated slideInDown"
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
                    menuButtonColor:"#2c3343",
                    menuButtonTextColor: "white",
                    menuButtonTextTop:"40%",
                    menuButtonLogoVisibility: "hidden",
                    menuButtonLogoOpacity: "0",
                    menuButtonLogoMargin: "-100px 0px 0px 17px",

                },
               
            });

            $('#menu-button-text').css({
                'top': '40%',
                'color': 'white'
            });

            $('.lnr-cross').css({
                'visibility': 'hidden'
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
                        menuButtonHeight:'140px',
                        menuButtonColor:'white',
                        menuButtonTextColor: "#2c3343",
                        menuButtonTextTop:"74%",
                        menuButtonLogoVisibility: "visible",
                        menuButtonLogoOpacity: "1",
                        menuButtonLogoClass: "animated fadeInDown fast",
                        menuButtonDabLogoClass:"animated slideInDown"

                    },
                   
                });
                // console.log('inside hover if');
            $('.lnr-cross').toggleClass('lnr-cross lnr-menu');

            $('#cursor').css({
                'width': '60px',
                'height': "60px"
            });

            $('.lnr-menu').css({
                'visibility': 'visible'
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
                        menuButtonColor:'#2c3343',
                        menuButtonTextColor: "white",
                        menuButtonTextTop:"40%",
                        menuButtonLogoVisibility: "hidden",
                        menuButtonLogoOpacity: "0",
                        menuButtonLogoClass: "animated fadeUpDownBig faster",
                        menuButtonDabLogoClass:"animated slideOutUp"

                    },
                   
                });







           //  hide main gradient
        //    $('#menu-gradient-lines').css({
        //     'height': '0px',
        //     'opacity': '0'
        // });

        //hide the menu icon from cursor
        $('.lnr-menu').css({
            'visibility': 'hidden'
        });

        //make cursor small again
        $('#cursor').css({
            'width': '20px',
            'height': "20px"
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
            opacity: "0.9",
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

            color: this.state.menuButton.menuButtonTextColor,
            fontSize: "20px",
            textAlign: "center",
            position: "absolute",
            top: this.state.menuButton.menuButtonTextTop,
            left: "15px",
            alignContent: "center",
            zIndex: "23",
           // transition: "all 500ms cubic-bezier(0.420, 0.000, 1.000, 1.000)",
        }

        const logo_lines = {
            backgroundImage: "url('/assets/images/logo_dab.svg')",
            opacity:this.state.menuButton.menuButtonLogoOpacity,
            backgroundRepeat: "no-repeat",
            width: "100px",
            height: "130px",
            textAlign: "center",
            zIndex: "20",
            position: "relative",
            backgroundSize: "45%",
            margin: "-1px 0px 0px 18px",
            transition: "all 500ms cubic-bezier(0.420, 0.000, 1.000, 1.000)",
            backgroundImage: "url('/assets/images/lines.svg')",

        }

        const logo_dab = {
            backgroundImage: "url('/assets/images/logo_dab_guy.svg')",
            opacity:this.state.menuButton.menuButtonLogoOpacity,
            backgroundRepeat: "no-repeat",
            width: "100px",
            height: "130px",
            textAlign: "center",
            zIndex: "20",
            position: "absolute",
            backgroundSize: "55%",
            margin: "30px 0px 0px 3px",
           // transition: "all 500ms cubic-bezier(0.420, 0.000, 1.000, 1.000)",
            backgroundImage: "url('/assets/images/logo_dab_guy.svg')",

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
  <div style={logo_lines} className={this.state.menuButton.menuButtonLogoClass}>
  <div style={logo_dab} className={this.state.menuButton.menuButtonDabLogoClass}></div>


  </div>
 
   <div id="menu-button-text" style={menu_button_txt} className="animate fadeInDown faster">
    <strong>&lt;cw/&gt;</strong>

   </div>
 
  </div>
 



  <div id="menu-nav_blue"   style={style_menu_blue_div}   className={`animated faster ` +this.state.menu.blue_div} ></div>
  <div id="menu-nav_green"   style={style_menu_green_div} className={`animated faster ` +this.state.menu.green_div}></div>
  <div id="menu-nav_yellow"  style={style_menu_yellow_div} className={`animated fast ` +this.state.menu.yellow_div}></div>

  <div id="menu-nav" className={`animated ` +this.state.menu.menu_div} style={style_menu_div}>
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