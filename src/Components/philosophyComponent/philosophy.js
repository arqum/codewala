import React, {
    Component
} from 'react';
import $ from 'jquery';
import MainNavigation from "../navigationComponent/mainNavigation";
import Cursor from "../cursorComponent/cursor";
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';

let intervelll;

class PhilosophyPage extends Component {


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
    // x = setInterval(() => {
    //     this.setState({
    //         show: true
    //     })
    //     interval += 1;
    //     if (interval == 2) {
    //         this.setState({
    //             show: false
    //         })

    //         clearInterval(x);

    //     }
    // }, 600)


 // GRADIENT TRANSITION

 (function () {
    var colors = new Array(
        [234, 247, 246], [207, 228, 226], [145, 183, 180], [224, 253, 251]);

    var step = 0;
    var colorIndices = [0, 1, 2, 3];

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

        $('#ph_gradient').css({
            // background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
            background: "linear-gradient(to bottom," + color1 + "," + color2 + ")"
        }).css({
            background: "-moz-linear-gradient(to bottom, " + color1 + " 0%, " + color2 + " 100%)"
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
render() {
        return (
<div>
   
        <Loading className="loading"
      show={this.state.show}
      color="#54d5cd"
      showSpinner={false}
    />

<div className="row">
<div className="col-md-8 col-sm-12 cw_txt_ph" id="ph_gradient">
<h1 className="inner-h1">
The Codewala   
<span className="inner-h1-span">
 philosophy
</span>
</h1>
<p className="inner-paragraph">
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
</p>
</div>

<div className="col-md-4 col-sm-12 cw_img_ph">



</div>

</div>


</div>

    );

}

}

export default PhilosophyPage;