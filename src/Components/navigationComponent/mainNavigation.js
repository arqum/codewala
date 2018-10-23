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
                cursorColor:"rgba(84, 213, 205, 0.4)",
                logoHeadClass:""
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
                ...this.state.menu,
                menuOpen: 'closed',
                blue_div:'fadeOutUp',
                green_div:'fadeOutUp',
                yellow_div:'fadeOutUp',
                menu_div:'fadeOutUp',
                visibility:'hidden',
                logoHeadClass:"fadeInDown delay-3s"
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
                    blue_div:'fadeInDown faster',
                    green_div:'fadeInDown fast',
                    yellow_div:'fadeInDown',
                    menu_div:'fadeInDown delay-ms',
                    visibility:'visible',
                    logoHeadClass:""

                },
               
                menuButton: {
                

                    menuButtonHeight:'140px',
                    menuButtonColor:'white',
                    menuButtonTextColor: "#2c3343",
                    menuButtonTextTop:"74%",
                    menuButtonLogoVisibility: "visible",
                    menuButtonLogoOpacity: "1",
                    menuButtonLogoClass: "animated fadeInDown slow",
                    menuButtonDabLogoClass:"animated fadeInDown fast"
                },
                
            })

            let interval = 1;
        let x;
        x = setInterval(() => {
           
            interval += 1;
            if (interval == 4) {
                this.setState({
                    menu: {...this.state.menu,
                        logoHeadClass:"fadeInUp ",
                    }

   
                })
                  
                clearInterval(x);   
                console.log("intervel" +this.state.menu.logoHeadClass)         
              

            }
        }, 500);
        $('#cursor').css({
            'width': '60px',
            'height': "60px",
            'background-color': "rgba(213, 84, 84, 0.7)",

        });
        } else if(this.state.menu.menuOpen == 'opened') {

            // console.log("Menu is now closed");
            // console.log(this.state);

            this.setState({
                show:false,
                menu: {
                    menuOpen: 'closed',
                    blue_div:'fadeOutUp delay-ms',
                    green_div:'fadeOutUp',
                    yellow_div:'fadeOutUp fast',
                    menu_div:'fadeOutUp faster',
                    visibility:'hidden',
                    cursorColor: 'rgba(84, 213, 205, 0.4)'
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
       

            $('#cursor').css({
                'width': '60px',
                'height': "60px",
                'background-color': "rgba(213, 84, 84, 0.7)",

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
                        menuButtonLogoClass: "animated fadeInDown slow",
                        menuButtonDabLogoClass:"animated fadeInDown fast"

                    },
                   
                });
                // console.log('inside hover if');
            $('.lnr-cross').toggleClass('lnr-cross lnr-menu');

            $('#cursor').css({
                'width': '60px',
                'height': "60px"
            });

            // $('.lnr-menu').css({
            //     'visibility': 'visible'
            // });

        } else {
            // console.log('inside hover else');

            $('#cursor').css({
                'width': '60px',
                'height': "60px",
                'background-color': "rgba(213, 84, 84, 0.7)",

            });
            // $('.lnr-menu').toggleClass('lnr-menu lnr-cross');

            // $('.lnr-cross').css({
            // 'visibility': 'visible'
            // });

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
        // $('.lnr-menu').css({
        //     'visibility': 'hidden'
        // });

        //make cursor small again
        $('#cursor').css({
            'width': '20px',
            'height': "20px",
            'background-color': "rgba(84, 213, 205, 0.7)",

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
            'height': "20px",
            'background-color': "rgba(84, 213, 205, 0.7)",

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

            position: "fixed",
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
        
            position: "fixed",
            background: "#deeec7",
            height: "100%",
            width: "100%",
            zIndex: "10",
            top: "0",
            left: "0",
            opacity: "0",
            visibility: this.state.menu.visibility,
        }
        const style_menu_yellow_div = {
        
            position: "fixed",
            background: "#fefabf",
            height: "100%",
            width: "100%",
            zIndex: "10",
            top: "0",
            left: "0",
            opacity: "0",
            visibility: this.state.menu.visibility,
        }
        
        const style_menu_div = {
        
            position: "fixed",
            background: "white",
            height: "100%",
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
            top: "15%",
            position: "relative",
        }

        const menu_button = {
            position: "fixed",
            backgroundColor: this.state.menuButton.menuButtonColor,
            height: this.state.menuButton.menuButtonHeight,
            width: "80px",
            zIndex: "19",
            top: "0",
            left: "0",
            cursor: "pointer",
            transition: "all 200ms cubic-bezier(0, 0.87, 1, 0.645)",
            overflow: "hidden"
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
            // backgroundImage: "url('/Assets/images/logo_dab.svg')",
            opacity:this.state.menuButton.menuButtonLogoOpacity,
            backgroundRepeat: "no-repeat",
            width: "100px",
            height: "130px",
            textAlign: "center",
            zIndex: "20",
            position: "absolute",
            backgroundSize: "45%",
            margin: "-1px 0px 0px 18px",
            // transition: "all 500ms cubic-bezier(0.420, 0.000, 1.000, 1.000)",
            backgroundImage: "url('/src/Assets/images/lines.svg')",

        }

        const logo_dab = {
            // backgroundImage: "url('/Assets/images/logo_dab_guy.svg')",
            opacity:this.state.menuButton.menuButtonLogoOpacity,
            backgroundRepeat: "no-repeat",
            width: "100px",
            height: "130px",
            textAlign: "center",
            zIndex: "20",
            position: "relative",
            backgroundSize: "55%",
            margin: "30px 0px 0px 20px",
           // transition: "all 500ms cubic-bezier(0.420, 0.000, 1.000, 1.000)",
            backgroundImage: "url('/src/Assets/images/logo_dab_guy.svg')",

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
  <div style={logo_lines} className={this.state.menuButton.menuButtonLogoClass}>  </div>
  <div style={logo_dab} className={this.state.menuButton.menuButtonDabLogoClass}></div>




  
 
   <div id="menu-button-text" style={menu_button_txt} className="animate fadeInDown faster">
    <strong>&lt;cw/&gt;</strong>

   </div>
 
  </div>

    {/* <div style={menu_button} className="animated fadeInDown"  onClick={this.menuButtonClick} onMouseEnter={this.menuButtonHover} onMouseLeave={this.menuButtonLeave}></div> */}
 



  <div id="menu-nav_blue"   style={style_menu_blue_div}   className={`animated ` +this.state.menu.blue_div} ></div>
  <div id="menu-nav_green"   style={style_menu_green_div} className={`animated ` +this.state.menu.green_div}></div>
  <div id="menu-nav_yellow"  style={style_menu_yellow_div} className={`animated ` +this.state.menu.yellow_div}></div>

  <div id="menu-nav" className={`animated ` +this.state.menu.menu_div} style={style_menu_div}>
  <div className="row">
  <div className="col-md-6 col-lg-6">
  <ul style={nav_links}>
     <li>
         <span className="nav-items">01</span>
             <NavLink className="navlinks" to="/" activeClassName="selected"  exact onClick={this.navButtonClick}>Home</NavLink>
    </li>
    <i className="flaticon-airplane49"></i> 
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
             <NavLink className="navlinks" to="/hire" activeClassName="selected" onClick={this.navButtonClick}>Hire Me!</NavLink>
     </li>
</ul>
  </div>
 
  <div className="col-md-6 col-lg-6 nav-social-section " >
  <div className="row">
  <div className="col-md-6 col-lg-6 " style={{bottom:"0px"}}>
  <div  className="logoheadSection">
  
  <h4 className="small-text">
      Want to ask us something? Email us now at 
  </h4><br/>
  <div className="links-2">
  <span className="lnr lnr-envelope icons-dark"></span>
  inquiries@codewala.co
<div className={`animated menu-logo-head ` +this.state.menu.logoHeadClass}>
</div>
  </div>
  </div>

  </div>
  <div className="col-md-6 col-lg-6 nav-social-section">
  <div className="row row-pattern" style={{paddingTop:"88%"}}>

  <div className="col-md-4 col-lg-4 navlinks">
  <div className="social-icons facebook"></div>
  </div>

  <div className="col-md-4 col-lg-4">
  <div className="social-icons twitter navlinks">
  </div>
  </div>

  <div className="col-md-4 col-lg-4">
  <div className="social-icons linkedIn navlinks">
  </div>
  </div>

  </div>
  </div>
  </div>
  </div>
  </div>
  
</div>

 

 </div>



        );

    }

}

export default MainNavigation;