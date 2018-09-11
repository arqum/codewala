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

            }
        }, 600)



    }
    render() {
            return (
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