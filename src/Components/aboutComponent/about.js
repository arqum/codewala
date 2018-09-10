import React, {
    Component
} from 'react';
import $ from 'jquery';
import MainNavigation from "../navigationComponent/mainNavigation";
import Cursor from "../cursorComponent/cursor";
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';


class AboutPage extends Component {

    constructor() {
        super()
        this.state = ({
            show: true
        })
    }


    componentDidMount() {
        $('body').css('background', 'white');

      

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

                $('.lnr-cross').toggleClass('lnr-cross lnr-menu');
    
                //hide the menu logo 
                $('.logo-head').css({
                    'visibility': 'hidden',
                    'opacity': 0,
                    'margin': '-120px 0px 0px 17px',
                    'transition': 'all 100ms cubic-bezier(0.420, 0.000, 1.000, 1.000)'
                });
    
            }
        }, 600)



    }
    render() {
        return(
    <div>
       
        <h1>
           about page
        </h1>

        <Loading className="loading"
          show={this.state.show}
          color="#54d5cd"
          showSpinner={false}
        />

    </div>
    
        );

    }

}

export default AboutPage;