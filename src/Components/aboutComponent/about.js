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
       
            <Loading className="loading"
          show={this.state.show}
          color="#54d5cd"
          showSpinner={false}
        />

<div className="row">
<div className="col-md-4 col-sm-12 cw_img">

</div>

<div className="col-md-8 col-sm-12 cw_txt">
<h1 className="inner-h1">
    About<span className="inner-h1-span">
    Codewala
    </span>
</h1>

<p className="inner-paragraph">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
</p>
</div>

</div>


    </div>
    
        );

    }

}

export default AboutPage;