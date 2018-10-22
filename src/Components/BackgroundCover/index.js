// @flow
import React from 'react';
import VideoCover from "react-video-cover";
import styles from './styles.scss';
import { CSSTransition} from "react-transition-group";

type BackgroundCoverProps = {
    videoSource: any,
    videoAutoPlay: boolean,
    videoLoop: boolean,
    imageSource: any,
    centerContent: boolean
};
const BackgroundCover = (props: BackgroundCoverProps) => {
    const {videoSource, imageSource, videoAutoPlay, videoLoop, centerContent} = props;
    return (
        <CSSTransition
        in={centerContent}
        timeout={1400}
        classNames="bg"  
        >
        <div className={`bgImage ` + styles.cover} style={{backgroundImage: `url(${imageSource ? imageSource : ''})`}}>
            {
                !imageSource &&
                <VideoCover className={`videoCover`}
                            videoOptions={{
                                src: videoSource,
                                autoPlay: videoAutoPlay,
                                loop: videoLoop
                            }}
                />

            }
        </div>
        </CSSTransition>
        
    );

};
        
BackgroundCover.defaultProps = {
    videoAutoPlay: true,
    videoLoop: true
};

export default BackgroundCover