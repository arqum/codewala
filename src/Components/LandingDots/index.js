// @flow
import React,{Component} from 'react';
import styles from './styles.scss';



type LandingDotsProps = {
    items: Array<string>,
    onClick: (index: number) => void;
    label: string,
    index: number,


};



class LandingDots extends Component<LandingDotsProps>{

    state={show:false, hoverIndex:undefined}
    
    render(){
    const {items, onClick, index: Index} = this.props;
    const Data = require('../../API/LandingPageData/data.json');
    const {show, hoverIndex}=this.state;
    return (
      
        <div className={styles.circles}>
            {
                items.map((item, index) => {
                    const label = Data[index].label;
                    return (
                    <div className='row'>
{/*                          
                                <div key={index} className={`hollow-circle ${index === Index?'hollow-circle-selected':'hollow-circle'}`} onClick={() => (onClick(item))} onMouseEnter={()=>(this.setState({show:true, hoverIndex:index}))} onMouseLeave={()=>(this.setState({show:false, hoverIndex:undefined}))}>

                                  <div className={`circles-label ${index === Index || (show && hoverIndex=== index)? 'circles-label-selected':'circles-label-hidden '}`}>{label}</div> 

                                </div> */}

                                <div className="col">
                                    <div class={`hovicon effect-5 sub-a ${index === Index?'hovicon-selected effect-5-selected':'hovicon effect-5 sub-a'}`} onClick={() => (onClick(item))} onMouseEnter={()=>(this.setState({show:true, hoverIndex:index}))} onMouseLeave={()=>(this.setState({show:false, hoverIndex:undefined}))} > </div>
                                </div>

                                <div className="col">
                                    <div className={`dots-label ${index === Index || (show && hoverIndex=== index)? 'dots-label-selected':'dots-label-hidden '}`}>{label}</div> 
                                </div>

                    </div>

                   );
                })
            }
        </div>
    );
        }
};

LandingDots.defaultProps = {
    items: [],
};
export default LandingDots

